const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const delateBtn = document.querySelector('.delate');
const archiveBtn = document.querySelector('.archive');
const stopwatch = document.querySelector('.stopwatch');

const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const instruction = document.querySelector('.instruction');
const faQuestion = document.querySelector('.fa-question');
const close = document.querySelector('.close');

const paintRoller = document.querySelector('.fa-paint-roller');
const colors = document.querySelector('.colors');
const purple = document.querySelector('.purple');
const orange = document.querySelector('.orange');
const tomato = document.querySelector('.tomato');
const blue = document.querySelector('.blue');
const colorChange = document.documentElement;

let li;
let number = 0;
let stopwatchMillisecond;
let stopwatchTime;
let millisecond = 0;
let seconds = 0;
let minutes = 0;

// start Stoper

const startStoper = () => {
	clearInterval(stopwatchTime);
	clearInterval(stopwatchMillisecond);
	stopwatchMillisecond = setInterval(() => {
		if (millisecond < 9 && seconds <= 9) {
			millisecond++;
			stopwatch.innerHTML = `${minutes}:0${seconds}.<span class="millisecond">0${millisecond}</span>`;
		} else if (millisecond < 99 && seconds <= 9) {
			millisecond++;
			stopwatch.innerHTML = `${minutes}:0${seconds}.<span class="millisecond">${millisecond}</span>`;
		} else if (millisecond < 9 && seconds <= 59) {
			millisecond++;
			stopwatch.innerHTML = `${minutes}:${seconds}.<span class="millisecond">0${millisecond}</span>`;
		} else if (millisecond < 99 && seconds <= 59) {
			millisecond++;
			stopwatch.innerHTML = `${minutes}:${seconds}.<span class="millisecond">${millisecond}</span>`;
		} else if ((millisecond = 99)) {
			millisecond = 0;
		}
	}, 10);
	stopwatchTime = setInterval(() => {
		if (seconds < 9 && millisecond <= 9) {
			seconds++;
			stopwatch.innerHTML = `${minutes}:0${seconds}.<span class="millisecond">0${millisecond}</span>`;
		} else if (seconds < 9 && millisecond <= 99) {
			seconds++;
			stopwatch.innerHTML = `${minutes}:0${seconds}.<span class="millisecond">${millisecond}</span>`;
		} else if (seconds < 59 && millisecond <= 9) {
			seconds++;
			stopwatch.innerHTML = `${minutes}:${seconds}.<span class="millisecond">0${millisecond}</span>`;
		} else if (seconds < 59 && millisecond <= 99) {
			seconds++;
			stopwatch.innerHTML = `${minutes}:${seconds}.<span class="millisecond">${millisecond}</span>`;
		} else if ((seconds = 59)) {
			minutes++;
			seconds = 0;
			stopwatch.innerHTML = `${minutes}:00.<span class="millisecond">0${millisecond}</span>`;
		}
	}, 1000);
};

// pauset Stoper

const pausetStoper = () => {
	clearInterval(stopwatchTime);
	clearInterval(stopwatchMillisecond);
};

// stop Stoper

const stopStoper = () => {
	if (stopwatch.textContent !== '0:00.00') {
		time.innerHTML = `<span>Poprzedni czas: </span>${stopwatch.innerHTML}`;
		time.style.visibility = 'visible';
		li = document.createElement('li');
		timeList.append(li);
		number++;
		li.innerHTML = `Pomiar ${number}: <span>${stopwatch.innerHTML}</span>`;
	}
	clearInterval(stopwatchTime);
	clearInterval(stopwatchMillisecond);
	stopwatch.innerHTML = '0:00.<span class="millisecond">00</span>';
	millisecond = 0;
	seconds = 0;
	minutes = 0;
};

// delate Stoper

const delateStoper = () => {
	time.style.visibility = 'hidden';
	clearInterval(stopwatchTime);
	clearInterval(stopwatchMillisecond);
	stopwatch.innerHTML = '0:00.<span class="millisecond">00</span>';
	millisecond = 0;
	seconds = 0;
	minutes = 0;
	number = 0;
	while (timeList.lastChild) {
		timeList.removeChild(timeList.lastChild);
	}
	timeList.classList.remove('show');
};

// change color

const showColor = () => {
	colors.classList.toggle('show-color');
};

//LISTENER

playBtn.addEventListener('click', startStoper);
pauseBtn.addEventListener('click', pausetStoper);
stopBtn.addEventListener('click', stopStoper);
delateBtn.addEventListener('click', delateStoper);

archiveBtn.addEventListener(
	'click',
	(showArchive = () => {
		timeList.classList.toggle('show');
	})
);

faQuestion.addEventListener(
	'click',
	(showInstruction = () => {
		instruction.style.display = 'flex';
	})
);

close.addEventListener(
	'click',
	(closeInstruction = () => {
		instruction.style.display = 'none';
	})
);

window.addEventListener('click', (e) =>
	e.target === instruction ? (instruction.style.display = 'none') : false
);

//listener color

paintRoller.addEventListener('click', showColor);

purple.addEventListener(
	'click',
	(purpleColor = () => {
		colorChange.style.setProperty('--color', 'rgb(186, 85, 211)');
		showColor();
	})
);
orange.addEventListener(
	'click',
	(orangeColor = () => {
		colorChange.style.setProperty('--color', 'rgb(255, 165, 0)');
		showColor();
	})
);
tomato.addEventListener(
	'click',
	(tomatoColor = () => {
		colorChange.style.setProperty('--color', 'rgb(196, 30, 58)');
		showColor();
	})
);
blue.addEventListener(
	'click',
	(blueColor = () => {
		colorChange.style.setProperty('--color', 'rgb(4, 142, 255)');
		showColor();
	})
);
