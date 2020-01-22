let sample_string_1 = "js string exercise";
let sample_string_2 = "this is a string";
let sample_string_3 = "front end development";

let capitalize_words = function(str) {

    // convert string to array
    let str_to_array = str.split("");

    for (let i = 0; i < str_to_array.length; i++) {

        // if the prior element is undefined or a space
        if (str_to_array[i-1] === undefined || str_to_array[i-1] === " ") {

            // capitalize the current element
            str_to_array[i] = str_to_array[i].toUpperCase();
        }
    }

    let capitalized_string = str_to_array.join("");

    return capitalized_string;

};

console.log(capitalize_words(sample_string_1)); // Js String Exercise
console.log(capitalize_words(sample_string_2)); // This Is A String
console.log(capitalize_words(sample_string_3)); // Front End Development