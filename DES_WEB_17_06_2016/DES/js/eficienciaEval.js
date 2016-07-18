/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
	$('#efiEvaluacion').addClass("active");
    $('#tableBody').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        url: "ObtenerEfiEval",
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
            idField: "idEfi",
            uniqueId: "idEfi",
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
                    field: 'idEfi',
                    title: 'idEficiencia',
                    visible: false
                },{
                    field: 'clave',
                    title: 'Evaluaci&oacute;n <BR> Pre-Evaluaci&oacute;n',
                    visible: true
                }, {
                    field: 'dealer',
                    title: 'Dealer',
                    align: 'center',
                    valign: 'middle',
                    type: 'text'
                }, {
                    field: 'spCode',
                    title: 'C&oacute;digo<br>Dealer',
                    align: 'center',
                    valign: 'middle',
                    type: 'text'
                }, {
                    field: 'tipo',
                    title: 'Secci&oacute;n',
                    align: 'center',
                    valign: 'middle',
                    type: 'text'
                }/*, {
                    field: 'evaluacion',
                    title: 'Evaluaci&oacute;n<BR>Pre-Evaluaci&oacute;n',
                    align: 'center',
                    valign: 'middle',
                    type: 'text'
                }*/, {
                    field: 'obtenido',
                    title: '% Obtenido',
                    align: 'center',
                    valign: 'middle',
                    type: 'text'
                }, {
                    field: 'editar',
                    title: 'Editar<BR>Consultar',
                    align: 'center',
                    valign: 'middle',
                    type: 'text'
                }, {
                    field: 'eliminar',
                    title: 'Eliminar',
                    align: 'center',
                    valign: 'middle',
                    type: 'text'
                }]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
});


function editarRegistroGara(id) {
    window.location = "TEMPEficienciaGarantias.jsp?id=" + id;
}

function editarRegistroResc(id) {
    window.location = "TEMPEficienciaRescates.jsp?id=" + id;
}

function eliminarRegistro(id) {
	if(confirm("¿Esta seguro que deseas eliminar el registro?")) {
	    $('#tableBody').bootstrapTable('removeByUniqueId', id);
	    $.ajax({
	        dataType: "text",
	        url: "EliminarEficiencia?id=" + id,
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
}