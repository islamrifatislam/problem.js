// // তিনটি সংখ্যা ইনপুট নিয়ে, কোনটি সবচেয়ে বড় তা নির্ধারণ করো
// function number(mark1, mark2, mark3) {
//     if (mark1 >= mark2 && mark1 >= mark3) {
//         console.log("Big number is:", mark1);
//     } else if (mark2 >= mark1 && mark2 >= mark3) {
//         console.log("Big number is:", mark2);
//     } else {
//         console.log("Big number is:", mark3);
//     }

  
//     if (mark1 <= mark2 && mark1 <= mark3) {
//         console.log("Small number is:", mark1);
//     } else if (mark2 <= mark1 && mark2 <= mark3) {
//         console.log("Small number is:", mark2);
//     } else {
//         console.log("Small number is:", mark3);
//     }
// }

number(20, 10, 5);

function number(a, b, c) {
    
    let big = a >= b && a >= c ? a : (b >= a && b >= c ? b : c);
    console.log("Big number is:", big);

  
    let small = a <= b && a <= c ? a : (b <= a && b <= c ? b : c);
    console.log("Small number is:", small);
}

number(20, 10, 5);
