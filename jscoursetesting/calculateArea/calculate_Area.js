let length;
let width;


//document.getElementById is used to get an html element by it's id
//.value retrieves the value of the input entered into the input field associated with that element by id. It retrieves a string
//parseFloat() converts the string value retrieved .value into a float(number) so that mathematical operations can be done on it.
// .innerText allows you to modify the text content within the html element that you access, (in this case id='result').
//The `` and ${} allow for js variables to be included dynamically within a string.
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}