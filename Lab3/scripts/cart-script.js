let cart = {

};

let images_src = [
	"https://th.bing.com/th/id/OIP.WTYgkVQ_NY9ENGZupHIwgwHaDC?w=309&h=143&c=7&o=5&pid=1.7",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMnJWuIvF5IESqorfAx0nKZJ31jOr8V12xWw&usqp=CAU",
	"https://th.bing.com/th/id/OIP.Y60v50SjRHTZDCZZ3SakbgHaE3?w=278&h=182&c=7&o=5&pid=1.7",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWh6BO6KorpSG7RASR0sL7WwsXh44teyNbVjxP4IoyT3qk1oS0wmN1hhLh2Po23kOWEJk&usqp=CAU",
	"https://th.bing.com/th/id/OIP.1CR9sGe34tsMcUC5KVoXwQHaEo?w=279&h=180&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.AiNJLamHLhimXtvh3MRbxwHaDe?w=345&h=164&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.H7-wIXJEPZPjPASn08-mYAHaEc?w=321&h=192&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.Xezm1ESUgEzvTwoTPJvxFAHaE8?pid=ImgDet&rs=1",
	"https://th.bing.com/th/id/OIP.PM0lunQYrOimJtLGTXST3QHaDF?pid=ImgDet&rs=1",
	"https://th.bing.com/th/id/OIP.nufyrHI0ahXPTK9RREzOWAHaEo?w=281&h=180&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.7NtAsHEanC2ONGHGhIic1QHaEr?w=285&h=180&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.LET7XvaH6iy_iHY1gOLCggHaE7?w=265&h=180&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.UUZwv7ZxniedFTD6TjrVrAHaD4?w=323&h=180&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.nMZIYOnqitW00x2YczOe6QHaDF?w=307&h=145&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.Tg0Kbz4VIR2URVY-caIYOQHaEK?w=282&h=180&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.qe-wNG2hy8YfD-zC2iEYMgHaEK?w=302&h=180&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.CcIVwAPDBSrW5m7srHQV1gHaEO?w=299&h=180&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.Oixd1AnaHt5dwXG8qImf7gHaE8?w=259&h=180&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.zc6QvzKUFuEXc6NRzAlh8wHaE8?w=270&h=180&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.tYnPJQwTHo8g3pW7V4wW2wHaFx?w=214&h=180&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.7Eew87Lz3_oBj-LRyosX3QHaE8?w=244&h=180&c=7&o=5&pid=1.7",
	"https://th.bing.com/th/id/OIP.qxV7wZPVHJsgVt0Bv44s3wHaFA?w=248&h=180&c=7&o=5&pid=1.7",
	"https://media-cdn.tripadvisor.com/media/photo-s/17/da/97/fe/dracula-s-castle-peles.jpg",
	"https://mnogoigr96.ru/800/600/https/esttat.ru/wp-content/uploads/2020/04/kukuruza2.jpg",
	"https://th.bing.com/th/id/OIP.JaoNRQQ5MGvj0YJhDoxD2QHaEo?w=273&h=180&c=7&o=5&pid=1.7"
]

let trips_names = [
	"Ancient Rome",
	"Extreme in RNPP",
	"Meet Florence",
	"Rest in Santorini",
	"Tea in Amsterdam",
	"Wonderful London",
	"Barcelona",
	"Ice and fire",
	"Scotish appeasement",
	"Dreamy Prague",
	"Traditions of Ireland",
	"Sea & Sun in Nice",
	"Turkish fairy tale",
	"Naxos holiday",
	"Snowy Switzerland",
	"Ukrainian traditions",
	"Piece of Madrid",
	"Paradise Canaries",
	"Bialowieza Forest",
	"Mountains of Austria",
	"Danube voyage",
	"Arts of Dresden",
	"Mystical Romania",
	"Corn in Odessa",
	"Weekend in Paris"
]

let trips_prices = [
	290,
	1000,
	260,
	135,
	199,
	299,
	280,
	179,
	395,
	200,
	150,
	270,
	295,
	145,
	379,
	399,
	100,
	255,
	200,
	305,
	199,
	300,
	185,
	50,
	399
]

