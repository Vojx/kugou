/**
 * Created by Administrator on 2016/12/29.
 */
function Audio(data){
    this.data = data;
    this.config = {
        jqUl:$('.hotAudioList ul')
    };
    this.init()
}
Audio.prototype = {
    init:function(){
        this.bindDom();
        this.bindEvent();
    },
    bindDom:function(){
        var str = '';
        str += '<li class="itemList">';
        str += '<img src="{{img}}" alt=""/>';
        str += '<a href="" class="cover">';
        str += '<span class="playBtn"></span>';
        str += '</a>';
        str += '<div class="clearfix"></div>';
        str += '<p class="des">{{title}}</p>';
        str += '</li>';

        this.config.jqUl.append($$.artTemplate(str,this.data));
    },
    bindEvent:function(){}
};