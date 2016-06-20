

$(function() {
   // alert("Entra a funcion normal")
    $('#dealer').on('change', function()
    {
        $.ajax({
            dataType: "text",
            url: 'ObtenerDatosAdmin?id=' + this.value,
            method: "POST",
            beforeSend: function() {
            }
        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar los Datos de Administrador');
            } else {
                json = $.parseJSON(e);
                for (var i = 0; i < json.length; i++) {
                    $('#promID').val(json[i].pID);
                    $('#fCertif').val(json[i].fCer);
                    $('#adminEncontrado').val(json[i].adminEnc);
                }
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al enviar la informacion');
            $('#closeModal').css('display', '');
        });
    });

    $('#bSi').click(function() {
        $('#tableBody').bootstrapTable('destroy');
        $.ajax({
            dataType: "text",
            method: "POST",
            url: 'CapaAdminGarantias?id=' + this.value,
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
                        field: 'idCapaAdmin',
                        title: 'idCapaAdmin',
                        visible: false
                    }, {
                        type: 'text',
                        title: 'Nombre Administrador',
                        field: 'nombreAdmin',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        type: 'text',
                        title: 'Nombre Curso',
                        field: 'nombreCurso',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        type: 'text',
                        title: 'Fecha Curso',
                        field: 'fechaCurso',
                        align: 'center',
                        valign: 'middle'
                    }]
            });
            $('#myModal').modal('hide');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al cargar los datos');
        });
    });

    $('#bEval').click(function() {
        $('#tableBody2').bootstrapTable('destroy');
        $.ajax({
            dataType: "text",
            method: "POST",
            url: 'CapaAdminGarantiasPorc?id=' + this.value,
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
                        field: 'idCapaAdmin',
                        title: 'idCapaAdmin',
                        visible: false
                    }, {
                        type: 'text',
                        title: '% Posible',
                        field: 'porcPosible',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        type: 'text',
                        title: '% Logrado',
                        field: 'porcLogrado',
                        align: 'center',
                        valign: 'middle'
                    }]
            });
            $('#myModal').modal('hide');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al cargar los datos');
        });
    });

    $('#bNo').click(function() {
        $('#tableBody').bootstrapTable('destroy');
        $('#tableBody2').bootstrapTable('destroy');
    });


    $('#bBuscar').click(function() {
        if ($('#textNomAdmin').val().trim() != "" && $('#textPromID').val().trim() != "")
        {
            $.ajax({
                dataType: "text",
                data: {nomAdmin: $('#textNomAdmin').val(), promId: $('#textPromID').val()},
                url: 'ObtenerDatosAdmin?id=' + this.value,
                method: "POST",
                beforeSend: function() {
                }
            }).done(function(e) {
                if (e === 'error') {
                    alert('Ocurrio un error al cargar los Datos de Administrador');
                } else {
                    json = $.parseJSON(e);
                    for (var i = 0; i < json.length; i++) {
                        $('#promID').val(json[i].pID);
                        $('#fCertif').val(json[i].fCer);
                        $('#adminEncontrado').val(json[i].adminEnc);
                    }
                }
            }).fail(function(e) {
                $('#headerModal').html('Ocurrio un error al enviar la informacion');
                $('#closeModal').css('display', '');
            });
        }
        else
        {
            alert("Se deben ingresar ambos valores para poder realizar la búsqueda")
        }
    });
});

/*
$(function cargaDatos(id) {
    alert("Esto no funciona")
    if (id.value != null) {
        alert("Entra a if id no es nulo")
        $.ajax({
            dataType: "text",
            url: 'ObtenerDatosAdmin?id=' + id.value,
            method: "POST",
            beforeSend: function() {
            }
        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar los Datos de Administrador');
            } else {
                json = $.parseJSON(e);
                for (var i = 0; i < json.length; i++) {
                    $('#promID').val(json[i].pID);
                    $('#fCertif').val(json[i].fCer);
                    $('#adminEncontrado').val(json[i].adminEnc);
                }
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al enviar la informacion');
            $('#closeModal').css('display', '');
        });

        $('#bSi').click(function() {
            $('#tableBody').bootstrapTable('destroy');
            $.ajax({
                dataType: "text",
                method: "POST",
                url: 'CapaAdminGarantias?id=' + id.value,
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
                            field: 'idCapaAdmin',
                            title: 'idCapaAdmin',
                            visible: false
                        }, {
                            type: 'text',
                            title: 'Nombre Administrador',
                            field: 'nombreAdmin',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            type: 'text',
                            title: 'Nombre Curso',
                            field: 'nombreCurso',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            type: 'text',
                            title: 'Fecha Curso',
                            field: 'fechaCurso',
                            align: 'center',
                            valign: 'middle'
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });
        });

        $('#bEval').click(function() {
            $('#tableBody2').bootstrapTable('destroy');
            $.ajax({
                dataType: "text",
                method: "POST",
                url: 'CapaAdminGarantiasPorc?id=' + id.value,
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
                            field: 'idCapaAdmin',
                            title: 'idCapaAdmin',
                            visible: false
                        }, {
                            type: 'text',
                            title: '% Posible',
                            field: 'porcPosible',
                            align: 'center',
                            valign: 'middle'
                        }, {
                            type: 'text',
                            title: '% Logrado',
                            field: 'porcLogrado',
                            align: 'center',
                            valign: 'middle'
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });
        });

        $('#bNo').click(function() {
            $('#tableBody').bootstrapTable('destroy');
            $('#tableBody2').bootstrapTable('destroy');
        });
    }
});
*/