/*
var a=5;
var b=6;
//var result=sum(a,b);
//alert(result);

function sum( c, d)
{
	var sum=c+ d;
	return sum;
}
// Function inside function
function display(x,y,fn)
{
	x=x+10;
	y=y+10;
	return fn(x,y);
}

function sum(x,y)
{
	return x+y;
}
var sumresult =display(10,10,sum);
var res=display(10,10, function (x,y) {return x*y;})
alert(sumresult);
 //alert(res);

 var globalvar="Global";
 disp();
 function disp()
 {
 	var localvar ="local";
 	alert(localvar);
 	globalvar="modified globalvar";
 }

 //alert(globalvar);

 //alert(localvar);

//nested function
var globalfun = function()
{
	var localfun=function()
	{
		var lvar="localfunction";
		alert(lvar);
	}
	localfun();
 	//alert(globalvar);
 }
 globalfun();
 
// Using Index Function
var name = "My name ais khan";
var length =name.length;
//alert(length);
var index = name.indexOf("a",5); //a=13
var index = name.indexOf("a",4); //a=4
//alert(index);

var pos= name.lastIndexOf("a",2);
alert(pos);

// Replace function
var replacestr= name.replace("name", "shyam");
alert(replacestr);

*/

//object Property
/*
var employee={
	name:"Shyam",
	Band:"Wista",
	Position:"Dev",
	currentInfo :function ()
	{
		return this.name+this.Band+this.Position;
	}
};
alert(employee.currentInfo());

var name ="akbkcdefgdhijklsdfsf";
var res=name.lastIndexOf("d",10);
alert(res);
*/
//Array Property
/*
var arr=[5,"Hello",11,12,"Shyam"];
alert(arr);
alert(arr.sort());
var arraydemo=[];
arraydemo[0]="Hello";
arraydemo.push("World"); //entering element at the last
arraydemo.pop(); // removing element at the last.
//For displaying array element no need to use loop.
alert(arraydemo);

var firstarray=["my", "name"];
var secondArray=["name", "is", "khan"];
				alert(firstarray);
				alert(secondArray);

var thirdArray=firstarray.concat(secondArray); // adding more than two array and store in third array
alert(thirdArray);
var joined = thirdArray.join("*"); // join the array with given character or element
alert(joined);
var reversed =thirdArray.reverse(); // reverse the all element, start from last to first.
alert(reversed);
*/

/*

if([])
{
	alert(" Array true"); //true
}
if({})
{
	alert(" curlybraces true"); //true
}
if("")
{
	alert(" string withoutspace true"); //false
}
if(" ")
{
	alert(" string with space true"); //true
}
if('')
{
	alert(" character withoutspace true"); //false
}
if(' ')
{
	alert(" character with space true"); //true
}
var foo =null;
if (foo) {alert("null value");// false
}

 //if (()) { alert("beaces true");} //not accepeted
*/

//Confirm Function
/*
var loc=location;
alert(loc);

if(confirm("Do you want to go to google.com?"))
{
		location="http://google.co.in"
}
else if(confirm("Thanks for staying, Do you want to use our window property")){
		alert("window property enable")
}
else{
	alert("window property off")
}
*/
/*
// Working on Docuemnt object.
(function () // anonymus function
{
	var pElement=document.getElementsByTagName('p'); //calling by tag name

	alert(pElement.length);

	//finding last p elements // treat them as array. It is having nodeList
	var lastElement = pElement[pElement.length-1];
	alert(lastElement);

	var pElementByID = document.getElementById("para"); //finding through ID
	//if Id is not found, it will return null
	alert(pElementByID.parentNode); // to find parent element.

	//Both above methods are very old. Use new method querySeletor

	var pElementByQuerySelector= document.querySeletor("p"); // select first p element
	alert(pElementByQuerySelector);

	var pElementByQuerySelectorAll= document.querySeletorAll("p"); // select all p 
	//element
	alert(pElementByQuerySelectorAll);

	var pElementByQuerySelectorbyID= document.querySeletor("div p"); // select all the
	//p element which is inside the div
	alert(pElementByQuerySelector);

 var pElementByQuerySelectorAllbyID=document.querySeletor("#para");
 alert(pElementByQuerySelectorAllbyID); // select element with particular ID
}());

*/

