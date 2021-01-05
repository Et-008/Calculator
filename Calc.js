var btn = document.querySelectorAll(".btn");
var clr = document.querySelector(".clr");
var res = document.getElementById("res");

for (var i=0; i < btn.length; i++){
	btn[i].addEventListener("click", function(){
		display.value += this.textContent;
	});
}

clr.addEventListener("click", function(){
	display.value = "";
});

res.addEventListener("click", function(){
	var input = display.value;
	console.log(input);
	var result = eval(input);
	display.value = result;
});