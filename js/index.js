$(function(){
	//档浏览器窗口改变的时候相片部分宽度也要改变
    $(window).resize(function(){
    var dw=$('.banner-container').width();
    var xw=$('.banner-container-right').width();
    var w=dw-xw-1;
    $('.banner-container-left').width(w);
    $('.xianpian').height($('.xianpian').width()*1.2);	
    $('.work').height($('.work').width());
    });
    $(window).triggerHandler('resize');
    $('.work').hover(function(){    	
         $(this).find('.shadow').addClass('play');
         $(this).find('.shadow .bor').addClass('play');
    },function(){
         $(this).find($('.shadow')).removeClass('play');
         $(this).find('.shadow .bor').removeClass('play');
    })

    
    // $('.skill-left').width($('.skill-left').prev().text());
    $('.skill-left').each(function(i,v){
        $(this).width($(this).prev().text());
    })
})