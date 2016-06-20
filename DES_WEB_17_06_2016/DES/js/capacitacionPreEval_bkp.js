/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
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
                        .attr("value", json[i].key)
                        .text(json[i].value));
            }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });

    $('#dr').on('change', function() {
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
                                    .attr("value", json[i].key)
                                    .text(json[i].value));
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
        $('#codigoDeal').val(this.value);
        var strIdDealer = this.value;
        if (strIdDealer) {
            $('#tableBody').bootstrapTable('destroy');
            $.ajax({
                data: {idDealer: strIdDealer},
                dataType: "text",
                method: "POST",
                url: 'ObtenerMotoresPreEval',
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
                            title: 'Motor',
                            field: 'motor',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }, {
                            field: 'cantMec',
                            title: 'Cantidad de Técnicos',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });

            $('#tableBody2').bootstrapTable('destroy');
            $.ajax({
                data: {idDealer: strIdDealer},
                dataType: "text",
                method: "POST",
                url: 'MotoresPreEvaluacion',
                beforeSend: function() {
                    $('#headerModal').html('Solicitando informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                json = $.parseJSON(e);
                $('#tableBody2').bootstrapTable({
                    dataType: 'json',
                    emptytext: '-',
                    data: json.data,
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
                            title: 'Motor',
                            field: 'nomMotor',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }, {
                            field: 'nomTec',
                            title: 'Nombre Técnico',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }, {
                            field: 'promId',
                            title: 'Promotion ID',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }, {
                            field: 'selecOpc',
                            title: 'Seleccionar una Opción',
                            align: 'center',
                            valign: 'middle',
                            formatter: 'formatterBoton'
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });

            $('#tableBody3').bootstrapTable('destroy');
            $.ajax({
                data: {idDealer: strIdDealer},
                dataType: "text",
                method: "POST",
                url: 'ObtenerJefeGerentePre',
                beforeSend: function() {
                    $('#headerModal').html('Solicitando informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                json = $.parseJSON(e);
                $('#tableBody3').bootstrapTable({
                    dataType: 'json',
                    emptytext: '-',
                    data: json.data,
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
                            title: 'Jefe de Taller',
                            field: 'jefeTaller',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }, {
                            field: 'gerServ',
                            title: 'Gerente de Servicio',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });

            $.ajax({
                data: {idDealer: strIdDealer},
                dataType: "text",
                url: "ObtenerDatosPreEval",
                method: "POST",
                beforeSend: function() {
                }
            }).done(function(e) {
                if (e === 'error') {
                    alert('Ocurrio un error al cargar los datos');
                } else {
                    json = $.parseJSON(e);
                    for (var i = 0; i < json.length; i++) {
                        $('#adminGara').val(json[i].admonGara);
                        $('#promId1').val(json[i].promotionId1);
                        $('#fechaCer').val(json[i].fechaCer);
                        $('#nombreCer').val(json[i].nolmbreCer);
                        $('#darAlta').val(json[i].darAlta);
                        $('#promId2').val(json[i].promotionId2);
                    }
                }
            }).fail(function(e) {
                $('#headerModal').html('Ocurrio un error al enviar la informacion');
                $('#closeModal').css('display', '');
            });
        }
    });
});

function formatterBoton(value, row) {
    return '<button class=" btn-default" disabled type="button">Verificado</button>&nbsp;&nbsp;' +
            '<button class="col-md-offset-4 btn-default" disabled type="button">Dar de baja</button>';
}