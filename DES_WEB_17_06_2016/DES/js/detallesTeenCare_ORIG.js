

var count;
var json;
$(function() {
    
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
                                .attr({value: jsonOem[i].key, id: jsonOem[i].value.toUpperCase()})
                                .text(jsonOem[i].value.toUpperCase()));
            }
        }


    })
            .fail(function(e) {
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
                                .attr({value: jsonPara[i].key, id: jsonPara[i].value.toUpperCase()})
                                .text(jsonPara[i].value.toUpperCase()));
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
                                .attr({value: jsonRango[i].key, id: jsonRango[i].value.toUpperCase()})
                                .text(jsonRango[i].value.toUpperCase()));
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
                                .attr({value: jsonMercado[i].key, id: jsonMercado[i].value.toUpperCase()})
                                .text(jsonMercado[i].value.toUpperCase()));
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

            if (json.header.statusDealer === true)
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
                        visible: false
                    },{
                        field: 'idBody',
                        title: 'idBody',
                        visible: false
                    }, {
                        field: 'noParte',
                        title: 'No. Parte',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, true);
                            }
                        }
                    }, {
                        field: 'noParteAnterior',
                        title: 'No. Parte anterior',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'descripcion',
                        title: 'Description',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text',
                            validate: function(value) {
                                return validateEmpty(value);
                            }
                        }
                    }, {
                        field: 'cantMax',
                        title: 'Cantidad maxima',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, true);
                            }
                        }
                    }, {
                        field: 'comentarios',
                        title: 'Comentarios',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text'
                        }
                    }, {
                        field: 'url',
                        title: 'URL',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text'
                        }
                    }, {
                        field: 'ponderacion',
                        title: 'Ponderacion',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, true);
                            }
                        }
                    }, {
                        field: 'precioDealer',
                        title: 'Precio Dealer',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'eliminar',
                        class: 'TextFormat',
                        title: '',
                        formatter: 'linkFormatter'
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
                $('#mercado').val() !== null &&
                $('input:radio:checked').length > 0

                ) {

            jsonHeader = $('#formHeader').serializeJSON();

            jsonBody = JSON.stringify($('#tableBody').bootstrapTable('getData')).replace(/\\r/g, '');

            data = '{"header":' + jsonHeader + ', "data":' + jsonBody + '}';

            console.log(data);


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
























