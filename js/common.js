 $(document).ready(function() {
     
     $('.responsive').slick({
              mobileFirst: true,
              infinite: false,
                dots: true,
                arrows: false,
                variableWidth: true,
                responsive: [
                {
                    breakpoint: 768,
                    settings: 'unslick'
                }
                ]
            });
            

            
        $('.menu__mobile').click(function(){
            $('.hidden').show();
        });
        $('.menu__mobile_close').click(function(e){
            $('.hidden').hide();
                return false;
        });
        });