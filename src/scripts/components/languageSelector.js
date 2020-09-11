document.body.addEventListener('click', e => {
	const selector = e.target.closest('.language-selector');
	if (!selector) return;
	selector.classList.toggle('language-selector_opened');
});

document.body.addEventListener('click', e => {
	const currentLanguage = e.target.closest(
		'.language-selector__current > .language',
	);
	if (!currentLanguage) return;
	e.preventDefault();
});
