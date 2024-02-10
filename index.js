// 원주율 값
const pi ='3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198';
let currentDigits = '3.';
document.addEventListener('DOMContentLoaded', function () {
    const abutton = document.getElementById('BackPiButton');
    abutton.addEventListener('click', function () {
        window.location.href = 'popup.html';
    });
});
// 숫자 버튼 클릭 시
document.getElementById('btn1').addEventListener('click', function() { addDigit('1'); });
document.getElementById('btn2').addEventListener('click', function() { addDigit('2'); });
document.getElementById('btn3').addEventListener('click', function() { addDigit('3'); });
document.getElementById('btn4').addEventListener('click', function() { addDigit('4'); });
document.getElementById('btn5').addEventListener('click', function() { addDigit('5'); });
document.getElementById('btn6').addEventListener('click', function() { addDigit('6'); });
document.getElementById('btn7').addEventListener('click', function() { addDigit('7'); });
document.getElementById('btn8').addEventListener('click', function() { addDigit('8'); });
document.getElementById('btn9').addEventListener('click', function() { addDigit('9'); });
document.getElementById('btnBackspace').addEventListener('click', backspace);
document.getElementById('btnReset').addEventListener('click', reset);

document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
      addDigit(event.key);
    } else if (event.key === 'Backspace') {
      backspace();
    }
  });
// 숫자 버튼 클릭 시
function addDigit(digit) {
  currentDigits += digit;
  updateDisplay();
}
function reset() {
    currentDigits = '3.';
    updateDisplay();
  }
// Backspace 버튼 클릭 시
function backspace() {
    if (currentDigits !== '3.') {
      currentDigits = currentDigits.slice(0, -1);
    }
    updateDisplay();
  }

// 화면 업데이트
function updateDisplay() {
  let displayText = currentDigits.length <= 10 ? currentDigits : currentDigits.slice(-10);
  document.getElementById('piDisplay').className = pi.startsWith(currentDigits) ? '' : 'error';
  document.getElementById('digit').textContent = currentDigits.length -2;
  document.getElementById('piDisplay').textContent = displayText;
}
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('piButton');
    button.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});

