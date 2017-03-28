/**
 * Created by Administrator on 2016/12/11.
 */
window.onload = function(){
    //下拉菜单
    dropDown();
    //轮播图
    slide();
    //新歌首发下面的tab栏
    $("#tabBox").slide();
    //新歌首发下面的播放按钮
    playBtnHover();
    //遮盖效果
    coverHover();
    //热门歌手双tab栏效果
    doubleTab();
    //去电热门电台最右边的两个的右边距
    $('.hotAudioList ul li').eq(4).addClass("last");
    $('.hotAudioList ul li').eq(9).addClass("last");
};

function dropDown() {
    $('.navMain .leftNav .more').mouseenter(function () {
        $('.dropDown').show();
    }).mouseleave(function () {
        $('.dropDown').hide();
    })
}

function slide() {
    $("#slideBox").slide(
        {
            titCell: ".hd ul",
            mainCell: ".bd ul",
            autoPage: "<li><a></a></li>",
            autoPlay: true,
            effect:"fold"
        }
    );
    /*小圆点居中显示*/
    var liMarginRight = 8;
    var imgsLen = $("#slideBox .bd li").length; //图片个数
    var ulWidth = ($('#slideBox .hd li:first-child').width() + liMarginRight) * imgsLen;
    $('#slideBox .hd ul').css({
        width: ulWidth
    });

    //轮播图左右按钮显示
    $("#slideBox:not('.downloadBox')").mouseenter(function(){
        $(".prev,.next").show();
    }).mouseleave(function(){
        $(".prev,.next").hide();
    });
}

function playBtnHover() {
    $(".tabBox .bd li").mouseenter(function () {
        $(this).find('.icon-play').show();
    }).mouseleave(function () {
        $(this).find('.icon-play').hide();
    })
}

function coverHover(){
    $(".itemList,.pic").mouseenter(function(){
        $(this).find('.cover').show();
    }).mouseleave(function(){
        $(this).find('.cover').hide();
    });
    $(".itemList").hover(function(){
        $(this).find('.des,.songName').toggleClass('color')
    })
}

function doubleTab(){
    $(".inBox").slide({titCell: ".inHd li", mainCell: ".inBd"});
    $(".outBox").slide({effect: "fade"});

    $('.hotSinger .itemTitle li').eq(0).addClass('color');
    $('.hotSinger .itemTitle li').mouseenter(function(){
        $(this).addClass('color').siblings().removeClass('color');
    })
}