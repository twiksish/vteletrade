(function($) {
    $(function() {
        /*
        Carousel initialization
        */
        $('.jcarousel')
            .jcarousel({
                // Options go here
                'wrap': 'circular'
            });

        $('.jcarousel__arrow-left').jcarouselControl({
            target: '-=1'
        });

        $('.jcarousel__arrow-right').jcarouselControl({
            target: '+=1'
        });

    });
})(jQuery);
