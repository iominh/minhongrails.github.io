$(document).ready(function () {

	// global vars
	isSearching = false;

	// set up navigation
	$('#boxNav').click(function () {
		window.location = "/";
	});
	$('#homeLink').click(function () {
		window.location = "/";
	});
	$('#projectsLink').click(function () {
		window.location = "/projects.html";
	});

	// production
	$.get('/autocomplete.json', function (data) {

		$('#searchBox').autocomplete({
			lookup: data
		});
	});

	function resetSearch() {
		$("#searchContent").hide();
		$("#mainContent").fadeIn();
		$("#searchResults").hide();
		$(".navbuttons li").fadeIn();
		$("#searchResultsTable").empty();
		$('#searchInput').val("");
		isSearching = false;
	}

	function startSearch() {
		$("#mainContent").hide();
		$(".navbuttons li").hide();
		$("#searchContent").fadeIn();
		$("#searchInput").focus();
		isSearching = true;
	}

	$("#searchButton").click(function (e) {

		if (isSearching) {
			resetSearch();
		} else {
			startSearch();
		}

		e.preventDefault();
	});

	$("#cancelSearch").click(function (e) {
		resetSearch();
		e.preventDefault();
	});

	$('#searchInput').typeahead({
		source: function (query, process) {
			return $.get('/search.json', {query: query}, function (data) {
				$("#searchResultsTable").empty();

				if (data) {
					var text = $('#searchInput').val().toLowerCase();
					var found = false;
					for (var x = 0; x < data.length; x++) {
						var result = data[x];

						if (result === null) {
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


//	var listingTriangle = '<span class="left-accent hidden"></span>';
//	$('.listing tr').hover(function() {
////		$(this).prepend(listingTriangle);
//		$(this).addClass('left-accent');
//	}, function() {
//		$(this).removeClass('left-accent');
//	});

	$("#showAnswer").click(function () {
		$("#hidden").slideToggle();
	});

	$('.lightbox').fluidbox();

	// highlight code
//    hljs.initHighlightingOnLoad();
	prettyPrint();

});