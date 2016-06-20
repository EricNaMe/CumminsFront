
$(function() {

    $('#dealer').on('change', function() {
        $.ajax({
            dataType: "text",
            url: "ObtenerInsite?SP_CODE=" + $('#dealer').val(),
            method: "POST",
            beforeSend: function() {
            }
        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar la suma de ponderacion');
            } else {
                json = $.parseJSON(e);
                for (var i = 0; i < json.length; i++) {
                	 $('#mecReg').val(json[i].mec_rec);
                     $('#ayuMecReg').val(json[i].ayudantes);
                     $('#inreq').val(json[i].insite);
	            }
               
 
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al enviar la informacion');
            $('#closeModal').css('display', '');
        });

        $('#tableBody').bootstrapTable('destroy');
        $.ajax({
            dataType: "text",
            method: "POST",
            url: 'HerramientasElectronica',
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
                        field: 'idInsiteIn',
                        title: 'IdDealer',
                        visible: false
                    }, {
                        field: 'pcid',
                        title: 'PCID',
                        type: 'text',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'fechaExpira',
                        title: 'Fecha de Expiración',
                        type: 'text',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'cliente',
                        title: 'Cliente',
                        type: 'text',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'bdHtas',
                        title: 'En BD de Htas',
                        type: 'text',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'validoAudit',
                        title: 'Válido para auditoría',
                        type: 'text',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'comentarios',
                        title: 'Comentarios',
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

    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'HerramientasInsite',
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tableInsite').bootstrapTable({
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
                    field: 'idInsite',
                    title: 'IdDealer',
                    visible: false
                }, {
                    field: 'insiteReq',
                    title: "INSITE's/INLINE's requeridos",
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'insiteReg',
                    title: "INSITE's/INLINE's registrados",
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'porcObtenidoIns',
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

