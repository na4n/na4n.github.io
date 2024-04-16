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
	for(let i = 0; i < month; i++){
		daysPassed += daysInMonth[i];
	}


	let txt = '';
	for(let i = 0; i < 100; i++){
		if(Math.floor(i > (daysPassed/isLeap(year))*100)){
			txt += '.';
		}
		else{
			txt += '█';
		}
	}

	return txt
}

const date = new Date();
const txt = currentDays(date.getDate(), date.getMonth()+1, date.getFullYear());

//document.addEventListener('DOMContentLoaded', function(){
//	const p = document.getElementById('progress')
//	p.innerHTML = txt;
//});

