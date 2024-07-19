const canvas = document.querySelector('canvas');
const color =document.querySelector('#color');
const width = document.querySelector('#width'); 
const clear =document.querySelector('.clear');
const save1 =document.querySelector('.save');
const ctx = canvas.getContext('2d'); 

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isPainting = false;  
let lineWidth = 5; 

save1.addEventListener('click', () => {
  canvas.toBlob((blob) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'drawing.jpg';
    a.click();
  });
});

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

width.addEventListener('change', (event) => {
  lineWidth = event.target.value; 
});

color.addEventListener('change', (event) => {
  console.log(event.target.value);
  ctx.strokeStyle = event.target.value;
});

canvas.addEventListener('mouseout', () => {
  isPainting = false;
});

canvas.addEventListener('mousemove', (event) => {
  if(!isPainting){ 
    return;
  }
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.lineTo(event.offsetX, event.offsetY); 
  ctx.stroke(); 
});

canvas.addEventListener('mousedown', (event) => {
  isPainting = true; 
  ctx.beginPath(); 
  ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener('mouseup', () => {
  isPainting = false;
});