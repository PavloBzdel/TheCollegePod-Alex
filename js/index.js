(function(){

    // 
    $(document).ready(
        function() {
            let  old;
            $("#content__card__first").hover(
                function() {
                    old = $("#content__card__title__first").css("color");
                    $("#content__card__title__first").css("color","red");
                    $("#content__card__title__first").css("font-weight","600");
                },
                function() {
                    $("#content__card__title__first").css("color",old);
                    $("#content__card__title__first").css("font-weight", "400");
                    
                }
            );
        }
    );
    $(document).ready(
        function() {
            let  old;
            $("#content__card__second").hover(
                function() {
                    old = $("#content__card__title__second").css("color");
                    $("#content__card__title__second").css("color","red");
                    $("#content__card__title__second").css("font-weight","600");
                },
                function() {
                    $("#content__card__title__second").css("color",old);
                    $("#content__card__title__second").css("font-weight", "400");
                    
                }
            );
        }
    );
    $(document).ready(
        function() {
            let  old;
            $("#content__card__third").hover(
                function() {
                    old = $("#content__card__title__third").css("color");
                    $("#content__card__title__third").css("color","red");
                    $("#content__card__title__third").css("font-weight","600");
                },
                function() {
                    $("#content__card__title__third").css("color",old);
                    $("#content__card__title__third").css("font-weight", "400");
                    
                }
            );
        }
    );
    $(document).ready(
        function() {
            let  old;
            $("#content__card__four").hover(
                function() {
                    old = $("#content__card__title__four").css("color");
                    $("#content__card__title__four").css("color","red");
                    $("#content__card__title__four").css("font-weight","600");
                },
                function() {
                    $("#content__card__title__four").css("color",old);
                    $("#content__card__title__four").css("font-weight", "400");
                    
                }
            );
        }
    );
    // popup
    
    $(".link").on("click",
    function(){
        $(".popup__overlay, .popup__content").first().show("fast").addClass("active");
    });

    $(".btn__close").on("click", function(){
        $(".popup__overlay, .popup__content").hide(1500).removeClass("active");
    })
    $(".btn__join").hover(function(){
        $(".btn__join").css("transform", "rotate(20deg)");
        $(".btn__join").css("opacity", "0.9");
    },
    function(){
        $(".btn__join").css("transform", "rotate(0deg)");
        $(".btn__join").css("opacity", "1");
    })

    
    
    
})()