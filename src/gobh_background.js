/* eslint-disable no-undef */
const callback = (details) => {
	chrome.tabs.sendMessage(details.tabId, { status: 'loaded' });
};

const filter = {
	urls: ['*://profile.intra.42.fr/users/*/goals?cursus=*'],
	types: ['xmlhttprequest'],
};

// Workaround to wake up the service worker
chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
	console.log('wake me up');
});

chrome.webRequest.onCompleted.addListener(
	callback,
	filter,
	[],
);

