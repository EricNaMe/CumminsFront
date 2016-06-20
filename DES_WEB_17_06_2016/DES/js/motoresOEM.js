/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var OEM = "";
$(function() {
	$('#temMotoOEM').addClass("active");
    
	 $.ajax({
	        dataType: "text",
	        url: "ObtenerOem",
	        method: "GET",
	        beforeSend: function() {
	        		//alert('#001');
	        }

	    }).done(function(e) {
	        //alert('#002');
	    	if (e === 'error') {
	            alert('Ocurrio un error al cargar catalogo OEM');
	        } else {
	            jsonOem = $.parseJSON(e);
	            $('#oem').html($("<option></option>"));
	            for (var i = 0; i < jsonOem.length; i++) {
	                $('#oem')
	                        .append($("<option></option>")
	                                .attr({value: jsonOem[i].value})
	                                .text(jsonOem[i].text.toUpperCase()));
	            }
	        }


	    }).fail(function(e) {
	                $('#headerModal').html('Ocurrio un error al cargar los OEM');
	                $('#closeModal').css('display', '');
	    });
	
	
	$.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerMotoresObl',
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tableCheckBoxObl').bootstrapTable({
            dataType: 'json',
            emptytext: '-',
            data: json.data,
            pagination: false,
            clickToSelect: true,
            maintainSelected: true,
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
                    field: 'ID_MOTORES_OEM',
                    title: 'IDMotoresOEM',
                    visible: false
                }, {
                    checkbox: true,
                    field: 'status'
                }, {
                    type: 'text',
                    title: 'Motores obligatorios',
                    field: 'motor',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'tipoMotor',
                    title: 'TipoMotor',
                    visible: false
                }]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });

    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerMotoresOpc',
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tableCheckBoxNoDisp').bootstrapTable({
            dataType: 'json',
            emptytext: '-',
            data: json.data,
            pagination: false,
            clickToSelect: true,
            maintainSelected: true,
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
                    field: 'ID_MOTORES_OEM',
                    title: 'IDMotoresOEM',
                    visible: false
                }, {
                    checkbox: true,
                    field: 'status'
                }, {
                    type: 'text',
                    title: 'Motores opcionales',
                    field: 'motor',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'tipoMotor',
                    title: 'TipoMotor',
                    visible: false
                }]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });

    $.ajax({
        dataType: "text",
        method: "POST",
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        $('#tableMotoresOEM').bootstrapTable({
            dataType: 'json',
            url: 'CapturaMotoresOEM',
            idField: 'ID_MOTORES_OEM',
            uniqueId: 'ID_MOTORES_OEM',
            pagination: true,
            search: true,
            //----------------------------
            showExport: true,
            exportTypes:['excel', 'pdf'],
            exportDataType:'all',
            exportOptions: {
                fileName: 'MotoresOEM'
            },
            //----------------------------
            emptytext: '-',
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
                    field: 'ID_MOTORES_OEM',
                    title: 'IDMotoresOEM',
                    visible: false
                },
                {
                    field: 'OEM',
                    title: 'OEM',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    field: 'motor',
                    title: 'Motores',
                    align: 'center',
                    valign: 'middle',
                    class: 'TextFormat',
                    editable: {
                        defaultValue: '----------',
                        emptytext: '----------',
                        url: 'GuardarMotoresOEM',
                        type: 'text'
                    }
                }, {
                    field: 'tipoMotor',
                    title: 'Obligatorios/Opcionales',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'eliminar',
                    title: '',
                    formatter: 'linkFormatter',
                    align: 'center',
                    valign: 'middle',
                    class: 'TextFormat'
                }]
        });
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
});

$(function() {
    $('#guardarMotor').click(function() {
        OEM = $('#oem').val();
        if (OEM != '') {
        	jsonMotor = $('#tableCheckBoxObl').bootstrapTable('getAllSelections');
        	jsonMotor2 = $('#tableCheckBoxNoDisp').bootstrapTable('getAllSelections');
            if(jsonMotor.length > 0 && jsonMotor2.length > 0){
                jsonMotorOEM = JSON.stringify($('#tableCheckBoxObl').bootstrapTable('getAllSelections'));
                $.ajax({
                    data: {data: jsonMotorOEM},
                    dataType: "text",
                    url: "GuardarMotoresOEMObl?oem=" + OEM,
                    method: "GET",
                    beforeSend: function() {
                        $('#headerModal').html('Agregando registro...');
                        $('#closeModal').css('display', 'none');
                        $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                    }
                }).done(function(e) {
                    $('#headerModal').html(e);
                    $('#closeModalEliminar').css('display', '');
                    $('#tableCheckBoxObl').bootstrapTable('uncheckAll');
                }).fail(function(e) {
                    $('#closeModal').css('display', '');
                    $('#headerModal').html('Ocurrio un error al guardar los datos');
                });

                jsonMotorOEM = JSON.stringify($('#tableCheckBoxNoDisp').bootstrapTable('getAllSelections'));
                $.ajax({
                    data: {data: jsonMotorOEM},
                    dataType: "text",
                    url: "GuardarMotoresOEMOpc?oem=" + OEM,
                    method: "GET",
                    beforeSend: function() {
                        $('#headerModal').html('Agregando registro...');
                        $('#closeModal').css('display', 'none');
                        $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                    }
                }).done(function(e) {
                    $('#headerModal').html(e);
                    $('#closeModalEliminar').css('display', '');
                    $('#tableCheckBoxNoDisp').bootstrapTable('uncheckAll');
                }).fail(function(e) {
                    $('#closeModal').css('display', '');
                    $('#headerModal').html('Ocurrio un error al guardar los datos');
                });
                $('#oem').val('');
                $('#tableMotoresOEM').bootstrapTable('refresh');
                $('#tableMotoresOEM').bootstrapTable('refresh');
            } else {
                alert('Selecciona un Motor para poder guardar.');
            }
        } else {
            alert('Selecciona un OEM para poder guardar.');
        }
    });
});

function linkFormatter(value, row) {
    //return '<a href=javascript:eliminarRegistro(' + row.ID_MOTORES_OEM + ')>Eliminar</a>';
	return '<a href=javascript:eliminarRegistro(' + row.ID_MOTORES_OEM + ')>'
	+'<img src="img/file_delete.png" alt="Eliminar" style="width:22px; height:22px;"> </a>';
}

function eliminarRegistro(idMotores) {
    $('#tableMotoresOEM').bootstrapTable('removeByUniqueId', idMotores);
    $.ajax({
        dataType: "text",
        url: "EliminarMotoresOEM?id=" + idMotores,
        method: "GET",
        beforeSend: function() {
            $('#headerModal').html('Eliminando registro...');
            $('#closeModal').css('display', 'none');
            $('#closeModalEliminar').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        $('#headerModal').html(e);
        $('#closeModalEliminar').css('display', '');
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al eliminar el registro');
        $('#closeModalEliminar').css('display', '');

    });
}