<!DOCTYPE html>
<html>

<head>
	@include('head', [])
</head>

<body>

	<section class="featured">
		<div class="container">
			@yield('content')
		</div>
	</section>

	<section id="footer" class="section footer">
			<div class="row align-center copyright">
				<div class="col-sm-12">
					<p>Copyright &copy; @php echo date("Y"); @endphp team-brh.com</p>
					<p class="disclaimer">We are not affiliated, associated, authorized, endorsed by, or in any way
						officially connected with Best Buy Co., Inc or any of its subsidiaries or its affiliates.</p>
					<p class="disclaimer">team-brh.com is sponsored by <a href="//hipezz.com" target="_blank" rel="noreferrer">hipezz.com</a> - the
						deals are in the beam!</p>
				</div>
			</div>
		</div>

	</section>
</body>

</html>