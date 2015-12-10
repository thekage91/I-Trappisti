
$(document).ready(function(){

	$('#order-bicchiere').click(function(){

		$('.order-form').removeClass("hidden");	
		$('#newsletter').addClass("hidden");
		$('.price-bicchiere').removeClass("hidden");
		$('.price-semplice').addClass("hidden");
		$('#pay_form_bicchiere').removeClass("hidden");
		$('#pay_form_semplice').addClass("hidden");

	});

	$('#order-semplice').click(function(){

		$('.order-form').removeClass("hidden");
		$('#newsletter').addClass("hidden");
		$('.price-semplice').removeClass("hidden");
		$('.price-bicchiere').addClass("hidden");
		$('#pay_form_bicchiere').addClass('hidden');
		$('#pay_form_semplice').removeClass('hidden');
	});
})


