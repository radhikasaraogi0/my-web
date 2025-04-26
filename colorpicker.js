document.getElementById("colorpicker").addEventListener("input",()=>{
let color=document.getElementById("colorpicker").value;
document.body.style.backgroundColor=color;
document.getElementById("box").value=color;
  });
  