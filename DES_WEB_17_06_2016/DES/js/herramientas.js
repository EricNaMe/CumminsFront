
$(function() {
	$('#geneHerra').addClass("active");

    $('#tblMatrizTeen').bootstrapTable({
        idField: 'id',
        dataType: 'json',
        url: 'GetMatrizTeenCareHerramientas',
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
                title: 'Motor'
            }, {
                field: 'para',
                title: 'Para'

            }, {
                field: 'ultimaModificacion',
                title: '&Uacute;ltima modificacion'

            }, {
                field: 'link',
                title: 'Detalles',
                class: 'TextFormat',
                formatter:'linkFormatter'
            }, {
                field: 'btnEliminar',
                title: 'Eliminar',
                type: 'text',
                align: 'center',
                valign: 'middle'
            }]
    });


    $("#generar").click(function() {
        
        if($('input:radio:checked').length > 0){
        
        jsonBody =  $('#formHerramientas').serializeJSON();
        $.ajax({
            dataType: "text",
            url: "ImportarHerramientas",
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
            $('#headerModal').html(e);
           // $('#myModal').modal({keyboard:false,backdrop:'static'},'show');
            $('#tblMatrizTeen').bootstrapTable('refresh');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al enviar los datos');
        });
            }else{
                alert('Seleccione al menos una matriz');
            }
        });
   });


function linkFormatter(value,row) {
  return '<a href=TEMPdetallesHerramientas.jsp?id='+row.id+'> Ver detalles</a>';
}


function eliminarRegistro(id) {
	if(confirm("¿Esta seguro que deseas eliminar el registro?")) {
	   // $('#tblMatrizTeen').bootstrapTable('removeByUniqueId', id);
		$('#tblMatrizTeen').bootstrapTable('refresh');
	    $.ajax({
	        dataType: "text",
	        url: "EliminarMatrizHerramientas?id=" + id,
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

