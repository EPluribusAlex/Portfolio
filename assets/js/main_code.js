$.fn.isOnScreen = function() {
  const 
  	win = $(window),
    viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
  	},
  	bounds = this.offset();
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();
  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

$(function() {

	const sceneTl = gsap.timeline({repeat: 0, defaults: {ease: "power1"}});

	let target = "grid-1";

	function changeScene(scene) {
		sceneTl.to("#scenery", {opacity: 0, duration: 1})
					 .set("#scenery", {backgroundImage: scene})
					 .to("#scenery", {opacity: 1, duration: 1.5});
	}

  $("#wrapper").scroll(function() {
  	if($(".grid-1").isOnScreen()) {
  		if(target !== "grid-1") {
  			changeScene("url('assets/media/images/blur.jpg')");
  			target = "grid-1";
  		}
  		console.log("grid 2");
  	} 
  	else if($(".grid-2").isOnScreen()) {
  		if(target !== "grid-2") {
  			changeScene("url('assets/media/images/city.jpg')");
  			target = "grid-2";
  		}
  		console.log("grid 2");
  	} 
  	else if($(".grid-3").isOnScreen()) {
  		if(target !== "grid-3") {
	  		changeScene("url('assets/media/images/salmon_beach.jpg')");
	  		target = "grid-3";
	  		}
	  	console.log("grid 3");
  	}
  });

});
