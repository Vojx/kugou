/**
 * Created by Administrator on 2016/12/31.
 */
function SelectSong(data,index){
    this.data = data;
    this.index = index;
    this.config = {
        jqPic:$(".selectSongList .pic")
    };
    this.init()
}
SelectSong.prototype = {
    init:function(){
        this.bindDom();
        this.bindEvent();
    },
    bindDom:function(){
        var str = '';
        str += '<img src="{{image}}" alt=""/>';
        str += '<p class="picTop">';
            str += '<span class="icon-hear"></span>';
            str += '<span class="num">{{num}}</span>';
        str += '</p>';
        str += '<p class="picBottom">';
            str += '<span class="songName">{{songName}}</span>';
            str += '<span class="songSinger">{{songSinger}}</span>';
        str += '</p>';
        str += '<a href="" class="cover">';
            str += '<span class="playBtn">²¥·Å</span>';
        str += '</a>';

        this.config.jqPic.eq(this.index).append($$.artTemplate(str,this.data));
    },
    bindEvent:function(){

    }
};