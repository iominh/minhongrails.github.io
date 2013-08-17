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
    var searching = false;
    function flipSearch() {
        if (searching === true) {
            searching = false;
            $("#searchDiv").hide();
        } else {
            searching = true;
            $("#searchDiv").show();
            $("#searchBox").focus();
        }
    }

    function performSearch() {
        var query = $('#searchBox').val();
        if (query !== "") {
            window.location.replace("/search.html?tags=" + query);
        }
    }

    $("#searchLink").click(function() {
        flipSearch();
    });

    $("#cancelSearchLink").click(function() {
        flipSearch();
    });

    $("#searchButton").click(function() {
        performSearch();
    });

    $('#searchBox').keypress(function(e) {
        if (e.which == 13) {
            performSearch();
        }
    });

    // production
    $.get('/autocomplete.json', function(data) {

        $('#searchBox').autocomplete({
            lookup: data
        });
    });

    // highlight code
    hljs.initHighlightingOnLoad();

});