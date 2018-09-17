$(function(){
	//歌单列表添加样式
	$("#w_song li").mouseover(function(){
		$(this).find(".w_con").show();
		$(this).find(".w_time").hide();
	})
	
	
	$("#w_song li").mouseout(function(){
		$(this).find(".w_con").hide();
		$(this).find(".w_time").show();
	})
	
	//获取屏幕高度
	var k =$(window).height()+'px';
	 $(".w_left").css("height",k);
	 $(window).resize(function(){
       $(".w_left").height($(window).height());  
    })  
	 $(".w_right").css("height",k);
	 $(window).resize(function(){
       $(".w_right").height($(window).height());  
    })  
	
	
	//实现创建歌单隐藏和下拉
	$(".w_down").hover("cursor","pointer").click(function(){
		 $(this).attr("class",$(this).attr('class')=='glyphicon glyphicon-triangle-right w_down'?'glyphicon glyphicon-triangle-bottom w_down':'glyphicon glyphicon-triangle-right w_down'); 
		 $("#w_sheet").toggle();
	})
	//实现收藏歌单隐藏和下拉
	$(".w_down1").hover("cursor","pointer").click(function(){
		 $(this).attr("class",$(this).attr('class')=='glyphicon glyphicon-triangle-right w_down1'?'glyphicon glyphicon-triangle-bottom w_down1':'glyphicon glyphicon-triangle-right w_down1'); 
		 $("#w_sheet1").toggle();
	})
	//我的歌单添加移入移出点击样式
	$("#w_sheet li").mouseover(function(){
		var k = "rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box";
		if($(this).css("background")!=k){
		  $(this).css({"background":"RGB(244,242,242)","cursor":"pointer"});
		 }
	})
	$("#w_sheet li").mouseout(function(){
		var k = "rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box";
		if($(this).css("background")!=k){
		  $(this).css("background","RGB(249,249,249)");
		 }
	})
	$("#w_sheet li").click(function(){
		$("#w_sheet li").css("background","RGB(249,249,249)");
		 $(this).css("background","RGB(230,230,230)");
      
	});
	
	//我收藏歌单添加移入移出点击样式
		$("#w_sheet1 li").mouseover(function(){
		var k = "rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box";
		if($(this).css("background")!=k){
		  $(this).css({"background":"RGB(244,242,242)","cursor":"pointer"});
		 }
	})
	$("#w_sheet1 li").mouseout(function(){
		var k = "rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box";
		if($(this).css("background")!=k){
		  $(this).css("background","RGB(249,249,249)");
		 }
	})
	$("#w_sheet1 li").click(function(){
		$("#w_sheet1 li").css("background","RGB(249,249,249)");
		 $(this).css("background","RGB(230,230,230)");
      
	});
	/*验证歌单名是否为空*/
	$(".w_submit").click(function(){
		if($("#w_songtext").val().trim().length==0){

			$("#w_error").text("歌名不能为空");
		}
	})
})
	
