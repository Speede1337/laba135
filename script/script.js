let d = new Date();
 
let month=new Array("January","February","March","April","May","June",
"July","August","September","October","November","December");
 
let today = (d.getDate()+ " " + month[d.getMonth()]
+ " " + d.getFullYear());

document.getElementById('ver').innerHTML = today;