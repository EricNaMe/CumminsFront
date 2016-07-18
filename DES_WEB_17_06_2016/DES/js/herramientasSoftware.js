/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
	$('#herraSoft').addClass("active");
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'HerramientasSoftware',
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
            pagination: true,
            search: true,
            idField: 'idDealer',
            uniqueId: 'idDealer',
            showExport: true,
            exportTypes:['excel', 'pdf'],
            exportDataType:'all',
            exportOptions: {
                fileName: 'Evaluacion de Herramientas'
            },
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
                    field: 'idDealer',
                    title: 'IdDealer',
                    visible: false
                }, {
                    field: 'delear',
                    title: 'Dealer',
                    type: 'text',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'evalPreEval',
                    title: 'Evaluaci&oacute;n<BR>Pre-Evaluaci&oacute;n',
                    type: 'text',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'seccion',
                    title: 'Secci&oacute;n',
                    type: 'text',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'porcMetaEsp',
                    title: '% Hta <BR>Especial',
                    type: 'text',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'porcMetaElec',
                    title: '% Hta <BR> Electr&oacute;nica',
                    type: 'text',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'porcLicenciaQSOL',
                    title: '% Licencia <BR> QSOL',
                    type: 'text',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'porcUsoQSOL',
                    title: '% Uso <BR> QSOL',
                    type: 'text',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'porcTotal',
                    title: '% Total',
                    type: 'text',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'editar',
                    title: 'Editar <BR>Consultar',
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

function editarRegistroEle(id) {
    window.location = "TEMPHerramientasElectronica.jsp?id=" + id;
}

function editarRegistroInd(id) {
    window.location = "TEMPHerramientasIndividual.jsp?id=" + id;
}

function editarRegistroUsoQSOL(id,wwid) {
    window.location = "TEMPHerramientasUsoQSOL.jsp?id=" + id + "&idPromo="+ wwid;
}

function editarRegistroHerrQSOL(id) {
    window.location = "TEMPHerramientasEvaluacionQSOL.jsp?id=" + id;
}

function eliminarRegistro(id) {
	if(confirm("¿Esta seguro que deseas eliminar el registro?")) {
	    $('#tableBody').bootstrapTable('removeByUniqueId', id);
	    $.ajax({
	        dataType: "text",
	        url: "EliminarHerramientas?id=" + id,
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


