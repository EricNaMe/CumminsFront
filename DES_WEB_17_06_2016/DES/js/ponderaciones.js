$(document).ready(function() {
	$('#tempPonde').addClass("active");

    $('#moduloSel').on('change', function() {
        $.ajax({
            dataType: "text",
            url: "ServletSubModulos?modulo=" + this.value,
            method: "POST",
            beforeSend: function() {
                $('#headerModal').html('Solicitando Informacion...');
                $('#closeModal').css('display', 'none');
                $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');

            }

        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar los modulos');
            } else {
                json = $.parseJSON(e);

                $('#tablePonderacion').bootstrapTable('destroy');
                $('#tablePonderacion').bootstrapTable({
                    idField: 'idBody',
                    uniqueId: 'idBody',
                    pagination: true,
                    search: true,
                    data: json,
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
                        }, {
                            field: 'idBody',
                            title: 'idBody',
                            visible: false
                        }, {
                            field: 'moduloSel',
                            title: 'M&oacute;dulo'

                        }, {
                            field: 'subModulo',
                            title: 'Subm&oacute;dulo'

                        }, {
                            field: 'pondSubMod',
                            title: '% Subm&oacute;dulo',
                            editable: {
                                defaultValue: '----------',
                                emptytext: '----------',
                                type: 'text',
                                validate: function(value) {
                                    return validateNumber(value, true);
                                }
                            }
                        }, {
                            field: 'pondModulo',
                            title: '% M&oacute;dulo'



                        }]

                });
                $('#myModal').modal('hide');

            }


        })
                .fail(function(e) {
                    $('#headerModal').html('Ocurrio un error al cargar los modulos');
                    $('#closeModal').css('display', '');
                });
    });

    $.ajax({
        dataType: "text",
        url: "ServletModulos",
        method: "POST",
        beforeSend: function() {
            $('#headerModal').html('Solicitando Informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');

        }

    }).done(function(e) {



        if (e === 'error') {
            $('#headerModal').html('Ocurrio un error al cargar los modulos');
            $('#closeModal').css('display', '');

        } else {

            jsonSelect = $.parseJSON(e);

            $('#tablePonderacionModulos').bootstrapTable('destroy');
            $('#tablePonderacionModulos').bootstrapTable({
                idField: 'idBody',
                uniqueId: 'idBody',
                pagination: true,
                search: true,
                data: jsonSelect,
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
                    }, {
                        field: 'idBody',
                        title: 'idBody',
                        visible: false
                    }, {
                        field: 'modulo',
                        title: 'M&oacute;dulo'

                    }, {
                        field: 'ponderacion',
                        title: '% M&oacute;dulo',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, true);
                            }
                        }



                    }]

            });


            $('#moduloSel').html($("<option></option>"));
            for (var i = 0; i < jsonSelect.length; i++) {
                $('#moduloSel')
                        .append($("<option></option>")
                                .attr("value", jsonSelect[i].idBody)
                                .text(jsonSelect[i].modulo));
            }
            $('#myModal').modal('hide');
        }


    })
            .fail(function(e) {
                $('#headerModal').html('Ocurrio un error al enviar la informacion');
                $('#closeModal').css('display', '');
            });




    $("#agregarModulo").click(function() {
        if (
                $('#modulo').val() !== ''

                ) {
            jsonModulo = $('#formPonderacioneModulos').serializeJSON();
            $.ajax({
                dataType: "text",
                url: "AgregarModulo",
                method: "POST",
                beforeSend: function() {
                    $('#headerModal').html('Enviando Informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                },
                data: {"data": jsonModulo}
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModal').css('display', '');
                $('#formPonderacioneModulos')[0].reset();
                $('#tablePonderacionModulos').bootstrapTable('refresh');
            })
                    .fail(function(e) {
                        $('#headerModal').html('Ocurrio un error al enviar la informacion');
                        $('#closeModal').css('display', '');
                    });
        } else {

            alert('Llene todos los campos');
        }


    });



    $("#agregarSubmodulo").click(function() {
        if (
                $('#subModulo').val() !== '' &&
                $('#pondSubMod').val() !== '' &&
                $('#moduloSel').val() !== null

                ) {
            jsonModulo = $('#formSubModulos').serializeJSON();
            $.ajax({
                dataType: "text",
                url: "AgregarSubModulo",
                method: "POST",
                beforeSend: function() {
                    $('#headerModal').html('Enviando Informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                },
                data: {"data": jsonModulo}
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModal').css('display', '');
                $('#formSubModulos')[0].reset();
                $('#tablePonderacion').bootstrapTable('refresh');
            })
                    .fail(function(e) {
                        $('#headerModal').html('Ocurrio un error al enviar la informacion');
                        $('#closeModal').css('display', '');
                    });
        } else {

            alert('Llene todos los campos');
        }


    });



    $("#guardarTablaMod").click(function() {
        jsonBody = $('#tablePonderacionModulos').bootstrapTable('getData');

        sum = 0;
        for (i = 0; i < jsonBody.length; i++) {
            sum += Number(jsonBody[i].ponderacion);
        }

        json = JSON.stringify(jsonBody);
        if (
                sum === 100

                ) {
            $.ajax({
                dataType: "text",
                url: "GuardarModulos",
                method: "POST",
                beforeSend: function() {
                    $('#headerModal').html('Enviando Informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                },
                data: {"data": json}
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModal').css('display', '');
                $('#tablePonderacionModulos').bootstrapTable('refresh');
            })
                    .fail(function(e) {
                        $('#headerModal').html('Ocurrio un error al enviar la informacion');
                        $('#closeModal').css('display', '');
                    });
        } else {

            alert('El porcentaje de los modulos debe sumar 100%');
        }


    });

    $("#guardarTablaSub").click(function() {
        jsonBody = $('#tablePonderacion').bootstrapTable('getData');

        sum = 0;
        for (i = 0; i < jsonBody.length; i++) {
            sum += Number(jsonBody[i].pondSubMod);
        }

        json = JSON.stringify(jsonBody);
        if (
                sum === Number(jsonBody[0].pondModulo)

                ) {
            $.ajax({
                dataType: "text",
                url: "GuardarSubModulos",
                method: "POST",
                beforeSend: function() {
                    $('#headerModal').html('Enviando Informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                },
                data: {"data": json}
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModal').css('display', '');
                $('#tablePonderacionModulos').bootstrapTable('refresh');
            })
                    .fail(function(e) {
                        $('#headerModal').html('Ocurrio un error al enviar la informacion');
                        $('#closeModal').css('display', '');
                    });
        } else {

            alert('El porcentaje de los submodulos debe sumar ' + jsonBody[0].pondModulo);
        }


    });



});






