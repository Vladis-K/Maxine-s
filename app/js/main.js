jQuery(document).ready(function() {

    appearance();

    //Even Hover on Page Maxine's world pictures
    $(document).on("mouseenter", ('.mx-one-half-with-content'), (function (e) {
            e.preventDefault();
            $(this).find('.mx-one-half__content-blur').removeClass('info-hidden');

        })
    );
    $(document).on("mouseleave", ('.mx-one-half-with-content'), (function (e) {
            e.preventDefault();
            $(this).find('.mx-one-half__content-blur').addClass('info-hidden');
        })
    );

    //Event Hover on Blog page SHOP THE LOOKS Block
    $(document).on("mouseenter", ('.post-content__product'), (function (e) {
            e.preventDefault();
            $(this).find('.post-content-info').removeClass('info-hidden').delay(500).fadeIn();
        })
    );
    $(document).on("mouseleave", ('.post-content__product'), (function (e) {
            e.preventDefault();
            $(this).find('.post-content-info').addClass('info-hidden');
        })
    );


    //Event Hover on Blog page Related Block
    $(document).on("mouseenter", ('.post-content__related_post'), (function (e) {
        e.preventDefault();
            $(this).find('.post-content-blur').removeClass('info-hidden').delay(500).fadeIn();

        })
    );
    $(document).on("mouseleave", ('.post-content__related_post'), (function (e) {
        e.preventDefault();
            $(this).find('.post-content-blur').addClass('info-hidden');

        })
    );


    //Intervel of slides (in ms)
    $('.carousel').carousel({
        interval: 3600
    });

    //Swipe on mobile
    $(".carousel-inner")
        .on("swipeleft", function(e){
            e.preventDefault();
        $(this).carousel('next').show();})
        .on("swiperight", function(e){
            e.preventDefault();
        $(this).carousel('prev').show();});


});

//Smooth appearance
$(window).scroll( appearance );

function appearance() {
    $(".appearance").each(function(){
        var positionElements = $(this).offset().top;
        var windowTop = $(window).scrollTop();
        if (positionElements <= windowTop + 800) {
            $(this).addClass("slide").delay(700);
        }
    });
}
