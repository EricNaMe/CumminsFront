/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
	$('#quejasCons').addClass("active");
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerQuejasCons',
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
            search: true,
            idField: 'spCode',
            uniqueId: 'spCode',
            pagination: true,
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
                    field: 'spCode',
                    title: 'SP Code',
                    visible: false
                }, {
                    field: 'drCode',
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
                    field: 'id_queja',
                    title: 'C&oacute;digo<br>Dealer',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'Queja',
                    title: 'Queja',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'fechaEval',
                    title: 'Fecha Queja',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'editar',
                    title: 'Editar <BR>Consultar',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'eliminar',
                    title: 'Eliminar',
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

function editarRegistro(id) {
//    var form = $('<form action="PerfilDealer.jsp" method="post">' +
//            '<input type="hidden" name="id" value="' + id + '" />' +
//            '</form>');
    //$(form).submit();
    window.location = "TEMPQuejasCaptura.jsp?id=" + id;
}

function eliminarRegistro(id) {
	if(confirm("¿Esta seguro que deseas eliminar el registro?")) {
	    $('#tableBody').bootstrapTable('removeByUniqueId', id);
	    $.ajax({
	        dataType: "text",
	        url: "EliminarQuejaCons?id=" + id,
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