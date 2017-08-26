//切换登录和注册
window.onload = function(){
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
}