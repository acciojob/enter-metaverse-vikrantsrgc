//your JS code here. If required.
let paraEle = document.getElementById("status");
let enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click",()=>{
	// create a new h1 elemet 
	const h1 = document.createElement("h1")
	h1.textContent = "Entered Metaverse"
	
	paraEle.replaceWith(h1)
})
