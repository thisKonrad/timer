/* ::>> -- Count down Timer -- <<:: */

'use strict';


/* display items */
const display = document.querySelector('#display');
const hourDisplay = document.querySelector('#hours');
const minDisplay = document.querySelector('#minutes');
const secDisplay = document.querySelector('#seconds');

/* time set buttons */
const set = document.querySelector('#set');
const hourSet = document.querySelector('#hour-set');
const minSet = document.querySelector('#min-set');
const secSet = document.querySelector('#sec-set');

const up = document.querySelector('#up');
const down = document.querySelector('#down');

/* operate Buttons */
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');


let sec = 0;
let min = 0;
let hour = 0;

let timeInt;

let setMinutes = false;
let setSeconds = false;
let setHours = false;


/* :: justification functions :: */

hourSet.addEventListener('click',()=>{ 
    setHours = true;
    setMinutes = false;
    setSeconds = false; 
});

minSet.addEventListener('click',()=>{ 
    setMinutes = true;
    setHours = false;
    setSeconds = false; 
});

secSet.addEventListener('click',()=>{ 
    setSeconds = true; 
    setHours = false;
    setMinutes = false;
});


up.addEventListener('click',()=>{
    if(setHours === true){
        upHour();}
    else if( setMinutes === true){
        upMinute();} 
    else if( setSeconds === true){
        upSec();} 
});

down.addEventListener('click',()=>{
    if(setHours === true){
        downHour();}
    else if( setMinutes === true){
        downMinute();} 
    else if( setSeconds === true ){
        downSec();} 
});


function upHour(){

    hour++
    
   /* only show numbers with 2 digits */
   let hourString = hour < 10 ? `0${hour}` : hour;
   hourDisplay.innerText = hourString;

   /* only show numbers till 99 and resume again from 0 */
   if( hour > 99 ){
   hourDisplay.innerText = '00'
   return hour = 0 ;}
};

function downHour(){

    hour--

    let hourString = hour < 10 ? `0${hour}` : hour;
    hourDisplay.innerText = hourString;

    if( hour < 1 ){
    hourDisplay.innerText = '00'
    return hour = 100 ;}
};

function upMinute(){

    min++

    let minString = min < 10 ? `0${min}` : min;
    minDisplay.innerText = minString;

    if( min > 59 ){
    minDisplay.innerText = '00'
    return min = 0 ;}
};

function downMinute(){

    min--
    let minString = min < 10 ? `0${min}` : min;
    minDisplay.innerText = minString;

    if(min < 1){
    minDisplay.innerText = '00'
    return min = 60 ;}
};

function upSec(){

    sec++
    let secString = sec < 10 ? `0${sec}` : sec ;
    secDisplay.innerText = secString;

    if( sec > 59 ){
    secDisplay.innerText ='00'
    return sec = 0 ;}
};

function downSec(){

    sec--
    let secString = sec < 10 ? `0${sec}` : sec ;
    secDisplay.innerText = secString;

    if(sec < 1){
    secDisplay.innerText = '00'
    return sec = 60;
    }   
};


/* :: timer functions :: */

function resetTimer(){

    sec = 0;
    min = 0;
    hour = 0;

    hourDisplay.innerText = '00';
    secDisplay.innerText = '00';
    minDisplay.innerText = '00';

    clearInterval(timeInt)

};


function timer(){

    timeInt = setInterval(()=>{ 

    /* second */
    sec--

    if( sec === -1 ){ 
        sec = 59
    } 

    let secString = sec < 10 ? `0${sec}` : sec ;
    secDisplay.innerText = `${secString}`;

    sec < 0 ? secDisplay.innerText = '00' : sec;

    /* minute */
    if( sec === 59){
        min-- ;
    }

    let minString = min < 10 ? `0${min}` : min ;
    minDisplay.innerText = `${minString}`;

    min < 0 ? minDisplay.innerText = '00' : min ;

    /* hour */
    if( min === -1 ){
        minDisplay.innerText = '59'
        min = 59
        hour -= 1  ;}
    else if( min === 60){
        minDisplay.innerText = '00' ;
    }
    
    let hourString = hour < 10 ? `0${hour}` : hour ;
    hourDisplay.innerText = `${hourString}`;

    hour < 0 ? hourDisplay.innerText = '00' : hour;

    /* clear the Display when timer ends */
    if( display.innerText == '00 : 00 : 00'){
        resetTimer();
    }

   },(1000));

};


startBtn.addEventListener('click',()=>{

    if( display.innerText === '00 : 00 : 00'){
        return } 
    else{ timer();}}
);

stopBtn.addEventListener('click',()=>{

    clearInterval(timeInt)

});

resetBtn.addEventListener('click', resetTimer);