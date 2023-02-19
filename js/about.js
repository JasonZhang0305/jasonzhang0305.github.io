const oP = document.querySelector(".b-text")
const text2 = "「未来的路还很长，让我慢慢道来~」"
let speed = 300;
let idx = 1;
sText()
function sText() {
   oP.innerHTML = text2.slice(0,idx)
   idx++
   if(idx > text2.length){
    //    idx=1
        return;
   }
   setTimeout(() => {
    sText()
   }, 300); 
}
NavBottom()
function NavBottom() {
    var oLi = document.querySelectorAll('.nav_1 li');
    var Line = document.querySelectorAll('.n-line');

    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].onmouseover = function () {
            Line[this.index].style.width = '100%';

        }
        oLi[i].onmouseout = function () {
            Line[this.index].style.width = '';
        }
    }

}
Nav()
function Nav() {
    var Menu = document.querySelector('.menu');
    var oUl = document.querySelector('.nav_1');
    var oLi = document.querySelectorAll('.nav_1 li');

    Menu.addEventListener('click', () => {
        oUl.classList.toggle('open');

        oLi.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = ""; /*第一次点没有动画第二次就有了所以要清除上一次的动画 */
            } else {
                /* animation-fill-mode：forwards;让元素保持在移动的地方不会返回去*/
                item.style.animation = `slideIn 0.3s ease-in forwards ${index * 0.1 + 0.3}s`;
            }
        })

    })
}
