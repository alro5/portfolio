var app = angular.module("portfolio", []);

$(function(){
	$('nav ul li').click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "fast");
	  return false;
	});
});
