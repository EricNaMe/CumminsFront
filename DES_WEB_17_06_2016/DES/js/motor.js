/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
	$('#tempMoto').addClass("active");

	$.ajax({
         dataType: "text",
         url: "ObtenerRango",//?motor=" + this.value,
         method: "GET",
         beforeSend: function() {

         }
     }).done(function(e) {
         if (e === 'error') {
             alert('Ocurrio un error al cargar catalogo de rangos');
         } else {
             json = $.parseJSON(e);
             $('#rango').html($("<option></option>"));
             for (var i = 0; i < json.length; i++) {
                 $('#rango')
                         .append($("<option></option>")
                                 .attr("value", json[i].value)
                                 .text(json[i].text));
             }
         }
    }).fail(function(e) {
         $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
         $('#closeModal').css('display', '');
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
       
    	$('#tableMotores').bootstrapTable({
            idField: 'ID_MOTORES',
            uniqueId: 'ID_MOTORES',
            url: "CapturaMotor",
            pagination: true,
            search: true,
            emptytext: '-',
            //----------------------------
            showExport: true,
            exportTypes:['excel', 'pdf'],
            exportDataType:'all',
            exportOptions: {
                fileName: 'Motores'
            },
            //----------------------------
            dataType: 'json',
            clasees: 'holaaa',
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
                    field: 'ID_MOTORES',
                    title: 'IDMotores',
                    visible: false
                }, {
                    field: 'Motor',
                    title: 'Nombre',
                    align: 'center',
                    valign: 'middle',
                    class: 'TextFormat'
                    /*
                    editable: {
                        defaultValue: '-',
                        emptytext: '-',
                        url: 'GuardarMotores',
                        type: 'text'
                    }*/
                }, {
                    field: 'Rango',
                    title: 'Rango',
                    align: 'center',
                    valign: 'middle',
                    class: 'TextFormat',
                    editable: {
                        defaultValue: '----------',
                        emptytext: '----------',
                        url: 'GuardarMotores',
                        type: 'select',
                        //source: "[{value: 1, text: 'MR'}, {value: 2, text: 'HD'}, {value: 3, text: 'HHP'}, {value: 4, text: 'LD'}]"
                        source: "ObtenerRango"
                    }
                }, {
                    field: 'eliminar',
                    title: '',
                    formatter: 'linkFormatter',
                    align: 'center',
                    valign: 'middle',
                    class: 'TextFormat'
                }]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });

    $('#saveMotor').click(function() {
        if ($('#motor').val() != '' || $('#rango').val() != '') {
            $.ajax({
                dataType: "text",
                url: "GuardarMotores",//?motor=" + $('#motorAdd').val(),
                method: "POST",
                data: $("#formMotor").serialize(),
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#myModal').modal('hide');
                $('#motor').val('');
                $('#rango').val('');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
                ('#motorAdd')[0].reset();
            });
            $('#tableMotores').bootstrapTable('refresh');
            $('#tableMotores').bootstrapTable('refresh');
        } else {
            alert('Indique el nombre del Motor para agregar registro.');
        }
    });
});

function linkFormatter(value, row) {
    //return '<a href=javascript:eliminarRegistro(' + row.ID_MOTORES + ')>Eliminar</a>';
	return '<a href=javascript:eliminarRegistro(' + row.ID_MOTORES + ')>'
	+'<img src="img/file_delete.png" alt="Eliminar" style="width:22px; height:22px;"> </a>';
}

function eliminarRegistro(idMotores) {
    $('#tableMotores').bootstrapTable('removeByUniqueId', idMotores);
    $.ajax({
        dataType: "text",
        url: "EliminarMotores?id=" + idMotores,
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

