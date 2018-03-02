$(document).ready(function () {

    $("nav li a").addClass("text-secondary");
    
    $(".form-group label").hide();

    $("nav li a").hover(function () {
        $(this).addClass("text-dark");
        if(!($(this).parent().hasClass("active"))){
            $(this).addClass("boldNavItem");
        }
    },
        function () {
            $(this).removeClass("text-dark, boldNavItem");
        });

        $(".navbar li").click(function(){
        $(".navbar li").removeClass("active");
        $(this).addClass("active");
        $(this).children().removeClass("boldNavItem");
        });

        $("input, textarea").keyup(function(){
            var label = $('label[for="'+$(this).attr('id')+'"]');
            $(label).show();

            if ($(this).val() == "")
            {
                var label = $('label[for="'+$(this).attr('id')+'"]');
                $(label).hide(); 
            }
        });
        

});