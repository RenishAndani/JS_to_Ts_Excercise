const date = new Date();

const year = date.getFullYear();

const month = date.getMonth() + 1;

const day = date.getDate();

console.log(day, month, year);

const formatedDate = `${day}/${month}/${year}`;

console.log(formatedDate);
