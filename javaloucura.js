function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let currentDisplay = document.getElementById("display").value;
  document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  let expression = document.getElementById("display").value;
  try {
    let result = eval(expression);
    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "Erro";
  }
}
