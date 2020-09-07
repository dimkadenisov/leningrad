const handleLanguageSelectorOpen = function(event) {
	this.classList.add('language-selector_opened');
};
const handleLanguageSelectorCLose = function(event) {
	this.classList.remove('language-selector_opened');
};

document.querySelectorAll('.language-selector').forEach(selector => {
	selector.addEventListener(
		'click',
		handleLanguageSelectorOpen,
		handleLanguageSelectorCLose,
	);
});

document.querySelectorAll('.language').forEach(language => {
	language.addEventListener('click', function(event) {
		if (language.closest('.language-list')) {
			const appendTarget = language.parentNode;
			const selector = language.closest('.language-selector');
			const oldLanguage = selector.querySelector(
				'.language-selector__current .language',
			);
			oldLanguage.parentNode.appendChild(language);
			appendTarget.appendChild(oldLanguage);
			selector.classList.remove('language-selector_opened');
			selector.removeEventListener('click', handleLanguageSelectorOpen);
			setTimeout(() => {
				selector.addEventListener('click', handleLanguageSelectorOpen);
			}, 200);
		}
	});
});
