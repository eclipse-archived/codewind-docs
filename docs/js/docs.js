$(function() {
    $( "a[class*='cw-current-page']" ).each ( function() {
        $(this).parentsUntil( $( "ul" ), ".cw-sidebar-div" ).each( function () {
            $(this).prev("a[data-toggle='collapse']" ).each( function () {
                $(this).trigger("click");
            })
        });
    });
    
    var location = window.location;
    var pathname = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    
    var clicked = false;
    $(':not(a[data-url=""])').each ( function() {
        
        if ($(this).data('url') == pathname) {
        		clicked = true;
            $(this).trigger("click");
        }
        
    });
    
    $(':not(a[data-url=""])').on("click", function(e) {

		if ($(this).data("url") && !clicked) {
			window.location.replace($(this).data("url"));
		}
	});

    
    
});