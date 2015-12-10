$(document).ready(function(){

	/*setTimeout(function(){ 

		$('#content').removeClass('hidden');
		$('#content').addClass('animated fadeInUp'); 

	}, 1000);*/

	$('#subscribe-form').ajaxChimp({
		language: 'it',
	    url: 'http://passparyou.us11.list-manage.com/subscribe/post?u=baa6a96ac00514e2d994c55e2&amp;id=00137f3e7c'
	});

	$.ajaxChimp.translations.it = {
		    'submit': '',
		    0: "Grazie! Controlla la tua mail per confermare l'iscrizione",
		    1: 'Per favore inserisci un valore',
		    2: 'Una dirección de correo electrónico debe contener una sola @',
		    3: 'Attenzione! La parte del dominio della mail non è valida',
		    4: 'Attenzione! La parte relativa al nome utente della mail non è valida',
		    5: "L'indirizzo email che hai inserito non è valido. Si prega di inserirne uno valido"
}
})