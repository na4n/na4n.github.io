const FINISHED_CHARACTER = '\u2593' // ▓
const UNIFINISHED_CHARACTER = '\u2591' // ░

function isLeap(year){
	const leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
	return leap;
}

function calculateYearPercentProgress(date){
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();

	const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const daysInYear = isLeap(year) ? 366 : 365;
	if(isLeap(year)){
		daysInMonth[1]++;
	}

	let daysPassed = day-1;
	for(let i = 0; i < month; i++){
		daysPassed += daysInMonth[i];
	}

	const fractionalDay = (hour + (minute + second / 60) / 60) / 24;
	const percentCompleted = ((daysPassed + fractionalDay) / daysInYear) * 100;
	
	return percentCompleted;
}

let percent = calculateYearPercentProgress(new Date());
const progressBar = [FINISHED_CHARACTER.repeat(Math.floor(percent)), UNIFINISHED_CHARACTER.repeat(100-Math.floor(percent))];

document.addEventListener('DOMContentLoaded', function(){
	const setElementTextById = (id, value) => { document.getElementById(id).innerText = value; }

	setElementTextById('year', (new Date()).getFullYear());
	setElementTextById('percent', percent.toFixed(5));
	setElementTextById('progress', progressBar[0] + progressBar[1]);

	setInterval(function(){
		percent = calculateYearPercentProgress(new Date());
		setElementTextById('percent', percent.toFixed(5));
	}, 1500);

	setInterval(function(){
		updateProgressBar();
		setElementTextById('progress', progressBar[0] + progressBar[1]);
	}, 50);
});

let count = 0;
function updateProgressBar(){
	const nextIndex = count++ % progressBar[1].length;

	const progressCharArray = progressBar[1].split("");
	progressCharArray[nextIndex] = '\u2593';
	
	const replaceIndex = nextIndex-1 >= 0 ? nextIndex-1 : progressBar[1].length-1;
	progressCharArray[replaceIndex] = '\u2591';
	
	progressBar[1] = progressCharArray.join("");
}
