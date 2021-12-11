 // handle actve state 
 function handleActive(ev){
 	ev.target.parentElement.querySelectorAll(".active").forEach(element => {
 		element.classList.remove("active");

 	});
 	ev.target.classList.add("active");
 }



// if is there is local storage in the website
let mainColors = localStorage.getItem('color_option');
// check if there is data in localstorge
 let backgroundoption = true;
let backgroundlocalitem = 
 localStorage.getItem('background_option');
 ///////////////////////////////////////////////////////
 ///////////////////////////////////////////////////
 let bullet_option = localStorage.getItem("bullets_option");
 let bulletcontainer = document.querySelector(".nav-bullets ");
 const bulletsshow = document.querySelectorAll
('.option-box .ce span');

 if( bullet_option !== null){
 	bulletsshow.forEach(span => {
 		span.classList.remove("active");

 	});

 }


bulletsshow.forEach(span => {
	span.addEventListener("click",(e) =>{
		if(span.dataset.display === "no"){
			bulletcontainer.style.display = "none";
			localStorage.setItem("bullets_option","none");
			
			

		}else{
			bulletcontainer.style.display = "block";
			localStorage.setItem("bullets_option","block");
			
		}
		


	});
});

	if( bullet_option === "block"){
	

	document.querySelector(".option-box .ce .yes").classList.add("active");
}else{
	
	document.querySelector(".option-box .ce .no").classList.add("active");
}


 ////////////////////////////////////////
 /////////////////////////////////////////
if(backgroundlocalitem !== null){
	

if(backgroundlocalitem  === "true"){
	backgroundoption = true;
}else{
	backgroundoption = false;

}
// remove active class from All options

document.querySelectorAll(".option-box .center span")
.forEach( element => {
	element.classList.remove('active');

	if(backgroundlocalitem === "true" ){
		document.querySelector(".yes").classList.add("active");
	}else{
		document.querySelector(".no").classList.add("active");
	}
});
//;;;;;;;;;;;;;;;;;;;;;;


}
if(mainColors !== null){
/*	console.log('local storage is not empty');*/
document.documentElement.
		style.setProperty('--main-color',
			mainColors);
//remove Active class from  All colors list Item

document.querySelectorAll(".colors-list li")
.forEach( element => {
	element.classList.remove('active');

	if(element.dataset.color === mainColors ){
		element.classList.add("active");
	}
});
};


// toggle class for setting-box and gear
 document.querySelector(".setting-box .icon").onclick = function(){

 	this.classList.toggle("fa-spin");
 	this.classList.toggle("background");
	document.querySelector(".setting-box")
	.classList.toggle("open");
};
 let btn = document.querySelector(".header-area span");
 let link = document.querySelector(".links");

 btn.onclick = function(e){
 	if(e.target == btn){
 		this.classList.toggle("background");
 		link.classList.toggle("slide");
 	}
 	if(e.target !== btn){
 	link.classList.remove("slide");	
 	link.style.display = "none";	
 	}
 	

 };

/*$('.setting-box .icon').click(function(){
	$(this).toggleClass(' fa-spin ');
	$('.setting-box').toggleClass(' open ');
});
*/
$('.header-area .span').click(function(){
	$(this).toggleClass('  background ');
	$('.links').toggleClass('slide');
	$('.links').fadeToggle(100);
});

// Change Color
const colorli = document.querySelectorAll
('.colors-list li');

colorli.forEach(li => {
	li.addEventListener("click",(e) => {
		document.documentElement.
		style.setProperty('--main-color',
			e.target.dataset.color);
// set color in the root
localStorage.setItem('color_option',e.target.dataset.color);
//remove Active class from childrens

/*e.target.parentElement.querySelectorAll(".active")
.forEach(element => {
	element.classList.remove('active');
});
// Add active class on the Target
e.target.classList.add('active');
*/
handleActive(e);
	});
});
////////////////////////////////////////////
////////////////////////////////////////////

////////////////////////////////////////////
////////////////////////////////////////////
// Change background

 // veriable to control the interval
 let backgroundinterval ;
const ranbackimg = document.querySelectorAll
('.option-box .center span');


ranbackimg.forEach(span => {
	span.addEventListener("click",(e) => {
		

/*e.target.parentElement.querySelectorAll(".active")
.forEach(element => {
	element.classList.remove('active');
});
// Add active class on the Target
e.target.classList.add('active');*/
handleActive(e);

if(e.target.dataset.background === "yes"){
backgroundoption = true;
randomizeimgs ();
localStorage.setItem('background_option',true);
}else{
backgroundoption = false;

localStorage.setItem('background_option',false);
clearInterval(backgroundinterval);
}

	});
});



////////////////////////////////////////////
// SELECT LANDING PAGE BACKGROUND CHANGE

let landingPage = document.querySelector(".landing-page");

// get Array for images

