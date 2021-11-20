<template>
    <div style="margin-bottom: 80px;">
        <div id="list">
            <ul class="list-wrap clearfix">
                <li @click="handleClick">
                    <div>
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi11youth/section13-1.jpg" alt="棒棒哒">
                        <i class="iconfont icon-24gf-playCircle"></i>
                    </div>
                    <h3>视频小短片</h3>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import popup from './popup.umd.js';
import video from './video.umd.js';
export default {
    name: 'popupDemo',
    methods: {
        handleClick() {
            const url = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4";

            popup({
                width: '800px',
                height: '600px',
                title: '视频小短片',
                content(elem) {
                    video({
                        url,
                        elem,
                        autoplay: true
                    })
                }
            })
        }
    }
    
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    line-height: 1.15;
    list-style: none;
}
</style>
<style scoped>
@import './popup.css';
@import './video.css';

.clearfix::after {content: ""; display: block; clear: both;}
#list {
    margin: 20px;
}
#list .list-wrap li{
    float: left;
    width: 296px;
    height: 200px;
    margin-right: 14px;
    cursor: pointer;
}
#list .list-wrap div{
    position: relative;
}
#list .list-wrap img{
    width: 100%;
    height: auto;
}
</style>