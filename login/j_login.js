
window.onload = function(){
    //切换登录和注册
    var myPart1 = document.getElementById("part1");    //整个div
    var myUl = myPart1.getElementsByTagName("ul")[0];//一个节点
    var myLi = myUl.getElementsByTagName("li");    //数组
    var myPart2 = document.getElementById("part2");
    var myDiv = myPart2.getElementsByTagName("div"); //数组

    for(var i = 0; i<myLi.length;i++){
        myLi[i].index = i;
        myLi[i].onclick = function(){
            for(var j = 0; j < myLi.length; j++){
                myLi[j].className="off";
                myDiv[j].className = "hide";
            }
            this.className = "on";
            myDiv[this.index].className = "show";
        }
    } 
// 网页打开时随机切换背景图片
    var imgArr = new Array(4);
    imgArr[0]="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503639572647&di=4df603638b4e2ec77d71d9353640a81d&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fe%2F57a2af5cb3516.jpg";
    imgArr[1]="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503823849584&di=100b1d2a67ca079404a1e3488cbbcbff&imgtype=0&src=http%3A%2F%2Fwww.15w.com%2Fuploads%2Fallimg%2F130409%2F14-130409141240155.jpg";
    imgArr[2]="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503823771380&di=d984764ad1c9b2aa72b1e54c79ff7ffb&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F6159252dd42a2834fefb851658b5c9ea15cebf4a.jpg";
    imgArr[3]="https://cdna.artstation.com/p/assets/images/images/005/721/538/large/lok-du-24.jpg?1493274317";
    var index =parseInt(Math.random()*(imgArr.length)); 
    console.log(index)
    var currentImage=imgArr[index]; 
    document.getElementsByTagName("body")[0].style="background:white url(" + currentImage + ") no-repeat;background-size:100%";  
}

