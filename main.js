// -----------------
// main.js
// Comportamento interativo do formulário futurista
// -----------------

// Atualiza o nome do arquivo quando selecionado
document.getElementById('arquivo').addEventListener('change', function(event) {
  const filenameSpan = document.getElementById('file-upload-filename');
  const files = event.target.files;
  if (files.length > 0) {
    filenameSpan.textContent = files[0].name;
  } else {
    filenameSpan.textContent = 'Nenhum arquivo selecionado';
  }
});

// Ao resetar o formulário, remove a classe 'filled' dos campos (mantém o visual limpo)
document.querySelector('form').addEventListener('reset', function() {
  setTimeout(function() {
    document.querySelectorAll('input, textarea, select').forEach(function(el) {
      el.classList.remove('filled');
    });
    document.getElementById('file-upload-filename').textContent = 'Nenhum arquivo selecionado';
  }, 5);
});

// Sempre que um campo perde o foco (blur), verifica se tem valor e aplica a classe 'filled'
document.querySelectorAll('input, textarea, select').forEach(function(el) {
  el.addEventListener('blur', function() {
    if (el.value) {
      el.classList.add('filled');
    } else {
      el.classList.remove('filled');
    }
  });
});

// -------------------
// FLATPICKR - CALENDÁRIOS FUTURISTAS
// -------------------

// Garante que Flatpickr existe
if (window.flatpickr) {
  // Calendário padrão (data de nascimento)
  flatpickr(".datepick", {
    dateFormat: "d/m/Y",
    maxDate: "today",
    locale: "pt"
  });

  // Horário preferido (apenas hora:minuto, sem calendário)
  flatpickr(".timepick", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    locale: "pt"
  });

  // Mês favorito (usa plugin monthSelect do Flatpickr)
  flatpickr(".monthpick", {
    plugins: [new monthSelectPlugin({
      shorthand: true,
      dateFormat: "m/Y",
      theme: "material_blue" // Troque aqui se quiser outro tema compatível
    })],
    locale: "pt"
  });

  // Semana marcante (exibe número da semana)
  flatpickr(".weekpick", {
    locale: "pt",
    weekNumbers: true,
    dateFormat: "W/Y"
  });
}