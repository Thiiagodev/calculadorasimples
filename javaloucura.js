function clearDisplay() {
  document.getElementById("quadrado").value = "";
}

function deleteLast() {
  let currentDisplay = document.getElementById("quadrado").value;
  document.getElementById("quadrado").value = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementById("quadrado").value += value;
}

function calculate() {
  let expression = document.getElementById("quadrado").value;
  try {
    let result = eval(expression);
    document.getElementById("quadrado").value = result;
  } catch (e) {
    document.getElementById("quadrado").value = "Erro";
  }
}
