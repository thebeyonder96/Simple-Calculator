//----------------------------------------- Getting HTML elements

let inp = document.querySelector("#inp"),
  out = document.querySelector("#out"),
  light = document.querySelector("#light"),
  dark = document.querySelector("#dark"),
  disp = document.querySelector("#disp"),
  bottom = document.querySelector('#bottom'),
  before = document.querySelector('#before');

//--------------------------------------- Displaying input

function display(n) {
  inp.classList.add("text-5xl");
  inp.classList.add("pb-16");
  inp.innerText += n;
}

//----------------------------------------- Clearing all inputs

function clearInp() {
  inp.innerText = "";
  out.innerText = "";
}

// ---------------------------------------- Clearing each input

function remove() {
  if(out.innerText != ''){
    val = out.innerText;
    out.innerText = val.slice(0, -1);
  }
  else{
    value = inp.innerText;
    inp.innerText = value.slice(0, -1);
  }
}

//------------------------------------------ Calculating percentage

function percentage() {
  value = inp.innerText;
  value = value.replaceAll("x", "*");

  inp.innerText = (eval(value) / 100).toFixed(2);
}

// ---------------------------------------- Evaluating the inputs

function evalu() {
  let value = inp.innerText;
  value = value.replaceAll("x", "*");
  value = value.replaceAll("÷", "/");
  re = eval(value);
  out.innerText = re;
  inp.classList.remove("text-5xl");
  inp.classList.remove("pb-16");
  out.classList.add("mb-0");
}

//--------------------------------------- Light / Dark Mode

light.addEventListener("click", () => {
  disp.classList.add("bg-[#ffffff]");
  out.classList.remove("text-white");
  bottom.classList.add("bg-gradient-to-r");
  bottom.classList.remove("from-[#002235]");
  bottom.classList.remove("to-[#3D76AB]");
  before.classList.remove("before:left-[50%]");
});

dark.addEventListener("click", () => {
  disp.classList.add("bg-[#000000]");
  out.classList.add("text-white");
  bottom.classList.add("bg-gradient-to-r");
  bottom.classList.add("from-[#002235]");
  bottom.classList.add("to-[#3D76AB]");
  before.classList.add('before:left-[50%]')
  console.log(bottom);
});
