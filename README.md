## video ui组件

### 快速开始

### 1、安装组件库
``` bash
npm i popup-video
```
### 2、引入组件库

``` javascript popup

import 'popup-video/dist/css/popup.css';
import popup from 'popup-video/popup.umd.js';

popup({
    width: '880px',
    height: '556px',
    title: title,
    content(elem) {}
})

```
``` javascript video

import 'popup-video/dist/css/video.css';
import popup from 'popup-video/video.umd.js';

video({
    url,
    elem
})

```


