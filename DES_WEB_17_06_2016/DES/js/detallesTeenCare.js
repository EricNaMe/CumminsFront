

var count;
var json;
$(function() {
	tabla_dealers();
	$.ajax({
        dataType: "text",
        url: "ObtenerOem",
        method: "POST",
        beforeSend: function() {

        }

    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo OEM');
        } else {
            jsonOem = $.parseJSON(e);
            $('#oem').html($("<option></option>"));
            for (var i = 0; i < jsonOem.length; i++) {
                $('#oem')
                        .append($("<option></option>")
                                .attr({value: jsonOem[i].value})
                                .text(jsonOem[i].text.toUpperCase()));
            }
        }
    }).fail(function(e) {
                $('#headerModal').html('Ocurrio un error al cargar los OEM');
                $('#closeModal').css('display', '');
    });

    $.ajax({
        dataType: "text",
        url: "ObtenerPara",
        method: "POST",
        beforeSend: function() {

        }

    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo Para DR');
        } else {
            jsonPara = $.parseJSON(e);
            $('#para').html($("<option></option>"));
            for (var i = 0; i < jsonPara.length; i++) {
                $('#para')
                        .append($("<option></option>")
                                .attr({value: jsonPara[i].value})
                                .text(jsonPara[i].text.toUpperCase()));
            }
        }


    })
            .fail(function(e) {
                $('#headerModal').html('Ocurrio un error al cargar Para DR');
                $('#closeModal').css('display', '');
            });

    $.ajax({
        dataType: "text",
        url: "ObtenerRangoInfant",
        method: "POST",
        beforeSend: function() {

        }

    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo Para DR');
        } else {
            jsonRango = $.parseJSON(e);
            $('#rango').html($("<option></option>"));
            for (var i = 0; i < jsonRango.length; i++) {
                $('#rango')
                        .append($("<option></option>")
                                .attr({value: jsonRango[i].value})
                                .text(jsonRango[i].text.toUpperCase()));
            }
        }


    })
            .fail(function(e) {
                $('#headerModal').html('Ocurrio un error al cargar Para DR');
                $('#closeModal').css('display', '');
            });

    $.ajax({
        dataType: "text",
        url: "ObtenerMercados",
        method: "POST",
        beforeSend: function() {

        }

    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo mercados');
        } else {
            jsonMercado = $.parseJSON(e);
            $('#mercado').html($("<option></option>"));
            for (var i = 0; i < jsonMercado.length; i++) {
                $('#mercado')
                        .append($("<option></option>")
                                .attr({value: jsonMercado[i].value})
                                .text(jsonMercado[i].text.toUpperCase()));
            }
        }


    })
            .fail(function(e) {
                $('#headerModal').html('Ocurrio un error al cargar mercados');
                $('#closeModal').css('display', '');
            });
    
    $('#closeModal').click(function() {
        window.location='TEMPTeenCare.jsp';
    });

    $.ajax({
        dataType: "text",
        url: "DetallesTeenCare",
        method: "POST",
        data: {"id": $('#idMatriz').val()},
        beforeSend: function() {
            $('#headerModal').html('Solicitando Informacion...');
            $('#closeModal').css('display', 'none');
            $('#closeModalEliminar').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }

    }).done(function(e) {

        if (e !== 'error') {
            json = $.parseJSON(e);

            $('#matriz').val(json.header.matriz);

            $('#matrizLabel').html(json.header.matriz);

            //$("#oem option[id='" + json.header.oem.toUpperCase() + "']").attr("selected", "selected");
            $('#oem').val(json.header.oem);
            
            //$("#dr option[id='" + json.header.dr.toUpperCase() + "']").attr("selected", "selected");
            $('#dr').val(json.header.dr);

            $('#revision').val(json.header.revision);

            $('#anio').val(json.header.anio);

            //$("#para option[id='" + json.header.para.toUpperCase() + "']").attr("selected", "selected");
            $('#para').val(json.header.para);

            $('#tipoProducto').val(json.header.tipoProducto);

            $('#rango').val(json.header.rango);

            //$("#mercado option[id='" + json.header.mercado.toUpperCase() + "']").attr("selected", "selected");
            $('#mercado').val(json.header.mercado);
            
            $('#enviar').prop('disabled', false);

            /*if (json.header.productoNuevo === 'Y') {
                $('#productoNuevoY').prop('checked', true);
            } else {
                $('#productoNuevoN').prop('checked', true);
            }*/

            if (json.header.statusDealer === 'Y')
                $('#statusDealer').prop('checked', true);

            $('#tableBody').bootstrapTable({
            	idField: 'id',
                uniqueId: 'id',
                pagination: true,
                search: true,
                //----------------------------
                showExport: true,
                exportTypes:['excel', 'pdf'],
                exportDataType:'all',
                exportOptions: {
                    fileName: 'DetallesTeen'
                },
                //----------------------------
                data: json.data,
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
                        visible: false,
                        align: 'center',
                        valign: 'middle'
                    },{
                        field: 'idBody',
                        title: 'idBody',
                        visible: false,
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'noParte',
                        title: 'N/P',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text'
                        },
    	                align: 'center',
    	                valign: 'middle',
                    }, {
                        field: 'noParteAnterior',
                        title: 'N/P<BR>anterior',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text'
                        },
    	                align: 'center',
    	                valign: 'middle',
                    }, {
                        field: 'descripcion',
                        title: 'Descripci&oacute;n',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateEmpty(value);
                            }
                        },
    	                align: 'center',
    	                valign: 'middle',
                    }, {
                        field: 'ponderacion',
                        title: 'Ponderaci&oacute;n',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumberMin(value, true);
                            }
                        },
    	                align: 'center',
    	                valign: 'middle',
                    }, {
                        field: 'cantMax',
                        title: 'Ctd.<BR>M&iacute;nima',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumberMin(value, true);
                            }
                        },
    	                align: 'center',
    	                valign: 'middle',
                    }/*, {
                        field: 'comentarios',
                        title: 'Comentarios',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text'
                        },
    	                align: 'center',
    	                valign: 'middle',
                    }*/, {
                        field: 'precioDealer',
                        title: 'Precio<BR>dealer',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumberMin(value, false);
                            }
                        },
    	                align: 'center',
    	                valign: 'middle',
                    }, {
                        field: 'url',
                        title: 'URL',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text'
                        },
    	                align: 'center',
    	                valign: 'middle',
                    }, {
                        field: 'eliminar',
                        class: 'TextFormat',
                        title: '',
                        formatter: 'linkFormatter',
    	                align: 'center',
    	                valign: 'middle',
                    }]

            });
            count = $('#tableBody').bootstrapTable('getData').length;


            $('#myModal').modal('hide');
            
        } else {


        }

    })
            .fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al solicitar los datos');


            });

    $('#enviar').click(function() {

        if (
                $('#matriz').val() !== '' &&
                $('#oem').val() !== '' &&
                $('#revision').val() !== null &&
                $('#anio').val() !== '' &&
                $('#para').val() !== null &&
                $('#tipoProducto').val() !== null &&
                $('#rango').val() !== null &&
                $('#mercado').val() !== null 
                //$('input:radio:checked').length > 0

                ) {
        	if($('#tipoProducto').val() == 'Teen Care' && $('#dr').val() == ''){
        		alert('Llene todos los campos');
        		return false;
        	}

            jsonHeader = $('#formHeader').serializeJSON();
            jsonBody = JSON.stringify($('#tableBody').bootstrapTable('getData')).replace(/\\r/g, '');
            jsonDR = JSON.stringify($('#tableDealers').bootstrapTable('getSelections'));
            
            data = '{"header":' + jsonHeader + ', "data":' + jsonBody + ', "drSel":' + jsonDR +'}';
            
            

            $.ajax({
                dataType: "text",
                url: "UpdateTeenCare",
                method: "POST",
                beforeSend: function() {
                    $('#headerModal').html('Enviando Informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#closeModalEliminar').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                },
                data: {"data": data}
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModal').css('display', '');


            })
                    .fail(function(e) {
                        $('#headerModal').html('Ocurrio un error al enviar la informacion');
                        $('#closeModal').css('display', '');

                    });



        } else {
            alert('Llene todos los campos');

        }

    });

    $('#buttonAdd').click(function() {

        count++;
        $('#tableBody').bootstrapTable('insertRow', {
            index: $('#tableBody').bootstrapTable('getData').length,
            row: {
                id: count,
                noParte: '',
                noParteAnterior: '',
                descripcion: '',
                cantMax: '',
                comentarios: '',
                url: '',
                ponderacion: '',
                precioDealer: ''
            }
        });
    });


    $("#loading").dialog({
        hide: 'slide',
        show: 'slide',
        autoOpen: false
    });



});

function linkFormatter(value, row) {
    return '<a href=javascript:eliminarRegistro('+row.id+','+row.idBody+')>Eliminar</a>';
}

function eliminarRegistro(rowId,idBody){
    
    $('#tableBody').bootstrapTable('removeByUniqueId', rowId);
    $.ajax({
                dataType: "text",
                url: "EliminarTeenCare?id="+idBody,
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


            })
                    .fail(function(e) {
                        $('#headerModal').html('Ocurrio un error al eliminar el registro');
                        $('#closeModalEliminar').css('display', '');

                    });

}

function tabla_dealers(){
	
	$('#tableDealers').bootstrapTable({
        url: 'ObtenerDR',
        emptytext: '-',
        idField: 'value',
        dataType: 'json',
        pagination: false,
        clickToSelect: true,
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
                field: 'value',
                title: 'value',
                visible: false
            }, {
                field: 'text',
                title: 'Distribuidor'
            }]
    });
	
/////////////////////////////////////////////////////////
	
	
	
}