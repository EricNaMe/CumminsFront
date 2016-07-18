/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
	$('#perDealerT').addClass("active");
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'PerfilDealerT',
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tablePerfiles').bootstrapTable({
            dataType: 'json',
            emptytext: '-',
            data: json.data,
            pagination: true,
            //----------------------------
            showExport: true,
            exportTypes:['excel', 'pdf'],
            exportDataType:'all',
            exportOptions: {
                fileName: 'Motores'
            },
            //----------------------------
            idField: 'ID_PERFIL_DEALER',
            uniqueId: 'ID_PERFIL_DEALER',
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
                	field: 'ID_PERFIL_DEALER',
                	title: 'ID_PERFIL_DEALER',
                	visible: false
            	},{
                    field: 'perfilId',
                    title: 'Perfil ID',
                    visible: false
                },{
                    field: 'clave',
                    title: 'Evaluaci&oacute;n <BR> Pre-Evaluaci&oacute;n',
                    visible: true,
                    align: 'center',
                    valign: 'middle'
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
                    field: 'oem',
                    title: 'OEM',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'matriz',
                    title: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Motor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'noMecanicos',
                    title: 'No. <BR>Mec&aacute;nicos',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'porcObtenido',
                    title: '% <BR> Obtenido',
                    type: 'text',
                    align: 'center',
                    valign: 'middle',
                    visible:false	
                }, {
                    field: 'editar',
                    title: 'Editar/Consultar',
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
    return '<a href=javascript:editarRegistro(' + row.ID_PERFIL_DEALER + ')>' +
    '<img src="img/file_search.png" alt="Detalles" style="width:22px; height:22px;"> </a>';
}

function editarRegistro(id) {
   /* var form = $('<form action="TEMPPerfilDealer.jsp" method="post">' +
            '<input type="hidden" name="id" value="' + id + '" />' +
            '</form>');
    $(form).submit();*/
	
		window.location = "TEMPPerfilDealer.jsp?id=" + id; 

}





function linkFormatterEliminar(value, row) {
    return '<a href=javascript:eliminarRegistro(' + row.ID_PERFIL_DEALER + ')>'
    +'<img src="img/file_delete.png" alt="Eliminar" style="width:22px; height:22px;"> </a>';
}

function eliminarRegistro(id) {
	if(confirm("¿Esta seguro que deseas eliminar el registro?")) {
	    $('#tablePerfiles').bootstrapTable('removeByUniqueId', id);
	    $.ajax({
	        dataType: "text",
	        url: "EliminarPerfil?id=" + id,
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

