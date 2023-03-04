document.addEventListener('DOMContentLoaded', function () {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
      images[i].classList.add('img-fluid');
  }

  // Create index
  var index = FlexSearch.create();
  var docId = 0;
  data.forEach(function (doc) {
    index.add(docId, doc.body);
    docId++;
  }, this);

  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  searchInput.addEventListener('keyup', function(e) {
    if(searchInput.value.length > 2){
      // clear results
      searchResults.innerHTML = '';

      // Search
      index.search({
        query: searchInput.value,
        async: false,
        limit: 10,
        encode: "icase",
        tokenize: 'full',
        worker: 4
      }, function(results){
        console.log('results', results);
        if(results.length === 0){
          searchResults.innerHTML = "<a class='list-group-item search-result-item' href='#'>No results found</a>";
        }
        // Display results
        var resultCount = 0;
        results.forEach(function (result) {
          if(resultCount < 10){
            var doc = data[result];
            var searchregex = new RegExp('(' + searchInput.value + ')');
            var textsearch = doc.body.search(searchregex);
            var foundtext = doc.body.substring(textsearch - 40, (textsearch + searchInput.value.length) + 40);
            var highlightedText = foundtext.replace(searchInput.value, '<span class="text-squido-highlight">' + searchInput.value + '</span>');
            var contents = '<p><span class="result-title"> ' + doc.title + '</span><br/><small>' + highlightedText + '</small></p></a>'
            searchResults.innerHTML = searchResults.innerHTML + "<a class='list-group-item search-result-item' href='/" + doc.permalink + "'>" + contents + "</a>";
            resultCount++;
          }
        });
      });
    }else{
      searchResults.innerHTML = '';
    }

    // When the clear "x" is clicked
    searchInput.addEventListener('search', function(e) {
      if(searchInput.value === ''){
        // clear results
        searchResults.innerHTML = '';
      }
    });
  });
}, false);