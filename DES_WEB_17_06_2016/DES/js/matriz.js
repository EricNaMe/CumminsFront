/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var jsonMatrices;
var strMatrices;
var strMatriz = '';

$(function() {
	$('#parAgrup').addClass("active");

    $('#atras').hide(true);
    $('#consultar').hide(true);
    $('#guardar').hide(true);
    $('#guardarS').hide(true);
    $('#tableBody').hide(true);

    $('#dr').on('change', function() {
        $('#atras').hide(true);
        $('#consultar').hide(true);
        $('#tableBody').hide(true);
        $('#guardar').hide(true);
        $('#guardarS').hide(true);
    });

    $('#dealer').on('change', function() {
        $('#atras').hide(true);
        $('#guardar').hide(true);
        $('#guardarS').hide(true);
        $('#tableBody').bootstrapTable('destroy');
        matriz(this.value,$('#tipo_eval').val(),$('#revision').val(),$('#anio').val());
        $('#codigoDeal').val(this.value);
        $('#consultar').show(true);
        $('#tableBody').show(true);
    });

    $('#consultar').click(function() {
        
        jsonMatriz = JSON.stringify($('#tableBody').bootstrapTable('getAllSelections'));
        //jsonMatrices=$('#tableBody').bootstrapTable('getAllSelections');
        json = $('#tableBody').bootstrapTable('getAllSelections');
        if (jsonMatriz != "[]") {
            for (var i = 0; i < json.length; i++) {
                if (i == 0) {
                    strMatriz = json[i].matrizId;
                } else {
                    strMatriz += ',' + json[i].matrizId;
                }
            }
            console.log(strMatriz);
            $('#idMatriz').val(strMatriz);
            $('#matriz').val(strMatriz);
            $('#consultar').hide(true);
            $('#tableBody').bootstrapTable('destroy');
            $.ajax({
            	// +'&tipo_eval=' +  $('#tipo_eval').val() + '&revision='+  $('#revision').val() + '&anio='+ $('#anio').val() 
                data: {data: jsonMatriz, tipo_eval:$('#tipo_eval').val(),revision:$('#revision').val(),anio:$('#anio').val()},
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
                            valign: 'middle',
                            visible: false
                        }, {
                            field: 'matriz',
                            title: 'Motor',
                            type: 'text',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'noParte',
                            title: 'N/P',
                            type: 'text',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'noParteAnt',
                            title: 'N/P<BR>Anterior',
                            type: 'text',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'descripcion',
                            title: 'Descripci&oacute;n',
                            type: 'text',
                            align: 'center',
                            valign: 'middle'
                        }/*, {
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
                                highlight: '',
                                url: 'GuardarMatrizAgrupada?sp_code=' + $('#dealer').val(),
                                type: 'text'
                            }
                        }*/, {
                            field: 'cantidadMin',
                            title: 'Ctd.<BR>M&iacute;nima',
                            type: 'text',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            field: 'ponderacion',
                            title: 'Ponderaci&oacute;n',
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
                            	defaultValue: '',
                                emptytext: '----------',
                                url: 'GuardarMatrizAgrupada?sp_code=' + $('#dealer').val(),
                                type: 'text',
                                validate: function(value) {
                                    return validateNumberMin(value, false);
                                },
                                success: function(response, newValue) {
                                	actualizarStatus();
                                }
                            }
                        }, {
                            field: 'ubicacion',
                            title: 'Ubicaci&oacute;n',
                            type: 'text',
                            align: 'center',
                            class: 'TextFormat',
                            valign: 'middle',
                            editable: {
                            	defaultValue: '',
                                emptytext: '----------',
                                url: 'GuardarMatrizAgrupada?sp_code=' + $('#dealer').val(),
                                type: 'text'
                            }
                        }, {
                            field: 'VOLUMEN_VTA_1',
                            title: 'Vol.<BR>Ventas',
                            type: 'text',
                            align: 'center',
                            class: 'TextFormat',
                            valign: 'middle',
                            editable: {
                            	defaultValue: '',
                                emptytext: '----------',
                                url: 'GuardarMatrizAgrupada?sp_code=' + $('#dealer').val(),
                                type: 'text',
                                validate: function(value) {
                                    return validateNumberMin(value, false);
                                }
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
            $('#guardar').show(true);
            $('#guardarS').show(true);
            $('#tableBody').show(true);
        } else {
            alert("Seleccione al menos una Matriz");
        }
    });

    $('#atras').click(function() {
        $('#tableBody').bootstrapTable('removeAll');
        $('#atras').hide(true);
        $('#guardar').hide(true);
        $('#guardarS').hide(true);
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

    $('#guardar').click(function() {
        if ($('#dealer').val() != '') {
            var id = '';
            id = $('#idMatriz').val();
            $.ajax({
                dataType: "text",
                url: "GuardarPartes?idMatrices=" + id,
                method: "POST",
                data: $("#myform").serialize(),
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });
        } else {
            alert('Seleccione un Dealer para guardar.');
        }
    });
    
    $('#guardarS').click(function() {
        if ($('#dealer').val() != '') {
            var id = '';
            id = $('#idMatriz').val();
            $.ajax({
                dataType: "text",
                url: "GuardarPartes?idMatrices=" + id,
                method: "POST",
                data: $("#myform").serialize(),
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#myModal').modal('hide');
                window.location = "TEMPPartesEvaluadas.jsp";
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });
        } else {
            alert('Seleccione un Dealer para guardar.');
        }
    });
});



var lastVal;
var curColor = 1;
function rowStyle(row, index) {

    var classes = ['groupRow', ''];

    if (row.noParte != lastVal) {
        curColor++;
    }
    lastVal = row.noParte;
    return {
        classes: classes[curColor % 2]
                //css: {"background-color": color[curColor % 2]}
    };
}



function actualizarStatus(){
	$.ajax({
        dataType: "text",
        url: "CambiarStatusPartes?new_status=P&SP_CODE="+ "",//?motor=" + $('#motorAdd').val(),
        method: "POST",
        data: $("#myform").serialize()
    }).done(function(e) {
        
    }).fail(function(e) {
        
    });
}

function matriz(id_deal,tipo_eval,revision,anio){
	 $.ajax({
         dataType: "text",
         method: "POST",
         //, , 
         url: 'MatrizAgrupada?id_deal=' + id_deal +'&tipo_eval=' + tipo_eval + '&revision='+ revision + '&anio='+ anio ,
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

             clickToSelect:true,
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
	 $('#tableBody').bootstrapTable('refresh');
}
