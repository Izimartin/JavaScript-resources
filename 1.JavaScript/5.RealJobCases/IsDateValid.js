const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
isDateValid("October 17, 2021 03:24:00");