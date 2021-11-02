import React, { useRef, useEffect } from "react";
import "./Sine.css";

const Sine = props => {
  const canvasRef = useRef(null);
  var freq = 0.02;
  var k = 0;
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    const c = canvas.getContext('2d')
    function animate(){
        requestAnimationFrame(animate);
        c.beginPath();
        c.moveTo(-1,canvas.height/2+1);
        c.fillStyle= "rgba(0, 0, 0,0.07)";
        c.fillRect(0,0,canvas.width,canvas.height);
        for(let i=-1;i<canvas.width;i+=1){
            c.lineTo(i,canvas.height /2 + Math.sin(i*0.01+k)*(canvas.height/6)*(Math.sin(k)));
        }
        c.strokeStyle = `hsl(${Math.abs(Math.sin(k)*255)},50%,50%)`;
        c.stroke();
        k+=freq;
    }
    animate();
    window.addEventListener("resize", ()=>{
      canvas.width=window.innerWidth;
      canvas.height=window.innerHeight;
    });
  }, []);

  return (
    <div id="Sine">
      <canvas id="canvas" ref={canvasRef} {...props}></canvas>
    </div>
  );
};

export default Sine;
