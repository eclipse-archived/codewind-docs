function detectOS() {
	var os="windows";
	if (navigator.appVersion.indexOf("Mac")!=-1) os="mac";
	if (navigator.appVersion.indexOf("X11")!=-1) os="linux";
	if (navigator.appVersion.indexOf("Linux")!=-1) os="linux";
	return os;
}

function activeOSInstruction() {
	var os = detectOS();
	$(".cw-tab-link").removeClass("active");
	$(".cw-tab-pane").removeClass("active");
	$('.cw-tab-link[data-os="'+os+'"]').addClass('active');
	$('.cw-tab-pane[data-os="'+os+'"]').addClass('active');
}

$('#sidebar-container').on('hide.bs.collapse', function () {
	$('#content-container').addClass('full-width')
	$('#sidebar-toggle').addClass('offcanvas')
	$('#sidebar-icon').addClass('flipped')
})

$('#sidebar-container').on('show.bs.collapse', function () {
	$('#content-container').removeClass('full-width')
	$('#sidebar-toggle').removeClass('offcanvas')
	$('#sidebar-icon').removeClass('flipped')
})

$( document ).ready(function() {
  var location = window.location;
	var pathname = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

	// Syncs the sidebar to the current page
	$('#sidebar-container a').each(function( i ) {
		if ($(this)[0].hasAttribute("data-url")){


			if($(this).attr('data-url') === pathname){
				// Add the class to highlight the selected item in the sidebar
				$(this).addClass("cw-current-page");

				// Our sidebar supports three levels, so need to iterate up to open up
				// the menus so the selected item can be shown
				var parentID = $(this).attr("data-parent");
				if (parentID && parentID != ""){
					$(parentID).collapse();

					var grandparentID = "[id=\"" + parentID + "\"]";
					if (grandparentID && grandparentID != ""){
						var grandparent =  $(grandparentID).attr("data-parent");
						// We don't want to collapse sidebar itself
						if (grandparent != "#sidebar-container") {
							$(grandparent).collapse();
						}
					}
				}
				// Stop the .each as we found the required URL
				return false;
			}
		}
	});

	activeOSInstruction();
});
