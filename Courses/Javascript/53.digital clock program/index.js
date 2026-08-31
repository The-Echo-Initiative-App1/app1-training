function updatecolck(){
    const now=new Date();
    let hours=now.getHours();
    hours=hours.toString().padStart(2,0)
    const meridium=hours>=12?"PM":"AM";
    hours=hours%12 ||12;
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const timestring=`${hours}:${minutes}:${seconds} ${meridium}`;
    document.getElementById("clock").textContent=timestring;
}
updatecolck();
setInterval(updatecolck,1000);