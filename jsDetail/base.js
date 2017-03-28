/**
 * Created by Administrator on 2016/12/24.
 */
$(function () {
    partner();
    $$.myAjax('data/data.json', function (e) {
        var json = JSON.parse(e);

        //轮播图
        var slide_imgs = json.slide;
        getData(slide_imgs, Slide);

        //精选歌单
        var selectSong = json.selectSongList;
        getData(selectSong, SelectSong);

        //热门榜单
        var hotSong = json.hotSongList;
        getData(hotSong, HotSong);

        //热门电台
        var hotAudio = json.hotAudio;
        getData(hotAudio, Audio);

        //热门歌手
        var hotSinger = json.hotSinger;

        //友情链接
        var friendLink = json.friendLink;
        getData(friendLink, FriendLink);

        //合作伙伴
        // var partner = json.partner;
        //getData(partner,Partner);

        //获得数据
        function getData(target, obj) {
            var targetLength = target.length;
            for (var i = 0; i < targetLength; i++) {
                new obj(target[i], i);
            }
        }
    })


});

//合作伙伴
function partner() {
    var json = [
        {"image": "images/partner01.jpg"},
        {"image": "images/partner02.jpg"},
        {"image": "images/partner03.jpg"},
        {"image": "images/partner04.jpg"},
        {"image": "images/partner05.jpg"},
        {"image": "images/partner06.jpg"},
        {"image": "images/partner07.jpg"},
        {"image": "images/partner08.jpg"},
        {"image": "images/partner09.jpg"},
        {"image": "images/partner10.jpg"},
        {"image": "images/partner11.jpg"},
        {"image": "images/partner12.jpg"},
        {"image": "images/partner13.jpg"},
        {"image": "images/partner14.jpg"},
        {"image": "images/partner15.jpg"},
        {"image": "images/partner16.jpg"},
        {"image": "images/partner17.jpg"},
        {"image": "images/partner18.jpg"},
        {"image": "images/partner19.jpg"},
        {"image": "images/partner20.jpg"},
        {"image": "images/partner21.jpg"}
    ];
    for (var i = 0; i < json.length; i++) {
        new Partner(json[i], i);
    }
}