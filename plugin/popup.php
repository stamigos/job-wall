<div class="header">
	<div class="step_login step">
		<img src="{domain}img/logo.png">
	</div>

	<div class="step_vacancy step">
		Open Positions
	</div>

	<div class="step_apply step">
		<img src="{domain}img/apply_header.png">
	</div>

	<img src="{domain}img/close.png" class="close">
</div>

<div class="page">

	<div class="step_vacancy step">

		<div class="menu">
			<div class="item template">Crew Member</div>
			<img src="{domain}img/loading.gif" class="loading">
		</div>

		<div class="content">
			<div class="apply">
				<div class="block"><img src="{domain}img/apply_help.png">
				<p class="not_video">In order to apply, you need to add your video in the App</p>
				<p class="not_allow">Recruiter are not allowed to apply for a job</p></div>
				APPLY
			</div>

			<div class="members">
			<div class="member template" data-id="">
				<div class="media">
					<img src="{domain}img/play.png" class="play">
					<div class="dark"></div>
					<img class="slide_left slide_buttons" src="{domain}img/slide_left.png">
					<img class="slide_right slide_buttons" src="{domain}img/slide_right.png">

					<div class="items">
						<video width="100%" height="100%" controls="controls" volume="0.5">
							<source src="" type="video/mp4" />
						</video>
						<img src="{domain}img/media1.jpg" class="show" data-id="0">
					</div>
					<div class="slides">
						<div class="select" data-id="0"></div>
					</div>
				</div>

				<div class="name">
					<span>MEMBER</span>
					State date: <date>DATE</date>
				</div>

				<div class="stats">
					<div class="bet"><img src="{domain}img/bet.png"><span>BET</span></div>
					<div class="bet_time"><img src="{domain}img/bet_time.png"><span>BET_TIME</span></div>
				</div>

				<div class="place">
					<div class="date">DATE</div>
					<img src="{domain}img/pointer.png">
					<span>PLACE</span>
				</div>

				<div class="description">
					<b>Job Description</b>
					<p></p>
				</div>
			</div>
			</div>
		</div>

	</div>


	<div class="step_login step">
	
		<h2>Login</h2>
		<img src="{domain}img/facebook.png" class="facebook">

		<div>
			<input type="email" class="email">
			<span>Email</span>
		</div>

		<div>
			<input type="password" class="pass">
			<span>Password</span>
		</div>

		<a href="#" class="forgot">Forgot password?</a>

		<div class="login_button">LOGIN</div>

		<div class="bottom">Don’t have an account yet? <div class="sign">Sign Up</div></div>

	</div>


	<div class="step_sign step">
		<h2>Download JobUFO App to apply<br>with Video Application</h2>
		<img src="{domain}img/sign_logo.png" class="logo">
		<div class="download">
			<a href="https://itunes.apple.com/de/app/jobufo/id1113508049" target="_blank"><img src="{domain}img/download_apple.png"></a>
			<a href="https://play.google.com/store/apps/details?id=jobufo.jobufo" target="_blank"><img src="{domain}img/download_google.png"></a>
		</div>

		<div class="have">Already have an account? <span class="go_login">Login</span></div>
	</div>


	<div class="step_apply">
		<h2>Your applicantion was succesfully sent!<br>Check JobUFO App on your phone to folow your application status.</h2>

		<img src="{domain}img/apply_logo.png">
		<div class="more">APPLY FOR MORE</div>
	</div>


</div>


<script type="text/javascript">
	// AUTO REPLACE DOMAIN {domain}
	function imagesCDN() {
		$("#jobufo img").each(function(){
			var domain = $("#jobufo").data("domain");
			var src = $(this).attr("src");

			src = src.replace("{domain}", domain);
			$(this).attr("src", src);
		});
	}

	imagesCDN();
</script>
