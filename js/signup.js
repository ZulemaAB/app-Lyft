// Inicializando Select Flags-Materialize
$(document).ready(function() {
  $('select').material_select();
});
// Activando botón (10 digitos) para continuar
$(document).ready(function() {
  var $telPhone = $('#telephone');
  var $btnNext = $('#next');

  $telPhone.keyup(function() {
    if ($(this).val().length === 10) {
      $btnNext.attr({
        disabled: false,
        href: '../views/verify.html'
      });
    } else {
      $btnNext.attr('disabled', 'disabled');
    }
  });
  // Código aleatorio
  $btnNext.click(function() {
    var number = Math.floor(Math.random() * 900) + 100;
    alert('LAB - ' + number);
    localStorage.labCode = number;
  });
});
