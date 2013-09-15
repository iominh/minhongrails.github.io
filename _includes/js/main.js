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
        $("#searchResults").hide();
        $("#searchResultsTable").empty();
        $('#searchInput').val("");
        e.preventDefault();
    });

    $('#searchInput').typeahead({
        source: function(query, process) {
            return $.get('/search.json', {query: query}, function(data) {
                $("#searchResultsTable").empty();

                if (typeof data !== 'object') {
                    data = jQuery.parseJSON(data);
                }

                if (data) {
                    var text = $('#searchInput').val().toLowerCase();
                    var found = false;
                    for (var x = 0; x < data.length; x++) {
                        var result = data[x];

                        if (result === null || result.title === undefined) {
                            continue;
                        }

                        var title = result.title.toLowerCase();
                        if (title.indexOf(text) !== -1) {

                            var row = '<tr><td><a href='
                                    + result.href + '>' + title +
                                    '</a></td><td>';

                            // print tags
                            var tags = result.tags.sort();
                            for (y in result.tags) {
                                var tag = result.tags[y];
                                if (tag !== null) {
                                    row += tag.toLowerCase() + '<br>';
                                }
                            }

                            // print date
//                            row += result.date.month + ' ' + result.date.day
//                                    + ' ' + result.date.year;

//                            if (found === false) {
//                                $("#searchResultsTable").append('<tr><td>Result</td><td>Tags</td></tr>');
//                            }

                            row += '</td></tr>'

                            // display table for first time
                            if (found === false) {
                                $("#searchResults").show();
                            }
                            $("#searchResultsTable").append(row);
                            found = true;
                        }
                    }

                    if (found === false) {
                        $("#searchResultsTable").append('<tr><td>No results found.</td></tr>');
                    }
                }
            });
        }
    });

    // highlight code
    hljs.initHighlightingOnLoad();

});