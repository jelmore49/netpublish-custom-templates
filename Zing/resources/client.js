/*global document, window, console */
/*jslint bitwise: false, devel: true, regexp: true, browser: true, sloppy: false, eqeq: false, white: true, plusplus: false, maxerr: 50, indent: 4 */
// NOTE: "console" is a reference to the Firebug console, for debugging in Firefox.
var Client = {
	initPage: function () {
	}
},
store = Lawnchair({name:'testing'}, function(store) {
	// Create an object
	var me = {key:'brian'};

	// Save it
	store.save(me);

	// Access it later... Yes even after a page refresh!
	store.get('brian', function(me) {
		console.log(me);
	});
});
// Document ready? Let's go!
window.onload = Client.initPage;
