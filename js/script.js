//ドロップダウンメニュー
$(function(){
    $('.sub-menu').hide();
    $('.main-menu').hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
            $(this).addClass('open');
        },
        function(){
            $(this).children('.sub-menu').hide();
            $(this).removeClass('open');
        }
    );
});
//ドロップダウンメニュー

//ハンバーガメニュー
$(function burger_menu(){
    $('.c-button__burger').off('click');
    $('.c-button__burger').on('click',function(){
        $('.c-button__burger').toggleClass('close');
        $('.menu-list').toggleClass('open');
    });
});

//リサイズ時に読み込み
$(window).resize(function(){
    $('.c-button__burger').removeClass('close');
    $('.menu-list').removeClass('open');
});