
let key=document.querySelector(".key");
let display_res=document.querySelector(".display");
let operator=["+","-","*","/","%"];
// Number.MAX_VALUE=9;

let filter =x=>{
    let current=display_res.innerText;
    let last=current[current.length-1];
    // let value=current[current.length];
if(display_res.innerText.length>=11){
    return false;
}
// if(last == "+"){
//     return false;
// }
    // if(operator.includes("%") && operator.includes(last)){
    //    return false;
    // }

    if(current=="0" && x!="."){
    clearOne()
} 

if(operator.includes(x) && operator.includes(last)){
    return false;
}return true;

}


let showDisplay =x=>{
    
    if(filter(x) ){
       display_res.innerText+=x;
    }
    
    // }if(filter(x)==false && display_res.innerText=="%"){
    //     display_res.innerText=display_res.innerText/100;
    // }
    
   }
  
    let calc =_=>{ 
        if(!operator.includes(display_res.innerText[display_res.innerText.length-1])){
            display_res.innerText=eval(display_res.innerText)
        }
    }
  
 let percent=()=> {return display_res.innerText=display_res.innerText/100;}


let del = _ =>display_res.innerText = "";

let clearOne =_=>{
    return display_res.innerText=display_res.innerText.substring(0,display_res.innerText.length-1)
}