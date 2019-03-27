$(document).ready(function(){

    $("#accordion").on("click", "h4", function(){
        $(".content").removeClass('show')
        var content = $(this).siblings(".content")
        if(!content.hasClass('show')){
            content.addClass('show')
        }else {
            content.removeClass('show')
        }
    })
})





