document.body.addEventListener('click', e => {
	const button = e.target.closest('.hide-button');

	if (!button) return;

	button
		.closest('.container')
		.querySelector('.hidden-block')
		.classList.toggle('hidden-block_opened');
	button
		.closest('.container')
		.querySelectorAll('.hide-button')
		.forEach(item => {
			item.classList.toggle('hide-button_opened');
		});
});
