// define plugin
$.fn.carousel = function (options) {

    // Do for each carousel in the page
    this.each(function(index, instance) {

        var list = $(instance).find('.carousel__list');
        var items = $(list).find('.carousel__item');
        var itemWidth = items.outerWidth(true);
        var itemsLength = items.length;
        var currentSlideIndex = 0;

        // handle click on conntrolls
        $(instance)
            .children('.carousel__control')
            .on('click', function () {
                // get direction
                var direction = $(instance).hasClass('carousel__control_direction_next');

                console.log(currentSlideIndex);
                // NEXT
                if (direction === 'next') {

                    if(currentSlideIndex > 0) {
                        $(list).css({
                            left: (parseInt(list.css('left'), 10) + itemWidth) + 'px'
                        });
                        --currentSlideIndex;
                    }

                // PREV
                } else {

                    if(currentSlideIndex < (itemsLength - 3)) {
                        $(list).css({
                            left: (parseInt(list.css('left'), 10) - itemWidth) + 'px'
                        });
                        ++currentSlideIndex;

                    } else {
                        // turn to start
                        $(list).css({
                            left: '0'
                        });
                        currentSlideIndex = 0;
                    }
                }
            });

    });
};
