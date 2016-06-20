/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
    

	
	$('#atras').hide(true);
    $('#consultar').hide(true);
    $('#tableBody').hide(true);
    
    $.ajax({
        dataType: "text",
        url: "ObtenerDR",
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de distribuidores');
        } else {
            json = $.parseJSON(e);
            $('#dr').html($("<option></option>"));
            for (var i = 0; i < json.length; i++) {
                $('#dr').append($("<option></option>")
                        .attr("value", json[i].value)
                        .text(json[i].text));
            }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });

    $('#dr').on('change', function() {
        $('#atras').hide(true);
        $('#consultar').hide(true);
        $('#tableBody').hide(true);
        $.ajax({
            dataType: "text",
            url: "ObtenerDealer?id_dr=" + this.value,
            method: "GET",
            beforeSend: function() {

            }
        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar catalogo de rangos');
            } else {
                json = $.parseJSON(e);
                $('#dealer').html($("<option></option>"));
                for (var i = 0; i < json.length; i++) {
                    $('#dealer')
                            .append($("<option></option>")
                                    .attr("value", json[i].value)
                                    .text(json[i].text));
                }
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
            $('#closeModal').css('display', '');
        });
        $('#codigoDR').val(this.value);
        $('#codigoDeal').val("");
    });
    
    $('#dealer').on('change', function() {
        $('#atras').hide(true);
        $('#tableBody').bootstrapTable('destroy');
        $.ajax({
            dataType: "text",
            method: "POST",
            url: 'MatrizAgrupada?id_deal=' + this.value,
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
                maintainSelected: true,
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
                        checkbox: true,
                        field: 'status'
                    }, {
                        field: 'matrizId',
                        title: 'Matriz ID',
                        type: 'text',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'matriz',
                        title: 'Matriz',
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
        $('#codigoDeal').val(this.value);
        $('#consultar').show(true);
        $('#tableBody').show(true);
    });

    $('#consultar').click(function() {
        jsonMatriz = JSON.stringify($('#tableBody').bootstrapTable('getAllSelections'));
        if (jsonMatriz != "[]") {
            $('#consultar').hide(true);
            $('#tableBody').bootstrapTable('destroy');
            $.ajax({
                data: {data: jsonMatriz},
                dataType: "text",
                method: "POST",
                url: 'MatrizAgrupada?id_matriz=1',
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
                    /*
                    idField: 'idInfantBdy',
                    uniqueId: 'idInfantBdy',
                    */
                    idField: 'id_rel_matriz_dealer',
		            uniqueId: 'id_rel_matriz_dealer',
                    pagination: true,
                    rowStyle: 'rowStyle',
                    maintainSelected: true,
                    search:true,
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
                        	field: 'id_rel_matriz_dealer',
                        	title: 'id_rel_matriz_dealer',
                        	visible: false
                    	}, {
                            field: 'idInfantBdy',
                            title: 'Id Infant Body',
                            visible: false
                        }, {
                            field: 'producto',
                            title: 'Producto',
                            type: 'text',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'noParte',
                            title: 'No. Parte',
                            type: 'text',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'noParteAnt',
                            title: 'No. Parte Ant',
                            type: 'text',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'descripcion',
                            title: 'Descripcion',
                            type: 'text',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'comentariosNP',
                            title: 'Comentarios del N/P',
                            type: 'text',
                            align: 'center',
                            valign: 'middle',
                            class: 'TextFormat',
                            //emptytext: '-',
                            editable: {
                                defaultValue: '-',
                                emptytext: '-',
                                highlight:'',
                                url: 'GuardarMatrizAgrupada?sp_code=' + $('#dealer').val() ,
                                type: 'text'
                            }
                        }, {
                            field: 'cantidadMin',
                            title: 'Cantidad Minima',
                            type: 'text',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'existencia',
                            title: 'Existencia',
                            align: 'center',
                            valign: 'middle',
                            class: 'TextFormat',
                            editable: {
                                defaultValue: '-',
                                emptytext: '-',
                                url: 'GuardarMatrizAgrupada?sp_code=' + $('#dealer').val(),
                                type: 'text'
                            }
                        }, {
                            field: 'ponderacion',
                            title: 'Ponderacion',
                            type: 'text',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'ubicacion',
                            title: 'Ubicacion',
                            type: 'text',
                            align: 'center',
                            class: 'TextFormat',
                            valign: 'middle',
                            editable: {
                                defaultValue: '-',
                                emptytext: '-',
                                url: 'GuardarMatrizAgrupada?sp_code=' + $('#dealer').val(),
                                type: 'text'
                            }
                        }, {
                            field: 'VOLUMEN_VTA_1',
                            title: 'Volumen de Ventas',
                            type: 'text',
                            align: 'center',
                            class: 'TextFormat',
                            valign: 'middle',
                            editable: {
                                defaultValue: '-',
                                emptytext: '-',
                                url: 'GuardarMatrizAgrupada?sp_code=' + $('#dealer').val(),
                                type: 'text'
                            }
                        }, {
                            field: 'url',
                            title: 'URL',
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
            $('#atras').show(true);
            $('#tableBody').show(true);
        } else {
            alert("Seleccione al menos una Matriz");
        }
    });

    $('#atras').click(function() {
        $('#tableBody').bootstrapTable('removeAll');
        $('#atras').hide(true);
        $('#tableBody').hide(true);
        $('#codigoDeal').val("");
        $('#dealer').val("");
    });
});



var lastVal;
var curColor = 1;
function rowStyle(row, index) {

    var classes =['groupRow',''];
    
    if (row.noParte != lastVal){
    	curColor++;
    }
    lastVal =row.noParte;
    return {
    	classes: classes[curColor % 2]
    	//css: {"background-color": color[curColor % 2]}
    };
}
