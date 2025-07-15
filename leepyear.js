function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
}

leapYear(2000);  
leapYear(1900);  
leapYear(2024); 
leapYear(2023);