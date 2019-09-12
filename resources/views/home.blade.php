@extends('layout')

@section('content')

<div class="row">
	<div class="col-md-8 col-md-offset-2">
		<div class="align-center">

			<img class="slogan-logo" src="/images/logo.svg">

			<p>
				<div class="text-centered rules-warning">
					By entering below, you're agreeing to abide by the following rules:
				</div>
				<ul class="rules-list">
					<li>We are an 18+ community</li>
					<li>Absolutely no racism</li>
					<li>Don't be a dick</li>
				</ul>
			</p>

			<div class="row home-buttons">
				<div class="col-sm-12" align="center">

					<span class="button-label">If you can handle that, click below to join our Discord channel</span>

					<a href="//discord.team-brh.com" class="home-button" target="_blank">
						<img class="home-button-img" src="/images/discord.png" />
					</a>
					<br/><br/>
				</div>

				<div class="col-sm-12">
					<br />
					<span class="button-label">Not what you're looking for? Try one of these</span>

					<a class="home-button" href="https://old.team-brh.com/">
						<span><i class="fa fa-comments-o"></i> Old Forums</span>
					</a>
					<a class="home-button" href="/events">
						<span><i class="fa fa-calendar-o"></i> Events</span>
					</a>
					<a class="home-button" href="/archive">
						<span><i class="fa fa-files-o"></i> Archive</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection