

$(function() {
	$('#capaAdminG').addClass("active");
    $('#dealer').on('change', function(){
    	var strDealer = this.value;
    	var strTipoEval = $('#tipo_eval').val();
    	var strRev = $('#revision').val();
    	var strAnio = $('#anio').val();
    	if(strTipoEval != '' && strRev != '' && strAnio != ''){
    		cargarTablaAdminGar(strDealer, strTipoEval, strRev, strAnio);
    	} else {
    		alert('Debe seleccionar Tipo Evaluacion, Revision, Año y Dealer para obtener la informacion');
    	}
    });
    
    $('#tipo_eval').on('change', function(){
    	var strDealer = $('#codigoDeal').val();
    	var strTipoEval = $('#tipo_eval').val();
    	var strRev = $('#revision').val();
    	var strAnio = $('#anio').val();
    	if(strDealer != '' && strTipoEval != '' && strRev != '' && strAnio != ''){
    		cargarTablaAdminGar(strDealer, strTipoEval, strRev, strAnio);
    	}
    });
    
    $('#revision').on('change', function(){
    	var strDealer = $('#codigoDeal').val();
    	var strTipoEval = $('#tipo_eval').val();
    	var strRev = $('#revision').val();
    	var strAnio = $('#anio').val();
    	if(strDealer != '' && strTipoEval != '' && strRev != '' && strAnio != ''){
    		cargarTablaAdminGar(strDealer, strTipoEval, strRev, strAnio);
    	}
    });
    
    $('#anio').on('change', function(){
    	var strDealer = $('#codigoDeal').val();
    	var strTipoEval = $('#tipo_eval').val();
    	var strRev = $('#revision').val();
    	var strAnio = $('#anio').val();
    	if(strDealer != '' && strTipoEval != '' && strRev != '' && strAnio != ''){
    		cargarTablaAdminGar(strDealer, strTipoEval, strRev, strAnio);
    	}
    });

    $('#bGuardar').click(function() {
        idDealer = $('#codigoDeal').val();
        jsonTabla = JSON.stringify($('#tableBody').bootstrapTable('getRowByUniqueId', $('#guardarDato').val()));
        //porcObtenido
        //alert(idDealer);
        if (idDealer != '') {
            jsonAdminGaran = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                data: {data: jsonAdminGaran, renglon: jsonTabla, tipo:"ADMINGARANTIAS"},
                dataType: "text",
                url: "GuardarCapacitacion",
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });
        }
        else {
            alert('Selecciona un Dealer para poder guardar.');
        }
    });
    
    $('#bGuardarS').click(function() {
        idDealer = $('#codigoDeal').val();
        jsonTabla = JSON.stringify($('#tableBody').bootstrapTable('getRowByUniqueId', $('#guardarDato').val()));
        //porcObtenido
        //alert(idDealer);
        if (idDealer != '') {
            jsonAdminGaran = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                data: {data: jsonAdminGaran, renglon: jsonTabla, tipo:"ADMINGARANTIAS"},
                dataType: "text",
                url: "GuardarCapacitacion",
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
                window.location = "TEMPCapacitacionEvaluar.jsp";
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });
        }
        else {
            alert('Selecciona un Dealer para poder guardar.');
        }
    });
});
/*
function radioformatterInfo(value, row) {
    return '<input type="radio" id="guardarDato" name="guardarDato" onClick="clickRadio(' + row.idTabla + ')">';
}
*/
function clickRadio(id) {
    $('#guardarDato').val(id);
}

function obtenerInfo(id) {
    $.ajax({
        dataType: "text",
        url: "ObtenerCapacitaEval?id=" + id,
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de distribuidores');
        } else {
            json = $.parseJSON(e);
           // for (var i = 0; i < json.length; i++) {
               var  i = 0;
            	$('#dr').val(json[i].dr_code);
            	$('#codigoDR').val(json[i].dr_code);
            	$('#codigoDeal').val(json[i].sp_code);
                $('#dealer').val(json[i].sp_code);
            	
                $('#tipo_eval').val(json[i].tipo_eval);
                $('#revision').val(json[i].revision);
                $('#anio').val(json[i].anio);
                $('#datepicker').val(json[i].fecha_eval);
                $('#datepicker2').val(json[i].fecha_ini_eval);
                $('#datepicker3').val(json[i].fecha_fin_eval);
                
                
                //cargarDR(json[0].dr_code);
                
                cargarDR(json[i].dr_code);
                cargarDealers(json[0].dr_code, json[0].sp_code );
                cargarTablaAdminGar(json[0].sp_code, json[i].tipo_eval, json[i].revision, json[i].anio);
                
                
                //cargarTablaMotores(json[0].sp_code);
            	//cargarTablaJefeTaller(json[0].sp_code);
            	//cargarTablaGteServ(json[0].sp_code);
                
           // }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
}

/*
function cargaDealer(drCode,sp_code){
	$.ajax({
         dataType: "text",
         url: "ObtenerDealer?id_dr=" + drCode,
         method: "GET",
         beforeSend: function() {

         }
     }).done(function(e) {
         if (e === 'error') {
             alert('Ocurrio un error al cargar catalogo de rangos');
         } else {
             json = $.parseJSON(e);
             $('#dealer').html($("<option></option>"));
             for (var i = 0; i < json.length; i++) {
                 $('#dealer').append($("<option></option>")
                                 .attr("value", json[i].value)
                                 .text(json[i].text));
                 oem[i]=json[i].oem;
             }
             $('#dealer').val(sp_code);
         }
     }).fail(function(e) {
	        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
	        $('#closeModal').css('display', '');
     });
}


*/
function cargarTablaAdminGar(sp_code, strTipoEval, strRev, strAnio){
	
	$('#tableBody').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        data: {id: sp_code, puesto: '1', tipoEval: strTipoEval, revision: strRev, anio: strAnio},
        url: 'CapaAdminGarantias',
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
            idField: 'idTabla',
            uniqueId: 'idTabla',
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
                    title: 'Seleccionar',
                    field: 'check',
                    align: 'center',
                    valign: 'middle',
                    //radio: true
                    //formatter: radioformatterInfo
                }, {
                    field: 'idTabla',
                    title: 'Tabla ID',
                    visible: false
                }, {
                    field: 'pID',
                    title: 'Promotion ID',
                    visible: true
                }, {
                    type: 'text',
                    title: 'Nombre administrador',
                    field: 'nombreAdmin',
                    align: 'center',
                    valign: 'middle'
                }, {
                    type: 'text',
                    title: 'Puesto',
                    field: 'nombreCurso',
                    align: 'center',
                    valign: 'middle'
                }, {
                    type: 'text',
                    title: 'Fecha curso',
                    field: 'fechaCurso',
                    align: 'center',
                    valign: 'middle'
                }, {
                    type: 'text',
                    title: '% Posible',
                    field: 'porcPosible',
                    align: 'center',
                    valign: 'middle'
                }, {
                    type: 'text',
                    title: '% Obtenido',
                    field: 'porcObtenido',
                    align: 'center',
                    valign: 'middle'
                }]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
	
	
}