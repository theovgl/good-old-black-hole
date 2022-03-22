chrome.runtime.onMessage.addListener((request) => {
	if (request.status == "loaded") {
		const emote = document.getElementsByClassName("emote-bh")[0];
		const daysLeft = emote.getAttribute("data-original-title").replace("days left", "");
		let daysCount = parseInt(daysLeft, 10);
		var bhDate = document.getElementById("bh-date");

		if (daysCount > 42)
			bhDate.style.color = "#69db5a";
		else if (daysCount > 15)
			bhDate.style.color = "#e89e2e";
		else
			bhDate.style.color = "#ff3636";

		bhDate.innerText = daysCount + " days left";
	}
})
