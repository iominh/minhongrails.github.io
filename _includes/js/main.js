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
    
    // production
    $.get('/autocomplete.json', function(data) {
        
        $('#searchBox').autocomplete({
            lookup : data
        });
    });
    
    $("#brand").mouseenter(function() {
        $("#left-brand").css("color", "#00FF00");
        $("#right-brand").css("color", "#00FFFF");
    })
    
    $("#brand").mouseleave(function() {
        $("#left-brand").css("color", "green");
        $("#right-brand").css("color", "blue");
    })
        
    // highlight code
    hljs.initHighlightingOnLoad();
    
    
    // isotope
    var $container = $('#container');
    $container.isotope({
        layoutMode : 'straightDown', 
        columnWidth: 220,
        animationEngine : 'best-availble'
    });
      
    var $optionSets = $('#options .option-set'),
    $optionLinks = $optionSets.find('a');

    $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {
        },
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
            // changes in layout modes need extra logic
            changeLayoutMode( $this, options )
        } else {
            // otherwise, apply new options
            $container.isotope( options );
        }
        return false;
    });
});