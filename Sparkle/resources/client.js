function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		nav_home_over = newImage("[[= Global.siteRoot ]]/media/nav_home_over.gif");
		nav_browse_over = newImage("[[= Global.siteRoot ]]/media/nav_browse_over.gif");
		nav_favorites_over = newImage("[[= Global.siteRoot ]]/media/nav_favorites_over.gif");
		preloadFlag = true;
	}
}
