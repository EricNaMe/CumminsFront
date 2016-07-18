/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
	$('#herraAgrup').addClass("active");
    $('#atras').hide(true);
    $('#consultar').hide(true);
    $('#guardarBtn').hide(true);
    $('#guardarBtnS').hide(true);
    $('#tableBody').hide(true);
    $('#dealer').on('change', function() {
        $('#atras').hide(true);
        $('#guardarBtn').hide(true);
        $('#guardarBtnS').hide(true);
        $('#tableBody').bootstrapTable('destroy');
        matriz(this.value,$('#tipo_eval').val(),$('#revision').val(),$('#anio').val());
        
        $('#codigoDeal').val(this.value);
        $('#consultar').show(true);
        $('#tableBody').show(true);
    });

    $('#consultar').click(function() {
        var strMatriz = '';
        jsonMatriz = JSON.stringify($('#tableBody').bootstrapTable('getAllSelections'));
        json = $('#tableBody').bootstrapTable('getAllSelections');
        if (jsonMatriz != "[]") {
            for (var i = 0; i < json.length; i++) {
                if (i == 0) {
                    strMatriz = json[i].motorId;
                } else {
                    strMatriz += ',' + json[i].motorId;
                }
            }
            $('#idMatriz').val(strMatriz);
            $('#matriz').val(strMatriz);
            $('#consultar').hide(true);
            $('#tableBody').bootstrapTable('destroy');
            $.ajax({
                //data: {data: jsonMatriz},
                dataType: "text",
                method: "POST",
                //url: 'MatrizHerramientas?id_matriz=1',
                beforeSend: function() {
                    $('#headerModal').html('Solicitando informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                //json = $.parseJSON(e);
                $('#tableBody').bootstrapTable({
                    dataType: 'json',
                    emptytext: '-',
                    //data: json,
                    queryParams: {data: jsonMatriz,tipo_eval:$('#tipo_eval').val(),revision:$('#revision').val(),anio:$('#anio').val() },
                    url: 'MatrizHerramientas?id_matriz=1',
                    idField: 'id_rel_matriz',
                    uniqueId: 'id_rel_matriz',
                    pagination: true,
                    maintainSelected: true,
                    showExport: true,
                    exportTypes:['excel', 'pdf'],
                    exportDataType:'all',
                    exportOptions: {
                    fileName: 'Evaluacion de Herramientas'
                    },
                    formatLoadingMessage: function() {
                        $('#headerModal').html('Solicitando informacion...');
                        $('#closeModal').css('display', 'none');
                        $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
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
                            field: 'id_rel_matriz',
                            title: 'id_rel_matriz',
                            visible: false
                        }, {
                            field: 'id_matriz',
                            title: 'id_matriz',
                            visible: false
                        }, {
                            field: 'matriz',
                            title: 'Motor',
                            type: 'text',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'no_parte',
                            title: 'N/P',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'no_parte_ant',
                            title: 'N/P<br>anterior',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'descripcion',
                            title: 'Descripci&oacute;n',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'uso',
                            title: 'Uso',
                            class: 'TextFormat',
                            editable: {
                            	defaultValue: '',
                                emptytext: '----------',
                                url: 'GuardarHerramientasIndBdy?sp_code=' + $('#dealer').val(),
                                type: 'text'
                            },
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'cm',
                            title: 'Ctd.<BR>M&iacute;nima',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'ponderacion',
                            title: 'Ponderaci&oacute;n',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'existencia',
                            title: 'Existencia',
                            class: 'TextFormat',
                            editable: {
                            	defaultValue: '',
                                emptytext: '----------',
                                url: 'GuardarHerramientasIndBdy?sp_code=' + $('#dealer').val(),
                                type: 'text',
                                success: function(response, newValue) {
                                    actualizarStatus();
                                },
                                validate: function(value) {
                                    return validateNumberMin(value, false);
                                }
                            },
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'ubicacion',
                            title: 'Ubicaci&oacute;n',
                            class: 'TextFormat',
                            editable: {
                            	defaultValue: '',
                                emptytext: '----------',
                                url: 'GuardarHerramientasIndBdy?sp_code=' + $('#dealer').val(),
                                type: 'text'
                            },
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'nueva',
                            title: 'Nueva',
                            class: 'TextFormat',
                            editable: {
                            	defaultValue: 'N',
                                emptytext: 'NO',
                                url: 'GuardarHerramientasIndBdy?sp_code=' + $('#dealer').val(),
                                type: 'select',
                                source: [{value: 'Y', text: 'SI'}, {value: 'N', text: 'NO'}]
                                        //source: "ObtenerRango"
                            },
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'comentarios',
                            title: 'Comentarios',
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
            $('#guardarBtn').show(true);
            $('#guardarBtnS').show(true);
            $('#tableBody').show(true);
        } else {
            alert("Seleccione al menos una Matriz");
        }
    });

    $('#atras').click(function() {
        $('#tableBody').bootstrapTable('removeAll');
        $('#atras').hide(true);
        $('#guardarBtn').hide(true);
        $('#guardarBtnS').hide(true);
        $('#tableBody').hide(true);
        $('#codigoDeal').val("");
        $('#dealer').val("");
        $('#tipo_eval').val("");
        $('#revision').val("");
        $('#dr').val("");
        $('#codigoDR').val("");
        $('#datepicker').val("");
        $('#datepicker2').val("");
        $('#datepicker3').val("");
    });

    $('#guardarBtn').click(function() {
        var id = '';
        id = $('#idMatriz').val();
        json = JSON.stringify($('#myform').serializeArray());
        $.ajax({
            data: {data: json, tipo: 'AGRUPADA', id: id},
            dataType: "text",
            url: "GuardarHerramientas",
            method: "GET",
            beforeSend: function() {
                $('#headerModal').html('Agregando registro...');
                $('#closeModal').css('display', 'none');
                $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
            }
        }).done(function(e) {
            $('#headerModal').html(e);
            $('#closeModalEliminar').css('display', '');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al guardar los datos');
        });
    });
    
    $('#guardarBtnS').click(function() {
        var id = '';
        id = $('#idMatriz').val();
        json = JSON.stringify($('#myform').serializeArray());
        $.ajax({
            data: {data: json, tipo: 'AGRUPADA', id: id},
            dataType: "text",
            url: "GuardarHerramientas",
            method: "GET",
            beforeSend: function() {
                $('#headerModal').html('Agregando registro...');
                $('#closeModal').css('display', 'none');
                $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
            }
        }).done(function(e) {
            $('#headerModal').html(e);
            $('#closeModalEliminar').css('display', '');
            window.location = "TEMPHerramientasSoftware.jsp";
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al guardar los datos');
        });
    });
});


function actualizarStatus(){
	$.ajax({
        dataType: "text",
        url: "CambiarStatusHetas?new_status=P",//?motor=" + $('#motorAdd').val(),
        method: "POST",
        data: $("#myform").serialize(),
    }).done(function(e) {
    }).fail(function(e) {
    });
}


function matriz(sp_code,tipo_eval,revision,anio){
	$.ajax({
        dataType: "text",
        method: "POST",
        data: { tipo_eval:tipo_eval,revision:revision,anio:anio },
        url: 'MatrizHerramientas?id_deal=' + sp_code,
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
                    field: 'motorId',
                    title: 'Motor ID',
                    type: 'text',
                    align: 'center',
                    valign: 'middle',
                    visible: false
                }, {
                    field: 'matriz',
                    title: 'Motor',
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
}