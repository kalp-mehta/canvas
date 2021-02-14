canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y; 
color="black";
widthofline=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    widthofline=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius_of").value;
 mouseEvent="mouseDown";
}
 canvas.addEventListener("mouseup", my_mouseup);
  function my_mouseup(e) { mouseEvent = "mouseUP";
 } 
 canvas.addEventListener("mouseleave", my_mouseleave);
  function my_mouseleave(e) { mouseEvent = "mouseleave";
 }
 function clear_area()
  { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 }
 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e)
 {
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop ;
if (mouseEvent == "mouseDown") 
 { 
     console.log("x = " + last_position_of_x + "y = " + current_position_of_mouse_y);
 ctx.moveTo(last_position_of_x, last_position_of_y);
 console.log("Last position of x and y coordinates = "); 
    ctx.beginPath();
     ctx.strokeStyle = color;
      ctx.lineWidth = widthofline;
      ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y,radius,0,* Math.PI);
       ctx.stroke();
}
 }