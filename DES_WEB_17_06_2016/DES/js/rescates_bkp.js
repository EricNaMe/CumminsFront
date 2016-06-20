
$(function() {
    /*****************   TEMPORAL    ******************/
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
    });

    $('#Pregunta5').click(function() {
        var strIdDealer = $('#codigoDeal').val();
        var strFechaIni = $('#datepicker2').val();
        var strFechaFin = $('#datepicker3').val();
        if (strIdDealer != '' && strFechaIni != '' && strFechaFin != '') {
            $.ajax({
                data: {idDealer: strIdDealer, fechaIni: strFechaIni, fechaFin: strFechaFin},
                dataType: "text",
                url: "ObtenerPCID",
                method: "POST",
                beforeSend: function() {
                }
            }).done(function(e) {
                if (e === 'error') {
                    alert('Ocurrio un error al cargar RES');
                } else {
                    json = $.parseJSON(e);
                    for (var i = 0; i < json.length; i++) {
                        $('#PCID').val(json[i].PCID);
                        $('#FechaExpiracion').val(json[i].Fecha_Expiracion);
                        $('#Cliente').val(json[i].Cliente);
                        $('#BDHtas').val(json[i].EnBDHetas);
                        $('#ValAuditoria').val(json[i].Valido_Auditorias);
                        $('#Comentarios').val(json[i].Comentarios);
                    }
                }
            }).fail(function(e) {
                $('#headerModal').html('Ocurrio un error al enviar la informacion');
                $('#closeModal').css('display', '');
            });
        }
    });


    $('#Calcular').click(function() {
        var strIdDealer = $('#codigoDeal').val();
        var strFechaIni = $('#datepicker2').val();
        var strFechaFin = $('#datepicker3').val();

        if (strIdDealer != '' && strFechaIni != '' && strFechaFin != '') {
            $.ajax({
                data: {idDealer: strIdDealer, fechaIni: strFechaIni, fechaFin: strFechaFin},
                dataType: "text",
                url: "ObtenerEficienciaRescates",
                method: "POST",
                beforeSend: function() {

                }
            }).done(function(e) {

                if (e === 'error') {

                } else {
                    json = $.parseJSON(e);

                    for (var i = 0; i < json.length; i++) {

                        $('#CantRescates').val(json[i].CantidadRescates);
                        $('#RescatesNoDis').val(json[i].Rescates);
                        $('#TiempPromSa').val(json[i].TiempoPromSal);
                        $('#TiempPromRep').val(json[i].TiempoPromRep);
                        $('#TiempoPromTol').val(json[i].TiempoPromTotal);
                        $('#ElementosResc').val(json[i].ElementosResc);

                        $('#PorcObtenidoPromTotal').val(json[i].PCT_Obtenidos);
                        $('#PorcElementosDeRescate').val(json[i].PCT_Posibles);
                    }
                }
            }).fail(function(e) {
                $('#headerModal').html('Ocurrio un error al enviar la informacion');
                $('#closeModal').css('display', '');
            });
        } else {
            alert('Intruduzca Dealer, Fecha Inicio Evaluacion y Fecha Fin Evaluacion para porder Calcular');
        }
    });



    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerResNoDisp?id_dr=' + this.value,
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
                    field: 'FechaLlamada',
                    title: 'Fecha de Llamada',
                    type: 'text'
                }, {
                    field: 'QuienAtendioLlamada',
                    title: '¿Quién atendió la llamada?',
                    type: 'text'
                },
                {
                    field: 'Cliente',
                    title: 'Cliente',
                    type: 'text'
                },
                {
                    field: 'Razones',
                    title: 'Razones por las que no se pudo atender',
                    type: 'text'
                }


            ]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });



    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerRescatesExced?id_dr=' + this.value,
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
                    field: 'FechaLlamada',
                    title: 'Fecha de Llamada',
                    type: 'text'
                }, {
                    field: 'QuienAtendioLlamada',
                    title: '¿Quién atendió la llamada?',
                    type: 'text'
                },
                {
                    field: 'Cliente',
                    title: 'Cliente',
                    type: 'text'
                },
                {
                    field: 'Razones',
                    title: 'Razones por las que no se pudo atender',
                    type: 'text'
                }


            ]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });





    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerRescPorcObtenido?id_dr=' + this.value,
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
                    field: 'PorcPosibleRes',
                    title: '% Posible',
                    type: 'text'

                },
                {
                    field: 'PorcLogradoRes',
                    title: '% Obtenido',
                    type: 'text'

                }




            ]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });



    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerResNoDisp?id_dr=' + this.value,
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
                    field: 'FechaLlamada',
                    title: 'Fecha de Llamada',
                    type: 'text'
                }, {
                    field: 'QuienAtendioLlamada',
                    title: '¿Quién atendió la llamada?',
                    type: 'text'
                },
                {
                    field: 'Cliente',
                    title: 'Cliente',
                    type: 'text'
                },
                {
                    field: 'Razones',
                    title: 'Razones por las que no se pudo atender',
                    type: 'text'
                }


            ]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });

    $('#enviar').click(function() {
        var strIdDealer = $('#codigoDeal').val();
        var strFechaIni = $('#datepicker2').val();
        var strFechaFin = $('#datepicker3').val();
        if (strIdDealer != '' && strFechaIni != '' && strFechaFin != '') {
            var flag = true;
            var Pregunta1 = document.querySelector('input[name = "Pregunta1"]:checked');
            var Pregunta2 = document.querySelector('input[name = "Pregunta2"]:checked');
            var Pregunta4 = document.querySelector('input[name = "Pregunta4"]:checked');
            var Pregunta7 = document.querySelector('input[name = "Pregunta7"]:checked');
            if (Pregunta1.value == 'si' && $('#placas').val() == '') {
                flag = false;
            } else if (Pregunta2.value == 'si' && $('#marca').val() == '' && $('#NoSerie').val() == '') {
                flag = false;
            } else if (Pregunta4.value == 'si' && $('#noCelu').val() == '') {
                flag = false;
            } else if (Pregunta7.value == 'si' && $('#inLine').val() == '') {
                flag = false;
            }
            if (flag) {
                jsonPerfil = JSON.stringify($('#frmCheck').serializeArray());
                $.ajax({
                    data: {data: jsonPerfil, idDealer: strIdDealer, porcTabla: suma(), fechaIni: strFechaIni, fechaFin: strFechaFin},
                    dataType: "text",
                    url: "GuardarEfiRescate",
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
            } else {
                alert('Debes llenar todos los campos para poder Calcular');
            }
        } else {
            alert('Intruduzca Dealer, Fecha Inicio Evaluacion y Fecha Fin Evaluacion para porder Calcular');
        }
    });
});

