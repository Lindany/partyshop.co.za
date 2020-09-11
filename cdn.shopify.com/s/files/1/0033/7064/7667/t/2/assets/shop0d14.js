(function(e) {
  
  /* Compare Product*/
    var storage = e.localStorage;
    var compare = {};
    var total_compare = 8;
    if (storage.isSet('compare')) {
      compare = storage.get('compare');
    } else {
      storage.set('compare', {});
    }
  
  
   var cookieName = "wishlistList";
  
   if (e(".collection_sidebar")) {
        //work only in collection page
        History.Adapter.bind(window, 'statechange', function() {
            var State = History.getState();
            if (!t.isSidebarAjaxClick) {
                t.sidebarParams();
                var newurl = t.sidebarCreateUrl();
                t.sidebarGetContent(newurl);
                t.reActivateSidebar();
            }
            t.isSidebarAjaxClick = false;
        });
    }
  
    
  
       if (window.use_color_swatch) { 
  e('.swatch :radio').change(function() {
    var optionIndex = e(this).closest('.swatch').attr('data-option-index');
    var optionValue = e(this).val();
    e(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change');
  }); 
  
  
    
  
 // (c) Copyright 2014 Caroline Schnapp. All Rights Reserved. Contact: mllegeorgesand@gmail.com
        // See http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options

        Shopify.optionsMap = {};

        Shopify.updateOptionsInSelector = function(selectorIndex) {

            switch (selectorIndex) {
                case 0:
                    var key = 'root';
                    var selector = e('.single-option-selector:eq(0)');
                    break;
                case 1:
                    var key = e('.single-option-selector:eq(0)').val();
                    var selector = e('.single-option-selector:eq(1)');
                    break;
                case 2:
                    var key = e('.single-option-selector:eq(0)').val();
                    key += ' / ' + e('.single-option-selector:eq(1)').val();
                    var selector = e('.single-option-selector:eq(2)');
            }

            var initialValue = selector.val();
            selector.empty();
            var availableOptions = Shopify.optionsMap[key];
            if (availableOptions && availableOptions.length) {
              for (var i = 0; i < availableOptions.length; i++) {
                  var option = availableOptions[i];
                  var newOption = e('<option></option>').val(option).html(option);
                  selector.append(newOption);
              }
              e('.swatch[data-option-index="' + selectorIndex + '"] .swatch-element').each(function() {
                  if (e.inArray(e(this).attr('data-value'), availableOptions) !== -1) {
                      e(this).removeClass('soldout').show().find(':radio').removeAttr('disabled', 'disabled').removeAttr('checked');
                  } else {
                      e(this).addClass('soldout').hide().find(':radio').removeAttr('checked').attr('disabled', 'disabled');
                  }
              });
              if (e.inArray(initialValue, availableOptions) !== -1) {
                  selector.val(initialValue);
              }
              selector.trigger('change');
            }
        };

        Shopify.linkOptionSelectors = function(product) {
            // Building our mapping object.
            for (var i = 0; i < product.variants.length; i++) {
                var variant = product.variants[i];
                if (variant.available) {
                    // Gathering values for the 1st drop-down.
                    Shopify.optionsMap['root'] = Shopify.optionsMap['root'] || [];
                    Shopify.optionsMap['root'].push(variant.option1);
                    Shopify.optionsMap['root'] = Shopify.uniq(Shopify.optionsMap['root']);
                    // Gathering values for the 2nd drop-down.
                    if (product.options.length > 1) {
                        var key = variant.option1;
                        Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
                        Shopify.optionsMap[key].push(variant.option2);
                        Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
                    }
                    // Gathering values for the 3rd drop-down.
                    if (product.options.length === 3) {
                        var key = variant.option1 + ' / ' + variant.option2;
                        Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
                        Shopify.optionsMap[key].push(variant.option3);
                        Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
                    }
                }
            }
            // Update options right away.
            Shopify.updateOptionsInSelector(0);
            if (product.options.length > 1) Shopify.updateOptionsInSelector(1);
            if (product.options.length === 3) Shopify.updateOptionsInSelector(2);
            // When there is an update in the first dropdown.
            e(".single-option-selector:eq(0)").change(function() {
                Shopify.updateOptionsInSelector(1);
                if (product.options.length === 3) Shopify.updateOptionsInSelector(2);
                return true;
            });
            // When there is an update in the second dropdown.
            e(".single-option-selector:eq(1)").change(function() {
                if (product.options.length === 3) Shopify.updateOptionsInSelector(2);
                return true;
            });

        };
     }
  
    e(document).ready(function() {
        t.init()
    });
  
  e(window).resize(function() {
        t.initMobileMenu();        
        
    });
     e(document).on("click touchstart", function(n) {           
            var r = e(".quick-view");
            var i = e("#slidedown-cart");
            var s = e("#ToggleDown");
            var o = e("#email-modal .modal-window");
        
            if (!r.is(n.target) && r.has(n.target).length === 0 && !i.is(n.target) && i.has(n.target).length === 0 && !s.is(n.target) && s.has(n.target).length === 0 && !o.is(n.target) && o.has(n.target).length === 0 ) {
                t.closeQuickViewPopup();
                t.closeDropdownCart();
                t.closeEmailModalWindow();
               
            }
        })
    
    e(document).keyup(function(n) {
        if (n.keyCode == 27) {
            t.closeQuickViewPopup();
            t.closeDropdownCart();
            clearTimeout(t.KidsTimeout);
            if (e(".modal").is(":visible")) {
                e(".modal").fadeOut(500)
            }
        }
    });
    var t = {
        KidsTimeout: null,
        isSidebarAjaxClick: false,
        init: function() {    
            this.initQuickView();
            this.initAddToCart();
          	this.initThumbchange();
            this.initMobileMenu();
            this.initlightSlider();
            this.initModal();
            this.initProductAddToCart();
            this.initDropDownCart();
            this.initWishlist();  
            this.initCompare();
            this.initRemoveCompare();         
            this.initProductMoreview();                     
            this.initelevateZoom();            
            this.initShortcode();       
            this.initScrollTop();
            
            this.initHeaderSticky();
            
            this.initSidebar();
           this.initParallax();
            this.initColorSwatchGrid();  
            this.initInfiniteScrolling();
         
           
        },
       initColorSwatchGrid: function() { 
          jQuery('.item-swatch li label').click(function(){                                   
            var newImage = jQuery(this).parent('').find('.hidden img').attr('src');
           jQuery(this).parents('.item-row').find('.featured-image').attr({ src: newImage }); 
            return false;
          });
        },
      
      initParallax: function() {        
      e('.parallax').each(function(){
          e(this).bind('inview', function (event, visible) {
            if(visible == true) {
              e(this).parallax("50%", 0.3);
            } else {
              e(this).css('background-position','');
            }
          });
        });
        
       },

      
       initHeaderSticky: function(){
       var w = window.innerWidth;
       if (w > 967) {          
         e(".header-sticky").sticky({topSpacing:0});
         var headerH = $('.header-sticky').height();
            e(document).bind('ready scroll', function() {
              var docScroll = $(document).scrollTop();
                if(docScroll >= headerH) {
                    if (!e('#header-landing').hasClass('header-animate')) {
                        e('#header-landing').addClass('header-animate').css({ top: '-155px' }).stop().animate({ top: 0 }, 500);
                    }
                } else {
                    e('#header-landing').removeClass('header-animate').removeAttr('style');
                }
            });
        }
    
       },
      
      initScrollTop: function(){
      e().UItoTop({ easingType: 'easeOutQuart' });
      },
  
             initMobileMenu: function() {
            if (e(".menu-block").is(':visible')) {
                e(".gf-menu-device-container ul.gf-menu li.dropdown").each(function() {
                    if (e(this).find("> p.toogleClick").length == 0) {
                        e(this).prepend('<p class="toogleClick">+</p>');
                    }
                });

                if (e(".menu-block").children().hasClass("gf-menu-device-wrapper") == false) {
                    e(".menu-block").children().addClass("gf-menu-device-wrapper");
                }
                if (e(".gf-menu-device-container").find("ul.gf-menu").size() == 0) {
                    e(".gf-menu-device-container").append(e(".nav-bar .site-nav-dropdown_inner").html());
                    e(".gf-menu-device-container .site-nav").addClass("gf-menu");
                    e(".gf-menu-device-container .site-nav").removeClass("nav")
                }
                e("p.toogleClick").click(function() {
                    if (e(this).hasClass("mobile-toggle-open")) {
                        e(this).next().next().hide();
                        e(this).removeClass("mobile-toggle-open");
                    } else {
                        e(this).next().next().show();
                        e(this).addClass("mobile-toggle-open")
                    }
                });
               var w = window.innerWidth;
                  if (w < 967) {
                    jQuery('.site-nav .dropdown .menu__moblie').bind('click', function(event) {
                      if (currentEl != this) {
                        e(this).next().show();
                        e(this).prev().addClass('mobile-toggle-open');
                        event.preventDefault();
                        currentEl = this;
                      }
                    });
                  }
                e("p.toogleClick").show();
                e("div.gf-menu-toggle").hide();
                e(".nav-bar .site-nav-dropdown_inner").hide();
                if (e("ul.gf-menu").hasClass("clicked") == false) {
                    e(".gf-menu").hide();
                    e(".gf-menu li.dropdown ul.site-nav-dropdown").hide();
                }


                e(".col-1 .inner ul.dropdown").parent().each(function() {
                    if (e(this).find("> p.toogleClick").length == 0) {
                        e(this).prepend('<p class="toogleClick">+</p>');
                    }
                });

                e(".cbp-spmenu span.icon-dropdown").remove();

                e("ul.gf-menu li.dropdown").each(function() {
                    if (e(this).find("> p.toogleClick").length == 0) {
                        e(this).prepend('<p class="toogleClick">+</p>');
                    }
                });

                e("p.toogleClick").click(function() {
                    if (e(this).hasClass("mobile-toggle-open")) {
                        e(this).next().next().hide();
                        e(this).removeClass("mobile-toggle-open");
                    } else {
                        e(this).next().next().show();
                        e(this).addClass("mobile-toggle-open");
                    }
                });
                e('.header-panel-bottom ul.customer-links').prependTo(e('.customer-area .dropdown-menu'));
            } else {
                e(".nav-bar .site-nav-dropdown_inner").show();
                e(".gf-menu").hide();

               
            }
            if (e(".menu-block").children().hasClass("gf-menu-device-wrapper") == false) {
                e(".menu-block").children().addClass("resized");
            };
        },

      initShortcode: function() {
       e('.dt-sc-toggle').toggle(function(){ e(this).addClass('active'); },function(){ e(this).removeClass('active'); });
	   e('.dt-sc-toggle').click(function(){ e(this).next('.dt-sc-toggle-content').slideToggle(); });
	   e('.dt-sc-toggle-frame-set').each(function(){
		var $this = e(this),
		$toggle = $this.find('.dt-sc-toggle-accordion');
		
		$toggle.click(function(){
			if( e(this).next().is(':hidden') ) {
				$this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
				e(this).toggleClass('active').next().slideDown();
			}
			return false;
		});
		
		//Activate First Item always
		$this.find('.dt-sc-toggle-accordion:first').addClass("active");
		$this.find('.dt-sc-toggle-accordion:first').next().slideDown();
	});/* Toggle Shortcode end*/
    
    //TABS...
	if(e('ul.tabs').length > 0) {
	  e('ul.tabs').tabs('> .dt-sc-tabs_content');
	}
	
	if(e('ul.dt-sc-tabs-frame').length > 0){
	e('ul.dt-sc-tabs-frame').tabs('> .dt-sc-tabs-frame-content');
	}
	
	if(e('ul.tabs').length > 0) {
		e('ul.tabs').tabs('> .dt-sc-tabs_content');
	}
	
	if(e('ul.dt-sc-tabs').length > 0) {
		e('ul.dt-sc-tabs').tabs('> .dt-sc-tabs-content');
	}
  
	if(e('.dt-sc-tabs-vertical-frame').length > 0){
	
		e('.dt-sc-tabs-vertical-frame').tabs('> .dt-sc-tabs-vertical-frame-content');
		
		e('.dt-sc-tabs-vertical-frame').each(function(){
			e(this).find("li:first").addClass('first').addClass('current');
			e(this).find("li:last").addClass('last');
		});
		
		e('.dt-sc-tabs-vertical-frame li').click(function(){
			e(this).parent().children().removeClass('current');
			e(this).addClass('current');
		});
		
	}
  
      },
      
     
      
        initWishlist: function() {
           t.updateWishlistButtons()
           t.initWishlistButtons()
        },
       
      

      initWishlistButtons: function() {
        if(e(".add-in-wishlist-js").length == 0) {
          return false;
        }
        e(".add-in-wishlist-js").each(function(){
          e(this).unbind();
          e(this).click(function(event){
           
            event.preventDefault();
            try
            {
              var id = e(this).attr('href');
              if(e.cookie(cookieName) == null) {
                var str = id;
              } else {
                if(e.cookie(cookieName).indexOf(id) == -1) {
                  var str = e.cookie(cookieName) + '__' + id;
                }
              }
              e.cookie(cookieName, str, {expires:14, path:'/'});
              jQuery('.loadding-wishbutton-'+id).show();
              jQuery('.default-wishbutton-'+id).remove();
              setTimeout(function(){ jQuery('.loadding-wishbutton-'+id).remove(); jQuery('.added-wishbutton-'+id).show(); }, 2000);
              e(this).unbind();
            }
            catch (err) {} // ignore errors reading cookies
          })
        });
      },


      updateWishlistButtons: function() {
        try
        {
          if(e.cookie(cookieName) != null && e.cookie(cookieName) != '__' && e.cookie(cookieName) != '') {
            var str = String(e.cookie(cookieName)).split("__");
            for (var i=0; i<str.length; i++) {
              if (str[i] != '') {
                jQuery('.added-wishbutton-'+str[i]).show();
                jQuery('.default-wishbutton-'+str[i]).remove();
                jQuery('.loadding-wishbutton-'+str[i]).remove();

              }
            }
          }
        }
        catch (err) {}
      },


      
      
      
       initelevateZoom: function() {
            e("#product-featured-image").length > 0 && (e(".visible-phone").is(":visible") ? (e("#product-featured-image").elevateZoom({
                gallery: "ProductThumbs",
                cursor: "pointer",
                galleryActiveClass: "active",
                imageCrossfade: !1,
                scrollZoom: !1,
                onImageSwapComplete: function() {
                    e(".zoomWrapper div").hide()
                },
                loadingIcon: window.loading_url
            }), e("#product-featured-image").bind("click", function() {
                return !1
            })) : (e("#product-featured-image").elevateZoom({
                gallery: "ProductThumbs",
                cursor: "pointer",
                galleryActiveClass: "active",
                imageCrossfade: !0,
                scrollZoom: !0,
                onImageSwapComplete: function() {
                    e(".zoomWrapper div").hide()
                },
                loadingIcon: window.loading_url
            }), e("#product-featured-image").bind("click", function() {
                var i = e("#product-featured-image").data("elevateZoom");
              return e.fancybox(i.getGalleryList({})), !1
            })))
        },
      
      
    
      initProductMoreview: function() {
            if (e('.more-view-wrapper-owlslider').length > 0) {
                this.initOwlMoreview();
            } 
        },
      
          
       initOwlMoreview: function() {
       e(".more-view-wrapper-owlslider ul").owlCarousel({
            loop:false,
            margin:10,
            nav:false,
         	dots:true,
           // navContainer: ".single-page-owl-carousel",
           // navText: ['<a class="prev"><i class="icon-arrow-left icons" ></i></a>','<a class="next"><i class="icon-arrow-right icons" ></i></a>'],
            dots: false,
            responsive:{
                0:{
                    items:3
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
        },
        
      
        initProductWishlist: function() {
            e(".product-single button.wishlist").click(function(n) {
                n.preventDefault();
                var r = e(this).parent();
                var i = r.parents(".grid-item");
                e.ajax({
                    type: "POST",
                    url: "/contact",
                    data: r.serialize(),
                    beforeSend: function() {
                        t.showLoading()
                    },
                    success: function(n) {
                        t.hideLoading();                  
                       var o = e("#product-featured-image").attr("src");
                       var wp = e(".product-single__title").text();
                       var wamt = e(".product-single__price .grid-link__org_price span.money").text();   
                       
                      e(".ajax-success-modal").find(".added-to-wishlist").show();
                      e(".ajax-success-modal").find(".added-to-cart").hide();
                      e(".ajax-success-modal").find(".ajax-product-image").attr("src", o);    
                      e(".ajax-success-modal").find(".ajax-product-title").text(wp);
                      e(".ajax-success-modal").find(".ajax_price").text(wamt);
                      //e(".ajax-success-modal").find(".ajax_qty").text(wamt);
                      
                      
                      t.showModal(".ajax-success-modal")
                    },
                    error: function(n, r) {
                        t.hideLoading();
                        e(".loading-modal").hide();
                        e(".ajax-error-message").text(e.parseJSON(n.responseText).description);
                        t.showModal(".ajax-error-modal")
                    }
                })
            })
        },
      
        showModal: function(n) {
            e(n).fadeIn(500);
            t.KidsTimeout = setTimeout(function() {
                e(n).fadeOut(500)
            }, 5e3)
        },
        checkItemsInDropdownCart: function() {
            if (e("#slidedown-cart .mini-products-list").children().length > 0) {
                e("#slidedown-cart .no-items").hide();
                e("#slidedown-cart .has-items").show()
            } else {
                e("#slidedown-cart .has-items").hide();
                e("#slidedown-cart .no-items").show()
            }
        },
        initModal: function() {
            e(".continue-shopping").click(function() {
                clearTimeout(t.KidsTimeout);
                e(".ajax-success-modal").fadeOut(500)
            });
            e(".close-modal, .overlay").click(function() {
                clearTimeout(t.KidsTimeout);
                e(".ajax-success-modal, .compare_modal").fadeOut(500)
            })
        },
        initDropDownCart: function() {
            if (window.dropdowncart_type == "click") {
                e("#ToggleDown").click(function() {
                    if (e("#slidedown-cart").is(":visible")) {
                        e("#slidedown-cart").slideUp("fast")
                    } else {
                        e("#slidedown-cart").slideDown("fast")
                    }
                })
            } else {
                if (!("ontouchstart" in document)) {
                    e("#ToggleDown").hover(function() {
                        if (!e("#slidedown-cart").is(":visible")) {
                            e("#slidedown-cart").slideDown("fast")
                        }
                    });
                    e(".wrapper-top-cart").mouseleave(function() {
                        e("#slidedown-cart").slideUp("fast")
                    })
                } else {
                    e("#ToggleDown").click(function() {
                        if (e("#slidedown-cart").is(":visible")) {
                            e("#slidedown-cart").slideUp("fast")
                        } else {
                            e("#slidedown-cart").slideDown("fast")
                        }
                    })
                }
            }
            t.checkItemsInDropdownCart();
            e("#slidedown-cart .no-items a").click(function() {
                e("#slidedown-cart").slideUp("fast")
            });
            e("#slidedown-cart .btn-remove").click(function(n) {
                n.preventDefault();
                var r = e(this).parents(".item").attr("id");
                r = r.match(/\d+/g);
                Shopify.removeItem(r, function(e) {
                    t.doUpdateDropdownCart(e)
                })
            })
        },
        closeDropdownCart: function() {
            if (e("#slidedown-cart").is(":visible")) {
                e("#slidedown-cart").slideUp("fast")
            }
        },
       
        
        initProductAddToCart: function() {
            if (e("#AddToCart").length > 0) {
                e("#AddToCart").click(function(n) {
                    n.preventDefault();
                    if (e(this).attr("disabled") != "disabled") {
                        if (!window.ajax_cart) {
                            e(this).closest("form").submit()
                        } else {
                            var r = e("#AddToCartForm select[name=id]").val();
                            if (!r) {
                                r = e("#AddToCartForm input[name=id]").val()
                            }
                            var i = e("#AddToCartForm input[name=quantity]").val();
                            if (!i) {
                                i = 1
                            }                          
                            var o = e("#product-featured-image").attr("src");
                            var p = e(".product-single__title").text();
                            var amt = e(".product_single_price .grid-link__org_price span.money").text();                               
                            t.doAjaxAddToCart(r, i, o, p, amt)
                        }
                    }
                    return false
                })
            }
        },
      initlightSlider: function() {
      if (e(".vertical").length > 0) {
      e('.vertical').lightSlider({      
      item:3,
      loop:false,
      slideMove:1,
      easing: 'linear',
      pager: false,
      speed:600,
      vertical:true,
     // currentPagerPosition: 'middle',
      verticalHeight:170,
      vThumbWidth:70,
        
      responsive : [
        {
          breakpoint:800,
          settings: {
            item:3,
            slideMove:1,
            slideMargin:4,                  
          }
        },
        {
          breakpoint:480,
          settings: {
            item:2,
            slideMove:1
          }
        }
      ]
    });  
             } 
    },
      
   initThumbchange: function() {
            if (e(".thumb_items img").length > 0) {
                e(".thumb_items img").click(function(n) {
                    n.preventDefault();                  
                    var r = e(this).parents(".item-row");
                    var i = e(r).attr("id");                                  
                    var photo_fullsize =  e(this).attr('src');							 
				   e(r).find(".grid-link img").attr('src', photo_fullsize); 
							  
                    })
                    //return false
            }
            },
      
    
        initAddToCart: function() {
            if (e(".add-cart-btn").length > 0) {
                e(".add-cart-btn").click(function(n) {
                    n.preventDefault();
                    if (e(this).attr("disabled") != "disabled") {
                        var r = e(this).parents(".item-row");
                        var i = e(r).attr("id");
                        i = i.match(/\d+/g);
                        if (!window.ajax_cart) {
                            e("#cart-form-" + i).submit()
                        } else {
                            var s = e("#cart-form-" + i + " select[name=id]").val();                          
                            if (!s) {
                                s = e("#cart-form-" + i + " input[name=id]").val()
                            }                          
                            var o = e("#cart-form-" + i + " select[name=quantity]").val();
                            if (!o) {
                                o = 1
                            }
                        
                           var a = e(r).find(".featured-image").attr("src");
                           var p = e(r).find(".grid-link__title").text();
                           var amt = e(r).find(".grid-link__meta .product_price .grid-link__org_price span.money").text();                         
                            t.doAjaxAddToCart(s, o, a, p, amt)
                        }
                    }
                    return false
                })
            }
        },
        showLoading: function() {
            e(".loading-modal").show()
        },
        hideLoading: function() {
            e(".loading-modal").hide()
        },
        doAjaxAddToCart: function(n, r, a, p, amt) {
            e.ajax({
                type: "post",
                url: "/cart/add.js",
                data: "quantity=" + r + "&id=" + n,
                dataType: "json",
                beforeSend: function() {
                    t.showLoading()
                },
                success: function(n) {
                    t.hideLoading();                    
                    t.showModal(".ajax-success-modal");
                     e(".ajax-success-modal").find(".ajax-product-image").attr("src", a);
                     e(".ajax-success-modal").find(".added-to-wishlist").hide();
                     e(".ajax-success-modal").find(".added-to-cart").show();
                     e(".ajax-success-modal").find(".ajax-product-title").text(p);
                     e(".ajax-success-modal").find(".ajax_price").text(amt);
                    e(".ajax-success-modal").find(".ajax_qty").text(r);
                  
                    t.updateDropdownCart()
                },
                error: function(n, r) {
                    t.hideLoading();
                    e(".ajax-error-message").text(e.parseJSON(n.responseText).description);
                    t.showModal(".ajax-error-modal")
                }
            })
        },
       initQuickView: function() {
            e(".quick-view-text").click(function() {
              e('.quick-view').addClass('open-in');  
                var product = e(this).attr("id");
                Shopify.getProduct(product, function(product) {
                    var r = e("#quickview-template").html();
                    e(".quick-view").html(r);
                    var i = e(".quick-view");
                    var s = product.description.replace(/(<([^>]+)>)/ig, "");
                    s = s.split(" ").splice(0, 40).join(" ") + "...";
                    i.find(".product-title a").text(product.title);
                    i.find(".product-title a").attr("href", product.url);  
                   
                  if (i.find('.product-inventory span').length > 0) {
                      var variant = product.variants[0];
                      var inventoryInfo = i.find('.product-inventory span');                      
                      if (variant.available) {
                       if (variant.inventory_management != null) {
                          inventoryInfo.text(window.in_stock);
                        } else {
                          inventoryInfo.text(window.many_in_stock);
                        }
                      } else {
                        inventoryInfo.text(window.out_of_stock);
                      }
                    }
                  
                     
                    i.find(".price").html(Shopify.formatMoney(product.price, window.money_format));
                    i.find(".product-item").attr("id", "product-" + product.id);
                    i.find(".variants").attr("id", "product-actions-" + product.id);
                    i.find(".variants select").attr("id", "product-select-" + product.id);
                    if (product.compare_at_price > product.price) {
                        i.find(".compare-price").html(Shopify.formatMoney(product.compare_at_price_max, window.money_format)).show();
                        i.find(".price").addClass("on-sale")
                    } else {
                        i.find(".compare-price").html("");
                        i.find(".price").removeClass("on-sale")
                    }
                    if (!product.available) {
                        i.find("select, input, .product_price, .total-price, .dec, .inc, .variants label").remove();
                        i.find(".add-to-cart-btn").text("Unavailable").addClass("disabled").attr("disabled", "disabled");                        
                    } else {
                      i.find(".product_price span").html(Shopify.formatMoney(product.price, window.money_format));     
                      i.find(".total-price span").html(Shopify.formatMoney(product.price, window.money_format));                        
                       if (window.use_color_swatch) {                        
                            t.createQuickViewVariantsSwatch(product, i);
                        } else {
                            t.createQuickViewVariants(product, i);
                        }
                        
                    }
                    i.find(".button").on("click", function() {
                        var n = i.find(".quantity").val(),
                            r = 1;
                        if (e(this).text() == "+") {
                            r = parseInt(n) + 1
                        } else if (n > 1) {
                            r = parseInt(n) - 1
                        }
                        i.find(".quantity").val(r);
                       if (i.find(".total-price").length > 0) {
                            t.updatePricingQuickview();
                        }
                    });
                  
                    t.loadQuickViewSlider(product, i);
                    t.initQuickviewAddToCart();
                    e(".quick-view").fadeIn(500);
                   
                   if (e('.quick-view .total-price').length > 0) {
                        e('.quick-view input[name=quantity]').on('change', t.updatePricingQuickview);
                    }
                });
                return false
                
                
                 if (window.show_multiple_currencies && window.shop_currency != jQuery("#currencies").val())
                            {
                                Currency.convertAll(window.shop_currency, jQuery("#currencies").val(), "span.money", "money_format")
                            }
              
            });
             e(".quick-view .overlay, .close-window").live("click", function() {
                t.closeQuickViewPopup();
               e('.quick-view').removeClass("open-in");
               e('.quick-view').removeClass("option-loader");
               
                return false
            })
           
        },
      
      
      
      updatePricingQuickview: function() {
            //try pattern one before pattern 2
            var regex = /([0-9]+[.|,][0-9]+[.|,][0-9]+)/g;
            var unitPriceTextMatch = e('.quick-view .price').text().match(regex);

            if (!unitPriceTextMatch) {
                regex = /([0-9]+[.|,][0-9]+)/g;
                unitPriceTextMatch = e('.quick-view .price').text().match(regex);
            }

            if (unitPriceTextMatch) {
                var unitPriceText = unitPriceTextMatch[0];
                var unitPrice = unitPriceText.replace(/[.|,]/g, '');
                var quantity = parseInt(e('.quick-view input[name=quantity]').val());
                var totalPrice = unitPrice * quantity;

                var totalPriceText = Shopify.formatMoney(totalPrice, window.money_format);
                regex = /([0-9]+[.|,][0-9]+[.|,][0-9]+)/g;     
                if (!totalPriceText.match(regex)) {
                   regex = /([0-9]+[.|,][0-9]+)/g;
                } 
                totalPriceText = totalPriceText.match(regex)[0];

                var regInput = new RegExp(unitPriceText, "g");
                var totalPriceHtml = e('.quick-view #QProductPrice').html().replace(regInput, totalPriceText);

                $('.quick-view .total-price span').html(totalPriceHtml);
            }
        },
      
      
      

        initQuickviewAddToCart: function() {
            if (e(".quick-view .add-to-cart-btn").length > 0) {
                e(".quick-view .add-to-cart-btn").click(function() {
                    var n = e(".quick-view select[name=id]").val();
                    if (!n) {
                        n = e(".quick-view input[name=id]").val()
                    }
                    var r = e(".quick-view input[name=quantity]").val();
                    if (!r) {
                        r = 1
                    }
                    var p = e('.quick-view .product-title a').html();
                    var a = e(".quick-view .quickview-featured-image img").attr("src");                 
                    t.doAjaxAddToCart(n, r, a, p);
                    t.closeQuickViewPopup();
                    e('.quick-view').removeClass("open-in");
               		e('.quick-view').removeClass("option-loader");
                })
            }
        },
        updateDropdownCart: function() {
            Shopify.getCart(function(e) {
                t.doUpdateDropdownCart(e)
            })
        },
        doUpdateDropdownCart: function(n) {
            var r = '<li class="item" id="cart-item-{ID}"><a href="{URL}" title="{TITLE}" class="product-image"><img src="{IMAGE}" alt="{TITLE}"></a><div class="product-details"><a href="javascript:void(0)" title="Remove This Item" class="btn-remove"><span class="icon-close"></span></a><p class="product-name"><a href="{URL}">{TITLE}</a></p><div class="cart-collateral">{QUANTITY} x <span class="price">{PRICE}</span></div></div></li>';
          e("#cartCount").text(n.item_count );
          e(".ajax-success-modal").find(".ajax_cartCount").text(n.item_count );
          e(".ajax-success-modal").find(".ajax_cartTotal").html(Shopify.formatMoney(n.total_price, window.money_format));
            e("#minicart_total span.money").html(Shopify.formatMoney(n.total_price, window.money_format));
            e("#slidedown-cart .summary .price").html(Shopify.formatMoney(n.total_price, window.money_format));
            e("#slidedown-cart .mini-products-list").html("");
            if (n.item_count > 0) {
                for (var i = 0; i < n.items.length; i++) {
                    var s = r;
                    s = s.replace(/\{ID\}/g, n.items[i].id);
                    s = s.replace(/\{URL\}/g, n.items[i].url);
                    s = s.replace(/\{TITLE\}/g, n.items[i].title);
                    s = s.replace(/\{QUANTITY\}/g, n.items[i].quantity);
                    s = s.replace(/\{IMAGE\}/g, Shopify.resizeImage(n.items[i].image, "small"));
                    s = s.replace(/\{PRICE\}/g, Shopify.formatMoney(n.items[i].price, window.money_format));
                    e("#slidedown-cart .mini-products-list").append(s)
                }
                e("#slidedown-cart .btn-remove").click(function(n) {
                    n.preventDefault();
                    var r = e(this).parents(".item").attr("id");
                    r = r.match(/\d+/g);
                    Shopify.removeItem(r, function(e) {
                        t.doUpdateDropdownCart(e);                      
                    })
                });
                if (t.checkNeedToConvertCurrency()) {
                    Currency.convertAll(window.shop_currency, jQuery('#currencies').val(), '#slidedown-cart span.money', 'money_format')
                    Currency.convertAll(window.shop_currency, jQuery('#currencies').val(), '#minicart_total span.money', 'money_format')
                    Currency.convertAll(window.shop_currency, jQuery('#currencies').val(), '.ajax_cartTotal span.money', 'money_format')
                    
                }
            }
            t.checkItemsInDropdownCart()
        },
        checkNeedToConvertCurrency: function() {
            return window.show_multiple_currencies && Currency.currentCurrency != shopCurrency
        },
        loadQuickViewSlider: function(product, r) {
            var s = Shopify.resizeImage(product.featured_image, "grande");
            r.find(".quickview-featured-image").append('<a href="' + product.url + '"><img src="' + s + '" title="' + product.title + '"/><div style="height: 100%; width: 100%; top:0px; left:-260px; z-index: 2000; position: absolute; display: none; background: url(' + window.loading_url + ') 50% 50% no-repeat;"></div></a>');
            if (product.images.length > 1) {
                var o = r.find(".more-view-wrapper ul");
                for (i in product.images) {
                    var u = Shopify.resizeImage(product.images[i], "grande");
                    var a = Shopify.resizeImage(product.images[i], "medium");
                    var f = '<li><a href="javascript:void(0)" data-image="' + u + '"><img src="' + a + '"  /></a></li>';
                    o.append(f)
                }
                o.find("a").click(function() {
                    var t = r.find(".quickview-featured-image img");
                    var product = r.find(".quickview-featured-image div");
                    if (t.attr("src") != e(this).attr("data-image")) {
                        t.attr("src", e(this).attr("data-image"));
                        product.show();
                        t.load(function(t) {
                            product.hide();
                            e(this).unbind("load");
                            product.hide()
                        })
                    }
                });
               
                 if (o.hasClass("quickview-more-views-owlslider")) {
                    t.initQuickViewMoreview(o)
                } else {
                    t.initQuickViewMoreview(o)
                }
              
            } else {
             
                r.find(".more-view-wrapper").remove();
               
            } 
        },
         closeEmailModalWindow: function() {
            if (e("#email-modal").length > 0 && e("#email-modal").is(":visible")) {
                e("#email-modal .modal-window").fadeOut(600, function() {
                    e("#email-modal .modal-overlay").fadeOut(600, function() {
                        e("#email-modal").hide();
                        e.cookie("emailSubcribeModal", "closed", {
                            expires: 1,
                            path: "/"
                        })
                    })
                })
            }
        },
        initQuickViewMoreview: function(t) {
            if (t) {
                t.owlCarousel({
                   // loop:false,
                    margin:10,
                    //nav:true,
                    //navContainer: ".quick-view-carousel",
                    //navText: ['<a class="prev"><i class="zmdi zmdi-arrow-left" ></i></a>','<a class="next"><i class="zmdi zmdi-arrow-right" ></i></a>'],
                    dots: true,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items: 4
                        }
                    }
                });
            }
          
        },
      
     
        convertToSlug: function(e) {
            return e.toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")
        },
       createQuickViewVariantsSwatch: function(product, quickviewTemplate) {
            if (product.variants.length > 1) { //multiple variants
                for (var i = 0; i < product.variants.length; i++) {
                    var variant = product.variants[i];
                    var option = '<option value="' + variant.id + '">' + variant.title + '</option>';
                    quickviewTemplate.find('form.variants > select').append(option);
                }
                new Shopify.OptionSelectors("product-select-" + product.id, {
                    product: product,
                    onVariantSelected: selectCallbackQuickview
                });

                //start of quickview variant;
                var filePath = window.file_url.substring(0, window.file_url.lastIndexOf('?'));
                var assetUrl = window.asset_url.substring(0, window.asset_url.lastIndexOf('?'));
                var options = "";
                for (var i = 0; i < product.options.length; i++) {
                    options += '<div class="swatch clearfix" data-option-index="' + i + '">';
                    options += '<div class="header">' + product.options[i].name + '</div>';
                    var is_color = false;
                    if (/Color|Colour/i.test(product.options[i].name)) {
                        is_color = true;
                    }
                    var optionValues = new Array();
                    for (var j = 0; j < product.variants.length; j++) {
                        var variant = product.variants[j];
                        var value = variant.options[i];
                        var valueHandle = this.convertToSlug(value);
                        var forText = 'swatch-' + i + '-' + valueHandle;
                        if (optionValues.indexOf(value) < 0) {
                            //not yet inserted
                            options += '<div data-value="' + value + '" class="swatch-element ' + (is_color ? "color" : "") + valueHandle + (variant.available ? ' available ' : ' soldout ') + '">';

                            if (is_color) {
                                options += '<div class="tooltip">' + value + '</div>';
                            }
                            options += '<input id="' + forText + '" type="radio" name="option-' + i + '" value="' + value + '" ' + (j == 0 ? ' checked ' : '') + (variant.available ? '' : ' disabled') + ' />';

                            if (is_color) {
                                options += '<label for="' + forText + '" style="background-color: ' + valueHandle + '; background-image: url(' + filePath + valueHandle + '.png)"><img class="crossed-out" src="' + assetUrl + 'soldout.png" /></label>';
                            } else {
                                options += '<label for="' + forText + '">' + value + '<img class="crossed-out" src="' + assetUrl + 'soldout.png" /></label>';
                            }
                            options += '</div>';
                            if (variant.available) {
                                $('.quick-view .swatch[data-option-index="' + i + '"] .' + valueHandle).removeClass('soldout').addClass('available').find(':radio').removeAttr('disabled');
                            }
                            optionValues.push(value);
                        }
                    }
                    options += '</div>';
                }
                quickviewTemplate.find('form.variants > select').after(options);
                quickviewTemplate.find('.swatch :radio').change(function() {
                    var optionIndex = $(this).closest('.swatch').attr('data-option-index');
                    var optionValue = $(this).val();
                    $(this)
                        .closest('form')
                        .find('.single-option-selector')
                        .eq(optionIndex)
                        .val(optionValue)
                        .trigger('change');
                });
                if (product.available) {
                    Shopify.optionsMap = {};
                    Shopify.linkOptionSelectors(product);
                }

                //end of quickview variant
            } else { //single variant
                quickviewTemplate.find('form.variants > select').remove();
                var variant_field = '<input type="hidden" name="id" value="' + product.variants[0].id + '">';
                quickviewTemplate.find('form.variants').append(variant_field);
              if (window.show_multiple_currencies && window.shop_currency != jQuery("#currencies").val())
                            {
                                Currency.convertAll(window.shop_currency, jQuery("#currencies").val(), "span.money", "money_format")
                            }
            }
        },
        createQuickViewVariants: function(t, product) {
            if (t.variants.length > 1) {
                for (var r = 0; r < t.variants.length; r++) {
                    var i = t.variants[r];
                    var s = '<option value="' + i.id + '">' + i.title + "</option>";
                    product.find("form.variants > select").append(s)
                }
                new Shopify.OptionSelectors("product-select-" + t.id, { product: t,  onVariantSelected: selectCallbackQuickview  });
               
                if (t.options.length == 1) {
                    e(".selector-wrapper:eq(0)").prepend("<label>" + t.options[0].name + "</label>")
                }
                product.find("form.variants .selector-wrapper label").each(function(n, r) {
                    e(this).html(t.options[n].name)
                })
            } else {
                product.find("form.variants > select").remove();
                var o = '<input type="hidden" name="id" value="' + t.variants[0].id + '">';
                product.find("form.variants").append(o)
                 
                 if (window.show_multiple_currencies && window.shop_currency != jQuery("#currencies").val())
                            {
                                Currency.convertAll(window.shop_currency, jQuery("#currencies").val(), "span.money", "money_format")
                            }
            }
        },      
            closeQuickViewPopup: function() {
            e(".quick-view").fadeOut(500)
        },
       initSidebar: function() {
            //if category page then init sidebar
            if (e(".collection_sidebar").length > 0) {
                t.sidebarParams();              
                t.sidebarMapEvents();               
                t.sidebarInitToggle();
                t.sidebarMapClear();
                t.sidebarMapClearAll();
                t.initSortby();                
                t.sidebarMapPaging();
            }
        },
      
       sidebarMapView: function() {
            e(".view-mode a").click(function(n) {
                if (!e(this).hasClass("active")) {
                    var paging = e(".filter-show  button span").text();
                    if (e(this).hasClass("list")) {
                        Shopify.queryParams.view = "list" + paging;
                    } else {
                        Shopify.queryParams.view = paging;
                    }

                    t.sidebarAjaxClick();
                    e(".view-mode a.active").removeClass("active");
                    e(this).addClass("active");
                }
                n.preventDefault();
            });
        },
             
      sidebarMapShow: function() {
            e(".filter-show a").click(function(n) {
                if (!e(this).parent().hasClass("active")) {
                    var thisPaging = e(this).attr('href');

                    var view = e(".view-mode a.active").attr("href");
                    if (view == "list") {
                        Shopify.queryParams.view = "list" + thisPaging;
                    } else {
                        Shopify.queryParams.view = thisPaging;
                    }

                    t.sidebarAjaxClick();                  
                    e(".filter-show .btn span").text(thisPaging);
                    e(".filter-show li.active").removeClass("active");
                    e(this).parent().addClass("active");
                }
                n.preventDefault();
            });
        },
      
        sidebarMapSorting: function(n) {
            e(".filter-sortby a").click(function(n) {
                if (!e(this).parent().hasClass("active")) {
                    Shopify.queryParams.sort_by = e(this).attr("href");
                    t.sidebarAjaxClick();
                    var sortbyText = e(this).text();                  
                    e(".filter-sortby  button span").text(sortbyText);
                    e(".filter-sortby li.active").removeClass("active");
                    e(this).parent().addClass("active");
                }
                n.preventDefault();
            });
        },
      
       initSortby: function() {
            //sort by filter
            if (Shopify.queryParams.sort_by) {
                var sortby = Shopify.queryParams.sort_by;
                var sortbyText = e(".filter-sortby a[href='" + sortby + "']").text();
                e(".filter-sortby  button span").text(sortbyText);
                e(".filter-sortby li.active").removeClass("active");
                e(".filter-sortby a[href='" + sortby + "']").parent().addClass("active");
            }
        },
        sidebarMapPaging: function() {
            e(".pagination-custom a").click(function(n) {
                var page = e(this).attr("href").match(/page=\d+/g);
                if (page) {
                    Shopify.queryParams.page = parseInt(page[0].match(/\d+/g));
                    if (Shopify.queryParams.page) {
                        var newurl = t.sidebarCreateUrl();
                        t.isSidebarAjaxClick = true;
                        History.pushState({
                            param: Shopify.queryParams
                        }, newurl, newurl);
                        t.sidebarGetContent(newurl);
                        //go to top
                        e('body,html').animate({
                            scrollTop: 500
                        }, 600);
                    }
                }
                n.preventDefault();
            });
        },
       sidebarMapTagEvents: function() {
          	e('.sidebar-tag a:not(".clear"), .sidebar-tag label').click(function(n) {
                var currentTags = [];
                if (Shopify.queryParams.constraint) {
                    currentTags = Shopify.queryParams.constraint.split('+');
                }

                //one selection or multi selection
                if (!window.enable_sidebar_multiple_choice && !e(this).prev().is(":checked")) {
                    //remove other selection first
                    var otherTag = e(this).parents('.sidebar-tag').find("input:checked");
                    if (otherTag.length > 0) {
                        var tagName = otherTag.val();
                        if (tagName) {
                            var tagPos = currentTags.indexOf(tagName);
                            if (tagPos >= 0) {
                                //remove tag
                                currentTags.splice(tagPos, 1);
                            }
                        }
                    }
                }

                var tagName = e(this).prev().val();
                if (tagName) {
                    var tagPos = currentTags.indexOf(tagName);
                    if (tagPos >= 0) {
                        //tag already existed, remove tag
                        currentTags.splice(tagPos, 1);
                    } else {
                        //tag not existed
                        currentTags.push(tagName);
                    }
                }
                if (currentTags.length) {
                    Shopify.queryParams.constraint = currentTags.join('+');
                } else {
                    delete Shopify.queryParams.constraint;
                }
                t.sidebarAjaxClick();
                n.preventDefault();
            });
        },
       
        
      
        sidebarInitToggle: function() {
            if (e(".sidebar-tag").length > 0) {
                e(".sidebar-tag .widget span").click(function() {
                    var $title = e(this).parents('.widget');
                    if ($title.hasClass('click')) {
                        $title.removeClass('click');
                    } else {
                        $title.addClass('click');
                    }

                    e(this).parents(".sidebar-tag").find(".widget-content").slideToggle();
                });
            }
        },
       
       
        sidebarMapClearAll: function() {
            //clear all selection
            e('.refined-widgets a.clear-all').click(function(n) {
                delete Shopify.queryParams.constraint;
                delete Shopify.queryParams.q;
                t.sidebarAjaxClick();
                n.preventDefault();
            });
        },
        sidebarMapClear: function() {
            e(".sidebar-tag").each(function() {
                var sidebarTag = e(this);
                if (sidebarTag.find("input:checked").length > 0) {
                    //has active tag
                    sidebarTag.find(".clear").show().click(function(n) {                     
                        var currentTags = [];
                        if (Shopify.queryParams.constraint) {
                            currentTags = Shopify.queryParams.constraint.split('+');
                        }
                        sidebarTag.find("input:checked").each(function() {
                            var selectedTag = e(this);
                            var tagName = selectedTag.val();
                            if (tagName) {
                                var tagPos = currentTags.indexOf(tagName);
                                if (tagPos >= 0) {
                                    //remove tag
                                    currentTags.splice(tagPos, 1);
                                }
                            }
                        });
                        if (currentTags.length) {
                            Shopify.queryParams.constraint = currentTags.join('+');
                        } else {
                            delete Shopify.queryParams.constraint;
                        }
						t.sidebarAjaxClick();
                        n.preventDefault();
                    });
                }
            });
        },
        sidebarMapEvents: function() {
            t.sidebarMapTagEvents();
            t.sidebarMapView();     
          	t.sidebarMapShow();
            t.sidebarMapSorting();
        },
         reActivateSidebar: function() {
            e(".sidebar-tag .active").removeClass("active");
            e(".sidebar-tag input:checked").attr("checked", false);

           
//view mode and show filter
            if (Shopify.queryParams.view) {
                $(".view-mode .active").removeClass("active");
                var view = Shopify.queryParams.view;
                if (view.indexOf("list") >= 0) {
                    $(".view-mode .list").addClass("active");
                    //paging
                    view = view.replace("list", "");
                } else {
                    $(".view-mode .grid").addClass("active");
                }
                $(".filter-show > button span").text(view);
                $(".filter-show li.active").removeClass("active");
                $(".filter-show a[href='" + view + "']").parent().addClass("active");
            }
            t.initSortby();
        },
        sidebarMapData: function(data) {
            var currentList = e(".col-main .products-grid-view");
            if (currentList.length == 0) {
                currentList = e(".col-main .product-list-view");
            }
            var productList = e(data).find(".col-main .products-grid-view");
            if (productList.length == 0) {
                productList = e(data).find(".col-main .product-list-view");
            }           
            currentList.replaceWith(productList);
            //convert currency
            if (t.checkNeedToConvertCurrency()) {
                Currency.convertAll(window.shop_currency, jQuery('#currencies').val(), '.col-main span.money', 'money_format');
            }

            //replace refined
            e(".refined-widgets").replaceWith(e(data).find(".refined-widgets"));
            
            //replace tags
            e(".sidebar-block").replaceWith(e(data).find(".sidebar-block"));
                   
          //replace paging
            if (e(".padding").length > 0) {
                e(".padding").replaceWith(e(data).find(".padding"));
            } else {
                e(".grid-link__container.col-main").append(e(data).find(".padding"));
            }
          
           if ($(".spr-badge").length > 0) {
                return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges();
            }
        },
        sidebarCreateUrl: function(baseLink) {
            var newQuery = e.param(Shopify.queryParams).replace(/%2B/g, '+');
            if (baseLink) {
                //location.href = baseLink + "?" + newQuery;
                if (newQuery != "")
                    return baseLink + "?" + newQuery;
                else
                    return baseLink;
            }
            return location.pathname + "?" + newQuery;
        },
        sidebarAjaxClick: function(baseLink) {
            delete Shopify.queryParams.page;
            var newurl = t.sidebarCreateUrl(baseLink);
            t.isSidebarAjaxClick = true;
            History.pushState({
                param: Shopify.queryParams
            }, newurl, newurl);
            t.sidebarGetContent(newurl);
        },
        sidebarGetContent: function(newurl) {
            $.ajax({
                type: 'get',
                url: newurl,
                beforeSend: function() {
                    t.showLoading();
                },
                success: function(data) {
                    t.sidebarMapData(data);
                    t.sidebarMapTagEvents();
                    t.sidebarInitToggle();
                    t.sidebarMapClear();
                    t.sidebarMapClearAll();
                    t.hideLoading();
                    t.initQuickView();
                    t.initAddToCart();
                    t.initThumbchange();
                    t.initlightSlider()
                    t.initWishlist();
                    t.sidebarMapPaging();
                    t.initInfiniteScrolling();
                },
                error: function(xhr, text) {
                    t.hideLoading();
                    e('.loading-modal').hide();
                    e('.ajax-error-message').text($.parseJSON(xhr.responseText).description);
                    t.showModal('.ajax-error-modal');
                }
            });
        },
        sidebarParams: function() {
            Shopify.queryParams = {};
            //get after ?...=> Object {q: "Acme"} 
            if (location.search.length) {
                for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
                    aKeyValue = aCouples[i].split('=');
                    if (aKeyValue.length > 1) {
                        Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
                    }
                }
            }
        },
       initInfiniteScrolling: function() {
            e(".infinite-scrolling").length > 0 && e(".infinite-scrolling a").click(function(i) {
                i.preventDefault(), e(this).hasClass("disabled") || t.doInfiniteScrolling()
            })
        },
        doInfiniteScrolling: function() {
            var currentList = $('.col-main .products-grid-view');
            if (!currentList.length) {
                currentList = $('.col-main .product-list-view');
            }
            if (currentList) {
                var showMoreButton = $('.infinite-scrolling a').first();
                $.ajax({
                    type: 'GET',
                    url: showMoreButton.attr("href"),
                    beforeSend: function() {
                        t.showLoading();
                        $('.loading-modal').show();
                    },
                    success: function(data) {
                        t.hideLoading();
                        var products = $(data).find(".col-main .products-grid-view");
                        if (!products.length) {
                            products = $(data).find(".col-main .product-list-view");
                        }
                        if (products.length) {
                            currentList.append(products.children());
                            t.initQuickView();
                            t.initAddToCart();
                          t.initThumbchange();
                            t.initlightSlider();
                            t.initWishlist();
                            //get link of Show more
                            if ($(data).find('.infinite-scrolling').length > 0) {
                                showMoreButton.attr('href', $(data).find('.infinite-scrolling a').attr('href'));
                            } else {
                                //no more products
                                showMoreButton.hide();
                                showMoreButton.next().show();
                            }
                          
                          	//currency
                            if (window.show_multiple_currencies && window.shop_currency != jQuery("#currencies").val())
                            {
                                Currency.convertAll(window.shop_currency, jQuery("#currencies").val(), "span.money", "money_format")
                            }
                          
                            t.initColorSwatchGrid();
                          
                            //product review
                            if ($(".spr-badge").length > 0) {
                                return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges();
                            }
                        }
                    },
                    error: function(xhr, text) {
                        t.hideLoading();
                        $('.loading-modal').hide();
                        $('.ajax-error-message').text($.parseJSON(xhr.responseText).description);
                        t.showModal('.ajax-error-modal');
                    },
                    dataType: "html"
                });
            }
        },
      
      convert_currency: function(value) {            
      var newCurrency = Currency.currentCurrency;
      var oldCurrency = shopCurrency;
      if(isNaN(value)){
        value =  0.0;
      }

      var cents = 0.0;
      var oldFormat = Currency.moneyFormats['USD'][ Currency.format] || '';
                                            var newFormat = Currency.moneyFormats[newCurrency][Currency.format] || '';
                                            if (oldFormat.indexOf('amount_no_decimals') !== -1) {
                                              cents = Currency.convert(parseInt(value, 10)*100, oldCurrency, newCurrency);
                                            }
      else if (oldCurrency === 'JOD' || oldCurrency == 'KWD' || oldCurrency == 'BHD') {
        cents = Currency.convert(parseInt(value, 10)/10, oldCurrency, newCurrency);
      }
      else { 
        cents = Currency.convert(parseInt(value, 10), oldCurrency, newCurrency);
      }
      var my_data =  Currency.formatMoney(cents, newFormat);
      return my_data;
      
      
    },
  
  compare_to_table: function(data) {
  
      if (Object.keys(data).length <= 0) {
        return '';
      }
      var html = '';
      var i = 0;

      var end_check = (Object.keys(data).length - 1);
      var width_tr = (end_check > 0) ? (90 / (Object.keys(data).length)) : 90;
      var data_html = '';
      for (i = 0; i <= end_check; i++) {
        var el = data[i];
        var is_sale = false;
        if (el.compare_at_price > el.price) {
          is_sale = true
        }
        data_html = data_html + '<th class="item-row ' + el.handle + '"  id="product-' + el.id + '"><button type="button" class="close btn remove-compare center-block" aria-label="Close" data-handle="' + el.handle + '"> '+window.remove+ ' <i class="fa fa-times" aria-hidden="true"></i></button></th>';
        //Start title 
        if (i == 0) {
          html = html + '<tr>';
          html = html + '<th width="15%" class="product-name" >' + window.product_name + '</th>';
        }
        html = html + '<td width="' + width_tr + '%"  class="' + el.handle + ' grid-link__title"> ' + el.title + '  </td>';
        if (i >= end_check) {
          html = html + '</tr>';
        }
        // End Title 
      }
      for (i = 0; i <= end_check; i++) {
        var el = data[i];
        var is_sale = false;
        if (el.compare_at_price > el.price) {
          is_sale = true
        }
        if (i == 0) {
          html = html + '<tr>';
          html = html + '<th width="15%" class="product-name " >' + window.product_image +'</th>';

        }
        // start product image
        html = html + '<td width="' + width_tr + '%" class="item-row ' + el.handle + '" id="product-'+el.variants[0].id+'"> <img src="' + el.featured_image + '"  width="150" class="featured-image"/> ' + '<div class="product-price product_price"> ';
        if (is_sale) {
          html = html + '<strong>On Sale</strong>' + '<span class="price-sale"><span class="money" data-currency-'+Currency.currentCurrency+'="'+t.convert_currency(el.price,'11')+'">'+t.convert_currency(el.price,'11')+'</span></span>';
        } else {
          html = html + '<span class="price-sale"><span class="money" data-currency-'+Currency.currentCurrency+'="'+t.convert_currency(el.price,'11')+'">'+t.convert_currency(el.price,'11')+'</span></span>';
        }
        if (t.convert_currency(el.compare_at_price, 'nosymbol') > 0) {
          html = html + '<span class="visually-hidden">Regular price</span> <s>' + t.convert_currency(el.compare_at_price, '11') + '</s>';
        }
        html = html + '</div>';
        //convert_currency(el.price,'3');
        if (el.variants.length > 1) {          
            html = html + '<a class="btn" href="#" onclick="location.href=\'/products/' + el.handle + '\'">' + window.select_options + '</a>';
        } else {
          html = html + '<form  action="/cart/add" method="post" class="variants clearfix" id="cart-form-'  + el.variants[0].id  + '">';
          html = html + '<input type="hidden" name="id" value="' + el.variants[0].id +'" />';   
          html = html + '<a href="#" title="Add to Cart" data-pid="' + el.variants[0].id + '" class="add-to-cart btn">Add to Cart</a>';
          html = html + '</form>';
        }
        html = html + '<p   class="' + el.handle + ' grid-link__title hidden"> ' + el.title + '  </p>';
        
        html = html + ' </td>';

        if (i >= end_check) {
          html = html + '</tr>';
        }
        // End product image
      }
      for (i = 0; i <= end_check; i++) {
        var el = data[i];
        var is_sale = false;
        if (el.compare_at_price > el.price) {
          is_sale = true
        }
        if (i == 0) {
          html = html + '<tr>';
          html = html + '<th width="15%" class="product-name" >' + window.product_desc +'</th>';

        }        
        html = html + '<td width="' + width_tr + '%" class="' + el.handle + ' "> <p class="description-compare"> ' + el.description.replace(/(<([^>]+)>)/ig, "").split(" ").splice(0, 15).join(" ") + "..." + ' </p> </td>';
        if (i >= end_check) {
          html = html + '<tr>';
        }

      }
      for (i = 0; i <= end_check; i++) {
        var el = data[i];
        var is_sale = false;
        if (el.compare_at_price > el.price) {
          is_sale = true
        }
        if (i == 0) {
          html = html + '<tr>';
          html = html + '<th width="15%" class="product-name" > Availability  </th>';

        }

        var avai_stock = (el.available) ? window.available_stock : window.unavailable_stock;
        html = html + '<td   width="' + width_tr + '%" class="available-stock ' + el.handle + '"> <p> ' + avai_stock + ' </p> </td>';
        if (i >= end_check) {
          html = html + '<tr>';
        }

      }
      e(".th-compare").html('<td>Action</td>'+data_html);
      e("#table-compare").html(html);  
    
    
     e(document).on('click','.add-to-cart', function(event) {
                    event.preventDefault();
                    if (e(this).attr("disabled") != "disabled") {
                        var r = e(this).parents(".item-row");
                        var i = e(r).attr("id");
                        i = i.match(/\d+/g);
                        if (!window.ajax_cart) {
                            e("#cart-form-" + i).submit()
                        } else {
                            var s = e("#cart-form-" + i + " select[name=id]").val();
                            if (!s) {
                                s = e("#cart-form-" + i + " input[name=id]").val()
                            }
                            var o = e("#cart-form-" + i + " input[name=quantity]").val();
                            if (!o) {
                                o = 1
                            }
                           var a = e(r).find(".featured-image").attr("src");
                           var p = e(r).find(".grid-link__title").text();
                           var amt = e(r).find(".product_price span.money").text();                         
                            t.compareAjaxAddToCart(s, o, a, p, amt)
                             
                        }
                    }
                    return false
                    
    
    });
    
    
          
  },
 
              compareAjaxAddToCart: function(n, r, a, p, amt) {   
            e.ajax({
                type: "post",
                url: "/cart/add.js",
                data: "quantity=" + r + "&id=" + n,
                dataType: "json",
                beforeSend: function() {
                   e(".ajax-success-compare-modal").fadeOut(500);
                   t.showLoading()                    
                },
                success: function(n) {
                 
                    t.hideLoading();  
                    t.showModal(".ajax-success-modal");
                     e(".ajax-success-modal").find(".ajax-product-image").attr("src", a);
                     e(".ajax-success-modal").find(".added-to-wishlist").hide();
                     e(".ajax-success-modal").find(".added-to-cart").show();
                     e(".ajax-success-modal").find(".ajax-product-title").text(p);
                     e(".ajax-success-modal").find(".ajax_price").text(amt);
                     e(".ajax-success-modal").find(".ajax_qty").text(r);
                   // t.updateDropdownCart()
                },
                error: function(n, r) {
                    t.hideLoading();
                    e(".ajax-error-message").text(e.parseJSON(n.responseText).description);
                    t.showModal(".ajax-error-modal")
                }
            })
        },
      
  modal_compare: function(compare){
      if (!e.isEmptyObject(compare)) {
        // e(".error-compare").hide(20);
        var list_id = '';
        var json_compare = [];
        var check_end = 0;
        var compare_size = (Object.keys(compare).length - 1);
        e.each(compare, function(index, el) {
          var json_url = "/products/" + el + ".js";
          if (e.trim(el) != "") {
            jQuery.getJSON(json_url, function(product) {
              json_compare[check_end] = product;
              if (check_end >= compare_size) {
                t.compare_to_table(json_compare);
              }
              check_end += 1;
            });

          }

        });
        e("#moda-compare").fadeIn();       
      }

    },
 
       
  initCompare: function(){
  e(document).on('click','.compare', function(event) {
      event.preventDefault();
      t.showLoading();
      /* Act on the event */
      var ethis = e(this);
      var pid = e(this).data('pid');

      compare = storage.get('compare');

      if (e.isEmptyObject(compare)) {
        compare = {};
      }
      var check_compare = true;
      if (Object.keys(compare).length >= total_compare) {
        swal({
          title: "info",
          text: window.compare_note,
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#4cae4c",
          confirmButtonText: window.confirm_box,
          timer: 3000,
          cancelButtonText: window.cancelButtonText,
          closeOnConfirm: true
        });
         t.modal_compare(compare);            
        
      } else {
        for (var i = 1; i <= 8; i++) {
          if (compare['p' + i] == "" || compare['p' + i] == undefined) {
            compare['p' + i] = pid;
            break;
          } else if (compare['p' + i] == pid) {
            ethis.addClass('added');
            check_compare = false;
            t.modal_compare(compare);

            break;
          }
        }
        if (check_compare) {
          storage.set('compare', compare);
          t.modal_compare(compare);
          ethis.addClass('add-success');
          e("[data-pid='"+pid+"']").addClass('added');//.text(window.added_to_cmp);          
        }
      }
      t.hideLoading();
    });
  },

   
  initRemoveCompare: function(){
  e(document).on('click', '.remove-compare', function(event) {
      event.preventDefault();
      /* Act on the event */

      var id = e(this).data('handle');
      e("." + id).fadeOut(600).remove();
      e("[data-pid='"+id+"']").removeClass('added add-success');//.text(window.add_to_cmp);
      e.each(compare, function(index, el) {
        if (el == id) {
          compare[index] = "";
          delete compare[index];
        }
      });
      storage.set('compare', compare);
     
    });

    /** End compare */
    
  }
      
    }
    
    
    
    
})(jQuery)