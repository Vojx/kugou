/**
 * Created by Administrator on 2016/12/29.
 */
function Singer(data) {
    this.data = data;
    this.init();
}
Singer.prototype = {
    init: function () {
        this.bindDom();
        this.bindEvent();
    },
    bindDom: function () {
        var imgs = this.data;
        var str = '';
            str += '<ul>';
            str += '<li class="bigImg mr5 mb5"><a href=""><img src="'+imgs.img_educate_left+'" alt=""/></a></li>';
            str += '<li class="bigImg mb5"><a href=""><img src="images/dtab3.jpg" alt=""/></a></li>';
            str += '<li class="mr5"><a href=""><img src="images/dtab3.jpg" alt=""/></a></li>';
            str += '<li class="mr5"><a href=""><img src="images/dtab3.jpg" alt=""/></a></li>';
            str += '<li><a href=""><img src="images/dtab3.jpg" alt=""/></a></li>';
            str += '</ul>';
            str += '<ul>';
            str += '<li class="bigImg mr5 mb5"><a href=""><img src="images/dtab4.jpg" alt=""/></a></li>';
            str += '<li class="bigImg mb5"><a href=""><img src="images/dtab4.jpg" alt=""/></a></li>';
            str += '<li class="mr5"><a href=""><img src="images/dtab4.jpg" alt=""/></a></li>';
            str += '<li class="mr5"><a href=""><img src="images/dtab4.jpg" alt=""/></a></li>';
            str += '<li><a href=""><img src="images/dtab4.jpg" alt=""/></a></li>';
            str += '</ul>';
            str += '<ul>';
            str += '<li class="bigImg mr5 mb5"><a href=""><img src="images/dtab5.jpg" alt=""/></a></li>';
            str += '<li class="bigImg mb5"><a href=""><img src="images/dtab5.jpg" alt=""/></a></li>';
            str += '<li class="mr5"><a href=""><img src="images/dtab5.jpg" alt=""/></a></li>';
            str += '<li class="mr5"><a href=""><img src="images/dtab5.jpg" alt=""/></a></li>';
            str += '<li><a href=""><img src="images/dtab5.jpg" alt=""/></a></li>';
            str += '</ul>';




    },
    bindEvent: function () {

    }
};