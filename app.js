//alert("hello world");
//var a=5;
//var b=10;
//var c=a+b;
//alert(c);
/*var a=5;
var b=10;
var c=a+b;
console.log(c);
var x=5;
var a="ali";
var z=x+a;
var f=20;
var g="2";
var h=f*g;
alert(h);
var a=3;
var b=5;
var c=7;
var d=b-a*c;
alert(d);
var a=5;
var b=a++;
alert(b)
var x=10;
var y=x++ + ++x -x+x++ -++x+x;
alert(y);
var a=+prompt("Enter your age","your age is:");
var b=a+10;
console.log("your output is:",+b);
document.write("kk"+b);
var age =+prompt("enter your age");
if(age==28)
{
    alert("your age is less")
}
else{
    alert("you are no more with less age");
}
var a="5";
if(a===5)
{
    alert(true);
}
else{
    alert("false");
}*/
// var name ="knooz";
// var name1="Sana";
// var name2="ali";
// console.log(name1);
// console.log(name2);

// var students=["knooz","Sana","ali",01];

// console.log(students[0]);
// alert("welcome "+ students[3]);
// var students=[];
// students[0]="ali";
// students[1]="sana";
// document.write(students[0]);

var students=["knooz","Sana","ali",01];
// students.pop();
// students.push("57",03);
// students.shift();
// students.unshift("MIRZA");
// console.log(students);   
// students.splice(1,1);
// console.log(students);
// var copyStudents=students.slice(1,4);
// console.log(students);
// console.log(copyStudents);
// console.log(copyStudents[0]);
// chapter 18 loop
// for(var a=1;a<=10;a++)
// {
//     console.log(a);
// }
// var k=["ali","knooz","abdullah"];
// for(var o=0;o<k.length;o++)
// {
//     console.log(k[o]);
// }
// chapter #20
// var names=["knooz","Zainab","Nimra"];
// var second=["Fatima"];
// for(var i=0;i<names.length;i++)
// {
//     for(var j=0;j<second.length;j++)
//     {
//         console.log(names[i]+" "+second[j]);
//     }
// }
// var word=prompt("enter a word");
// var check="";
// for(var i=word.length-1;i>=0;i--)
// {check=check+word[i];

// }
// if(word===check)
// {
//     console.log("palendrome");
// }
// else{
//     console.log("not palendrome");

// }
// var name="ali";
// // name=name.toUpperCase();
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// var name="knooz fatima";
// // name.indexof("o");

// console.log(name.indexOf("o"));

// var val1=+prompt("enter first value");
// var sign=prompt("enter operator");
// var val2=+prompt("enter Second value");

// console.log(val1+sign+val2);
// if(sign==='+')
// {
//     alert(val1+val2)
// }
// else if(sign==='-')
// {
//     alert(val1-val2);
// }
// else if(sign==='*')
// {
//     alert(val1*val2);
// }
// else if(sign==='/')
// {
//     alert(val1/val2);
// }
// else if(sign==='%')
// {
//     alert((val1/val2)*100+"%");
// }
// var equ=prompt("enter your equation:");
// var num=equ.length;
// var t;
// for(var i=0;i<num;i++)
// {
//     if(equ.slice(i,i+1)==='+')
//     {
//         alert("sign is there");
//     }
// }
// var city=prompt("enter city");
// var fchar=city.slice(0,1);
// var otherchar=city.slice(1);
// fchar=fchar.toUpperCase();
// otherchar=otherchar.toLowerCase();
// city=fchar+otherchar;
// // alert(city); 
// var text="the newyork magazine doesnot allow the world war II i amm kk";
// for(var i=0;i<text.length;i++)
// {
//     if(text.slice(i,i+12)==="world war II")
//     {
//         text=text.slice(0,i)+"the second world war";
//         console.log(text);
//     }
// }
// var indexnum=text.indexOf("world war II")
// var index=text.indexOf("world war II");
// var replacing="second world war";
// var first=text.slice(0,index);
// var last=text.slice(index+12);
// console.log(first+replacing+last);
// var a="knooz";
// console.log(a.charAt(0));
// var a="knooz";
// a=a.replace(/o/g,'i');// all character o with i with /global  
// console.log(a);
// var num=0.2;
// // var round =Math.round(num);
// // console.log(round);
// // var ceil=Math.ceil(num);
// // console.log(ceil);
// var floor=Math.floor(num);
// console.log(floor);
// var heads=prompt("enter heads user name");
// var tails=prompt("enter tails user name");
// var toss=Math.random()*2;
// var flooor=Math.floor(toss);
// if(flooor===0)
// {
//     alert("heads "+ heads +" win the toss");
// }
// else{
//     alert("Tails "+ tail+" win the toss");
// }
// var a="10";
// // var number=Number(a);
// var number=parseInt(a);
// console.log(number);
// var num=10;
// var string=num.toString();
// console.log(string);
// var num=10.5454545;
// var cont=num.toFixed(2); //fixed decimal digits with round
// console.log(cont);
// var a=new Date();
// document.write(a);
// var da=a.getDay();
// document.write("<br>",da);
// document.write(a.getFullYear());
//age*******************************************************************************************************
// function age()
// {
// var dob=new Date("Dec 26,1991");
// var dobmili=dob.getTime();
// document.write(dobmili);
// var today=new Date();
// var dobtoday=today.getTime();
// var diff=dobtoday-dob;
// var convert=diff/(1000*60*60*24*30*12);
// document.write(convert);
// var acc=Math.floor(convert);
// document.write("<br>",acc);
// }
// age();
// var a=new Date();
// a.setFullYear(2001);
// document.write(a);
//functionsx**************************************8888
// function greeting(a,b,c)
// {var f=15;
//     var z=a+b+c;
//     return z;
// }
// var add=greeting(1,7,3);
//  document.write(add);
// // alert(f);
// function a(b,c=9)
// {
//     document.write(b+c);
// }
// a(2,3);

// while loop
// class#15
// var a=0;
// // while(a<10)
// // {
// //     console.log(a);
// //     a++;
// // }
// do{
//     document.write(a);
//     a++;
// }
// while(a<10);
// function getName()
// {
//     var name=document.getElementById("name");
//     alert(name.value);
//     name.value=""
// }
// function setName()
// {
//     var name=document.getElementById('name');
//     name.value="knooz";
//     var para=document.getElementById("para");
//     para.innerHTML="hello this is example"
// }
// setName()
function getNumber(num)
{
var result=document.getElementById("result");
result.value+=num;
}
function clearResult()
{
    var result=document.getElementById("result");
    result.value="";
}
function getResult()
{var result=document.getElementById("result");
// console.log(result.value)
result.value=eval(result.value);
}