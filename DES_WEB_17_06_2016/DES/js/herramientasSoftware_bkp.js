/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'HerramientasSoftware',
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
                    field: 'idDealer',
                    title: 'IdDealer',
                    visible: false
                }, {
                    field: 'delear',
                    title: 'Dealer',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'evalPreEval',
                    title: 'Evaluacion-Pre-Evaluacion',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'seccion',
                    title: 'Seccion',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'porcMetaEsp',
                    title: '% Meta Esp',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'porcMetaElec',
                    title: '% Meta Elec',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'porcLicenciaQSOL',
                    title: '% Licencia QSOL',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'porcUsoQSOL',
                    title: '% Uso QSOL',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'porcTotal',
                    title: '% Total',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'total',
                    title: '',
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


