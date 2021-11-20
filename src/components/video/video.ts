let styles = require('../css/video.css');
let stylesClass = styles.default;

// 参数定义
interface IVideo {
    url: string;
    elem: string | Element;
    width?: string;
    height?: string;
    autoplay?: boolean
}

// 方法定义
interface IComponent {
    tempContainer: HTMLElement;
    init: () => void;
    template: () => void;
    handle: () => void
}

// 实例化
function video(options: IVideo) {
    return new Video(options);
}

class Video implements IComponent {
    tempContainer;
    constructor(private settings: IVideo) {
        this.settings = Object.assign({
            width: '100%',
            height: '100%',
            autoplay: false 
        }, this.settings)

        this.init()
    }

    // 初始化
    init() {
        this.template();
        this.handle();
    }

    // 创建
    template() {
        this.tempContainer = document.createElement('div');
        this.tempContainer.className = stylesClass.video;
        this.tempContainer.style.width = this.settings.width;
        this.tempContainer.style.height = this.settings.height;
        this.tempContainer.innerHTML = `
            <video class="${stylesClass['video-content']}" src="${this.settings.url}"></video>
            <div class="${stylesClass['video-controls']}">
                <div class="${stylesClass['video-progress']}">
                    <div class="${stylesClass['video-progress-now']}"></div>
                    <div class="${stylesClass['video-progress-sus']}"></div>
                    <div class="${stylesClass['video-progress-bar']}"></div>
                </div>
                <div class="${stylesClass['video-play']}">
                    <i class="iconfont icon-bofang"></i>
                </div>
                <div class="${stylesClass['video-time']}">
                    <span>00:00</span> / <span>00:00</span>
                </div>
                <div class="${stylesClass['video-full']}">
                    <i class="iconfont icon-quanping1"></i>
                </div>
                <div class="${stylesClass['video-volume']}">
                    <i class="iconfont icon-xiaolaba"></i>
                    <div class="${stylesClass['video-volprogress']}">
                        <div class="${stylesClass['video-volprogress-now']}"></div>
                        <div class="${stylesClass['video-volprogress-bar']}"></div>
                    </div>
                </div>
            </div>
        `;

        if (typeof this.settings.elem === 'object') {
            this.settings.elem.appendChild(this.tempContainer)
        } else {
            document.querySelector(`${this.settings.elem}`).appendChild(this.tempContainer)
        }
    }

    // 操作
    handle() {
        let videoContent: HTMLVideoElement = this.tempContainer.querySelector(`.${stylesClass['video-content']}`);
        let videoPlay = this.tempContainer.querySelector(`.${stylesClass['video-play']} i`);
        let videoTimes = this.tempContainer.querySelectorAll(`.${stylesClass['video-time']} span`);
        let videoControls = this.tempContainer.querySelector(`.${stylesClass['video-controls']}`);
        let videoFull = this.tempContainer.querySelector(`.${stylesClass['video-full']} i`);
        let videoProgress = this.tempContainer.querySelectorAll(`.${stylesClass['video-progress']} div`);
        let videoVolProgress = this.tempContainer.querySelectorAll(`.${stylesClass['video-volprogress']} div`);
        let videoVolIcon = this.tempContainer.querySelector(`.${stylesClass['video-volume']} i`);

        let timer = null;
        videoContent.volume = 0.5;

        // 自动播放
        if (this.settings.autoplay) {
            timer = setInterval(playing, 1000);
            videoContent.play();
        }

        // 显示隐藏操作栏
        this.tempContainer.addEventListener('mouseenter', function() {
            videoControls.style.bottom = 0;
        })
        this.tempContainer.addEventListener('mouseleave', function() {
            videoControls.style.bottom = '-54px';
        })

        // 视频是否加载完成
        videoContent.addEventListener('play', () => {
            videoPlay.className = 'iconfont icon-24gf-pause2';
            timer = setInterval(() => {
                playing()
            }, 1000)
        })

        // 视频暂停
        videoContent.addEventListener('pause', () => {
            videoPlay.className = 'iconfont icon-bofang';
            clearInterval(timer);
        })

        videoPlay.addEventListener('click', () => {
            if (videoContent.paused) {
                videoContent.play();
            } else {
                videoContent.pause();
            }
        })

        // 播放中进度条变化
        function playing() {
            videoTimes[1].innerHTML = formatTime(videoContent.duration);
            let scale = videoContent.currentTime / videoContent.duration;
            let scaleSuc = videoContent.buffered.end(0) / videoContent.duration;
            videoTimes[0].innerHTML = formatTime(videoContent.currentTime);
            videoProgress[0].style.width = scale * 100 + '%';
            videoProgress[1].style.width = scaleSuc * 100 + '%';
            videoProgress[2].style.left = scale * 100 + '%';
        }

        // 时间格式化
        function formatTime(number: number):string {
            number = Math.round(number);
            let min = setZero(Math.floor(number / 60));
            let sec = setZero(number % 60);
            return `${min}:${sec}`
        }

        function setZero (number: number):string {
            if (number < 10) {
                return `0${number}`
            } else {
                return `${number}`
            }
        }

        // 拖拽进度条事件
        videoProgress[2].addEventListener('mousedown', function(ev:MouseEvent) {
            let downX = ev.pageX;
            let downL = this.offsetLeft;

            document.onmousemove = (ev:MouseEvent) => {
                let scale = (ev.pageX - downX + downL + 8) / this.parentNode.offsetWidth;
                if (scale < 0) {
                    scale = 0;
                } else if (scale > 1) {
                    scale = 1;
                }

                videoProgress[0].style.width = scale * 100 + '%';
                videoProgress[1].style.width = scale * 100 + '%';
                this.style.left = scale * 100 + '%';
                videoContent.currentTime = scale * videoContent.duration;
            };

            document.onmouseup = () => {
                document.onmousemove = document.onmouseup = null;
            }
            ev.preventDefault();
        })

        // 音量大小
        videoVolProgress[1].addEventListener('mousedown', function(ev:MouseEvent) {
            let downX = ev.pageX;
            let downL = this.offsetLeft;

            document.onmousemove = (ev:MouseEvent) => {
                let scale = (ev.pageX - downX + downL + 8) / this.parentNode.offsetWidth;
                if (scale < 0) {
                    scale = 0;
                } else if (scale > 1) {
                    scale = 1;
                }

                videoVolProgress[0].style.width = scale * 100 + '%';
                this.style.left = scale * 100 + '%';
                videoContent.volume = scale;
            };

            document.onmouseup = () => {
                document.onmousemove = document.onmouseup = null;
            }
            ev.preventDefault();
        })

        // 静音
        videoVolIcon.addEventListener('click', function () {
            let scale = videoContent.volume;

            if (scale > 0) {
                videoContent.volume = 0;
                videoVolProgress[0].style.width = '0px';
                videoVolProgress[1].style.left = '0px';
                videoVolIcon.className = 'iconfont icon-jingyin1';
            } else {
                videoContent.volume = 0.5;
                videoVolProgress[0].style.width = '50px';
                videoVolProgress[1].style.left = '50px';
                videoVolIcon.className = 'iconfont icon-xiaolaba';
            }
        })

        // 全屏
        videoFull.addEventListener('click', function() {
            videoContent.requestFullscreen();
        })

    }
}

export default video;