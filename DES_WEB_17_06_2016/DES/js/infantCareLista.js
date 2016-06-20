

$(function() {
	$('#geneICare').addClass("active");
    $('#tableMatrizInfantCare').bootstrapTable({
        idField: 'id',
        dataType: 'json',
        url: 'GetMatriz',
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
                field: 'id',
                title: 'Id',
                visible: false
            }, {
                field: 'nombreMatrizTeenCare',
                title: 'Motor',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'oem',
                title: 'OEM',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'para',
                title: 'Para',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'estatus',
                title: 'Estatus',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'ultimaModificacion',
                title: '&Uacute;ltima modificacion',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'link',
                title: 'Detalles',
                align: 'center',
                valign: 'middle',
                formatter:'linkFormatter',
                class: 'TextFormat'
            }, {
                field: 'btnEliminar',
                title: 'Eliminar',
                type: 'text',
                align: 'center',
                valign: 'middle'
            }]
    });  
    });

function linkFormatter(value,row) {
  //return '<a href=TEMPdetallesInfantCare.jsp?id='+row.id+'> Ver detalles</a>';
  
  return '<a href=TEMPdetallesInfantCare.jsp?id='+row.id+'>'
  +'<img src="img/file_edit.png" alt="Editar" style="width:22px; height:22px;"> </a>';
}

function eliminarRegistro(id) {
	if(confirm("¿Esta seguro que deseas eliminar el registro?")) {
	    $('#tableBody').bootstrapTable('removeByUniqueId', id);
	    $.ajax({
	        dataType: "text",
	        url: "EliminarMatrizTeen?id=" + id,
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











