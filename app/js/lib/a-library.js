(function(){

	$(window).on('load', function(){
		
		var i = 0;
		
		var interval = setInterval(function () {
	    i += 20; // speed
	    $('.container').animate({ scrollTop: i }, 100, 'linear');
	    if (i >= $('.container').prop('scrollHeight') - $('.container').height()) {
	      i = 0;
	    }
	  }, 90);
			
		})

})();
