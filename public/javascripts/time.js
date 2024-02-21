function getTime(time) {
    let timeStr = String(time);
    return getDay(timeStr) + ' ' + getDate(timeStr) + ' ' + getHour(timeStr);
}

function getDay(time) {
    let dayShort = time.substring(0, 3);
    switch (dayShort) {
        case 'Mon': return 'Poniedziałek';
        case 'Tue': return 'Wtorek';
        case 'Wed': return 'Środa';
        case 'Thu': return 'Czwartek';
        case 'Fri': return 'Piątek';
        case 'Sat': return 'Sobota';
        case 'Sun': return 'Niedziela';
        default: return 'Błąd';
    }
}

function getDate(time) {
    let day = time.substring(8, 10);
    let month = time.substring(4, 7);
    switch (month) {
        case 'Jan': return day + ' stycznia';
        case 'Feb': return day + ' lutego';
        case 'Mar': return day + ' marca';
        case 'Apr': return day + ' kwietnia';
        case 'May': return day + ' maja';
        case 'Jun': return day + ' czerwca';
        case 'Jul': return day + ' lipca';
        case 'Aug': return day + ' sierpnia';
        case 'Sep': return day + ' września';
        case 'Oct': return day + ' października';
        case 'Nov': return day + ' listopada';
        case 'Dec': return day + ' grudnia';
        default: return 'Błąd';
    }
}

function getHour(time) {
    return time.substring(16, 21);
}

module.exports = getTime;