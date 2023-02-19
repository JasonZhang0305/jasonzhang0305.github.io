

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

window.onscroll = function () {
    const nScroll = document.querySelector('.mark');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop == 0) {
        nScroll.style.opacity = '0';
    } else {
        nScroll.style.opacity = '1';
    }
}


var index = 0;
var li = $(".m_list li");
var img = $(".rotate img");
var prev = $(".tool .prev");
var play = $(".tool .t-play");
var next = $(".tool .next");
var mp3 = $(".play .m_mp3");
var flag = false;

// var node = document.querySelectorAll(".ms")
// console.log(node[3])
/* 获取点击的li索引 */
li.click(function () {
    // console.log($(this).index())
    index = $(this).index();
    show();
})

function show() {
    //更换背景
    change_bg(index + 1);
    change_img_text(index + 1);

    change_btn_title()

    img_rotate()

    play_mp3()
}

/* 更换背景 */
function change_bg(idx) {
    $(".m_img_bg").css({
        "background": "url(../img/music/" + idx + "-big.png) no-repeat", /* 用++来拼接字符串 */
        "background-size": "cover"
    });
}


/* 更换播放器图片文本 */
function change_img_text(idx) {
    img.attr("src", "../img/music/" + idx + "-bage.png");
    // text.html(li.eq(index).attr("title")); //获取li的title属性
}

/* 更换播放按钮级title为暂停 */
function change_btn_title() {
    play.css({
        "background-image": "url(../img/music/暂停.png)"
    })
    play.attr("title", "暂停");
}

/* 图片旋转 */
function img_rotate() {
    //移除所有的样式
    img.removeClass("img_rotate"); //children()孩子节点
    //给当前点击的li添加图片旋转样式
    img.addClass("img_rotate");
}

//播放歌曲
function play_mp3() {
    //获取选中的li的datasrc属性
    mp3.attr("src", li.eq(index).attr("datasrc"));
    //播放歌曲
    mp3.get(0).play();
    flag = true;
}



play.click(function () {
    /**
     * 如果播放歌曲
     * 1.暂停歌曲
     * 2.图片旋转停止
     * 3.暂停按钮更为播放
     * 4.title更换为播放
     */
    if (flag) {
        mp3.get(0).pause();
        img.removeClass("img_rotate");
        play.css({
            "background-image": "url(../img/music/播放.png)"
        })
        play.attr("title", "暂停");
        flag = false;
    } else {
        //如果是false进入
        mp3.get(0).play();
        img.addClass("img_rotate");//图片旋转
        play.css({
            "background-image": "url(../img/music/暂停.png)"
        })
        play.attr("title", "播放");
        flag = true;
        //第一次进入的时候直接点击播放的时候更换背景图片
        change_bg(index + 1)
    }

});

//上一首
prev.click(function () {
    index--;
    if (0 > index) {
        index = li.length - 1;
    }
    show();
});
//下一首
next.click(function () {
    index++;
    if (li.length - 1 < index) {
        index = 0;
    }
    show();
});

/* mode */
// $(".mode").click(function(){
//     $(".mode img").attr("src","../img/music/日间模式.png")
//     $(".mode").attr("title","日间模式").removeClass("mode-night").addClass("mode-sun")

// })
MODE()
function MODE() {
    
    let mode = document.querySelector(".mode")
    let card = document.getElementsByClassName("card")
    let List = document.querySelectorAll(".m_list")
    mode.addEventListener("click", function () {
        mode.classList.toggle("mode-sun")
        
        let sun = document.querySelector(".mode-sun") //顺序不能放在最上面不然找不到
        if(sun){
            $(".mode").attr("title","日间模式")
            for(var i=0;i<card.length;i++){
                card[i].classList.add("night")
            }

            for(var i=0;i<List.length;i++){
                List[i].classList.add("m_list_night")
            }
            $(".recommend .line").css({
                "borderBottom":"2px solid white"
            })
        }else{
            $(".mode").attr("title","暗夜模式")
            for(var i=0;i<card.length;i++){
                card[i].classList.remove("night")
            }

            for(var i=0;i<List.length;i++){
                List[i].classList.remove("m_list_night")
            }

            $(".recommend .line").css({
                "borderBottom":"2px solid black"
            })
        }
    })
   
}
Count()
function Count(){
    function Num(number){
        return number < 10 ? `0${number}`:number
    }

    const like = document.querySelectorAll(".like p")
    const number = document.querySelectorAll(".number p")
    const oLi = document.querySelectorAll(".m_list li")

    let sum = 0;
    for(let i=0;i<oLi.length;i++){
        sum = i;
    }
    number[1].innerHTML = Num(sum+1)
    like[1].innerHTML = Num(sum+1)
}
