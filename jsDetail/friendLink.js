/**
 * Created by Administrator on 2016/12/24.
 */
function FriendLink(data){
    this.data = data;
    this.config = {
        jqLinkList:$('.linkList')
    };
    this.init()
}
FriendLink.prototype = {
    init:function(){
        this.bindDom();
        this.bindEvent();
    },
    bindDom:function(){
        var str = '';
            str +='<li><a href="">{{name}}</a></li>';

        this.config.jqLinkList.append($$.artTemplate(str,this.data));
    },
    bindEvent:function(){

    }
};