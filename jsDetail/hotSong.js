/**
 * Created by Administrator on 2016/12/31.
 */
function HotSong(data,index){
    this.data = data;
    this.index = index;
    this.config = {
        jqItem:$('.hotSongList .itemList')
    };
    this.init()
}
HotSong.prototype = {
    init:function(){
        this.bindDom();
        this.bindEvent();
    },
    bindDom:function(){
        var str = '';
        str += '<img src="{{image}}" alt=""/>';
        str += '<a href="" class="cover">';
            str += '<span class="playBtn"></span>';
        str += '</a>';
        str += '<div class="songList fl">';
            str += '<dl>';
                str += '<dt>{{listTitle}}</dt>';
                str += '<dd>{{song1}}</dd>';
                str += '<dd>{{song2}}</dd>';
            str += '</dl>';
        str += '</div>';
        str += '<span class="expend"></span>';

        this.config.jqItem.eq(this.index).append($$.artTemplate(str,this.data));
    },
    bindEvent:function(){}
};