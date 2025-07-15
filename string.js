function reverseString(text) {
    let reversed = text.split('').reverse().join('');
    console.log("Reversed string is:", reversed);
}


reverseString("hello");