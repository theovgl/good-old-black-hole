function saveSettings() {
	const smileyState = document.getElementById('smiley').checked;
	const dateState = document.getElementById('date').checked;
	const colorState = document.getElementById('dynamic-color').checked;

	console.log(smileyState, dateState, colorState);
	chrome.storage.sync.set({
		displaySmiley: smileyState,
		displayDate: dateState,
		dynamicColor: colorState
	}, console.log("Settings saved"));

	chrome.storage.sync.get(['dynamicColor'], (details) => {
		console.log(details.key);
	});
}

document.getElementById('save_settings').addEventListener('click', saveSettings);
