// Home page hide
//---------------------------------------------
/*
$(document).ready(function(){
	if (jQuery(window).width() > 1000) {
		var home_page = $(".home-page");
		var inside_pages = $(".inside-pages");
		var win_height = $(window).height();
		$(window).resize(function(){
			win_height = $(window).height();
		});
		var delay = 700;
		var timeout = null;
		$(window).bind('scroll', function(){
			var scroll = $(window).scrollTop();
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				if ((home_page.is(":visible")) && (scroll > 1) && (scroll < win_height / 2)) {
					$("html, body").animate({
						scrollTop: 0
					}, "slow", "easeInOutExpo");
				}
				else 
					if ((home_page.is(":visible")) && (scroll > win_height / 2) && (scroll < win_height)) {
						$("html, body").animate({
							scrollTop: win_height + "px"
						}, 1500, "easeInOutQuad");
					}
			}, delay);
		});
	}
});
*/

// Navigation
//---------------------------------------------

$(document).ready(function(){
    var sections = $(".pg-item");
    var menu_links = $(".side-menu ul li a");
    
    $(window).scroll(function(){
        if (sections.filter(":in-viewport:last").attr("id") == sections.last().attr("id")) {
            menu_links.removeClass("active");
            menu_links.last().addClass("active");
        }
        else {
            sections.filter(":in-viewport:first").each(function(){
                var active_section = $(this);
                var active_link = $('.side-menu ul li a[href="#' + active_section.attr("id") + '"]');
                menu_links.removeClass("active");
                active_link.addClass("active");
            });
        }
    });
    $(window).trigger('scroll');
});




// Local scroll
//---------------------------------------------

$(document).ready(function(){
    $('.main-menu, .go-works, .side-logo-wrap, .side-menu').localScroll({
        target: 'body',
        hash: true,
        //margin: true,
        duration: 1230,
        easing: "easeInOutExpo"
    });
});

// Mobile menu
//---------------------------------------------

$(document).ready(function(){

    $(".ps-icon-menu, .ps-menu-toggle").click(function(){
        if ($(".sidebar").hasClass("opened")) {
        
            $(".sidebar").animate({
                left: "-350px"
            }, "easeOutCirc");
            $(".ps-icon-menu").removeClass("actived");
            $(".ps-icon-menu b").animate({
                right: "50%",
                marginRight: "-17px"
            });
            $(".white-overlay").fadeOut();
            $(".sidebar").removeClass("opened");
            
        }
        else {
        
            $(".white-overlay").fadeIn();
            $(".sidebar").animate({
                left: 0
            }, 300, "easeOutCirc");
            $(".ps-icon-menu").addClass("actived");
            $(".ps-icon-menu b").animate({
                right: "10px",
                marginRight: 0
            });
            $(".sidebar").addClass("opened");
            
        }
    });
    
    $(window).scroll(function(){
        if ($(".sidebar").hasClass("opened")) {
        
            $(".sidebar").animate({
                left: "-350px"
            }, "easeOutCirc");
            $(".ps-icon-menu").removeClass("actived");
            $(".ps-icon-menu b").animate({
                right: "50%",
                marginRight: "-17px"
            });
            $(".white-overlay").fadeOut();
            $(".sidebar").removeClass("opened");
            
        }
    });
    
});

// Works navigation
//---------------------------------------------

