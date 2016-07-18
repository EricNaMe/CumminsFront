
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
	$('#parEvaluadas').addClass("active");
    $.ajax({
        dataType: "text",
        method: "POST",
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        $('#tableBody').bootstrapTable({
            url: "PartesEvaluadas",
            idField: 'id',
            uniqueId: 'id',
            pagination: true,
            search: true,
            emptytext: '-',
            dataType: 'json',
            showExport: true,
            exportTypes:['excel', 'pdf'],
            exportDataType:'all',
            exportOptions: {
                fileName: 'PartesEvaluadas'
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
                    field: 'id',
                    title: 'ID',
                    visible: false
                },{
                    field: 'clave',
                    title: 'Evaluaci&oacute;n<br>Pre-Evaluaci&oacute;n',
                    visible: true,
                    sortable: true
                }, {
                    field: 'dealer',
                    title: 'Dealer',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'matrizProd',
                    title: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Motor &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'fechaEval',
                    title: 'Fecha <BR> Evaluaci&oacute;n',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'porcObtenido',
                    title: '% <BR> Obtenido',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'editar',
                    title: 'Editar <BR> Consultar',
                    formatter: 'linkFormatterEdit',
                    align: 'center',
                    valign: 'middle'
                
                }, {
                    field: 'eliminar',
                    title: 'Eliminar',
                    formatter: 'linkFormatterEliminar',
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

function linkFormatterEdit(value, row) {
    return '<a href=javascript:editarRegistro(' + row.id + ')><img src="img/file_search.png" alt="Ver Detalles" style="width:22px; height:22px;"></a>';
}

function editarRegistro(idPartes) {

   /*
	var form = $('<form action="TEMPPartesIndividual.jsp" method="post">' +
    '<input type="hidden" name="idPartes" value="' + idPartes + '" />' +
    '</form>');
    $(form).submit();
    */
    window.location = "TEMPPartesIndividual.jsp?id=" + idPartes;
}

function linkFormatterEliminar(value, row) {
    //return '<a href=javascript:eliminarRegistro(' + row.id + ')>Eliminar</a>';
    return '<a href=javascript:eliminarRegistro(' + row.id + ')>'
	+'<img src="img/file_delete.png" alt="Eliminar" style="width:22px; height:22px;"> </a>';
}

function eliminarRegistro(idPartes) {
	if(confirm("¿Esta seguro que deseas eliminar el registro?")) {
	    $('#tableBody').bootstrapTable('removeByUniqueId', idPartes);
	    $.ajax({
	        dataType: "text",
	        url: "EliminarPartesEvaluadas?idPartes=" + idPartes,
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