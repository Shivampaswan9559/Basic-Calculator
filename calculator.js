let value = "";

function clr()
{ 
  value = "";
  let input = document.querySelector("#input_text");
  input.innerHTML=(value);
  let result = document.querySelector("#result");
  result.innerHTML=("0");
}

function number(num)
{
  value =  value + num;
  let result = document.querySelector("#result");
  result.innerHTML = "0";
  let input = document.querySelector("#input_text");
  input.innerHTML=(value);
  input.style.opacity = "1";
}

function operator(op)
{
    value = value + op;
    let input = document.querySelector("#input_text");
    input.innerHTML=(value);
    input.style.opacity = "1";
}

function percent()
{
  let result = document.querySelector("#result");
  let cal_value = (eval(value));
  let final_value = cal_value/100;
  result.innerHTML = (final_value);
}

function result()
{
  let result = document.querySelector("#result");
  result.innerHTML = (eval(value));
  let input = document.querySelector("#input_text");
  input.style.opacity = "0.4";
}

function save ()
{
  let printC = document.querySelector(".result_box").innerHTML;
  let orignalContant = document.body.innerHTML;
  document.body.innerHTML = printC;
  window.print();
  document.body.innerHTML = orignalContant;
  
}

function dark()
{
  let dark = document.querySelector("#dark");
  let lite = document.querySelector("#lite");
  dark.style.backgroundColor = "red";
  lite.style.backgroundColor = "#ffff"
  let mode_color = document.querySelector(".calculator");
  mode_color.style.backgroundColor = "#1c1f1e";
  let result_box_color = document.querySelector("header");
  result_box_color.style.backgroundColor = "#2e2d2d";
  let result_color = document.querySelector(".result");
  result_color.style.backgroundColor = "#323534";
   let text_color = document.querySelector(".result_box");
  text_color.style.color = "#f7dc0c";
}

function lite()
{
  let dark = document.querySelector("#dark");
  let lite = document.querySelector("#lite");
  lite.style.backgroundColor = "red";
  dark.style.backgroundColor = "#000"
  let mode_color = document.querySelector(".calculator");
  mode_color.style.backgroundColor = "rgb(241, 254, 246)";
  let result_box_color = document.querySelector("header");
  result_box_color.style.backgroundColor = "rgb(229, 255, 239)";
  let result_color = document.querySelector(".result");
  result_color.style.backgroundColor = "rgb(237, 251, 250)";
  let text_color = document.querySelector(".result_box");
  text_color.style.color = "rgb(0, 169, 0)";
}