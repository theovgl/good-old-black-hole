/* eslint-disable no-undef */
chrome.runtime.onMessage.addListener((request) => {
	if (request.status === 'loaded') {
		const emote = document.getElementsByClassName('emote-bh')[0];
		const daysLeft = emote.getAttribute('data-original-title').replace('days left', '');
		const daysCount = parseInt(daysLeft, 10);
		const bhDateElement = document.getElementById('bh-date');
		const bhDate = bhDateElement.textContent;

		if (daysCount > 42) bhDateElement.style.color = '#69db5a';
		else if (daysCount > 15) bhDateElement.style.color = '#e89e2e';
		else bhDateElement.style.color = '#ff3636';

		bhDateElement.innerText = `${daysCount} days left`;
		emote.setAttribute('data-original-title', bhDate);
	}
});
