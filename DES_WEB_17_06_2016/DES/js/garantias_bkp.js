
$(function() {
   

    $('#dealer').on('change', function() {
        $('#codigoDeal').val(this.value);
    });

    $('#calcular').click(function() {
        var strIdDealer = $('#codigoDeal').val();
        var strFechaIni = $('#datepicker2').val();
        var strFechaFin = $('#datepicker3').val();
        if (strIdDealer != '' && strFechaIni != '' && strFechaFin != '') {
           
        	
        	 $('#tableReclamos').bootstrapTable({
                 dataType: 'json',
                 emptytext: '-',
                 //data: json.data,
                 url:'ObtenerReclamos?sp_code=' + $('#dealer').val() + "&fecha_ini=" + $('#datepicker2').val() + "&fecha_fin=" + $('#datepicker3').val() + "&fecha_eval=" + $('#datepicker').val(),
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
                 onLoadError:function(status, res) {
                    
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
                         field: 'encabezado',
                         title: 'encabezado',
                         type: 'text'
                     }, {
                         field: 'garantia',
                         title: 'garantia',
                         type: 'text'
                     }, {
                         field: 'politica',
                         title: 'politica',
                         align: 'center',
                         valign: 'middle',
                         type: 'text'
                     }]
             });
        	 
        	 
        	 
        	 
        	 $('#tableEficiencia').bootstrapTable({
                 dataType: 'json',
                 emptytext: '-',
                 //data: json.data,
                 url:'ObtenerEficiencia?sp_code=' + $('#dealer').val() + "&fecha_ini=" + $('#datepicker2').val() + "&fecha_fin=" + $('#datepicker3').val() + "&fecha_eval=" + $('#datepicker').val(),
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
                         field: 'Topico',
                         title: 'Topico',
                         type: 'text'
                     }, {
                         field: 'Rangos',
                         title: 'Rangos',
                         type: 'text'
                     }, {
                         field: 'Garantias',
                         title: 'Garantias',
                         align: 'center',
                         valign: 'middle',
                         type: 'text'
                     }, {
                         field: 'Politicas',
                         title: 'Politicas',
                         align: 'center',
                         valign: 'middle',
                         type: 'text'
                     }, {
                         field: 'AvgGarantias',
                         title: 'AvgGarantias',
                         align: 'center',
                         valign: 'middle',
                         type: 'text'
                     }, {
                         field: 'AvgPoliticas',
                         title: 'AvgPoliticas',
                         align: 'center',
                         valign: 'middle',
                         type: 'text'
                     }, {
                         field: 'AbsGarantias',
                         title: 'AbsGarantias',
                         align: 'center',
                         valign: 'middle',
                         type: 'text'
                     }, {
                         field: 'AbsPoliticas',
                         title: 'AbsPoliticas',
                         align: 'center',
                         valign: 'middle',
                         type: 'text'
                     }]
             });
            
           

            $('#tableGarantias').bootstrapTable('destroy');
            $.ajax({
                dataType: "text",
                method: "POST",
                url: 'ObtenerGarantias?sp_code=' + $('#dealer').val() + "&fecha_ini=" + $('#datepicker2').val() + "&fecha_fin=" + $('#datepicker3').val() + "&fecha_eval=" + $('#datepicker').val(),
                beforeSend: function() {
                    $('#headerModal').html('Solicitando informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                json = $.parseJSON(e);
                $('#tableGarantias').bootstrapTable({
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
                            field: 'fecha_captura',
                            title: 'Fecha de Captura',
                            type: 'text'
                        }, {
                            field: 'folio',
                            title: 'Folio',
                            align: 'center',
                            valign: 'middle',
                            type: 'text'
                        }, {
                            field: 'tipo',
                            title: 'Tipo de Reclamo',
                            align: 'center',
                            valign: 'middle',
                            type: 'text'
                        }, {
                            field: 'monto',
                            title: 'Monto',
                            align: 'center',
                            valign: 'middle',
                            type: 'text'
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });
            
            /*
            $('#tablePorc').bootstrapTable('destroy');
            $.ajax({
                dataType: "text",
                method: "POST",
                url: 'ObtenerPosible?idDealer=' + strIdDealer,
                beforeSend: function() {
                    $('#headerModal').html('Solicitando informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                json = $.parseJSON(e);
                $('#tablePorc').bootstrapTable({
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
                            field: 'Posible',
                            title: '% Posible',
                            type: 'text'
                        }, {
                            field: 'Logrado',
                            title: '% Logrado',
                            type: 'text'
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });*/
        }else{
            alert('Intruduzca Dealer, Fecha Inicio Evaluacion y Fecha Fin Evaluacion para porder Calcular');
        }
    });
});
