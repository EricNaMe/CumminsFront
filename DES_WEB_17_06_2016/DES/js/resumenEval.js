/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
	$('#resEval').addClass("active");
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerPefilEjecConsulta',
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tableResumen').bootstrapTable({
            dataType: 'json',
            emptytext: '-',
            data: json,
            pagination: true,
            idField: 'id_resumen',
            uniqueId: 'id_resumen',
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
                    field: 'id_resumen',
                    title: 'id_resumen',
                    visible: false
                },{
                    field: 'clave',
                    title: 'Evaluaci&oacute;n <BR> Pre-Evaluaci&oacute;n',
                    visible: true
                }, {
                    field: 'dr',
                    title: 'DR',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'dealer',
                    title: 'Dealer',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'sp_code',
                    title: 'C&oacute;digo de Dealer',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'partes',
                    title: '% <BR> Partes',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'herramientas',
                    title: '% <BR> Herramientas',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'capacitacion',
                    title: '% <BR> Capacitaci&oacute;n',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'eficiencia',
                    title: '% <BR> Eficiencia',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'quejas',
                    title: '% <BR> Quejas',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'nivel',
                    title: 'Nivel',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'editar',
                    title: 'Editar <BR>Consultar',
                    //formatter: 'linkFormatterEdit',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'eliminar',
                    title: 'Eliminar',
                    //formatter: 'linkFormatterEliminar',
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
    return '<a href=javascript:editarRegistro(' + row.id_resumen + ')>' +
    '<img src="img/file_search.png" alt="Detalles" style="width:22px; height:22px;"> </a>';
}

function editarRegistro(id) {
   /* var form = $('<form action="TEMPPerfilDealer.jsp" method="post">' +
            '<input type="hidden" name="id" value="' + id + '" />' +
            '</form>');
    $(form).submit();*/
	
		window.location = "TEMPResumenEjecutivo.jsp?id=" + id; 

}




/*
function linkFormatterEliminar(value, row) {
    return '<a href=javascript:eliminarRegistro(' + row.perfilId + ')>'
    +'<img src="img/file_delete.png" alt="Eliminar" style="width:22px; height:22px;"> </a>';
}*/

function eliminarRegistro(id) {
	if(confirm("¿Esta seguro que deseas eliminar el registro?")) {
	    $('#tableResumen').bootstrapTable('removeByUniqueId', id);
	    $.ajax({
	        dataType: "text",
	        url: "EliminarResumenEjec?id=" + id,
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

