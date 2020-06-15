(function() {
  function displaySearchResults(results, store) {
    const searchResults = document.getElementById('search-results');
    const baseURL = "/codewind";

    if (results.length) { // Are there any results?
      let appendString = '';

      for (let i = 0; i < results.length; i++) {  // Iterate over the results
        let item = store[results[i].ref];
        if (item.layout == "newsredirect") {
          appendString += `
          <div class="card">
            <div class="card-header">
              News
            </div>
            <div class="card-body">
              <h5 class="card-title"><a href="${baseURL}${item.url}.html">Latest News</a></h5>
              <p class="card-text">Want to keep up with the latest in codewind? See the latest news...</p>
            </div>
          </div>`;
        } else {
          appendString += `
          <div class="card">
            <div class="card-header">
              ${item.layout[0].toUpperCase() + item.layout.substring(1)}
            </div>
            <div class="card-body">
              <h5 class="card-title"><a href="${baseURL}${item.url}.html">${item.title}</a></h5>
              <p class="card-text">${item.content.substring(0, 147)}...</p>
            </div>
          </div>`;
        }
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li class="list-group-item">No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');

    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  const searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    const idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('content');
    });

    for (let key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'category': window.store[key].category,
        'content': window.store[key].content
      });

      const results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();