// Golobal Variables

let baseUrl = 'https://api.shrtco.de/v2/shorten?url'

// jQuery Section
$(function () {

	'use strict';
	// Submiting The URL 
	$('#button-addon2').on('click', () => {
		let data = $("#data").val()
		let RgxURL = new RegExp('(http|ftp|https)://[\\w-]+(\\.[\\w-]+)+([\\w-.,@?^=%&:/~+#-]*[\\w@?^=%&;/~+#-])?')
		// Check If URL Vailed Or No 
		if (RgxURL.test(data) && data != '') {
			getShortlyLink(data)
			$('#data').val('')

		} else {
			$('.alert-danger').removeClass('visually-hidden')
		}
	})


	// Submiting Copy Button
	new ClipboardJS('.btn');

	// Submiting Rest Button

	$('#rest').on('click', () => {
		$('.btn-info').addClass('visually-hidden')
		$('#copy').addClass('visually-hidden')
		$('.input-group').removeClass('visually-hidden')
		$('#result a').remove()
	})

});

// Normal Funtions Section

function getShortlyLink(data) {
	$('.alert-danger').addClass('visually-hidden')
	$('.input-group').addClass('visually-hidden')
	$('.spinner').removeClass('visually-hidden')
	let result = ''
	fetch(`${baseUrl}=${data}`).then(response => response.json()).then(data => {

		$('.spinner').addClass('visually-hidden')
		$('.btn-info').removeClass('visually-hidden')
		$('#copy').removeClass('visually-hidden')

		result += `
					<input id="copy" type="text" class="form-control" value="${data.result.full_short_link}"
					aria-label="Username" aria-describedby="addon-wrapping">
					`
		//append the chiled to Result
		$('#result').append(result)
	}).catch(err => console.log(err))

}
