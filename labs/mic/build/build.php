<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<title>mic.css - Custom Build</title>
<link rel="stylesheet" href="../ooc.css"/>
<link rel="stylesheet" href="../animate.css"/>
<link rel="stylesheet" href="style.css"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<script type="text/javascript" src="http://use.typekit.com/txy8tmh.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
<script>
		$(document).ready(function() {
			$('.checks :checkbox').attr('checked', true);
			$('.checks label').hover(
			function() {
				var anim = $(this).html();
				$(this).addClass(anim);
			},
			function() {
				$(this).removeClass();
			}
			);
		});

		function toggleCheck(type) {
			if($('.' + type + ' input:checkbox').is(':checked')) {
				$('.' + type + ' input:checkbox' ).removeAttr('checked');
			} else {
				$('.' + type + ' input:checkbox' ).attr('checked', 'true');
			}
		}
	</script>
<script type="text/javascript">
	  var _gauges = _gauges || [];
	  (function() {
		var t   = document.createElement('script');
		t.type  = 'text/javascript';
		t.async = true;
		t.id    = 'gauges-tracker';
		t.setAttribute('data-site-id', '4fd5ef63613f5d03c200002c');
		t.src = '//secure.gaug.es/track.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(t, s);
	  })();
	</script>
</head>
<body>
<div class="container">
<header>
<h1>mic.css <small><a class="back" href="../index.html">- Back to home page?</a></small></h1>
<p><em>Custom build</em></p>
</header>
<div class="content">
<hr>
server error. Try again later.
</div>

</div>
</body>
</html>
<!-- Localized -->