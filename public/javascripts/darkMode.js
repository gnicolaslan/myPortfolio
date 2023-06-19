let checkbox = document.getElementById('check-item-switch');

if (localStorage.getItem('darkMode') === 'true') {
    checkbox.checked = true;
    enableDarkMode();
  }

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    enableDarkMode();
    guardarPreferenciaModoDark(true);
  } else {
    disableDarkMode();
    guardarPreferenciaModoDark(false);
  }
});

function enableDarkMode() {
  let main_body = document.body;
  main_body.classList.add('dark-mode');
}

function disableDarkMode() {
  let main_body = document.body;
  main_body.classList.remove('dark-mode');
}

function guardarPreferenciaModoDark(preferencia) {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('darkMode', preferencia);
  } else {
    console.log('El navegador no admite almacenamiento web.');
  }
}