/*
$(document).ready(function(){
    //Top panel sticky
    $(".work-navigation").sticky({
        topSpacing: 1
    });
    
    // Hash change function
    function hash_change(url){
        var hash_url = "#/" + url.replace(" .work-wrapper", "");
        window.location.hash = hash_url;
    }
    // Open work
    window.work_before_scroll = 0;
    $(".work-item-link").click(function(){
        work_before_scroll = $(window).scrollTop();
        $(this).addClass("work-opened");
        
        $(".home-page, .inside-pages").fadeOut(500);
        setTimeout(function(){
            $(".work-full").fadeIn(500);
            
            if (work_before_scroll != 0) {
                $("html, body").animate({
                    scrollTop: 0
                }, "fast", "easeOutExpo");
            }
            
        }, 550);
        
        var work_url = $(this).attr("href") + ' ' + '.work-wrapper';
        
        $(".work-full-load").load(work_url, function(){
            $(".work-loader").delay(700).fadeOut(500);
            $(".work-navigation").animate({
                top: 0
            }, 900, "easeOutCirc");
        });
        hash_change(work_url);
        
        return false;
    });
    // All works (close work)	
    function close_work(){
        $(".work-full").fadeOut(300);
        $(".work-navigation").animate({
            top: "-60px"
        });
        setTimeout(function(){
            $(".work-full-load").empty();
            $("html, body").animate({
                scrollTop: work_before_scroll + "px"
            }, "slow", "easeOutExpo");
        }, 350);
        setTimeout(function(){
            $(".home-page, .inside-pages").fadeIn(500);
        }, 750);
        
        
        
        work_opened = $(".work-opened");
        work_opened.removeClass("work-opened");
    }
    
    $(".work-all").click(function(){
        close_work();
        //Hash change
        window.location.hash = "";
    });
    
    
    
    // Prev work
    function prev_work(){
        $(".work-loader").fadeIn(300);
        var work_prev_url = $(".work-opened").parent().prev(".work-item").find(".work-item-link").attr("href") +
        ' ' +
        '.work-wrapper';
        
        setTimeout(function(){
            $(".work-full-load").empty().load(work_prev_url, function(){
                $(".work-loader").delay(200).fadeOut(500);
            });
        }, 500);
        
        var work_opened = $(".work-opened").parent().prev(".work-item").find(".work-item-link");
        $(".work-item-link").removeClass("work-opened");
        work_opened.addClass("work-opened");
        
        // If left end of the links
        if ($(".work-opened").parent().is(":first")) {
            work_prev_url = $(".work-item").last().find(".work-item-link").attr("href") +
            ' ' +
            '.work-wrapper';
            
            setTimeout(function(){
                $(".work-full-load").empty().load(work_prev_url, function(){
                    $(".work-loader").delay(200).fadeOut(500);
                });
            }, 500);
            work_opened = $(".work-item").last().find(".work-item-link");
            $(".work-item-link").removeClass("work-opened");
            work_opened.addClass("work-opened");
        }
        // Hash cahnge
        hash_change(work_prev_url);
    }
    $(".work-prev").click(function(){
        prev_work();
    });
    
    // Next work
    function next_work(){
        $(".work-loader").fadeIn(300);
        var work_next_url = $(".work-opened").parent().next(".work-item").find(".work-item-link").attr("href") +
        ' ' +
        '.work-wrapper';
        
        setTimeout(function(){
            $(".work-full-load").empty().load(work_next_url, function(){
                $(".work-loader").delay(200).fadeOut(500);
            });
        }, 500);
        
        var work_opened = $(".work-opened").parent().next(".work-item").find(".work-item-link");
        $(".work-item-link").removeClass("work-opened");
        work_opened.addClass("work-opened");

        // If right end of the links
        if ($(".work-opened").parent().is(":last")) {
            work_next_url = $(".work-item").first().find(".work-item-link").attr("href") +
            ' ' +
            '.work-wrapper';
            
            setTimeout(function(){
                $(".work-full-load").empty().load(work_next_url, function(){
                    $(".work-loader").delay(200).fadeOut(500);
                });
            }, 500);
            work_opened = $(".work-item").first().find(".work-item-link");
            $(".work-item-link").removeClass("work-opened");
            work_opened.addClass("work-opened");
			
        }
        // Hash cahnge
        hash_change(work_next_url);
    }
    $(".work-next").click(function(){
        next_work();
    });
    


    // Hash change event
    $(window).hashchange(function(){
        if ((location.hash.search("/work") == -1) && ($(".work-full").is(":visible"))) {
            close_work();
        }
        else {
            hash_new = location.hash;
            work_url = hash_new.replace("#/", "") + ' ' + '.work-wrapper';
            
            
            if ((hash_new.replace("#/", "") != $(".work-opened").attr("href")) && ($(".work-full").is(":visible"))) {
                $(".work-loader").fadeIn(300);
                
                setTimeout(function(){
                    $(".work-full-load").empty().load(work_url, function(){
                        $(".work-loader").delay(200).fadeOut(500);
                    });
                }, 0);
                
                if (work_before_scroll != 0) {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow", "easeOutExpo");
                }
                
                var work_opened = $(".work-item-link[href = '" + work_url.replace(" .work-wrapper", "") + "']");
                $(".work-item-link").removeClass("work-opened");
                work_opened.addClass("work-opened");
            }
            
            if ((hash_new.replace("#/", "") != $(".work-opened").attr("href")) && ($(".work-full").is(":hidden")) && (location.hash.search("/work") != -1)) {
            
                $(".home-page, .inside-pages").fadeOut(500);
                setTimeout(function(){
                    $(".work-full").fadeIn(500);
                }, 550);
                
                setTimeout(function(){
                    $(".work-full-load").empty().load(work_url, function(){
                        $(".work-loader").delay(200).fadeOut(500);
                        $(".work-navigation").animate({
                            top: 0
                        }, 900, "easeOutCirc");
                        
                        if (work_before_scroll != 0) {
                            $("html, body").animate({
                                scrollTop: 0
                            }, "fast", "easeOutExpo");
                        }
                    });
                }, 600);
                
                var work_opened = $(".work-item-link[href = '" + work_url.replace(" .work-wrapper", "") + "']");
                $(".work-item-link").removeClass("work-opened");
                work_opened.addClass("work-opened");
            }
            
        }
    });
    $(window).trigger('hashchange');
    */
});



