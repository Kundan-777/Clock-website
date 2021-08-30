
setInterval(()=>{

 
 const hour = document.querySelector('#hour');
 const minute = document.querySelector('#minute');
 const second = document.querySelector('#second');
    




day = new Date();
htime=day.getHours();
mtime=day.getMinutes();
stime=day.getSeconds();

hrotation=30*htime + mtime/2;
mrotation = 6*mtime;
srotation = 6*stime;

hour.style.transform = `rotate(${hrotation}deg)`;
minute.style.transform = `rotate(${mrotation}deg)`;
second.style.transform = `rotate(${srotation}deg)`;
console.log("Hello Kundan");
},1000)
