
window.onload = function(){
    //切换登录和注册 法1
    // var myPart1 = document.getElementById("part1");    //整个div
    // var myUl = myPart1.getElementsByTagName("ul")[0];//一个节点
    // var myLi = myUl.getElementsByTagName("li");    //数组
    // var myPart2 = document.getElementById("part2");
    // var myDiv = myPart2.getElementsByTagName("div"); //数组

    // for(var i = 0; i<myLi.length;i++){
    //     myLi[i].index = i;
    //     myLi[i].onclick = function(){
    //         for(var j = 0; j < myLi.length; j++){
    //             myLi[j].className="off";
    //             myDiv[j].className = "hide";
    //         }
    //         this.className = "on";
    //         myDiv[this.index].className = "show";
    //     }
    // } 

// 网页打开时随机切换背景图片
    var imgArr = new Array(7);
    imgArr[0]="./img/ice1.jpg";
    imgArr[1]="./img/Assassin1.jpg";
    imgArr[2]="./img/Natsume1.jpg";
    imgArr[3]="./img/artstation1.jpg";
    imgArr[4]="./img/Assassin2.jpg";
    imgArr[5]="./img/Assassin3.jpg";
    imgArr[6]="./img/Assassin4.jpg";
    var index =parseInt(Math.random()*(imgArr.length)); 
    console.log(index)
    var currentImage=imgArr[index]; 
    document.getElementsByTagName("body")[0].style="background:white url(" + currentImage + ") no-repeat;background-size:100%";  
}

//切换注册和登录 法2
$(document).ready(function(){
    $("#in").click(function(){
        $("#form_up").fadeOut(700,function(){
            $("#form_in").fadeIn(700);
        });
    });
    $("#up").click(function(){
        $("#form_in").fadeOut(700,function(){
            $("#form_up").fadeIn(700);
        });
    });
});

