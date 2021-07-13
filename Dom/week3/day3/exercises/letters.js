let text = document.getElementById('letters')

text.addEventListener('keyup', cleanInput);

function cleanInput(e) {
  log.textContent += ` ${e.code}`;

    text.value = text.value.replace(/[^a-zA-Z]/g,'')
}