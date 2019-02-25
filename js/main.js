//Javascript Document
//
(() => {
//Create a variable stack and grab all of the DOM elements from the page
	let aud = document.querySelector("audio"),
		play = document.querySelector("#playBtn"),
		pause = document.querySelector("#pauseBtn"),
		restart = document.querySelector("#restartBtn");

// writing the fnction fo play, pause, rewind.
	function playBtn(){
		aud.play();
	}

	function pauseBtn(){
		aud.pause(true);
	}

	function restartBtn(){
		aud.currentTime = 0;
	}

//Add event handling
	play.addEventListener("click", playBtn);
	pause.addEventListener("click", pauseBtn);
	restart.addEventListener("click", restartBtn);

})();