$('#slick-views-testimonials-block-1-1').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(this).find('.slick-slide-num').html('<span class="slick-slide-num-current">' + i + '</span> / ' + slick.slideCount);
});

$('#slick-views-testimonials-block-1-1-slider').slick({
    adaptiveHeight:true,
    centerMode:false,
    fade:true,
    arrows: true,
    prevArrow: $('slprev'),
    nextArrow: $('slnext')
});

$('.slprev').on('click', function() {
    $('#slick-views-testimonials-block-1-1-slider').slick('slickPrev');
});
$('.slnext').on('click', function() {
    $('#slick-views-testimonials-block-1-1-slider').slick('slickNext');
  });
$('#slick-views-our-clients-block-1-2-slider').slick({
    mobileFirst :false, 
    autoplay :true,
    infinite: true,
    pauseOnHover :false,
    arrows:false,
    slidesToShow:5,
    centerMode: true,
    centerPadding: '10%',
    autoplaySpeed: 2000,
    responsive:[{
        breakpoint:1024,settings:
        {
            autoplay:true,
            pauseOnHover:false,
            arrows:false,
            slidesToShow:3,
            waitForAnimate:false
        }
    },
    {
        breakpoint:600,settings:
        {
            autoplay:true,
            pauseOnHover:false,
            arrows:false,
            slidesToShow:2,
            waitForAnimate:false
        }
    }]
});

$('#slick-views-our-clients-attachment-1-3-slider').slick({
    mobileFirst:false,
    autoplay:true,
    infinite: true,
    pauseOnHover:false,
    arrows:false,
    slidesToShow:5,
    centerMode: true,
    centerPadding: '10%',
    responsive:[{
        breakpoint:1024,
        settings:{
            autoplay:true,
            pauseOnHover:false,
            arrows:false,
            slidesToShow:3,
            waitForAnimate:false}},
        {
        breakpoint:600,
        settings:{
            autoplay:true,
            pauseOnHover:false,
            arrows:false,
            slidesToShow:2,
            waitForAnimate:false
        }
        }]
});