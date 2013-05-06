$(document).ready(function() {
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
    
    $('#searchBox').keypress(function (e) {
        if (e.which == 13) {
            performSearch();
        }
    });

    $.get('/autocomplete.json', function(data) {
        var dataObject = JSON.parse(data);
        
        $('#searchBox').autocomplete({
            lookup : dataObject
        });
    });
        
});