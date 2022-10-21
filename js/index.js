console.log("salom")

let select = document.querySelector(".form-select");
let demo = document.querySelector(".demo");
let demo1 = document.querySelector(".demo1");
let sizes = document.querySelector(".sizes");
let modalPosition = document.querySelector(".modal-position");
let receptsFlex = document.querySelector(".recepts-flex");
let addition = document.querySelector(".addition-lists");
let btn = document.querySelector("button");
let additionRecepts = document.querySelector(".addition-recepts-new");
let listRecepts = document.querySelector(".list-recepts");
const arraySelect = ["Yupqa", "Qalin", "O'rtacha"];
let sizePizza = ["25sm", "30sm", "35sm"];
let additionPizza = ["Acchiq", "Sosiskali"];
let recepts = [
  "Pomidor",
  "Zaytun",
  "Kurka go'shti",
  "Tuzlangan bodring",
  "Qo'ziqorin",
  "Qazi",
];
let resultArray = [];
let resultArray2 = [];

btn.addEventListener("click", () => {
  modalPosition.classList.toggle("active");
});
console.log(resultArray);
arraySelect.forEach((element) => {
  let option = document.createElement("option");
  option.value = element;
  option.innerHTML = element;
  select.appendChild(option);
});

select.addEventListener("change", function (e) {
  demo.textContent = e.target.value;
});

sizePizza.forEach((element) => {
  let label = document.createElement("label");
  label.setAttribute("class", "label-circle");
  let input = document.createElement("input");
  input.addEventListener("click", () => {
    label.classList.toggle("active-checked");
  });
  label.htmlFor = element;
  input.type = "radio";
  input.name = "size";
  input.id = element;
  input.value = element;
  console.log(input);
  input.setAttribute("class", "input-sizes");
  label.textContent = element;
  sizes.appendChild(label);
  label.appendChild(input);
});

sizes.addEventListener("change", function (e) {
  demo1.textContent = e.target.value;
});

for (let i = 0; i < recepts.length; i++) {
  let input = document.createElement("input");
  let label = document.createElement("label");
  label.setAttribute("class", "label-recepts");
  let span = document.createElement("span");
  span.style.fontSize = "23px";
  span.textContent = recepts[i];
  label.setAttribute("class", "label-recepts");
  input.value = recepts[i];
  input.type = "checkbox";
  input.setAttribute("class", "input-checkbox");
  receptsFlex.appendChild(label);
  label.appendChild(input);
  label.appendChild(span);
  let elLi = document.createElement("li");
  receptsFlex.addEventListener("click", function (evt) {
    if (input.checked) {
      resultArray.push(recepts[i]);
      listRecepts.appendChild(elLi);
      elLi.textContent = recepts[i];
    } else {
      listRecepts.removeChild(elLi);
    }
  });
}
additionPizza.forEach((element) => {
  let input = document.createElement("input");
  let label = document.createElement("label");
  let span = document.createElement("span");
  span.innerHTML = element;
  input.value = element;
  input.type = "checkbox";
  input.setAttribute("class", "input-checkbox");
  label.setAttribute("class", "label-recepts");
  additionRecepts.appendChild(label);
  label.appendChild(input);
  label.appendChild(span);
  let li = document.createElement("li");
  additionRecepts.addEventListener("click", function (evt) {
    if (input.checked) {
      resultArray2.push(element);
      addition.appendChild(li);
      li.textContent = element;
    } else {
      addition.removeChild(li);
    }
  });
});
