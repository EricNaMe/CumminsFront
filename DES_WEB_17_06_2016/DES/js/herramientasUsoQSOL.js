/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var idDeal = '';
$(function() {
	$('#herraUsoQSOL').addClass("active");


    $('#calcular').click(function() {
        idDealer = $('#codigoDeal').val();
        var array = '';
        if (idDealer != '') {
            jsonMotor = $('#tableBody3').bootstrapTable('getAllSelections');
            if (jsonMotor.length < 2 && jsonMotor.length > 0) {
                
            	jsonPreguntas = $('#tableBody2').bootstrapTable('getData');
            	json= JSON.stringify(jsonPreguntas);
            	
            	//json = JSON.stringify($('#tableBody2').bootstrapTable('getData'));
            	console.log(jsonPreguntas.length);
            	/*for (var i = 1; $('#resp' + i).val() != null; ) {
                    if (i == 1) {
                        array += $('#resp' + i).val();
                    } else {
                        array += "," + $('#resp' + i).val();
                    }
                    i++;
                }
                */
                
            	for (var i = 1; i<= jsonPreguntas.length; i++){
            		if (i == 1) {
                        //array += $('#resp' + i).val();
                    	array += $('input[name=resp'+i+']:checked').val();
                    } else {
                        //array += "," + $('#resp' + i).val();
                    	array += "," + $('input[name=resp'+i+']:checked').val();
                    }
                   // i++;	
            	}
                
                
                $.ajax({
                    data: {data: json, resp: array, dataTec: JSON.stringify(jsonMotor)},
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

                    ShowTotal(idDealer,'');
                    // $('#myModal').modal('hide');
                }).fail(function(e) {
                    $('#closeModal').css('display', '');
                    $('#headerModal').html('Ocurrio un error al guardar los datos');
                });
                //ShowTotal(idDealer);
                $('#myModal').modal('hide');
            } else {
                alert('Selecciona un Tecnico para poder Evaluar.');
            }
        } else {
            alert('Selecciona un Dealer para poder Evaluar.');
        }
    });
    $('#dealer').on('change', function() {
        cargarPreguntas('PregUsoQSOL', '', '');
        cargarTabla(this.value, '');
        $('#DispPosible').html('');
        $('#DispTotal').html('');
        $('#Total').val('');
    });
    $('#guardarBtn').click(function() {
        if ($('#dealer').val() != '' && $('#datepicker').val() != '' && $('#datepicker2').val() != '' && $('#datepicker3').val() != '') {
            jsonMotor = $('#tableBody3').bootstrapTable('getAllSelections');
            if (jsonMotor.length < 2 && jsonMotor.length > 0) {
                json = JSON.stringify($('#myform').serializeArray());
                $.ajax({
                    data: {data: json, tipo: 'USOQSOL', dataTec: JSON.stringify(jsonMotor)},
                    dataType: "text",
                    url: "GuardarHerramientas",
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
            } else {
                alert('Selecciona un Tecnico para poder Evaluar.');
            }
        } else {
            alert('Debe llenar todos los campos para poder Guardar.');
        }
    });
    
    $('#guardarBtnS').click(function() {
        if ($('#dealer').val() != '' && $('#datepicker').val() != '' && $('#datepicker2').val() != '' && $('#datepicker3').val() != '') {
            jsonMotor = $('#tableBody3').bootstrapTable('getAllSelections');
            if (jsonMotor.length < 2 && jsonMotor.length > 0) {
                json = JSON.stringify($('#myform').serializeArray());
                $.ajax({
                    data: {data: json, tipo: 'USOQSOL', dataTec: JSON.stringify(jsonMotor)},
                    dataType: "text",
                    url: "GuardarHerramientas",
                    method: "GET",
                    beforeSend: function() {
                        $('#headerModal').html('Agregando registro...');
                        $('#closeModal').css('display', 'none');
                        $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                    }
                }).done(function(e) {
                    $('#headerModal').html(e);
                    $('#closeModalEliminar').css('display', '');
                    window.location = "TEMPHerramientasSoftware.jsp";
                }).fail(function(e) {
                    $('#closeModal').css('display', '');
                    $('#headerModal').html('Ocurrio un error al guardar los datos');
                });
            } else {
                alert('Selecciona un Tecnico para poder Evaluar.');
            }
        } else {
            alert('Debe llenar todos los campos para poder Guardar.');
        }
    });
});
function radioY(id) {
    $('#resp' + id).val('Y');
}

function radioN(id) {
    $('#resp' + id).val('N');
}

function obtenerInfo(id, idProm) {
    $.ajax({
        dataType: "text",
        url: "ObtenerHerramientas?id=" + id,
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de distribuidores');
        } else {
            json = $.parseJSON(e);
            for (var i = 0; i < json.length; i++) {
                $('#tipo_eval').val(json[i].tipoEval);
                $('#revision').val(json[i].revision);
                $('#anio').val(json[i].anio);
                $('#dr').val(json[i].codigoDR);
                $('#codigoDR').val(json[i].codigoDR);
                $('#dealer').val(json[i].idDealer);
                $('#codigoDeal').val(json[i].idDealer);
                $('#datepicker').val(json[i].fechaEval);
                $('#datepicker2').val(json[i].fechaIni);
                $('#datepicker3').val(json[i].fechaFin);
                cargarDR(json[i].codigoDR);
                cargarDealers(json[i].codigoDR, json[i].idDealer);
                cargarTabla(json[i].idDealer, idProm);
                cargarPreguntas('PregUsoQSOLCarga', json[i].idDealer, idProm);
                ShowTotal(json[i].idDealer, idProm);
            }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
}

function ShowTotal(id, idProm) {
	jsonMotor = $('#tableBody3').bootstrapTable('getAllSelections');
    $.ajax({
        dataType: "text",
        url: 'PorcUsoQSOL',
        data: {idDealer:id, data: JSON.stringify(jsonMotor), idProm: idProm },
        
        method: "GET"
    }).done(function(e) {
        if (e === 'error') {
        } else {
            json = $.parseJSON(e);
            $('#DispPosible').html(json.data[0].porcPosible);
            $('#DispTotal').html(json.data[0].porcLogrado + "%");
            $('#Total').val(json.data[0].porcLogrado);
        }
    });
}

function cargarTabla(id, idProm) {
    $('#tableBody').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'MotorHQSOL?idDealer=' + id,
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
    $('#tableBody3').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'PerfilDealer?id_deal=' + id + '&tipo=USOQSOL',
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tableBody3').bootstrapTable({
            dataType: 'json',
            emptytext: '-',
            data: json.data,
            singleSelect:true,
            search: true,
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
                    field: status,
                    checkbox: true
                }, {
                    field: 'no',
                    title: 'Promotion',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'WWID',
                    title: 'WWID',
                    type: 'text',
                    align: 'center',
                    valign: 'middle',
                    visible: false
                }, {
                    field: 'nombre',
                    title: 'Nombre',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'status',
                    title: 'Puesto',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'progName',
                    title: 'Motor',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }]
        });
        for(var i = 0; i < json.data.length; i++){
        	if(json.data[i].no == idProm){
        		$('#tableBody3').bootstrapTable('check',i);
        	}
        }
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
}

function cargarPreguntas(url, id, idProm) {
    $('#tableBody2').bootstrapTable('destroy');
    $('#tableBody2').bootstrapTable({
        dataType: 'json',
        emptytext: '-',
        //data: json.data,
        url: url + '?id=' + id + "&idProm=" + idProm,
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
        onLoadSuccess: function() {
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
                type: 'text'
            }, {
                field: 'rIncorrecta',
                title: 'NO',
                align: 'center',
                valign: 'middle',
                type: 'text'
            }]
    });
}