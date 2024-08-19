const one=document.getElementById("1");
const two=document.getElementById("2");
const three=document.getElementById("3");
const four=document.getElementById("4");
const five=document.getElementById("5");
const six=document.getElementById("6");
const seven=document.getElementById("7");
const eight=document.getElementById("8");
const nine=document.getElementById("9");
const zero=document.getElementById("0");
const clear=document.getElementById("AC");
const equals=document.getElementById("=");
const plus=document.getElementById("+");
const minus=document.getElementById("-");
const into=document.getElementById("*");
const by=document.getElementById("/");
let res=0;
let num1=0;
let num2="";
one.onclick=function(){
    res+=1;
    res=String(res);
    document.getElementById("Result").textContent=res;
}
two.onclick=function(){
    res+=2;
    res=String(res);
    document.getElementById("Result").textContent=res;
}
three.onclick=function(){
    res+=3;
    res=String(res);
    document.getElementById("Result").textContent=res;
}
four.onclick=function(){
    res+=4;
    res=String(res);
    document.getElementById("Result").textContent=res;
}
five.onclick=function(){
    res+=5;
    res=String(res);
    document.getElementById("Result").textContent=res;
}
six.onclick=function(){
    res+=6;
    res=String(res);
    document.getElementById("Result").textContent=res;
}
seven.onclick=function(){
    res+=7;
    res=String(res);
    document.getElementById("Result").textContent=res;
}
eight.onclick=function(){
    res+=8;
    res=String(res);
    document.getElementById("Result").textContent=res;
}
nine.onclick=function(){
    res+=9;
    res=String(res);
    document.getElementById("Result").textContent=res;
}
zero.onclick=function(){
    res+=0;
    res=String(res);
    document.getElementById("Result").textContent=res;
}
clear.onclick=function(){
    res=0;
    res=Number(res);
    document.getElementById("Result").textContent=res;
}
plus.onclick=function(){
    res=Number(res);
    num1=res;
    res+='+';
    res=String(res)
    document.getElementById("Result").textContent=res;
}
minus.onclick=function(){
    res=Number(res);
    num1=res;
    res+='-';
    res=String(res);
    document.getElementById("Result").textContent=res;
}
into.onclick=function(){
    res=Number(res);
    num1=res;
    res+='*';
    res=String(res);
    document.getElementById("Result").textContent=res;
}
by.onclick=function(){
    res=Number(res);
    num1=res;
    res+='/';
    res=String(res);
    document.getElementById("Result").textContent=res;
}
equals.onclick=function(){
    num1=String(num1);
    let x=num1.length;
    num1=Number(num1);
    num2=res.slice(x+1);
    num2=Number(num2);
    let op=res.charAt(x);
    if(op=='+'){
        num1+=num2;
    }
    else if(op=='-'){
        num1-=num2;
    }
    else if(op=='*'){
        num1*=num2;
    }
    else if(op=='/'){
        num1/=num2;
    }
    document.getElementById("Result").textContent=num1;
}
