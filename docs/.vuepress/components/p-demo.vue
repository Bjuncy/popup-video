<template>
    <div style="position: relative; margin: 50px 0;">
        <button @click="handleClick">点击弹出</button>
    </div>
</template>
<script>
import popup from './popup.umd.js';
export default {
    name: 'popupDemo',
    methods: {
        handleClick() {
            popup({
                width: '500px',
                height: '300px',
                title: 'popup组件'
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
}
</style>
<style scoped>
@import './popup.css';
</style>