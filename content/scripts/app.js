var app = angular.module("portfolio", []);

$(function() {
	$('.item').click(function() {
	    $(".inner").focus()
	    console.log("clicked");
	});
});