let imageArray = ["image2.jpg","image3.jpg",
"image6.jpg"];
// Set Time for change

 function randomizeimgs (){
 	if(backgroundoption === true){
 	backgroundinterval = setInterval(() =>{
	// Get random Number
	let randomNumber = Math.floor(Math.random() * imageArray.length);
	//Change Background Image url

landingPage.style.backgroundImage = "url('images/"+ imageArray[randomNumber]+"')";

},2000);

 	}

 }
randomizeimgs ();

// Select Skills selectorskills

let ourskills =document.querySelector(".Our-skills");

// Get Scroll top
window.onscroll = function(){


	// window Scroll Top

// Skills Offset Top

let skilloffsettop = ourskills.offsetTop;

// Skill Outer height 
let skillOuterHeight = ourskills.offsetHeight;

// window height 
let windowHeight =this.innerHeight;

// window Scroll Top
let windowScrollTop = this.pageYOffset;

if( windowScrollTop > (skilloffsettop  + -100 + skillOuterHeight - windowHeight)){
let allskills =document.querySelectorAll(".skill-progress span");
allskills.forEach(skill => {
	skill.style.width = skill.dataset.progress;
});
}else{
	let allskills =document.querySelectorAll(".skill-progress span");
allskills.forEach(skill => {
	skill.style.width = 0;});
};
if( windowScrollTop > 500){
 document.querySelector(".setting-box .icon").style.color = "#555";
}
else{
	document.querySelector(".setting-box .icon").style.color = "#FFF";
};

};
//==================================
//----------------------




// I Was Try to Do it
let gallery = document.querySelectorAll('.images-box img');

// loop on the images
gallery.forEach(img =>{
	img.addEventListener('click', (e) => {

		// Create Overlay Element

		let Overlay = document.createElement("div");

		// Add Class To Overlay

		Overlay.className = "popup-overlay";

		// Append Overlay To The Body

		document.body.appendChild(Overlay);
		
		

		// Create Popup
		let Popup =  document.createElement('div');
		// Add class Name
		Popup.className = "popup";

		// Append to over lay
		// Append text heading to Popup
		if(img.alt !== null){
			// create h4
		let Popupname = document.createElement('h3');
		// Create text for heading
		let imgtext = document.createTextNode(img.alt);
		// append text to the heading
		Popupname.appendChild(imgtext); 
		Popup.appendChild(Popupname);


		}
		
		
		// create img
		let Popupimg = document.createElement('img');
		// set image source
		Popupimg.src = img.src;
		// append img to Popup
		Popup.appendChild(Popupimg);
		// append popup to Body


		document.body.appendChild(Popup);
		// Create spna close

		let spanclose = document.createElement('span');
		// add class to span

		spanclose.className = "closespan";
		// create text node
		let textspan = document.createTextNode("x");
		// append text to span
		spanclose.appendChild(textspan);

		Popup.appendChild(spanclose);


		// My Way to remove And it is very successful
		//=================================
		/*spanclose.onclick = function(){
			Overlay.remove();
			Popup.remove();
		}*/
		//==================================



	});
});
document.addEventListener("click", (e) => {

	if(e.target.className == "closespan"){
		// Remove The Current Popup
		e.target.parentNode.remove();
		// Remove Gallery
		document.querySelector('.popup-overlay').remove();

	}
});

// Start bullets 
/*const bullets = document.querySelectorAll(".nav-bullets .bullet");
 bullets.forEach(bullet => {
 	bullet.addEventListener("click",(e) => {
 		document.querySelector(e.target.dataset.section).scrollIntoView({
 			behavior: "smooth"
 		});
 	});
 });

 // all links
const links = document.querySelectorAll(".links li a ");

 links.forEach(link => {
 	link.addEventListener("click",(e) => {
 		e.preventDefault();
 		document.querySelector(e.target.dataset.section).scrollIntoView({
 			behavior: "smooth"
 		});
 	});
 })*/;
 function scrollTo(elments){
 	elments.forEach(ele => {
 		ele.addEventListener("click",(e) => {
 		e.preventDefault();
 		

 		document.querySelector(e.target.dataset.section).scrollIntoView({
 			behavior: "smooth"
 		
 		});

 		/*e.target.classList.add('active');*/
 		
 })});};
 const bullets = document.querySelectorAll(".nav-bullets .bullet");
 const links = document.querySelectorAll(".links li a ");
 
 scrollTo(bullets);
 scrollTo(links);

 /////////////////////////
 /*links.forEach(a => {
 	a.addEventListener("click",(e)=>{
 	e.forEach.classList.remove("active");
 	e.target.classList.add("active");
 		});
 
 	
 });
*/

// reset all choices
document.querySelector(".reset-option").onclick =function (){
localStorage.clear();
window.location.reload();
};

////////////////////////
///// My trial to create list 
let section = document.querySelectorAll(".container");

 let allsection = section.forEach(sec =>{
 	sec.parentElement;
 	
 	for( i = 0 ;i<sec.parentElement.length;i++){
 		let li = document.createElement('li');
 		let text =document.createTextNode(parentElement);
 		let list = li.appendChild(text)
 		document.body.appendChild(list);
 	}

 	
 })
