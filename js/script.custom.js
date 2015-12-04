
$(document).ready(function(){

	$('#order-bicchiere').click(function(){

		$('.order-form').removeClass("hidden");	
		$('#newsletter').addClass("hidden");
		$('.price-bicchiere').removeClass("hidden");
		$('.price-semplice').addClass("hidden");

	});

	$('#order-semplice').click(function(){

		$('.order-form').removeClass("hidden");
		$('#newsletter').addClass("hidden");
		$('.price-semplice').removeClass("hidden");
		$('.price-bicchiere').addClass("hidden");
		
	});
})


