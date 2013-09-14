$(document).ready(function() {

    // set up navigation
    $('#boxNav').click(function() {
        window.location = "/";
    });
    $('#homeLink').click(function() {
        window.location = "/";
    });
    $('#projectsLink').click(function() {
        window.location = "/projects.html";
    });
//    var searching = false;
//    function flipSearch() {
//        if (searching === true) {
//            searching = false;
//            $("#searchDiv").hide();
//        } else {
//            searching = true;
//            $("#searchDiv").show();
//            $("#searchBox").focus();
//        }
//    }

//    function performSearch() {
//        var query = $('#searchBox').val();
//        if (query !== "") {
//            window.location.replace("/search.html?tags=" + query);
//        }
//    }

//    $("#searchLink").click(function() {
//        flipSearch();
//    });

//    $("#cancelSearchLink").click(function() {
//        flipSearch();
//    });

//    $("#searchButton").click(function() {
//        performSearch();
//    });

//    $('#searchBox').keypress(function(e) {
//        if (e.which == 13) {
//            performSearch();
//        }
//    });

    // production
    $.get('/autocomplete.json', function(data) {

        $('#searchBox').autocomplete({
            lookup: data
        });
    });

    $("#searchButton").click(function(e) {
        e.preventDefault();
        $("#mainContent").hide();
        $("#searchContent").fadeIn();
        $("#searchInput").focus();

    });

    $("#cancelSearch").click(function(e) {
        $("#searchContent").hide();
        $("#mainContent").fadeIn();
        e.preventDefault();
    });

    $('#searchInput').typeahead({
        source: function(query, process) {
            return $.get('/search.json', {query: query}, function(data) {

                if (data) {
                    var text = $('#searchInput').val();
                    for (var x = 0; x < data.length; x++) {
                        var result = data[x];
                        if (result && result.title.indexOf(text) !== null) {
                            $("#searchResults").append("<p>" + result.title + "</p>");
                        }
                    }
                    console.log(data);
                }


//                return process(data.options);
            });
        }
    });

    // highlight code
    hljs.initHighlightingOnLoad();

});