import './main.css';
import popup  from './components/popup/popup';
import video from './components/video/video';
// import popup from '../umd/popup.umd.js';
// import video from '../umd/video.umd.js';
const item = document.querySelector('#list li');
const item2 = document.querySelector('#show');

item.addEventListener('click', function () {
    const url = this.dataset.url;
    const title = this.dataset.title;

    popup({
        width: '880px',
        height: '556px',
        title: title,
        content(elem) {
            video({
                url,
                elem,
                autoplay: true
            })
        }
    })
})