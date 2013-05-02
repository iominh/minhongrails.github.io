// Retrieves the value of a GET parameter with a given key
// Accepts:
//   param: string
// Returns:
//   string or null
var getParam = function(param) {
    var queryString = window.location.search.substring(1),
    queries = queryString.split("&");
    for (var i in queries) {
        var pair = queries[i].split("=");
        if (pair[0] == param) {
            return pair[1];
        }
    }
    return null;
};

$(function() {
    var map = {
        'category' : getParam('category'),
        'tags'     : getParam('tags'),
        'search'   : getParam('search')
    };
    
    gotResult = false;
    $.each(map, function(type, value) {
        
        if (value !== null) {
            $.getJSON('/search.json', function(data) {
                
                if (data !== null) {
                    var contains = false;
                    var items = [];
                                        
                    for (var x = 0; x < data.length; x++) {
                        var result = data[x];
                        
                        if (result !== null) {
                            var tags = result.tags;
                            for (var i = 0; i < tags.length; i++) {
                                if (tags[i] && tags[i].indexOf(value) !== -1) {
                                    items.push('<li><a href="' + result.href + '">' + result.title + '</a></li>');
                                    contains = true;
                                    break;
                                }
                            }
                        }
                        
                        if (contains) {
                            $("#results").append(items.join(''));
                            contains = false;
                            gotResult = true;
                        }
                    }
                }
                
            });
        }
    });
    
    $("#searchText").text("Searched for : " + map.tags);
    
    if (gotResult === false) {
        $("#searchBox").text("No results found. Did you enter a query?");
    }
    
});