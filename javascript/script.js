$(".mainmenu>li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});
$(".mainmenu>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});

var slideSpeed=2800;

$(".slide").children("a:gt(0)").hide();

var end=setInterval(function(){
    $(".slide").find("a:first").stop().fadeOut(slideSpeed)
    .next()
    .fadeIn(slideSpeed)
    .end()
    .appendTo(".slide")
},slideSpeed);

$("#noticeBtn").click(function(){
    $("#notice").show();
    $("#noticeBtn").css({color:"#222328"});
    $("#gallery").hide();
    $("#galleryBtn").css({color:"lightgray"});
});
$("#galleryBtn").click(function(){
    $("#gallery").show();
    $("#galleryBtn").css({color:"#222328"});
    $("#notice").hide();
    $("#noticeBtn").css({color:"lightgray"});
});
$("#noticeBtn").focus(function(){
    $("#notice").show();
    $("#noticeBtn").css({color:"#222328"});
    $("#gallery").hide();
    $("#galleryBtn").css({color:"lightgray"});
});
$("#galleryBtn").focus(function(){
    $("#gallery").show();
    $("#galleryBtn").css({color:"#222328"});
    $("#notice").hide();
    $("#noticeBtn").css({color:"lightgray"});
});

$(".onClick").click(function(){
    $("#modal").show();
});
$(".modalbutton").click(function(){
    $("#modal").hide();
});