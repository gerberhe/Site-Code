$(document).ready(function() {
	$("#button").click(function() {
		var pokeName = $("#pokeName").val();
		if (pokeName == "") {
			pokeName = null;
		}
		var itemName = $("#itemName").val();
		if (itemName == "") {
			itemName = null;
		}
		var happyLev = $("#happyLev").val();
		if (happyLev == "") {
			happyLev = null;
		}
		var pokeLev = $("#pokeLev").val();
		if (pokeLev == "") {
			pokeLev = null;
		}
		var pokeGen = $("#pokeGen").val();
		if (pokeGen == "") {
			pokeGen = null;
		}
		var beautyLev = $("#beautyLev").val();
		if (beautyLev == "") {
			beautyLev = null;
		}

		var link = "images/form-bg.jpg";

		var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pokeName + "</div>";
		$("body").append(html);
	})
})