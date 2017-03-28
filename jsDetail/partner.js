/**
 * Created by Administrator on 2016/12/24.
 */
function Partner(data,num){
    this.data = data;
    this.num = num;
    this.dom = $('<span class="logo"></span>').addClass('icon_'+this.num+'');
    this.init()
}
Partner.prototype = {
    init:function(){
        this.bindDom();
        this.bindEvent()
    },
    bindDom:function(){
        $('.partnerLogo').append(this.dom);

        this.dom.css({
            backgroundImage:'url('+this.data.image+')'
        });
    },
    bindEvent:function(){

    }
};
