function popup() {
	console.log("hello world" + new Date() );
    browser.tabs.create({
        url: ("https://messenger.com"),
    });
	window.open("https://messenger.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}

browser.browserAction.onClicked.addListener(popup);