//Working with creating new element 
/*
var doc=document,
	pElement=doc.createElement("p"),
	content=doc.createTextNode(" is a newly created paragraph"); //Inserted text in element
	pElement.appendChild(content); //added content to particular element
	doc.body.appendChild(pElement); //added newly created element to parent element.

	var divElement =doc.createElement("div"); // created new element div
	divElement.id="divid"; // giving ID to div
	divElement.class="divclass";
	divElement.appendChild(content); // adding content text inside div
	doc.body.appendChild(divElement); //adding div to parent element body
	
 pElementInsideDiv=doc.createElement("p"); // created new element p
	var pContent =doc.createTextNode("P text inside div"); // created new text
	//vElement.appendChild("pElementInsideDiv");
	pElementInsideDiv.innerHTML ="This is modified Text of p"; //alternate way to add text
//ElementInsideDiv.appendChild(pContent); //adding content text to paragraph
	pElementInsideDiv.id="para inside div"; //giving id to p
	var divID=doc.getElementById("divid"); // finding newly created div
	divID.appendChild(pElementInsideDiv); // adding newly created p to div

	//adding beside para
	var pid = doc.getElementById("para");
	pid.parentNode.appendChild(pElementInsideDiv); // adding newly created p to parents of 
	 //para i.e div
	 pid.parentNode.insertBefore(pElementInsideDiv,pid);//adding before given element
//pid.parentNode.replaceChild(pElementInsideDiv,pid); //replacing pid to pElementInsideDiv
*/

/*
// Manipulating CSS with Js

	var paraId=document.getElementById("para"); //fetching div element
	var paraStyle=paraId.style; // using style property
	paraStyle.color="Blue"; //assigning color to it
	alert(paraStyle.color);
	paraStyle.backgroundColor="Red"; // In case of - element, Captilise that Character
	 //"C" in this case, backgorund-color => backgroundColor
	 /*
paraId.className=" css-class  css-class2 ";//ating classes last one apply first in css
paraId.className=paraId.className.replace(" css-class2 ",""); //removing one of class
*/
/*
paraId.className=""; // to removing all the classes */
//adding classes through classList
/*
paraId.classList.add("css-class");
paraId.classList.add("css-class2");
paraId.classList.remove("css-class2"); //removing one of the class */
/*
paraId.classList.toggle("css-class");
paraId.classList.toggle("css-class"); */
/*
var currentColor =window.getComputedStyle(paraId,null).getPropertyValue("color");
alert(currentColor);
var currentColorByCurrentMethod =paraId.currentStyle["color"];
alert(currentColorByCurrentMethod);
*/
/*
function setTimeOutFun()
{
	for(var i =0; i<9;i++) 
	{
	console.log( "This function is execcuted " +(i+1)  +" times" );     //ritting into console window.
}
clearTimeout(timer); // for clearing time out
// in place of clearTimeout, clearInterval can be used.

	/*
	setTimeout(setTimeOutFun,2000); */
 //}
/*
var timer =setTimeout(setTimeOutFun,2000); // setting timeout for any function
//in place of setTimeout, setInterval can be used
*/
/*
 function movingBox()
 {
 var BoxId=document.getElementById("Box");
 var left = BoxId.offsetLeft;

 var top=BoxId.offsetTop;
 var move =10;
 var minusmove=-10;
 var leftlimit=520;
 var toplimit=520;
 BoxId.style.left=left+move+"px";
 
 if (left>500) {
 	//BoxId.style.left=50px;
 	BoxId.style.left=leftlimit+"px";
 	BoxId.style.top=top+move+"px";
 	
 	if (top>500) {

 		BoxId.style.left=left+minusmove+"px";
 		BoxId.style.top=toplimit+"px";
 			if (left<50) {
 				clearTimeout(timer);
 			}
 	}
 	 }
 	 
 }
 var timer = setInterval(movingBox,50);
 */

 //Event handler 
 /*
var normalButtonId=document.getElementById("normalbutton");
normalButtonId.onclick=function(){
	document.body.className="normal"; //add css class dynamically
}
var changeButtonId=document.getElementById("changebutton");
changeButtonId.onclick=function(){
	document.body.className="change";
}
*/
 	var buttonNormalClick=function(evt){
 		document.body.className="normal";
 		alert(evt.type);
 		alert(evt.target);
 	}
 	var buttonChangeClick = function(evr){
 		document.body.className="change";
 		alert(evt.type);
 		alert(evr.target);
 	}

var normalButtonId = document.getElementById("normalbutton");
var changeButtonId=document.getElementById("changebutton");
normalButtonId.addEventListener("click",buttonNormalClick,false); //false for bubbling event
changeButtonId.addEventListener("click",buttonChangeClick,false);
//remove eventListener give the same parameter as of calling event
//normalButtonId.removeEventListener("click",buttonNormalClick,false);


 

