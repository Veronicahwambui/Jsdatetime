

function time(){
var d = new Date();
var day = d.getDay();
var ndate =  d.toLocaleString();
switch(day){
    case 0:
         day ="sunday";
         break;
    case 1:
         day ="Monday";
         break;
    case  2:
          day = "Tuesday";
          break;
    case 3:
         day = "Wednesday" ;
         break;
    case 4:
         day  ="Thursday" ;
         break;
    case 5:
          day = "Friday";
          break;  
    case 6:
          day = "Saturday";
          break;
     default:
          break;
        

}

   
    var output = document.getElementById('output');
    output.innerHTML = day;
    var numberDate =  document.getElementById("date");
    date.innerHTML=ndate

    numberDate.textContent = d.toLocaleTimeString();
}
setInterval(time,1000);

 