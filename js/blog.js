/*字体移动*/
const oP = document.querySelector(".b-text")
const text2 = "「Have the courage to follow your heart」"
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
   }, 100); 
}

Nav();
NavBottom();
labelText();
removeClass()
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

/* 随机颜色 */
function randomColor() {
	//字符串拼接
	var str = "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ",1)";
	return str;
}

function labelText() {
	var lp = document.querySelectorAll('.label-content p');
	for (var i = 0; i < lp.length; i++) {
		lp[i].style.color = randomColor();
	}

}

/*移除class */
function removeClass() {
	const Col = document.querySelectorAll('.col');
	const Col1 = document.querySelectorAll('.col-1');

	window.onresize = function () {
		var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
		if (windowWidth <= 1051) {
			for (var i = 0; i < Col.length; i++) {
				Col[i].classList.remove('col-1');
			}
		} else {
			for (var i = 0; i < Col.length; i++) {
				Col[i].classList.add('col-1');
			}
		}
		//console.log(Col)

	}
	if (Col1) {/*如果存在Col1 */
		var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
		if (windowWidth <= 1051) {
			for (var i = 0; i < Col1.length; i++) {
				Col1[i].classList.remove('col-1');
			}
		}
	}

}





