const btn = document.querySelector(".btn");
const count = document.querySelector(".count");
const milisec = document.querySelector(".milisec");
const sec = document.querySelector(".sec");
const btnRepeat = document.querySelector(".btn-repeat")
const topRes = document.querySelector('.topRes')
let StartStop = btn.dataset.setstop
let topResName = 0
let countName = 0;
const CountIncr = (elem) => {
  if (StartStop==='false'){
    
  stopInter = setInterval(()=>{startTimer()},10)
  StartStop = 'true'
}
  
  countName++;
  count.innerHTML = countName;
  if (topResName<countName){
    topResName = countName}
    topRes.innerHTML = topResName
};
count.innerHTML = countName;
btn.addEventListener("click", CountIncr);

let secName = 0;
let milisecName = 0;

startTimer = () => {
  milisecName++;
  if(secName>=4){
    sec.classList.add('cruz') 
    milisec.classList.add('cruz') 
    } 
  if (milisecName < 10) {
    milisec.innerHTML = "0" + milisecName;
  } else if (milisecName < 100) {
    milisec.innerHTML = milisecName;}

    else if(secName===4){
      
      
      sec.innerHTML = "05"
      milisec.innerHTML = '00'
      clearInterval(stopInter)
      btn.removeEventListener("click", CountIncr)
      setTimeout(() => {
        sec.classList.remove('cruz')
        milisec.classList.remove('cruz')
      }, 700);
      
  
    } 
    
    else if (milisecName > 99) {
    milisecName = 0;
    secName++;
    sec.innerHTML = "0" + secName;
  }
    
  
  
  
};


restarts = ()=>{
  sec.innerHTML = "00"
  milisec.innerHTML = '00'
 
  secName = 0;
  milisecName = 0
  countName = 0
  count.innerHTML = countName
  btn.addEventListener("click", CountIncr)
  StartStop ='false'
  
}
btnRepeat.addEventListener('click',restarts)
topRes.innerHTML = topResName
const ResTop = { 
  top: 0

} 



