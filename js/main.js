//Javascript Document
//
(() => {
//Create a variable stack and grab all of the DOM elements from the page
	let aud = document.querySelector("audio"),
		play = document.querySelector("#playBtn"),
		pause = document.querySelector("#pauseBtn"),
		restart = document.querySelector("#restartBtn"),
		tracks = document.querySelectorAll(".trackholder");

// writing the function for play, pause, rewind buttons
	function playBtn(){
		aud.play();
	}

	function pauseBtn(){
		aud.pause(true);
	}

	function restartBtn(){
		aud.currentTime = 0;
	}

//Changing audio Source when art is clicked
	function swapSource(){
		let currenttrack = this.dataset.currenttrack;

		aud.src = `audio/${currenttrack}`;
		aud.load();
		aud.play();
	}

//Add event handling
	play.addEventListener("click", playBtn);
	pause.addEventListener("click", pauseBtn);
	restart.addEventListener("click", restartBtn);
//for track changing
	tracks.forEach(track => track.addEventListener("click", swapSource));

})();