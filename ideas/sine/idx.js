const canvas = document.querySelector("canvas#canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
freq = 0.02;
k = 0;
function animate(){
    requestAnimationFrame(animate);
    c.beginPath();
    c.moveTo(0,canvas.height/2);
    c.fillStyle= "rgba(0, 0, 0,0.07)";
    c.fillRect(0,0,canvas.width,canvas.height);
    for(i=0;i<canvas.width;i+=0.5){
        c.lineTo(i,canvas.height /2 + Math.sin(i*0.01+k)*(canvas.height/6)*(Math.sin(k)));
    }
    c.strokeStyle = `hsl(${Math.abs(Math.sin(k)*255)},50%,50%)`;
    c.stroke();
    k+=freq;
}
animate();
