(function($) {
	
	var title = "Template%3AIn%20the%20news";
	var news;
	$.getJSON("https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=" + title + "&format=json&callback=?", function(data) {                               
	
		var pageid = [];
		for (var id in data.query.pages) {
			pageid.push(id);
		}

		news = data.query.pages[pageid[0]].extract;
		$('#ticker').append(news);
	});

	function scroller() {

  var scroll = $('.ticker');// Sets the div with a class of scroll as a variable
  
  var height = scroll.height(); // Gets the height of the scroll div
  
  var topAdj = -height-30; /* '-height' turns the height                   of the UL into a negative #, 
               * '- 50' subtracts an extra 50 pixels from the height of 
        			 * the div so that it moves the trail of the UL higher to 
							 * the top of the div before the animation                ends
							 */
	
	scroll.animate({
		'top' : [topAdj, 'linear'] 
	}, 8000, function(){
		scroll.css('top', 80); //resets the top position of the Ul for the next cycle
		scroller(); // Recalls the animation cycle to begin.
	});}
	
scroller();


	
})(jQuery);
