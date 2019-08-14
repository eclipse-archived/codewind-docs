$(function() {
    $('.cw-value-props-col-header').matchHeight();
    $('.cw-value-props-div-text').matchHeight();
    $('.cw-value-props-col-img-holder').matchHeight();
    
    init();
});

function init () {
	githubStars();
}

function githubStars() {
	$.get( 
            "https://api.github.com/search/repositories",
            { q: "repo:eclipse/codewind" },
            function(data) {
               var items = data.items;
               if ( items.length == 1) {
            	   	var item = items[0];
            	   	var stars = item.stargazers_count;
            	   	$('#cw_github_stars').prop('title', stars);
            	   	$('#cw_github_stars').tooltip();
               }
            },
            "json"
         );
}