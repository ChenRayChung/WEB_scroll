$("a").each(function (index, element) {
    console.log("編號" +index);
    var target=$(this).attr("data-st-target");
    var duration=$(this).attr("data-duration");
    console.log("目標" +target );
    console.log("時間"+duration);


    var offset = $("#" +target).offset();
    var top = offset.top;
    console.log("上方資訊" +top);
    $(this).click(function (e) { 
        e.preventDefault();
        
        // parseInt() 將文字轉為數字
        // stop() 停止當前所有動畫
        $("html").stop().animate({
            scrollTop: top
        }, parseInt(duration));
        console.log(123);
    });
})
var arrow=$("#arrow")
arrow.fadeOut();   
// 使用者在用滑鼠滾動時 停止動畫
$("html").on("mousewheel", function () {
    $("html").stop();
 
    
    
});
// 箭頭顯示與隱藏效果
$(window).scroll(function () { 
    var windowTop = $(this).scrollTop();
    console.log(windowTop);
    var arrowTop =arrow.attr("data-top");
    var arrowTime =arrow.attr("data-time");
    var arrowTimeInt = parseInt(arrowTime);     
    console.log("箭頭出現位置"+arrowTop);
    console.log("箭頭出現時間"+arrowTime);
  
    // 如果 視窗位置 大於等於 箭頭上方 就 淡入
    if (windowTop >= arrowTop) arrow.fadeIn(arrowTimeInt);
    // 否則 就 淡出
    else arrow.fadeOut(arrowTimeInt)

})
