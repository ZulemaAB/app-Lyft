// Activando CellphoneNumber
$(document).ready(function() {
  var $phoneNumber = $('#CellphoneNumber');

  // Variable verificadora  booleano
  var verifyPhoneNumber = false;

  // Asociar eventos a los elemento seleccionados
  $phoneNumber.on('input', function(event) {
    if ($(this).val().length === 10) {
      // console.log('cellphone valido');
      $('#signup').addClass('disabled');
      $('#signup').removeClass('disabled');
    } else {
      console.log('el cellphone debe ser igual a 10 caracteres');
    }
  });
});
