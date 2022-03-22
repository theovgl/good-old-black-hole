/* eslint-disable no-undef */
const callback = (details) => {
	chrome.tabs.sendMessage(details.tabId, { status: 'loaded' });
};

const filter = {
	urls: ['*://profile.intra.42.fr/users/*/goals?cursus=*'],
	types: ['xmlhttprequest'],
};

chrome.webRequest.onCompleted.addListener(
	callback,
	filter,
	[],
);
