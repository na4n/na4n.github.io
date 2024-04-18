function isLeap(year){
	const leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

	return leap ? 366 : 365;
}

function currentDays(day, month, year, hours, minutes, seconds){
	const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if(isLeap(year)){
		daysInMonth[1]++;
	}
	let daysPassed = day-1;
	for(let i = 0; i < month-1; i++){
		daysPassed += daysInMonth[i];
	}

	const percentCompleted = ((daysPassed + ((hours + ((minutes + (seconds / 60)) / 60)) / 24)) / isLeap(year)) * 100;
	if(!progressBar){
		let completed = '';
		let notCompleted = '';
		for(let i = 0; i < 100; i++){//\u2593
			(i < Math.floor(percentCompleted)) ? completed += '\u2593' : notCompleted += '\u2591';
		}
		return [[completed, notCompleted], percentCompleted];
	}
	return [percentCompleted];
}

document.addEventListener('DOMContentLoaded', function(){
	const year = document.getElementById('year');
	year.innerHTML = (new Date()).getFullYear();
 
	updateTime();
	updateBar();
	updatePercent();

	setInterval(updateTime, 50); // Update every second
	setInterval(updatePercent, 1500);
	setInterval(updateLocation, 50);
});

let percent;
let progressBar;
function updateTime(){
	const date = new Date();
	const values = currentDays(date.getDate(), date.getMonth()+1, date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds());
	if(values.length > 1){
		progressBar = values[0];
		percent = values[1];
	}
	else{
		percent = values[0];
	}
}

let count = 0;
function updateLocation(){
	const index = count % progressBar[1].length;

	const a = progressBar[1].split("");
	a[index] = '\u2593';
	index-1 >= 0 ? a[index-1] = '\u2591' : a[progressBar[1].length-1] = '\u2591';
	progressBar[1] = a.join("");
	count++;
	updateBar()
}

function updateBar(){
  const pBar = document.getElementById('progress');
  pBar.innerText = progressBar[0] + progressBar[1];
}

function updatePercent(){
  const pe = document.getElementById('percent');
  pe.innerHTML = percent.toFixed(5);
}

