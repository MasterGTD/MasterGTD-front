/*
* Created by 67 on 2018/1/26
* 用于[我的主页]
* 主要功能：事件添加
*/
$(document).ready(function(){
	console.log("sf");
	function add(){
		var checkbox=document.createElement("div");
		$(checkbox).addClass("mdui-checkbox");
		var checkboxText=document.createElement("input");
		$(checkboxText).attr("type","checkbox");
		var checkboxIcon=document.createElement("i");
		$(checkboxIcon).addClass("mdui-checkbox-icon");
		$(checkbox).append(checkboxText);
		$(checkbox).append(checkboxIcon);

		var input=$("#addinput").val();
		console.log(input);
		var itemContent=document.createElement("div");
		$(itemContent).text(input);

		var label=document.createElement("label");
		$(label).addClass("mdui-list-item"+" "+"mdui-ripple");
		$(label).append(checkbox);
		$(label).append(itemContent);

		$("#mainlist").append(label);
	}
	function clearinput(){
		$("#addinput").val("");
	}
	$("#addbtn").click(function(){
		add();
		clearinput();
	});
});
