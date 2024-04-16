function isLeap(year){
	const leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

	return leap ? 366 : 365;
}

function currentDays(day, month, year){
	const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if(isLeap(year)){
		daysInMonth[1]++;
	}
	
	let daysPassed = day;
	for(let i = 0; i < month-1; i++){
		daysPassed += daysInMonth[i];
	}

	console.log(daysPassed);
	console.log(isLeap(year));
	const percentCompleted = (daysPassed/isLeap(year))*100;
	let textProgressBar = '';
	for(let i = 0; i < 100; i++){
		if(Math.floor(i > percentCompleted)){
			textProgressBar += '&#9617;';
		}
		else{
			textProgressBar += '&#9608';
		}
	}

	return [textProgressBar, percentCompleted];
}

document.addEventListener('DOMContentLoaded', function(){
	const date = new Date();
	const dateValues = currentDays(date.getDate(), date.getMonth()+1, date.getFullYear());

	const pBar = document.getElementById('progress')
	pBar.innerHTML = dateValues[0];
	const percent = document.getElementById('percent');
	percent.innerHTML = dateValues[1].toFixed(2);
	const year = document.getElementById('year');
	year.innerHTML = date.getFullYear();
	
});

