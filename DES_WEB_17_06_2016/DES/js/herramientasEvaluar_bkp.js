/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'HerramientasEvaluar',
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
                    field: 'noParte',
                    title: 'No. Parte',
                    visible: false
                }, {
                    field: 'noParteAnt',
                    title: 'No. Parte Anterior',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'descripcion',
                    title: 'Descripcion',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'uso',
                    title: 'Uso',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'cantMinima',
                    title: 'Cantidad Minima',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'existencia',
                    title: 'Existencia',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'ponderacion',
                    title: 'Ponderacion',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'hNueva',
                    title: 'Hta. Nueva',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'ubicacion',
                    title: 'Ubicacion',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'imagen',
                    title: 'Imagen',
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
    
     $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerPorcObtenido',
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
                    field: 'idPorcObtenido',
                    title: 'ID Porcentaje Obtenido',
                    visible: false
                }, {
                    field: 'porcObtenido',
                    title: '% Obtenido',
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
    
});
