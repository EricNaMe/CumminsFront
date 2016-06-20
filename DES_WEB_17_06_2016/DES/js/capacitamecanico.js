
$(function() {
   
    
    $('#dealer').on('change', function() {
    	
    	$("#codigoDeal").val($('#dealer').val());
    	
    	$('#tableMotoresCapacitaMec').bootstrapTable("destroy");
    	
    	
    	
    	$.ajax({
            dataType: "text",
            method: "POST",
            url: 'ObtenerMotoresCapacitaMec?sp_code=' + $('#dealer').val(),
            beforeSend: function() {
                $('#headerModal').html('Solicitando informacion...');
                $('#closeModal').css('display', 'none');
                $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
            }
        }).done(function(e) {
            json = $.parseJSON(e);
            $('#tableMotoresCapacitaMec').bootstrapTable({
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
    	                field: 'ID_PARTICIPACION_MOTOR',
    	                title: 'ID_PARTICIPACION_MOTOR',
    	                visible: false
    	            },{
                        field: 'motor',
                        title: 'Motor'
                    }, {
                        field: 'MEC_REQ',
                        title: 'Técnicos<br>Requeridos'
                    }, {
                        field: 'mec_cert',
                        title: 'Técnicos<br>Calificados'
                    }, {
                        field: 'porcent_motor',
                        title: '% Posible'
                    }, {
                        field: 'porcent_obtenido',
                        title: '% Obtenido'
                    }]
            });
            $('#myModal').modal('hide');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al cargar los datos #0003');
        });
    	
    	
    	$('#tableQtyMecanicos').bootstrapTable("destroy");
    	
    	 $.ajax({
    	        dataType: "text",
    	        method: "POST",
    	        //url: 'ObtenerMotoresQtyMec',
    	        url: 'ObtenerMotoresCapacitaMec?sp_code=' + $('#dealer').val(),
    	        beforeSend: function() {
    	            $('#headerModal').html('Solicitando informacion...');
    	            $('#closeModal').css('display', 'none');
    	            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
    	        }
    	    }).done(function(e) {
    	        json = $.parseJSON(e);
    	        $('#tableQtyMecanicos').bootstrapTable({
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
    	                field: 'ID_PARTICIPACION_MOTOR',
    	                title: 'ID_PARTICIPACION_MOTOR',
    	                visible: false
    	            },{
    	                field: 'motor',
    	                title: 'Motor',
    	                valign: 'middle'
    	            }, {
    	                field: 'MEC_REQ',
    	                title: 'Técnicos <br> Requeridos'
    	            }]
    	        });
    	        $('#myModal').modal('hide');
    	    }).fail(function(e) {
    	        $('#closeModal').css('display', '');
    	        $('#headerModal').html('Ocurrio un error al cargar los datos #0002');
    	    });
    	
    	 $('#tableMecanicosCapacitaMec').bootstrapTable("destroy");
    	 
    	 $.ajax({
    	        dataType: "text",
    	        method: "POST",
    	        url: 'ObtenerMecanicoCapacita?sp_code=' +  $('#dealer').val(),
    	        beforeSend: function() {
    	            $('#headerModal').html('Solicitando informacion...');
    	            $('#closeModal').css('display', 'none');
    	            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
    	        }
    	    }).done(function(e) {
    	        json = $.parseJSON(e);
    	        $('#tableMecanicosCapacitaMec').bootstrapTable({
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
	                    field: 'IDMecanico',
	                    title: 'Nombre Mecanico',
	                    visible: false
	                	}, {
    	                    field: 'nombreMecanico',
    	                    title: 'Nombre Mecanico',
    	                    visible: true
    	                }, {
    	                    field: 'cursosMecanicot',
    	                    title: 'Cursos',
    	                    visible: true
    	                }]
    	        });
    	        $('#myModal').modal('hide');
    	    }).fail(function(e) {
    	        $('#closeModal').css('display', '');
    	        $('#headerModal').html('Ocurrio un error al cargar los datos #0001 ');
    	    });
    	 
    	 
    	
    });//fin on change
    
    
});




