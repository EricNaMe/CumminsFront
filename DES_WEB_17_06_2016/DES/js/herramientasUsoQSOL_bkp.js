/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
  
	
	 $('#tableBody2').bootstrapTable({
         dataType: 'json',
         emptytext: '-',
         //data: json.data,
         url: 'PregUsoQSOL',
         idField: 'idPregunta',
         uniqueId: 'idPregunta',
         formatLoadingMessage: function() {
         	$('#headerModal').html('Solicitando informacion...');
             $('#closeModal').css('display', 'none');
             $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
             return 'Cargando...';
         },
         formatRecordsPerPage: function(pageNumber) {
             return pageNumber + ' registros por pagina';
         },
         onLoadSuccess: function(){
         	//$('#headerModal').hide();
         	 $('#myModal').modal('hide');
         },
         formatShowingRows: function(pageFrom, pageTo, totalRows) {
             return 'Mostrando ' + /*pageFrom + ' a ' + */pageTo + ' de ' + totalRows + ' registros';
         },
         formatSearch: function() {
             return 'Buscar';
         },
         formatNoMatches: function() {
             return 'No se encontraron registros';
         },
         formatPaginationSwitch: function() {
             return 'Ocultar/Mostrar paginacioon';
         },
         formatRefresh: function() {
             return 'Actualizar';
         },
         formatToggle: function() {
             return 'Toggle';
         },
         formatColumns: function() {
             return 'Columnas';
         },
         formatAllRows: function() {
             return 'Todos';
         },
         columns: [{
                 field: 'idPregunta',
                 title: '#',
                 visible: true
             }, {
                 field: 'pregunta',
                 title: 'Pregunta',
                 type: 'text',
                 align: 'center',
                 valign: 'middle'
             }, {
                 field: 'rCorrecta',
                 title: 'SI',
                 align: 'center',
                 valign: 'middle',
                 formatter: radioformatterY
             }, {
                 field: 'rIncorrecta',
                 title: 'NO',
                 align: 'center',
                 valign: 'middle',
                 formatter: radioformatterN
             }]
     });

    $('#calcular').click(function() {
    	
    	
        idDealer = $('#codigoDeal').val();
        var array = '';
        for (var i = 1; $('#resp' + i).val() != null; ) {
            if (i == 1) {
                array += $('#resp' + i).val();
            } else {
                array += "," + $('#resp' + i).val();
            }
            i++;
        }
        if (idDealer != '') {
            json = JSON.stringify($('#tableBody2').bootstrapTable('getData'));

            $.ajax({
                data: {data: json, resp: array},
                dataType: "text",
                url: "GuardarPregUsoQSOL?idDealer=" + idDealer,
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                },
                succes: function() {
                	alert();
                }
            }).done(function(e) {
            	
            	ShowTotal();
            	// $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });
            
            
            ShowTotal();
            ShowTotal();
            $('#myModal').modal('hide');
            ShowTotal();

        } else {
            alert('Selecciona un Dealer para poder Evaluar.');
        }
        ShowTotal();
    });

    $('#dealer').on('change', function() {
        $('#tableBody').bootstrapTable('destroy');
        $.ajax({
            dataType: "text",
            method: "POST",
            url: 'MotorHQSOL?idDealer=' + this.value,
            beforeSend: function() {
                $('#headerModal').html('Solicitando informacion...');
                $('#closeModal').css('display', 'none');
                $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
            }
        }).done(function(e) {
            json = $.parseJSON(e);
            $('#tableBody').bootstrapTable({
                dataType: 'json',
                emptytext: '-',
                data: json.data,
                formatLoadingMessage: function() {
                    return 'Cargando...';
                },
                formatRecordsPerPage: function(pageNumber) {
                    return pageNumber + ' registros por pagina';
                },
                formatShowingRows: function(pageFrom, pageTo, totalRows) {
                    return 'Mostrando ' + /*pageFrom + ' a ' + */pageTo + ' de ' + totalRows + ' registros';
                },
                formatSearch: function() {
                    return 'Buscar';
                },
                formatNoMatches: function() {
                    return 'No se encontraron registros';
                },
                formatPaginationSwitch: function() {
                    return 'Ocultar/Mostrar paginacioon';
                },
                formatRefresh: function() {
                    return 'Actualizar';
                },
                formatToggle: function() {
                    return 'Toggle';
                },
                formatColumns: function() {
                    return 'Columnas';
                },
                formatAllRows: function() {
                    return 'Todos';
                },
                columns: [{
                        field: 'idMotor',
                        title: 'Id Motor',
                        visible: false
                    }, {
                        field: 'motor',
                        title: 'Motores',
                        type: 'text',
                        align: 'center',
                        valign: 'middle'
                    }]
            });
            $('#myModal').modal('hide');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al cargar los datos');
        });
    });
});

function radioformatterY(value, row) {
    return '<input type="radio" value="Y" checked onClick="radioY(' + row.idPregunta + ')" name="resp' + row.idPregunta + '" id="resp' + row.idPregunta + '">';
}

function radioformatterN(value, row) {
    return '<input type="radio" value="N" onClick="radioN(' + row.idPregunta + ')" name="resp' + row.idPregunta + '" id="resp' + row.idPregunta + '">';
}

function radioY(id) {
    $('#resp' + id).val('Y');
}

function radioN(id) {
    $('#resp' + id).val('N');
}



function ShowTotal(){
  $.ajax({
      dataType: "text",
      url: 'PorcUsoQSOL?idDealer=' + idDealer,
      method: "GET"
  }).done(function(e) {
      if (e === 'error') {
      } else {
         json = $.parseJSON(e);
         $('#DispPosible').html( json.data[0].porcPosible );
         $('#DispTotal').html( json.data[0].porcLogrado );
    	 
 	  }
  });
}


