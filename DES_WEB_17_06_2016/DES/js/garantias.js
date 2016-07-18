
$(function() {
	$('#efiGarantias').addClass("active");

    $('#calcular').click(function() {
        var strIdDealer = $('#dealer').val();
        var strFechaIni = $('#datepicker2').val();
        var strFechaFin = $('#datepicker3').val();
        if (strIdDealer != '' && strFechaIni != '' && strFechaFin != '') {
        	cargarTablas(strIdDealer, strFechaIni, strFechaFin, $('#datepicker').val());
        } else {
            alert('Intruduzca Dealer, Fecha Inicio Evaluacion y Fecha Fin Evaluacion para porder Calcular');
        }
    });
    
    $('#guardarBtn').click(function() {
        if ($('#DispPosibleH').val() != '') {
            json = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                data: {data: json, tipo: 'GARANTIAS'},
                dataType: "text",
                url: "GuardarEficiencia",
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
            alert('Debe Calcular los datos para poder Guardar.');
        }
    });
    
    $('#guardarBtnS').click(function() {
        if ($('#DispPosibleH').val() != '') {
            json = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                data: {data: json, tipo: 'GARANTIAS'},
                dataType: "text",
                url: "GuardarEficiencia",
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
                window.location = "TEMPEficienciaEva.jsp";
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });
        } else {
            alert('Debe Calcular los datos para poder Guardar.');
        }
    });
});

function ShowTotal(id, fechaIni, fechaFin, fechaEval) {
    $.ajax({
        dataType: "text",
        url: 'ObtenerPorcGaran?sp_code=' + id + "&fecha_ini=" + fechaIni + "&fecha_fin=" + fechaFin + "&fecha_eval=" + fechaEval,
        method: "GET"
    }).done(function(e) {
        if (e === 'error') {
        } else {
            json = $.parseJSON(e);
            for (var i = 0; i < json.length; i++) {
                $('#DispPosible').html(json[i].posibles);
                $('#DispTotal').html(json[i].Garantias);
                $('#DispPosibleH').val(json[i].Politicas);
            }

        }
    });
}





function obtenerInfo(id) {
    $.ajax({
        dataType: "text",
        url: "ObtenerHeaderEficiencia?id=" + id,
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de distribuidores');
        } else {
            json = $.parseJSON(e);

               var  i = 0;
            	$('#dr').val(json[i].codigodr);
            	$('#codigoDR').val(json[i].codigodr);
            	$('#codigoDeal').val(json[i].sp_code);
                $('#dealer').val(json[i].sp_code);
            	
                $('#tipo_eval').val(json[i].tipoeval);
                $('#revision').val(json[i].revision);
                $('#anio').val(json[i].anio);
                $('#datepicker').val(json[i].fechaeval);
                $('#datepicker2').val(json[i].fechaini);
                $('#datepicker3').val(json[i].fechafin);
                
                cargarDR(json[i].codigodr);
                cargarDealers(json[0].codigodr, json[0].sp_code );
            	cargarTablas(json[i].sp_code, json[i].fechaini, json[i].fechafin, json[i].fechaeval);
                
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
}

function cargarTablas(spCode, fechaIni, fechaFin, fechaEval){
	$(function() {
		$('#tableReclamos').bootstrapTable('destroy');
	    $('#tableReclamos').bootstrapTable({
	        dataType: 'json',
	        emptytext: '-',
	        //data: json.data,
	        url: 'ObtenerReclamos?sp_code=' + spCode + "&fecha_ini=" +fechaIni + "&fecha_fin=" + fechaFin + "&fecha_eval=" + fechaEval,
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
	        onLoadError: function(status, res) {
	
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
	                //title: 'encabezado',
	                type: 'text'
	            }, {
	                field: 'garantia',
	                title: 'Garant&iacute;a',
	                align: 'center',
	                valign: 'middle',
	                type: 'text'
	            }, {
	                field: 'politica',
	                title: 'Pol&iacute;tica',
	                align: 'center',
	                valign: 'middle',
	                type: 'text',
	                visible: false
	            }]
	    });
	
	
	    $('#tableEficiencia').bootstrapTable('destroy');
	    $('#tableEficiencia').bootstrapTable({
	        dataType: 'json',
	        emptytext: '-',
	        //data: json.data,
	        url: 'ObtenerEficiencia?sp_code=' + spCode + "&fecha_ini=" + fechaIni + "&fecha_fin=" + fechaFin + "&fecha_eval=" + fechaEval,
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
	        onLoadSuccess: function( data ) {
	        	$('#DispTotal').html(data[data.length-1].garantias);
	        	$('#Total').val(data[data.length-1].garantias);
	        	$('#DispPosible').html('100%');
	        	$('#DispPosibleH').val(data[data.length-1].garantias);
	        	
	        },
	        columns: [{
	                field: 'Topico',
	                //title: 'Topico',
	                type: 'text'
	            }, {
	                field: 'posibles',
	                //title: 'Posibles<img class="imagen" src="img/eficiencia.png"/>',
	                title: 'Posibles',
	                align: 'center',
	                valign: 'middle',
	                type: 'text'
	            }, {
	                field: 'Garantias',
	                title: 'Garant&iacute;as',
	                align: 'center',
	                valign: 'middle',
	                type: 'text'
	            }, {
	                field: 'Politicas',
	                title: 'Politicas',
	                align: 'center',
	                valign: 'middle',
	                type: 'text',
	                visible: false
	            }, {
	                field: 'Rangos',
	                title: 'Rangos',
	                type: 'text',
	                visible: true
	            }]
	    });
	    //ShowTotal(spCode, fechaIni, fechaFin, fechaEval);
	
	
	    $('#tableGarantias').bootstrapTable('destroy');
	    $.ajax({
	        dataType: "text",
	        method: "POST",
	        url: 'ObtenerGarantias?sp_code=' + spCode + "&fecha_ini=" + fechaIni + "&fecha_fin=" + fechaFin,
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
	                    type: 'text',
	                    sortable: true
	                }, {
	                    field: 'tipo',
	                    title: 'Tipo de reclamo',
	                    align: 'center',
	                    valign: 'middle',
	                    type: 'text',
	                    sortable: true
	                }, {
	                    field: 'monto',
	                    title: 'Monto(USD)',
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
	});
}

function onMouseOver(value, row) {
   	return '<a style="color:black; text-decoration: none; background-color: none;">'+value+'<img class="imagen" src="img/eficiencia.png"/></a>';
}

