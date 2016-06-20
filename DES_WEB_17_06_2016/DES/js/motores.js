var count;
$(document).ready(function() {
	$('#participaMoto').addClass("active");

    //cargar catalogos

    $('#matriz').on('change', function() {
    	$.ajax({
            dataType: "text",
            url: "ObtenerRango?motor=" + this.value,
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


        })
                .fail(function(e) {
                    $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
                    $('#closeModal').css('display', '');
                });
    });


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
                $('#dr')
                        .append($("<option></option>")
                                .attr("value", json[i].value)
                                .text(json[i].text));
            }
        }


    })
            .fail(function(e) {
                $('#headerModal').html('Ocurrio un error al enviar la informacion');
                $('#closeModal').css('display', '');
            });

    $.ajax({
        dataType: "text",
        url: "ObtenerMotores",
        method: "POST",
        beforeSend: function() {

        }

    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de motores');
        } else {
            jsonMotor = $.parseJSON(e);
            $('#matriz').html($("<option></option>"));
            for (var i = 0; i < jsonMotor.length; i++) {
                $('#matriz')
                        .append($("<option></option>")
                                .attr("value", jsonMotor[i].value)
                                .text(jsonMotor[i].text));
            }
        }


    })
            .fail(function(e) {
                $('#headerModal').html('Ocurrio un error al cargar catalogo de motores');
                $('#closeModal').css('display', '');
            });


    $("#aceptar").click(function() {

        if (
                $('#dr').val() !== null &&
                $('#matriz').val() !== null &&
                $('#rango').val() !== null &&
                ($('#parMotorMin').val() !== '' && !isNaN($('#parMotorMin').val())) &&
                ($('#parMotorMax').val() !== '' && !isNaN($('#parMotorMax').val())) &&
                ($('#mecReq').val() !== '' && !isNaN($('#mecReq').val())) &&
                parseInt($('#parMotorMin').val()) <= parseInt($('#parMotorMax').val())

                ) {
            jsonForm = $('#formPorcenMotorDR').serializeJSON();

            $.ajax({
                dataType: "text",
                url: "SaveMotor",
                method: "POST",
                beforeSend: function() {
                    $('#headerModal').html('Enviando Informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                },
                data: {"data": jsonForm}
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModal').css('display', '');
                $('#TableParticipMotores').bootstrapTable('refresh');
            })
                    .fail(function(e) {
                        $('#headerModal').html('Ocurrio un error al enviar la informacion');
                        $('#closeModal').css('display', '');
                    });

        } else {
            alert('Llene todos los campos');

        }

    });



    $('#TableParticipMotores').bootstrapTable({
        idField: 'idMotor',
        uniqueId: 'idMotor',
        pagination: true,
        search: true,
        dataType: 'json',
        url: 'SetParticipMotores',
        //----------------------------
        showExport: true,
        exportTypes:['excel', 'pdf'],
        exportDataType:'all',
        exportOptions: {
            fileName: 'Motores'
        },
        //----------------------------
        emptytext: '-',
        formatLoadingMessage: function() {
            return 'Cargando por favor espere...';
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
                field: 'idMotor',
                title: 'idMotor',
                visible: false
            }, {
                field: 'dr',
                title: 'DR'

            }, {
                field: 'matriz',
                title: 'Motor'

            }, {
                field: 'rango',
                title: 'Rango'

            }, {
                field: 'parMotorMin',
                title: 'Participacion minima',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    type: 'text',
                    url: 'UpdateMotor',
                    class: 'TextFormat',
                    validate: function(value) {
                        return validateNumber(value, true);
                    }
                }
            }, {
                field: 'parMotorMax',
                title: 'Participacion maxima',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    type: 'text',
                    url: 'UpdateMotor',
                    class: 'TextFormat',
                    validate: function(value) {
                        return validateNumber(value, true);
                    }
                }
            }, {
                field: 'mecReq',
                title: 'Min. mecanicos requeridos',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    class: 'TextFormat',
                    type: 'text',
                    url: 'UpdateMotor',
                    validate: function(value) {
                        return validateNumber(value, true);
                    },
                    class: 'TextFormat'
                }
            }, {
                //field: 'Eliminar',
                title: 'Eliminar',
                class: 'TextFormat',
                align: 'center',
                valign: 'middle',
                formatter: 'linkFormatter'
            }]

    });
    count = $('#TableParticipMotores').bootstrapTable('getData').length;
});






function linkFormatter(value, row) {
    //return '<a href=javascript:eliminarRegistro(' + row.id + ',' + row.idMotor + ')>Eliminar</a>';
	return '<a href=javascript:eliminarRegistro(' + row.id + ',' + row.idMotor + ')>'
	+'<img src="img/file_delete.png" alt="Eliminar" style="width:22px; height:22px;"> </a>';
}

function eliminarRegistro(rowId, idBody) {
    $('#TableParticipMotores').bootstrapTable('removeByUniqueId', rowId);
    $.ajax({
        dataType: "text",
        url: "EliminarMotor?id=" + idBody,
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
    
    $('#TableParticipMotores').bootstrapTable('refresh');
    $('#TableParticipMotores').bootstrapTable('refresh');
    
}
