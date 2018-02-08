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
		$('#ticker ul').addClass('scroll');
	});



	
})(jQuery);
