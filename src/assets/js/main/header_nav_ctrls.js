'use strict';

header_nav_ctrls();

function header_nav_ctrls(){
	var breakpoint = 768;
	var slidetime = 400;
	var windowWidth = $(window).width();

	headerHoverEvent();
	headerClickEvent();
	navToggle();
	
	function headerHoverEvent(){
		var toggle;
		var listItem;
		var container;
		var childList;
		$(".header-main-nav__item").hover(function(){
			if(windowWidth > breakpoint){
				toggle = $(this).children(".subnav-toggle");
				listItem = toggle.parent("li");
				// container = toggle.parent("li").parent('ul');
				childList = toggle.siblings("ul");
				childList.stop().slideDown(slidetime);
				listItem.addClass("active");
				console.log(1);
			}
		}, function(){
			if(windowWidth > breakpoint){
				$(".header-main-nav__item .active").children("ul").slideUp(slidetime);
				$(".header-main-nav__item .active").removeClass("active");
				childList.stop().slideUp(slidetime);
				listItem.removeClass("active");
			}
		});
	}

	function headerClickEvent(){
		var toggle;
		var listItem;
		var container;
		var childList;
		$(".subnav-toggle").on("click", function(){
			if(windowWidth <= breakpoint){
				toggle = $(this);
				listItem = toggle.parent("li");
				container = listItem.parent('ul');
				childList = toggle.siblings("ul");

				if (!listItem.hasClass("active")){
					if(!container.hasClass("header-main-nav")){
						container.css({"height": "auto"});
					}
					if(windowWidth <= breakpoint){
						if(container.hasClass("header-main-nav")){
							$(".header-main-nav .active").children("ul").slideUp(slidetime);
							$(".header-main-nav .active").removeClass("active");
						} else {
							toggle.parent("li").siblings(".active").children('ul').slideUp(slidetime);
							toggle.parent("li").siblings(".active").removeClass("active");
						}
					}
					childList.stop().slideDown(slidetime);
					listItem.addClass("active");
				//if closed
				} else {
					childList.stop().slideUp(slidetime);
					listItem.removeClass("active");
				}
			}
		});
	}

	function navToggle(){
		var $body = $("body");
		$(".nav-toggle").on("click", function(){
			toggleCtrl();
		});
		$(".nav-close-toggle").on("click", function(){
			toggleCtrl();
		});
		$(".header-nav-container").on("swipe right", function(){
			toggleCtrl();
		});
		function toggleCtrl(){
			if(!$body.hasClass("nav-active")){
				$body.addClass("nav-active");
			} else {
				$body.removeClass("nav-active");
				$(".header-main-nav .active").children("ul").slideUp(slidetime);
				$(".header-main-nav .active").removeClass("active");
			}
		}
	}

	$(window).on("resize", function(){
		windowWidth = $(window).width();
		$(".header-main-nav .active").children("ul").slideUp(slidetime);
		$(".header-main-nav .active").removeClass("active");
		$("body").removeClass("nav-active");
	});
}




