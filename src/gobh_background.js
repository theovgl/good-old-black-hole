let callback = function(details) {
	console.log(details)
	chrome.tabs.sendMessage(details.tabId, {status: "loaded"})
}

let filter = {
	urls: ["*://profile.intra.42.fr/users/*/goals?cursus=*"],
	types: ["xmlhttprequest"]
}

chrome.webRequest.onCompleted.addListener(
	callback,
	filter,
	[]
);

