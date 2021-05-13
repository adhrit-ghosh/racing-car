canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_width=100;
car_height=90;
carimage="car1.png";
background_image = "racing.jpg";
car_image="car1.png";
car_x=10;
car_y=10;

car2_width=100;
car2_height=90;
car2_image="download.jpg";
car2_x=20;
car2_y=10;



function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;
    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=car_image;
    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
    
}
function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadcar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
    
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
    up();
    console.log("up");
    }
    if(keypressed=="40"){
        down();
        console.log("down");
        }
        if(keypressed=="37"){
            left();
            console.log("left");
            }
            if(keypressed=="39"){
                right();
                console.log("right");
                }
}
function up(){
    if(car_y>=0){
        car_y=car_y-10
        uploadbackground();
        uploadcar();
    }
}
    function down(){
        if(car_y<=500){
            car_y=car_y+10
            uploadbackground();
            uploadcar();
        }
    }
        function left(){
            if(car_x>=0){
                car_x=car_x-10
                uploadbackground();
                uploadcar();
            }
        }
            function righ2(){
                if(car_x<=700){
                    car_x=car_x+10
                    uploadbackground();
                    uploadcar();
                }
            }
            function my_keydown(e){
                keypressed=e.keyCode;
                console.log(keypressed);
                if(keypressed=="87"){
                up2();
                console.log("up2");
                }
                if(keypressed=="83"){
                    down2();
                    console.log("down2");
                    }
                    if(keypressed=="65"){
                        left2();
                        console.log("left2");
                        }
                        if(keypressed=="68"){
                            right2();
                            console.log("right2");
                            }
            }
            function up2(){
                if(car2_y>=0){
                    car2_y=car2_y-10
                    uploadbackground();
                    uploadcar();
                }
            }
                function down2(){
                    if(car2_y<=500){
                        car2_y=car2_y+10
                        uploadbackground();
                        uploadcar();
                    }
                }
                    function left2(){
                        if(car2_x>=0){
                            car2_x=car2_x-10
                            uploadbackground();
                            uploadcar();
                        }
                    }
                        function right2(){
                            if(car_x<=700){
                                car_x=car_x+10
                                uploadbackground();
                                uploadcar();
                            }
                        }