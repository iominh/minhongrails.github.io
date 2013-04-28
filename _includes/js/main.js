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
    
    $("#searchLink").click(function() {
        flipSearch();
    });
    
    $("#cancelSearchLink").click(function() {
        flipSearch();
    });
        
});