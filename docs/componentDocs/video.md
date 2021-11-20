# video
播放器组件

### 示例

<v-demo />


### 代码

``` javascript
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
```

### Attributes

| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---  | ---  | ---  |   ---   |  ---  |
| url | 视频链接 | String | true |  |
| elem | 视频播放容器 | String / Element | true |  |
| width | 视频宽度 | String | false | 100% |
| height | 视频高度 | String | false | 100% |
| autoplay | 是否自动播放 | String | false | false |