document.onclick = event => {
	console.log(event.target.id);
	if (event.target.id =="reserve-button") {
		if(document.getElementById('reserve-form').checkValidity()){
			alert("Our managers will contact you as soon as possible");
			document.getElementById('cart-holder').style.visibility = "hidden";
		}
    }
	else if(event.target.classList.contains("in-cart-click")) {

		console.log(event.target.id);
        AddInCart(event.target.id);
    }
	else if(event.target.classList.contains("plus")){
		let id = event.target.id;
		id = id.substring(4);
		Plus(id);
	}
	else if(event.target.classList.contains("minus")){
		let id = event.target.id;
		id = id.substring(4);
		Minus(id);
	}
}

function Plus(id){
	cart[id]++;
	console.log(cart[id]);
	DrawCart();
}

function Minus(id){
	cart[id]--;
	console.log(cart[id]);
	if(cart[id] == 0){
		delete cart[id];
	}
	if(Object.keys(cart).length === 0 && cart.constructor === Object) {
		document.getElementById('cart-holder').style.visibility = "hidden";
	}
	else{
		DrawCart();
	}
}

function DrawCart(){
	let list = document.getElementById("cart-list");
	let elements = document.getElementsByClassName("trip-in-cart");
	while (elements[0]) {
    	elements[0].parentNode.removeChild(elements[0]);
	}
	for(id in cart){
		let trip_div = document.createElement("div");
		let trip_img = document.createElement("img");
		console.log(images_src[id]);
		trip_img.src = images_src[id];
		trip_img.style.height = "150px";
		trip_img.classList.add("col-12", "col-sm-5");
		let trip_name = document.createElement("div");
		trip_name.innerHTML = trips_names[id];
		trip_name.classList.add("col-12", "col-sm-2");
		let trip_minus = document.createElement("div");
		trip_minus.classList.add("minus", "col-1", "col-sm-1");
		trip_minus.innerHTML = "-";
		trip_minus.id = "minu" + id;
		let trip_number = document.createElement("div");
		trip_number.innerHTML = cart[id];
		trip_number.classList.add("col-1", "col-sm-1");
		let trip_plus = document.createElement("div");
		trip_plus.classList.add("plus", "col-1", "col-sm-1");
		trip_plus.innerHTML = "+";
		trip_plus.id = "plus" + id;
		let trip_price = document.createElement("div");
		trip_price.innerHTML = trips_prices[id] * cart[id];
		trip_price.classList.add("col-4", "col-sm-2");
		trip_div.appendChild(trip_img);
		trip_div.appendChild(trip_name);
		trip_div.appendChild(trip_minus);
		trip_div.appendChild(trip_number);
		trip_div.appendChild(trip_plus);
		trip_div.appendChild(trip_price);
		trip_div.classList.add("trip-in-cart", "row");
		trip_div.style.alignItems = "center";
		trip_div.style.justifyContent = "space-around";
		console.log(trip_div);
        list.appendChild(trip_div);
	}
}

function AddInCart(id){
	console.log(cart);
	if(!cart.hasOwnProperty(id)) {
        cart[id] = 1;/*{
            "name": trips_names[id],
            "count": 1,
            "price": trips_prices[id],
            "source": images_src[id]
        };*/
        DrawCart();
    }
    console.log(cart);
}

document.getElementById('view-cart-button').onclick = function (){
	if(Object.keys(cart).length === 0 && cart.constructor === Object) {
		alert("You don't have any trip in the cart");
	}
	else{
    	document.getElementById('cart-holder').style.visibility = "visible";
	}
}

document.getElementById('view-cart-catalogue-button').onclick = function (){
	if(Object.keys(cart).length === 0 && cart.constructor === Object) {
		alert("You don't have any trip in the cart");
	}
	else{
    	document.getElementById('cart-holder').style.visibility = "visible";
	}
}

document.getElementById('cart-close').onclick = function (){
    document.getElementById('cart-holder').style.visibility = "hidden";
}