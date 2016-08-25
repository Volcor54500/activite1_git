  $(function() {

      $('#btn1').click(function() {

          $('hr').after('<div id="container">Texte du label <input type="text" id="texteSaisieLabel"><br><button id="btnOk">OK</button><button id="btnAnnuler">Annuler</button><div id="aideSaisie"></div></div>'); //ajout d'une div pour l'aide
          // load du fichier d'aide en respectant l'ordre de parse du code
          $('#aideSaisie').load('help.html #hintSaisieLabel');
          /* inspirer de : http://tecfaetu.unige.ch/etu-maltt/tetris/fritz0/stic-2/ex16/introduction-jquery/ */
          $('.btnFormulaire').attr('disabled', 'disabled');
          /* ----- */
          $('#container').hide().fadeIn('slow');
          $('#texteSaisieLabel').focus();
          $('#btnOk').click(function() {
              var eltSaisieLabel = '<span>' + $('#texteSaisieLabel').val() + '</span>';
              $('#gauche').append(eltSaisieLabel);
              $('#container').fadeOut('slow', function() {
                  $('#container').remove();
                  $('.btnFormulaire').removeAttr('disabled');
              });
          });
          $('#btnAnnuler').click(function() {
              $('#container').fadeOut('slow', function() {
                  $('#container').remove();
                  $('.btnFormulaire').removeAttr('disabled');
              });
          });
      });

      $('#btn2').click(function() {
          $('hr').after('<div id="container">id de la zone de texte <input type="text" id="saisieTexteId"><button id="btnOk">OK</button><button id="btnAnnuler">Annuler</button><div id="aideSaisie"></div></div>');
          $('#aideSaisie').load('help.html #hintSaisieId');
          $('.btnFormulaire').attr('disabled', 'disabled');
          $('#container').hide().fadeIn('slow');
          $('#saisieTexteId').focus();
          $('#btnOk').click(function() {
              var eltSaisieId = '<input type="text" id="' + $('#eltSaisieId').val() + '"><br>';
              $('#gauche').append(eltSaisieId);
              $('#container').fadeOut('slow', function() {
                  $('#container').remove();
                  $('.btnFormulaire').removeAttr('disabled');
              });
          });
          $('#btnAnnuler').click(function() {
              $('#container').fadeOut('slow', function() {
                  $('#container').remove();
                  $('.btnFormulaire').removeAttr('disabled');
              });
          });
      });

      $('#btn3').click(function() {
          $('hr').after('<div id="container">Texte du bouton <input type="text" id="saisieTexteBouton"><button id="btnOk">OK</button><button id="btnAnnuler">Annuler</button><div id="aideSaisie"></div></div>');
          $('#aideSaisie').load('help.html #hintSaisieBouton');
          $('.btnFormulaire').attr('disabled', 'disabled');
          $('#container').hide().fadeIn('slow');
          $('#saisieTexteBouton').focus();
          $('#btnOk').click(function() {
              var eltSaisieBouton = '<button>' + $('#saisieTexteBouton').val() + '</button>';
              $('#gauche').append(eltSaisieBouton);
              $('#container').fadeOut('slow', function() {
                  $('#container').remove();
                  $('.btnFormulaire').removeAttr('disabled');
              });
          });
          $('#btnAnnuler').click(function() {
              $('#container').fadeOut('slow', function() {
                  $('#container').remove();
                  $('.btnFormulaire').removeAttr('disabled');
              });
          });
      });
  });
// commentaire: activité jQuery disponible sur GitHub
