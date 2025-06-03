const assert = require('assert');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const vm = require('vm');

const scriptContent = fs.readFileSync('./javaloucura.js', 'utf-8');

function loadCalculator() {
  const dom = new JSDOM('<input id="quadrado" />', { runScripts: "outside-only" });
  // Evaluate the calculator script inside the DOM context
  vm.runInContext(scriptContent, dom.getInternalVMContext());
  return dom;
}

function testCalculateSuccess() {
  const dom = loadCalculator();
  const input = dom.window.document.getElementById('quadrado');
  input.value = '2+3';
  dom.window.calculate();
  assert.strictEqual(input.value, '5');
  console.log('✓ calculate evaluates valid expressions');
}

function testCalculateError() {
  const dom = loadCalculator();
  const input = dom.window.document.getElementById('quadrado');
  input.value = '2+'; // invalid expression
  dom.window.calculate();
  assert.strictEqual(input.value, 'Erro');
  console.log('✓ calculate handles invalid expressions');
}

// Run tests
try {
  testCalculateSuccess();
  testCalculateError();
  console.log('All tests passed');
  process.exit(0);
} catch (err) {
  console.error('Test failed:', err.message);
  process.exit(1);
}
