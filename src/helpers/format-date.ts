const formatDate = (date: Date):string => {
    return `${addZeroToDate(date.getDate())}/${addZeroToDate(date.getMonth()+1)}/${date.getFullYear()}`;
}

const addZeroToDate = (date: Number):string => {
    let m = date.toString();
    return ('0' + m.slice(-2));
}

export default formatDate;