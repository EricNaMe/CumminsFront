

$(function() {
   // alert("entra a function normal")
    
	$('#dealer').on('change', function() {
        $('#tableBody').bootstrapTable('destroy');
        $('#tableBody2').bootstrapTable('destroy');
        $('#tableBody3').bootstrapTable('destroy');
        $('#tableBody4').bootstrapTable('destroy');
        $('#tableBody5').bootstrapTable('destroy');
        $.ajax({
            dataType: "text",
            method: "POST",
            url: 'MostrarMotor?id=' + this.value,
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
                        field: 'idMotor',
                        title: 'idMotor',
                        visible: false
                    }, {
                        type: 'text',
                        title: 'Motor',
                        field: 'motor',
                        align: 'center',
                        valign: 'middle'
                    }]
            });
            $('#myModal').modal('hide');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al cargar los datos');
        });

        $('#bEvaluar').click(function() {
            $('#tableBody2').bootstrapTable('destroy');
            $('#tableBody3').bootstrapTable('destroy');
            $('#tableBody4').bootstrapTable('destroy');
            $('#tableBody5').bootstrapTable('destroy');
            $.ajax({
                dataType: "text",
                method: "POST",
                url: 'ObtenerCalJefeTaller?id=' + this.value,
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
                    pagination: true,
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
                            field: 'idMotor',
                            title: 'Motor',
                            visible: true
                        }, {
                            field: 'nomJefeTaller',
                            title: 'Nombre Jefe de Taller',
                            visible: true
                        }, {
                            field: 'porcPosible',
                            title: '% Posible',
                            visible: true
                        }, {
                            field: 'porcObtenido',
                            title: '% Obtenido',
                            visible: true
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });

            $.ajax({
                dataType: "text",
                method: "POST",
                url: 'ObtenerFamGerServicio?id=' + this.value,
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
                    pagination: true,
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
                            field: 'idMotor',
                            title: 'Motor',
                            visible: true
                        }, {
                            field: 'nomGerenteServicio',
                            title: 'Nombre Gerente de Servicio',
                            visible: true
                        }, {
                            field: 'porcPosible',
                            title: '% Posible',
                            visible: true
                        }, {
                            field: 'porcObtenido',
                            title: '% Obtenido',
                            visible: true
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });
        });
    });
});
/*
$(function cargaDatos(id) {
    alert("entra a funcion cargar datos")
        $('#tableBody').bootstrapTable('destroy');
        $('#tableBody2').bootstrapTable('destroy');
        $('#tableBody3').bootstrapTable('destroy');
        $('#tableBody4').bootstrapTable('destroy');
        $('#tableBody5').bootstrapTable('destroy');
        $.ajax({
            dataType: "text",
            method: "POST",
            url: 'MostrarMotor?id=' + id.value,
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
                        field: 'idMotor',
                        title: 'idMotor',
                        visible: false
                    }, {
                        type: 'text',
                        title: 'Motor',
                        field: 'motor',
                        align: 'center',
                        valign: 'middle'
                    }]
            });
            $('#myModal').modal('hide');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al cargar los datos');
        });


        $('#bEvaluar').click(function() {
            $('#tableBody2').bootstrapTable('destroy');
            $('#tableBody3').bootstrapTable('destroy');
            $('#tableBody4').bootstrapTable('destroy');
            $('#tableBody5').bootstrapTable('destroy');
            $.ajax({
                dataType: "text",
                method: "POST",
                url: 'ObtenerCalJefeTaller?id=' + id.value,
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
                    pagination: true,
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
                            field: 'idMotor',
                            title: 'Motor',
                            visible: true
                        }, {
                            field: 'nomJefeTaller',
                            title: 'Nombre Jefe de Taller',
                            visible: true
                        }, {
                            field: 'porcPosible',
                            title: '% Posible',
                            visible: true
                        }, {
                            field: 'porcObtenido',
                            title: '% Obtenido',
                            visible: true
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });

            $.ajax({
                dataType: "text",
                method: "POST",
                url: 'ObtenerFamGerServicio?id=' + id.value,
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
                    pagination: true,
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
                            field: 'idMotor',
                            title: 'Motor',
                            visible: true
                        }, {
                            field: 'nomGerenteServicio',
                            title: 'Nombre Gerente de Servicio',
                            visible: true
                        }, {
                            field: 'porcPosible',
                            title: '% Posible',
                            visible: true
                        }, {
                            field: 'porcObtenido',
                            title: '% Obtenido',
                            visible: true
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });
        });    
});
*/