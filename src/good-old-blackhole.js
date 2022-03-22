chrome.runtime.onMessage.addListener((request) => {
	if (request.status == "loaded") {
		var emote = document.getElementsByClassName("emote-bh")[0];
		var daysLeft = emote.getAttribute("data-original-title");
		var bhDate = document.getElementById("bh-date");

		bhDate.innerText = daysLeft;
		daysLeft.innerText = ""

		console.log(daysLeft);
	}
})
