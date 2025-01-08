//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{
	const message="DOM load success";
	
	const textNode=document.createTextNode(message);

	document.body.appendChild(textNode);
})