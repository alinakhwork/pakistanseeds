/* modal order*/
$(".order_zakaz").click(function () {
    $(".modal_form").css("display", "flex");
})
$(".close_modal").click(function () {
    $(".modal_form").css("display", "none");
})
/* slider comment*/
var swiper = new Swiper('.swiper-container-comment', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    nextButton: '.left_slider',
    prevButton: '.right_slider',
    breakpoints: {
        991: {
            slidesPerView: 2
        },
    }
});

/* анимации */
$(".anim_top").animated("fadeInUp")
$(".anim_down").animated("fadeInDown")
$(".anim_left").animated("fadeInLeft");
$(".anim_right").animated("fadeInRight")
$(".text_anime").animated("rubberBand")
/* categories menu*/
$(".btn_cat").click(function () {
    $(".categories_list").slideToggle(350);
    $(".btn_cat").toggleClass("btn_cat_rotate");
})
/* tab categori*/
var sliderIndex = 1;

$(".pag_block").click(function () {
    sliderIndex = $(this).index();
    $(".categories_tab").css("display", "none");
    $(".categories_tab").eq(sliderIndex - 1).css("display", "block");
    $(".pag_block").removeClass("active_tab");
    $(this).addClass("active_tab")
})
function showSlider(n) {
    nextSlider(sliderIndex += n)
}
function nextSlider(n) {
    var slider = $(".categories_tab");
    if (n > slider.length) {
        sliderIndex = 1
    }
    if (n < 1) {
        sliderIndex = slider.length;
    }
    $(".categories_tab").css("display", "none");
    slider[sliderIndex - 1].style.display = "block";
    $(".pag_block").removeClass("active_tab");
    $(".pag_block").eq(sliderIndex - 1).addClass("active_tab")
    
}
/* tab categori_2*/
var sliderIndex_2 = 1;

$(".pag_block_2").click(function () {
    sliderIndex_2 = $(this).index();
    $(".tab-new").css("display", "none");
    $(".tab-new").eq(sliderIndex_2 - 1).css("display", "block");
    $(".pag_block_2").removeClass("active_tab_2");
    $(this).addClass("active_tab_2")
})
function showSlider_2(n) {
    nextSlider_2(sliderIndex_2 += n)
}
function nextSlider_2(n) {
    var slider = $(".tab-new");
    if (n > slider.length) {
        sliderIndex_2 = 1
    }
    if (n < 1) {
        sliderIndex_2 = slider.length;
    }
    $(".tab-new").css("display", "none");
    slider[sliderIndex_2 - 1].style.display = "block";
    $(".pag_block_2").removeClass("active_tab_2");
    $(".pag_block_2").eq(sliderIndex_2 - 1).addClass("active_tab_2")

}

/* close backet*/

$(".close_block_basket").click(function () {
    $(this).parents(".basket_goods").css("display", "none");
})
/* + 1 */
$(".plus_sum").click(function () {
    $(this).prev().text(parseInt($(this).prev("div").text()) + 1)
})
$(".minus_sum").click(function () {
    var count_minus = $(this).prevAll(".quantity_sum").text();
    if (count_minus != 0) {
        count_minus--;
        $(this).prevAll(".quantity_sum").text(count_minus)
    }

})
var swiper = new Swiper('.sas', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    nextButton: '.l',
    prevButton: '.r',
    breakpoints: {
        991: {
            slidesPerView: 3
        },
    }
});
