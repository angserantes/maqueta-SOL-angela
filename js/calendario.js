const lang = navigator.language;
    let date = new Date();

    let dayNumber = date.getDate();
    let month = date.getMonth();
    let dayName = date.toLocaleString(lang, { weekday: 'long' })
    let monthName = date.toLocaleString(lang, { month: 'long' })
    let year = date.getFullYear();

    dayNumber = dayNumber < 10 ? "0" + dayNumber : dayNumber;

    // Manipular elementos
    document.getElementById('monthName').innerHTML = monthName;
    document.getElementById('dayName').innerHTML = dayName;
    document.getElementById('dayNumber').innerHTML = dayNumber;
    document.getElementById('year').innerHTML = year;