let styles = require('../css/popup.css');
let stylesClass = styles.default;
// 参数接口定义
interface IPopup {
    width?: string,
    height?: string,
    title?: string,
    pos?: string,
    mask?: boolean,
    content?: (content: Element) => void
}

// 组件方法定义
interface IComponent {
    tempContainer: HTMLElement,
    mask: HTMLElement,
    init: () => void,
    template: () => void,
    handle: () => void,
}

// 实例化
function popup (options: IPopup) {
    return new Popup(options);
}

class Popup implements IComponent {
    tempContainer;
    mask;
    constructor(private settings: IPopup) {
        // 默认参数初始化
        this.settings = Object.assign({
            width: '100%',
            height: '100%',
            title: '',
            pos: 'center',
            mask: true,
            content: function() {}
        }, this.settings);

        this.init();
    }

    // 初始化
    init() {
        this.template();
        this.handle();
        this.contentCallback();
        this.settings.mask && this.createMask();
    }

    // 创建popup
    template() {
        this.tempContainer = document.createElement('div');
        this.tempContainer.style.width = this.settings.width;
        this.tempContainer.style.height = this.settings.height;
        this.tempContainer.className = stylesClass.popup;
        this.tempContainer.innerHTML = `
            <div class="${stylesClass['popup-title']}">
                <h3>${this.settings.title}</h3>
                <i class="iconfont icon-guanbi"></i>
            </div>
            <div class="${stylesClass['popup-content']}"></div>
        `
        document.body.appendChild(this.tempContainer);

        // 靠左
        if (this.settings.pos === 'left') {

            this.tempContainer.style.left = '0px';
            this.tempContainer.style.top = window.innerHeight - this.tempContainer.offsetHeight + 'px';

        // 靠右
        } else if (this.settings.pos === 'right') {

            this.tempContainer.style.right = '0px';
            this.tempContainer.style.top = window.innerHeight - this.tempContainer.offsetHeight + 'px';

        // 居中
        } else {

            this.tempContainer.style.left = (window.innerWidth - this.tempContainer.offsetWidth) / 2 + 'px';
            this.tempContainer.style.top = (window.innerHeight - this.tempContainer.offsetHeight) / 2 + 'px';
        }

    }

    // 关闭弹窗 事件操作
    handle() {
        let popupClose = this.tempContainer.querySelector(`.${stylesClass['popup-title']} i`);
        popupClose.addEventListener('click', () => {
            document.body.removeChild(this.tempContainer);
            this.settings.mask && document.body.removeChild(this.mask);
        })
    }

    // mask
    createMask() {
        this.mask = document.createElement('div');
        this.mask.className = stylesClass.mask;
        this.mask.style.position = "absolute",
        this.mask.style.width = "100%",
        this.mask.style.height = document.body.offsetHeight + 'px';
        this.mask.style.top = "0px",
        document.body.appendChild(this.mask);
    }

    // content 内容
    contentCallback() {
        let popupContent = this.tempContainer.querySelector(`.${stylesClass['popup-content']}`);
        this.settings.content(popupContent);
    }
}

export default popup;