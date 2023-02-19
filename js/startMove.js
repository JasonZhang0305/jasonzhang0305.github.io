function startMove(node,cssObj,complete){ //complete形参 = show
				clearInterval(node.timer);
				node.timer = setInterval(function(){
					var isEnd = true; // 假设所有动画都达到目的值
					for(var attr in cssObj){
						var iTarget = cssObj[attr];
						//计算速度
						//var iCur = parseInt(getStyle(node,attr)); //要取透明度所以不能用这个
						var iCur = null;
						if(attr == "opacity"){
							iCur = parseInt(parseFloat(getStyle(node,"opacity"))*100);
						}else{
							iCur = parseInt(getStyle(node,attr));
						}
						var speed = (iTarget - iCur) / 8; //缓冲运动
						speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
						
						
						if(attr == "opacity"){
							iCur += speed;
							node.style.opacity = iCur / 100;
							node.style.filter = "alpha(opacity=" + iCur + ")";
						}else{
							node.style[attr] = iCur + speed + 'px'; //style[attr]因为attr表示的是一个样式的值所以通过这个方式来取值
						}
						if(iCur != iTarget){
							isEnd = false;
						}
					}
						if(isEnd){
							clearInterval(node.timer);
							if(complete){
								complete.call(node);
							}
						}
					
				},30)
			}
			//获取当前有效样式兼容
			function getStyle(node,cssStr){
				return node.currentStyle ? node.MSCurrentStyle[cssStr] : getComputedStyle(node)[cssStr];
			}