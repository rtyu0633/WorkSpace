window.onload = function(){
	let h = document.querySelector("h1");

	h.addEventListener("click", function(){
		alert("클릭하셨습니다.");
	});
	let btn = document.querySelector("#btn");
	let name = document.querySelector("#name");

	btn.addEventListener("click", function(){
		console.log(name.value);
	})
}

