

// letter is not defined yet
var letter = '';

// while letter is not defined, continue to prompt for a letter
while(letter == '') {
    letter = prompt('Enter a character:');
}

// placeholder for output 
var output = '';

//outer loop, 10 lines to write
for (var i = 0; i < 10; i++){
    
    //inner loop, write letter i+1 times to output
    for(var k = 0; k <= i; k++) {
        output += letter;      
    }
    
    // output from loop plus a new line break
    output += "\n";
}

// print output to console
console.log(output);

// show output in alert box

alert(output);