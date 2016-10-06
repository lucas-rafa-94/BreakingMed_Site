$(function($){
  "use strict";

  var Welcome = {

    init: function() {

      this.bindVariables();
      this.bindEvents();
      Welcome.Events.modifyHeaderStyle();

      try {
        new WOW().init();
      } catch(e) {}

    },

    bindVariables: function() {

      this.hidden = true;
      this.isNavBarShown = false;
      this.root = $('html, body');
      this.nav = $('#welcome-nav');
      this.btnHeader = $('#welcome-nav').find('.btn-header');
      this.headerItems = $('#welcome-nav a.scrollTop');
/*      this.contactFormBtn = $('#contact-form .btn');*/
      this.faqLi = $("#questions-list ul>li");

    },

    bindEvents: function() {

      $(window).scroll(Welcome.Events.modifyHeaderStyle);

      this.headerItems.on('click', Welcome.Events.scrollTop);
/*      this.contactFormBtn.on('click', Welcome.Events.showAjaxLoader);*/
      this.faqLi.on('click', Welcome.Events.showFaqContent);

    },

    Events: {

      showFaqContent: function() {

        $(this).find('ol').slideToggle();

      },

      modifyHeaderStyle: function() {
        if ($(this).scrollTop() <= 320 && Welcome.isNavBarShown) {
          Welcome.hidden = true;
          Welcome.btnHeader.addClass('hidden');
          Welcome.nav.removeClass('navbar-fixed-top').addClass('navbar-static-top');
          Welcome.isNavBarShown = false;
        }

        if ($(this).scrollTop() > 320 && !Welcome.isNavBarShown) {
          Welcome.hidden = false;
          Welcome.btnHeader.removeClass('hidden');
          Welcome.nav.removeClass('navbar-static-top').addClass('navbar-fixed-top');
          Welcome.isNavBarShown = true;
        }
      },

/*      showAjaxLoader: function(e) {
        e.preventDefault();
        $("#contact-form .ajax-mask").show();
        $("#contact-form form").submit();
      },*/

      scrollTop: function(e) {

        e.preventDefault();
        var target = $(this).attr('href');
        Welcome.root.animate({
            scrollTop: $(target).offset().top - 40
        }, 'slow', function(){
          return false;
        });

      }
    }
  }

  Welcome.init();

});


