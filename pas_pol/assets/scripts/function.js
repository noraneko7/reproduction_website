var pics_src = new Array("assets/images/main_visual_7-0x0.jpg","assets/images/main_visual_111-0x0.jpg","assets/images/main_visual_2-0x0.jpg","assets/images/main_visual_6-0x0.jpg");
var num = -1;

slideshow_timer();

function slideshow_timer(){
    if (num == 3) {
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("main_visual").src=pics_src[num];
    setTimeout("slideshow_timer()",1000);
}