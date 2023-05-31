$( document ).ready(function() {

  // $('.modal .btn-block').on('click touchstart', function (e){
  //   e.preventDefault();
  //   var idItem = $(this).parents('.modal').attr('id');
  //   if($('*').is(".item#"+idItem)) {
  //     $(".item#"+idItem).fadeOut();
  //   }
  //   $('.modal').fadeOut();
  // });

  $('.sound-btn').on('click touchstart', function (e){
    e.preventDefault();
    $(this).toggleClass('active-off');
  });
  $('.currency-box > button').on('click touchstart', function (e){
    e.preventDefault();
    $(this).parents('.currency-box').find('.currency-list').fadeToggle();
    $(this).parents('.currency-box').toggleClass('active');
  });
  $(document).mouseup( function(e){
    e.preventDefault();
    var currencyDropActive = $('.currency-box.active > button, .currency-box.active');
    var currencyDrop = $('.currency-box.active').find( ".currency-list" );
    if ( !currencyDrop.is(e.target) && currencyDropActive.has(e.target).length === 0
      && currencyDrop.has(e.target).length === 0
      && currencyDrop.css('display') === 'block' ) {
      currencyDrop.fadeToggle();
      $('.currency-box.active').toggleClass('active');
    }
  });
  $('.drop-lang > a').on('click touchstart', function (e){
    e.preventDefault();
    $(this).parents('.drop-lang').find('.lang-list').fadeToggle();
    $(this).parents('.drop-lang').toggleClass('active');
  });
  $(document).mouseup( function(e){
    e.preventDefault();
    var langDropActive = $('.drop-lang.active > a, .drop-lang.active');
    var langDrop = $('.drop-lang.active').find( ".lang-list" );
    if ( !langDrop.is(e.target) && langDropActive.has(e.target).length === 0
      && langDrop.has(e.target).length === 0
      && langDrop.css('display') === 'block' ) {
      langDrop.fadeToggle();
      $('.drop-lang.active').toggleClass('active');
    }
  });
  $('.drop > a').on('click touchstart', function (e){
    e.preventDefault();
    $(this).parents('.drop').find('.drop-menu').fadeToggle();
    $(this).parents('.drop').toggleClass('active');
  });
  $(document).mouseup( function(e){
    e.preventDefault();
    var parentDrop = $('.drop.active > a, .drop.active');
    var Drop = $('.active').find( ".drop-menu" );
    if ( !Drop.is(e.target) && parentDrop.has(e.target).length === 0
      && Drop.has(e.target).length === 0
      && Drop.css('display') === 'block' ) {
      Drop.fadeToggle();
      $('.drop.active').toggleClass('active');
    }
  });

  $('.btn-burger').on('click touchstart', function (e){
    e.preventDefault();
    $('.nav-box').addClass('active');
    $(this).addClass('active');
    $('body').addClass('holder').append('<div class="shadow"></div>');
  });
  $('.nav-box .close, .shadow').on('click touchstart', function (e){
    e.preventDefault();
    $('.btn-burger').removeClass('active');
    $('.nav-box').removeClass('active');
    $('body').removeClass('holder');
    $('.shadow').remove();
  });
  $(document).mouseup( function(e){
    e.preventDefault();
    var Nav = $('.nav-box');
    if ( Nav.hasClass('active') && !Nav.is(e.target)
      && Nav.has(e.target).length === 0 ) {
      $('.btn-burger').removeClass('active');
      $('.nav-box').removeClass('active');
      $('body').removeClass('holder');
      $('.shadow').remove();
    }
  });

  $('.profile').on('click touchstart', function (e){
    e.preventDefault();
    $('.profile-drop').fadeToggle();
    $(this).toggleClass('active');
  });
  $(document).mouseup( function(e){
    e.preventDefault();
    var btnProfile = $('.profile.active');
    var DropProfile = $('.profile-drop');
    if ( !DropProfile.is(e.target) && btnProfile.has(e.target).length === 0
      && DropProfile.has(e.target).length === 0
      && DropProfile.css('display') === 'block' ) {
      DropProfile.fadeToggle();
      btnProfile.toggleClass('active');
    }
  });

  function initSliders() {
    if($('.slider-operations').length > 0 && $('.slider-operations').parents('.tab-content').hasClass('active')) {
      $('.slider-operations:not(.slick-initialized)').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 3,
        prevArrow: '<button type="button" class="slick-prev btn btn-nav"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M8 14.9263L1.03683 7.9631L8 0.999928" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>\n</button>',
        nextArrow: '<button type="button" class="slick-next btn btn-nav"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M1 1.07373L7.96317 8.0369L1 15.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>\n</button>',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              rows: 3,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              rows: 3,
            }
          },
          {
            breakpoint: 710,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              rows: 3,
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              rows: 3,
            }
          }
        ]
      });
    }
    if($('.slider-sale').length > 0 && $('.slider-sale').parents('.tab-content').hasClass('active')) {
      $('.slider-sale:not(.slick-initialized)').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev btn btn-nav"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M8 14.9263L1.03683 7.9631L8 0.999928" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>\n</button>',
        nextArrow: '<button type="button" class="slick-next btn btn-nav"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M1 1.07373L7.96317 8.0369L1 15.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>\n</button>',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    }

    if($('.users-list').length > 0 && $('.users-list').parents('.tab-content').hasClass('active')) {
      console.log('user');
      $('.users-list:not(.slick-initialized)').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev btn btn-nav"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M8 14.9263L1.03683 7.9631L8 0.999928" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>\n</button>',
        nextArrow: '<button type="button" class="slick-next btn btn-nav"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M1 1.07373L7.96317 8.0369L1 15.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>\n</button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 870,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      });
    }
    if($('.party-game').length > 0 && $('.party-game').parents('.tab-content').hasClass('active')) {
      $('.party-game:not(.slick-initialized)').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 100,
        easing:'line',
        fade: false,
        slidesToShow: 9,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
          {
            breakpoint: 870,
            settings: {
              slidesToShow: 7,
            }
          },
          {
            breakpoint: 710,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 490,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      });
    }
  }
  initSliders();
  $('.tab-nav .item').on('click touchstart', function (e){
    e.preventDefault();
    if(!$(this).hasClass('active')) {
      $('.tab-nav .item').removeClass('active');
      $('.tabs-container .tab-content').removeClass('active');
      var tab = $(this).data('tab');
      $(this).addClass('active');
      $('.tabs-container .tab-content').each(function(i){
        var contentTab = $(this).data('tab');
        if(contentTab == tab) {
          $(this).addClass('active');
          initSliders();
        }
      });
    }
  });

  $('.select-box .check').on('click touchstart', function (e){
    e.preventDefault();
    $(this).parents('.select-box').find('.drop').fadeToggle();
    $(this).parents('.select-box').toggleClass('open');
  });
  $(document).mouseup( function(e){
    e.preventDefault();
    var parentSelect = $('.select-box .check');
    var selectDrop = $('.chat-box .select-box.open').find( ".drop" );
    if ( !selectDrop.is(e.target) && parentSelect.has(e.target).length === 0
      && selectDrop.has(e.target).length === 0
      && selectDrop.css('display') === 'block' ) {
      selectDrop.fadeToggle();
      selectDrop.parents('.select-box').toggleClass('open');
    }
  });
  $('.btn-chat').on('click touchstart', function (e){
    e.preventDefault();
    $('.chat-box').toggleClass('active');
    $(this).toggleClass('hide');
  });
  $('.chat-box .hide').on('click touchstart', function (e){
    e.preventDefault();
    $('.btn-chat').toggleClass('hide');
    $('.chat-box').toggleClass('active');
  });
  $('.message-list').scrollbar();
  if($('.banner').length > 0) {
    $('.banner:not(.slick-initialized)').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev btn btn-nav"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M8 14.9263L1.03683 7.9631L8 0.999928" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
      nextArrow: '<button type="button" class="slick-next btn btn-nav"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1 1.07373L7.96317 8.0369L1 15.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>'
    });
  }

  $('.btn-buy-popup').on('click touchstart', function (e){
    e.preventDefault();
    $('#modalContribute').modal('hide');
    $('#modalBuy').modal('show');
    setTimeout(function () {
        $('body').addClass('modal-open').css('padding-right', '15px');
      },800);

    if($('#modalBuy').has('show')) {
      $('#modalBuy .items-slider:not(.slick-initialized)').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 3,
        prevArrow: '<button type="button" class="slick-prev btn btn-nav"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M8 14.9263L1.03683 7.9631L8 0.999928" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>\n</button>',
        nextArrow: '<button type="button" class="slick-next btn btn-nav"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M1 1.07373L7.96317 8.0369L1 15.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>\n</button>',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              rows: 3,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              rows: 3,
            }
          },
          {
            breakpoint: 710,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              rows: 3,
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              rows: 3,
            }
          }
        ]
      });
    }
  });
  $('.items-slider .item').on('click touchstart', function (e){
    $(this).toggleClass('active');
  });
  $('.btn-user').on('click touchstart', function (e){
    $('#modalUser').modal('show');
  });

  if($('*').is('.tab-nav')) {
    var items = $('.tab-nav > .item').length;
    $('.tab-nav').find('.item').css('width', 'calc((100% - '+ (items - 1) +'px) / '+items+')')
  }

  $('.tab-nav-wallet .item').on('click touchstart', function (e){
    e.preventDefault();
    if(!$(this).hasClass('active')) {
      $('.tab-nav-wallet .item').removeClass('active');
      $('.tab-content-wallet').removeClass('active');
      var tabWallet = $(this).data('tab');
      $(this).addClass('active');
      $('.tab-content-wallet').each(function(i){
        if($(this).data('tab') == tabWallet) {
          $(this).addClass('active');
        }
      });

    }
  });

  $('.payment-system .item').on('click touchstart', function (e){
    e.preventDefault();
    $('.payment-system .item').removeClass('active');
    $(this).addClass('active');
  });

  $('.btn-copy').on('click touchstart', function(e) {
    e.preventDefault();
    if(!$(this).hasClass('copied')) {
      $(this).parent('.input-control').find('input').select();
      document.execCommand("copy");
      $(this).attr('disable', true).append('<span>Тест скопирован!</span>');
      $(this).addClass('copied');
      setTimeout(function () {
        if($('.copied').length) {
          $('.copied').attr('disable', false).find('span').remove();
          console.log('out');
        }
      }, 2000);
    }
  });

  $('.btn-drop').on('click touchstart', function(e) {
    e.preventDefault();
    var target = $(this).data('target'),
        textClose = $(this).data('text-hide'),
        textOpen = $(this).data('text-show'),
        $this = $(this);
    $(this).toggleClass('active');
    $('div').each(function(i){
      if($(this).data('open') == target) {
        $(this).slideToggle();
      }
    });
    if(textClose.length && textOpen.length) {
      if($(this).hasClass('active')) {
        $this.html(textClose);
      } else {
        $this.html(textOpen);
      }
    }
  });

  if($('.operations-history').length) {
    $('.operations-history .item').each(function(i){
      var name = $(this).data('name');
      $(this).prepend('<span class="name">'+name+'</span>');

    });
  }


  $('.btnAddGame').on('click touchstart', function (e){
    e.preventDefault();
    // $('#modalContribute').modal('hide');
    // $('#modalBuy').modal('show');
    setTimeout(function () {
      //$('body').addClass('modal-open').css('padding-right', '15px');
    if($('#modalAddGame .slider-add-item').length > 0) {
      $('#modalAddGame .slider-add-item:not(.slick-initialized)').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 3,
        prevArrow: '<button type="button" class="slick-prev btn btn-nav"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M8 14.9263L1.03683 7.9631L8 0.999928" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>\n</button>',
        nextArrow: '<button type="button" class="slick-next btn btn-nav"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M1 1.07373L7.96317 8.0369L1 15.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>\n</button>',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              rows: 3,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              rows: 3,
            }
          },
          {
            breakpoint: 710,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              rows: 3,
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              rows: 3,
            }
          }
        ]
      });
    }},10);
  });

  // $('.statistics-holder').scrollbar({});
  // $('.tab-nav-holder').not('.scroll-wrapper').scrollbar({});

  // $("#usersCarousel").html("").css({
  //   transition: "none",
  //   transform: "translate3d(0px,0px,0px)"
  // })
  // $(".party-game").html(e.html).css({
  //   transition: "13000ms cubic-bezier(0.32, 0.64, 0.45, 1) " + t + "ms",
  //   transform: "translate3d(-" + e.pos + "px,0px,0px)"
  // })
});