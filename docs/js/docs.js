$(function() {
    $( "a[class*='cw-current-page']" ).each ( function() {
        $(this).parentsUntil( $( "ul" ), ".cw-sidebar-div" ).each( function () {
            $(this).prev("a[data-toggle='collapse']" ).each( function () {
                $(this).trigger("click");
            })
        });
    });
    
    
    $('a[href^="#"]').not('.list-group-item').on("click", function(e) {
    	
    		e.preventDefault();
    		var id = $($(this).attr('href'));
       
        if (id.length === 0) {
            return;
        }
        
        var pos = id.offset().top - 131;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });  
    
    $("a").each( function() {
    		var url = $(this).attr("href");
    		if ( url  && !url.includes("#") && !url.startsWith("mailto:") && -1 == url.indexOf("://") &&
    				!url.endsWith(".html")  && !url.endsWith("/") ) {
    			$(this).attr("href", url + ".html");
    		}
    })
});