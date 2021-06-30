

const timeContainerElm = document.getElementById('time-container');

// Get Difference Between Two Dates:
function getTwoDatesDifference() {

	let currentDate = new Date();
	let nextYear = currentDate.getFullYear() + 1;
	let newYearDate = new Date(nextYear, 0, 1);

	var delta = Math.abs(newYearDate - currentDate) / 1000;

	var days = Math.floor(delta / 86400);
	delta -= days * 86400;

	var hours = Math.floor(delta / 3600);
	delta -= hours * 3600;

	var minutes = Math.floor(delta / 60);
	delta -= minutes * 60;

	var seconds = Math.floor(delta % 60);

	return {days, hours, minutes, seconds};

}

// Add Zero:
function addZero(value) {

	return (value <= 9)? `0${value}`: value;

}

// Change Dom Time:
function changeTime() {

	let {days, hours, minutes, seconds} = getTwoDatesDifference();

	timeContainerElm.innerHTML = `
		<div class="time days">${days}</div>
		<div class="time hours">${addZero(hours)}</div>
		<div class="time minutes">${addZero(minutes)}</div>
		<div class="time seconds">${addZero(seconds)}</div>
	`;

}

// SetInterval:
setInterval(changeTime, 1000);