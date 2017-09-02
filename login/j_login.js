
window.onload = function(){
    // 切换登录和注册 法1
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
    var currentImage=imgArr[index]; 
    document.getElementsByTagName("body")[0].style="background:white url(" + currentImage + ") no-repeat;background-size:100%";  
}

//切换注册和登录 法2
var isShown = false;
$(document).ready(function(){
    $("#in").click(function(){
        if (!isShown) {
            isShown = true;
            $("#form_up").fadeOut(700,function(){
                $("#form_in").fadeIn(700);
            });
            $("#up").css("text-decoration","none");
            $("#in").css("text-decoration","underline");
            isShown = false;
        }
    });

    $("#up").click(function(){
        if (!isShown) {
            isShown = true;
            $("#form_in").fadeOut(700,function(){
                $("#form_up").fadeIn(700);
            });
            $("#in").css("text-decoration","none");
            $("#up").css("text-decoration","underline");    
            isShown = false;
        }
    });
});
//表单验证
$(function(){

        var ok1=false;
        var ok2=false;
        var ok3=false;
        var ok4=false;
        // 验证用户名
        $('input[name="username"]').focus(function(){
          $(this).next().text('用户名应该为3-20位之间');
        }).blur(function(){
          if($(this).val().length >= 3 && $(this).val().length <=12 && $(this).val()!=''){
            $(this).next().text('输入成功');
            ok1=true;
          }else{
            $(this).next().text('用户名应该为3-20位之间');
          }
            
        });
  
        //验证密码
        $('input[name="password"]').focus(function(){
          $(this).next().text('密码应该为6-20位之间');
        }).blur(function(){
          if($(this).val().length >= 6 && $(this).val().length <=20 && $(this).val()!=''){
            $(this).next().text('输入成功');
            ok2=true;
          }else{
            $(this).next().text('密码应该为6-20位之间');
          }
            
        });
  
        //验证确认密码
        //   $('input[name="repass"]').focus(function(){
        //   $(this).next().text('输入的确认密码要和上面的密码一致,规则也要相同');
        // }).blur(function(){
        //   if($(this).val().length >= 6 && $(this).val().length <=20 && $(this).val()!='' && $(this).val() == $('input[name="password"]').val()){
        //     $(this).next().text('输入成功');
        //     ok3=true;
        //   }else{
        //     $(this).next().text('输入的确认密码要和上面的密码一致,规则也要相同');
        //   }
            
        // });
  
        //验证邮箱
        $('input[name="email"]').focus(function(){
          $(this).next().text('请输入正确的EMAIL格式');
        }).blur(function(){
          if($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1){
            $(this).next().text('请输入正确的EMAIL格式');
          }else{         
            $(this).next().text('输入成功');
            ok4=true;
          }
            
        });
  
        //提交按钮,所有验证通过方可提交
  
        $('.button').click(function(){
          if(ok1 && ok2 &&  ok4){
            $('form').submit();
          }else{
            return false;
          }
        });
          
    });
