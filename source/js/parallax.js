var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
	offset: $(window).height(),
	duration: $(window).height()
})
.setPin(".slide2");

console.log("test");

scene1.addTo(controller);