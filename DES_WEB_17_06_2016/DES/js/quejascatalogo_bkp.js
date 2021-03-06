var count;

$(function() {
    
    $('#tableTotal').bootstrapTable({
        dataType: 'json',
        emptytext: '-',
        url: 'ObtenerPonderacionSum',
        //data: json.data,
        idField: 'ponderacionSum',
        uniqueId: 'ponderacionSum',
        formatLoadingMessage: function() {
            return 'Cargando...';
        },
        formatNoMatches: function() {
            return 'No se encontraron registros';
        },
        formatToggle: function() {
            return 'Toggle';
        },
        formatColumns: function() {
            return 'Columnas';
        },
        columns: [{
                field: 'ponderacionSum',
                title: 'TOTAL:',
                type: 'text'
            }]
    });
	
/*
    $.ajax({
        dataType: "text",
        method: "POST",
       // url: 'ObtenerQuejasCatalogo',
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
       // json = $.parseJSON(e);
        $('#tableQuejasCatalogo').bootstrapTable({
            dataType: 'json',
            emptytext: '-',
            //data: json.data,
            url: 'ObtenerQuejasCatalogo',
            idField: 'ID_Queja',
            uniqueId: 'ID_Queja',
            formatLoadingMessage: function() {
                return 'Cargando...';
            },
            formatRecordsPerPage: function(pageNumber) {
                return pageNumber + ' registros por pagina';
            },
            formatShowingRows: function(pageFrom, pageTo, totalRows) {
                return 'Mostrando ' + /*pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' registros';
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
                    field: 'ID_Queja',
                    title: '#',
                    type: 'text'
                }, {
                    field: 'Queja',
                    title: 'Queja',
                    type: 'text'
                }, {
                    field: 'Ponderacion',
                    title: '% Ponderacio&acute;n',
                    align: 'center',
                    valign: 'middle',
                    class: 'TextFormat',
                    editable: {
                        defaultValue: '-',
                        emptytext: '-',
                        url: 'GuardarQuejaCatalogo',
                        type: 'text',
                        success: function(response, newValue) {
                        		$('#tableTotal').bootstrapTable('refresh');
                        		$('#tableTotal').bootstrapTable('refresh');
                        }
                    }
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
*/
    
    $('#tableQuejasCatalogo').bootstrapTable({
        dataType: 'json',
        emptytext: '-',
        //data: json.data,
        url: 'ObtenerQuejasCatalogo',
        idField: 'ID_Queja',
        uniqueId: 'ID_Queja',
        
        formatLoadingMessage: function() {
        	
        	$('#headerModal').html('Solicitando informacion...');
             $('#closeModal').css('display', 'none');
             $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
            return 'Cargando...';
        },
        onLoadSuccess: function(){
        	//$('#headerModal').hide();
        	 $('#myModal').modal('toggle');
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
                field: 'ID_Queja',
                title: '#',
                type: 'text'
            }, {
                field: 'Queja',
                title: 'Queja',
                type: 'text'
            }, {
                field: 'Ponderacion',
                title: '% Ponderaci&oacute;n',
                align: 'center',
                valign: 'middle',
                class: 'TextFormat',
                editable: {
                    defaultValue: '-',
                    emptytext: '-',
                    url: 'GuardarQuejaCatalogo',
                    type: 'text',
                    success: function(response, newValue) {
                    		$('#tableTotal').bootstrapTable('refresh');
                    		$('#tableTotal').bootstrapTable('refresh');
                    }
                }
            }, {
                field: 'eliminar',
                title: 'Eliminar',
                formatter: 'linkFormatterEliminar',
                align: 'center',
                valign: 'middle'
            }]
    });
    
    
    
    $('#enviar').click(function() {
        if ($('#queja').val() != '') {
            $.ajax({
                data: {queja: $('#queja').val()},
                dataType: "text",
                url: "GuardarQuejaCatalogo",
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                $('#queja').val("");
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });

            /*
            $('#tableQuejasCatalogo').bootstrapTable('destroy');
            $.ajax({
                dataType: "text",
                method: "POST",
                url: 'ObtenerQuejasCatalogo',
                beforeSend: function() {
                    $('#headerModal').html('Solicitando informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                json = $.parseJSON(e);
                $('#tableQuejasCatalogo').bootstrapTable({
                    dataType: 'json',
                    emptytext: '-',
                    data: json.data,
                    idField: 'ID_Queja',
                    uniqueId: 'ID_Queja',
                    formatLoadingMessage: function() {
                        return 'Cargando...';
                    },
                    formatRecordsPerPage: function(pageNumber) {
                        return pageNumber + ' registros por pagina';
                    },
                    formatShowingRows: function(pageFrom, pageTo, totalRows) {
                        return 'Mostrando ' + /*pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' registros';
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
                            field: 'ID_Queja',
                            title: '#',
                            type: 'text'
                        }, {
                            field: 'Queja',
                            title: 'Queja',
                            type: 'text'
                        }, {
                            field: 'Ponderacion',
                            title: '% Ponderación',
                            align: 'center',
                            valign: 'middle',
                            class: 'TextFormat',
                            editable: {
                                defaultValue: '-',
                                emptytext: '-',
                                url: 'GuardarQuejaCatalogo',
                                type: 'text'
                            }
                        }, {
                            field: 'eliminar',
                            title: 'Eliminar',
                            class: 'TextFormat',
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
            */
            
             $('#tableQuejasCatalogo').bootstrapTable('refresh');
	       	 $('#tableQuejasCatalogo').bootstrapTable('refresh');
	       	 $('#tableTotal').bootstrapTable('refresh');
	    	 $('#tableTotal').bootstrapTable('refresh');
        } else {
            alert("No ha introducido ninguna queja.");
        }
    });

});

function linkFormatterEliminar(value, row) {
	 $('#tableTotal').bootstrapTable('refresh');
	 $('#tableTotal').bootstrapTable('refresh');
    	//return '<a href=javascript:eliminarRegistro(' + row.ID_Queja + ')>Eliminar</a>';
    	
    	return '<a href=javascript:eliminarRegistro(' + row.ID_Queja + ')>'
    	+'<img src="img/file_delete.png" alt="Eliminar" style="width:22px; height:22px;"> </a>';

}

function eliminarRegistro(id) {
    $('#tableQuejasCatalogo').bootstrapTable('removeByUniqueId', id);
    $.ajax({
        dataType: "text",
        url: "EliminarQuejasCatalogo?id=" + id,
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
    
    $('#tableTotal').bootstrapTable('refresh');
	 $('#tableTotal').bootstrapTable('refresh');
}
