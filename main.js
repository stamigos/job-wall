$(document).ready(function(){

	var quotes = [
		"The secret of getting<br>ahead is getting started.",
		"Work hard,<br>party harder."
	];

	$("#jobufo_button").remove();
	setTimeout(function(){
		$("#jobufo .loading").remove();
		$("#jobufo .menu").hide();
		$("#jobufo .content").css("width", "100%");
		query();
	}, 500);
	

	$("#search .ul").click(function(){
		$(this).toggleClass("opened");
		$(this).find(".list").toggle();
	});

	$("#search .ul .list div").click(function(){
		$(this).parent().find("div").removeClass("active");
		$(this).addClass("active");

		var selected = $(this).html();
		var value = $(this).data("val");
		$(this).parent().parent().find(".holder").html(selected);
		$(this).parent().parent().find(".holder").data("val", value);
	});

	$("#search .input").eq(1).keyup(function(){
		var search = $(this).val();
		var link = "http://dev.jobufo.com/api/v1/geo/city/";

		$.ajax({
			url: link,
			type: "GET",
			data: {search: search},
			success: function(data) {
				$("#search .autofield .fields").empty();
				for(var id in data) {
					var name = data[id].name;
					var div = `<div class="item">${name}</div>`;
					$("#search .autofield .fields").append(div);
				}

				$("#search .autofield .fields .item").click(function(){
					var city = $(this).text();
					$(".autofield .fields").hide();
					$(this).parent().parent().find("input").val(city);
				});
			}
		});
	});


	$(".autofield").css('outline', 0).attr('tabindex', -1).focus(function() {
    	$(this).find(".fields").show();
	});
	$(".autofield input").focus(function(){
		$(this).parent().find(".fields").show();
	});
	$(".autofield").focusout(function() {
    	$(this).find(".fields").hide();     
    });


	$(window).blur(function(){
		$("#page video").each(function(){
			var video = $(this).get(0);
			video.pause();
		});
	});

	function query() {
		var link = "http://dev.jobufo.com/api/v1/recruiting/vacancy/";
		var search = $("#search .input:eq(0)").val();
		var city = $("#search .input:eq(1)").val();
		var kind = $("#search .input:eq(2) .holder").data("val");
		var industry = $("#search .input:eq(3) .holder").data("val");

		$.ajax({
			url: link,
			type: "GET",
			data: {title: search, city: city, kind: kind, industry: industry},
			success: function(data) {
				console.log(data);
				query_build(data);

				$("#jobufo .menu .item").each(function(){
					if ( !$(this).hasClass("template") )
						$(this).remove();
				});

				$("#jobufo .content .member").each(function(){
					if ( !$(this).hasClass("template") )
						$(this).remove();
				});

				setTimeout(function(){
					if (data != "No Properties")
					drawVacancy(data);
				}, 200);
				
			}
		});
	}

	$("#search .input").change(query);
	$("#search .ul .list div").click(query);


	function query_build(vacancies) {
		$("#page .block").remove();

		for(var id in vacancies) {

			// ADD RANDOM QUOTES
			if (id == 4 || id == 8) {
				var random = random_range(0, quotes.length - 1);
				var quote = quotes[random];
				$("#page").append("<div class='block quote'>" + quote + "</div>");
			}

			// BEGIN PARSING
			var data = vacancies[id];
			var haveVideo = false;
			$(".template .template_block").clone().appendTo("#page");
			var item = $("#page .template_block:eq(0)");

			item.removeClass("template_block");
			item.addClass("block");
			item.data("id", id);
			if (data.image_list.length > 0)
			item.find(".back").attr("src", data.image_list[0].image);
			item.find(".info .name").html(data.company.name);
			item.find(".info .about").html(data.title);

			item.find(".info .adds .bonus").html(data.benefit_1);
			item.find(".info .adds .vocs").html(data.benefit_2);
			item.find(".info .place span").html(data.company.address.city.name);

			if (data.benefit_1 == "") item.find(".info .adds .bonus").hide();
			if (data.benefit_2 == "") item.find(".info .adds .vocs").hide();

			// ADD VIDEO
			if (data.video != null) {
				item.find("video").attr("src", data.video.video);
				haveVideo = true;
			}
			else item.find("video").remove();
			
			if (haveVideo == true) {
				item.mouseenter(function(){
					var video = $(this).find("video").get(0);
					$(video).fadeIn(500, function(){
						//video.currentTime = 0;
						video.play();
					});
				});

				item.mouseleave(function(){
					var video = $(this).find("video").get(0);
					video.pause();
					$(video).fadeOut(500, function(){
						$(this).get(0).pause();
					});
				});
			}

			item.click(function(){
				var theid = parseInt($(this).data("id")) + 1;
				$("#jobufo").fadeIn("fast");
				$("#jobufo_back").fadeIn("fast");
				$("#jobufo .step").hide();

				$("#jobufo .step_vacancy").show();

				if ($(this).find("video").length > 0)
				$(this).find("video").get(0).pause();

				$("#jobufo .menu .item:eq(" + theid + ")").click();
			});
		}
	}

	function random_range(min, max) {
	    return Math.round(Math.random() * (max - min) + min);
	}
	
});