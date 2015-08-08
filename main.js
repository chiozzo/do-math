function div_10 (num) {
  return num / 10;
}

function mult_5 (num) {
  return num * 5;
}

function math (num, func) {
  return func(num);

}

var output = document.getElementById("output");

function do_math (e) {
  var input = document.getElementById("user_input").value;
  console.log(input);
  console.log(input.length);
  if (input === "") {
    output.innerHTML = "You need to input a value!";
  } else if (input > 10000) {
    output.innerHTML = math(input, div_10);
  } else if (input < 10000) {
    output.innerHTML = math(input, mult_5);
  }
}