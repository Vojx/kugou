/**
 * Created by Administrator on 2016/12/31.
 */
function Slide(data){
    this.data = data;
    this.init();
}
Slide.prototype = {
    init:function(){
        this.bindDom();
        this.bindEvent();
    },
    bindDom:function(){
        var str = '';
        str += '<li><a href=""><img src="{{image}}"/></a></li>';

        $('.slideBox .bd ul').append($$.artTemplate(str,this.data));
    },
    bindEvent:function(){}
};