function suma() {

    var VariablePregunta = 0;
    var Pregunta1 = document.querySelector('input[name = "Pregunta1"]:checked');
    var Pregunta2 = document.querySelector('input[name = "Pregunta2"]:checked');
    var Pregunta3 = document.querySelector('input[name = "Pregunta3"]:checked');
    var Pregunta4 = document.querySelector('input[name = "Pregunta4"]:checked');
    var Pregunta5 = document.querySelector('input[name = "Pregunta5"]:checked');
    var Pregunta6 = document.querySelector('input[name = "Pregunta6"]:checked');
    var Pregunta7 = document.querySelector('input[name = "Pregunta7"]:checked');
    if (Pregunta1.value === "si") {

        VariablePregunta += 10;

    }
    if (Pregunta2.value === "si") {

        VariablePregunta += 5;

    }
    if (Pregunta3.value === "si") {

        VariablePregunta = VariablePregunta + 5;

    }
    if (Pregunta4.value === "si") {

        VariablePregunta += 5;

    }
    if (Pregunta5.value === "si") {

        VariablePregunta += 5;

    }
    if (Pregunta6.value === "si") {

        VariablePregunta += 5;

    }
    if (Pregunta7.value === "si") {

        VariablePregunta += 5;

    }
    return VariablePregunta;
}