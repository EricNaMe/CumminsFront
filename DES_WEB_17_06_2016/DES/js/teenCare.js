

$(function() {
	$('#geneTCare').addClass("active");


    $('#tableMatrizInfant').bootstrapTable({
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
                field: 'status',
                checkbox: true

            }, {
                field: 'id',
                title: 'Id',
                visible: false
            }, {
                field: 'nombreMatrizTeenCare',
                title: 'Motor'
            }, {
                field: 'para',
                title: 'Para'

            }, {
                field: 'ultimaModificacion',
                title: '&Uacute;ltima modificacion'

            }]
    });


    $('#tableMatrizTeenCare').bootstrapTable({
        idField: 'id',
        dataType: 'json',
        url: 'GetMatrizTeenCare',
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
                field: 'dr',
                title: 'DR',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'para',
                title: 'Para',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'oem',
                title: 'OEM',
                align: 'center',
                valign: 'middle'

            }, {
                field: 'estatus',
                title: 'Status',
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
                class: 'TextFormat',
                formatter:'linkFormatter',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'btnEliminar',
                title: 'Eliminar',
                type: 'text',
                align: 'center',
                valign: 'middle'
            }]
    });


    $("#importar").click(function() {
        
        if($('input:checkbox:checked').length > 0){
        
        jsonBody = JSON.stringify($('#tableMatrizInfant').bootstrapTable('getSelections'));
        $.ajax({
            dataType: "text",
            url: "InfantToTeenCare",
            method: "POST",
            data: {"data": jsonBody},
            beforeSend: function() {
                $('#headerModal').html('Enviando Informacion...');
                $('#closeModal').css('display', 'none');
                $('#myModal').modal({keyboard:false,backdrop:'static'},'show');
            }
        }).done(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html("El cambio fue hecho con exito");
            $('#tableMatrizTeenCare').bootstrapTable('refresh');
            $('#tableMatrizInfant').bootstrapTable('refresh');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al enviar los datos');
        });
            }else{
                alert('Seleccione al menos una matriz');
            }
        });
    });


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

function linkFormatter(value,row) {
  return '<a href=TEMPdetallesTeenCare.jsp?id='+row.id+'> Ver detalles</a>';
}

























