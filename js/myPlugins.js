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

	// Submiting Rest Button

	$('#rest').on('click', () => {
		$('.btn-info').addClass('visually-hidden')
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

		result += `<a href="${data.result.full_short_link}">
			${data.result.full_short_link}
		</a>`
		//append the chiled to Result
		$('#result').append(result)
	}).catch(err => console.log(err))

}