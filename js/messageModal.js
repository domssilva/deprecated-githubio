if (window.location.search) {
	let emailSentStatus
	let queries = window.location.search.split(/[?=&]+/gi)
		.filter(str => str !== '')

	if (queries[0] === 'sent') {

		emailSentStatus = queries[1]
		const modal = document.getElementById('emailStatus')
		const modalTitle = modal.querySelector('h6')
		const modalMessage = modal.querySelector('p')
    const modalCloseBtn = modal.querySelector('.modal-close')

    modal.style.display = 'block'

    modalCloseBtn.addEventListener('click', () => {
      modal.style.display = 'none'
    })

		switch(emailSentStatus) {
			case 'fail':
				modalTitle.style.color = 'red'
				modalTitle.innerText = 'email not sent.'
				modalMessage.innerText = 'Something went wrong. Please check if you put a valid email.'
				break;
			
			default:
				modalTitle.style.color = 'green'
				modalTitle.innerText = 'email sent.'
				modalMessage.innerText = 'Thank you for getting in touch! I\'ll reply as soon as possible'
		}
	}
}