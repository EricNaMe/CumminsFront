

$(function() {
	$('#capaJefeGere').addClass("active");
	 $('#dealer').on('change', function() {
        
    	cargarTablaMotores($('#dealer').val());
    	cargarTablaJefeTaller($('#dealer').val());
    	//cargarTablaGteServ($('#dealer').val());

        
    });

    $('#bGuardar').click(function() {
    	//var Total=Number($('#hdnPorcGere').val()) + Number($('#hdnPorcJefe').val());
    	//var Total=  Number($('#hdnPorcJefe').val());
    	/*if ($('#hdnPorcGere').val()=='0' & $('#hdnPorcJefe').val()== '0'){
    		Total=0;
    	}else {
    		Total = Total/2;
    	}*/
    	
    	//$('#hdnTotal').val(Total);
    	//console.log("Total" + Total);
    	
        idDealer = $('#codigoDeal').val();
        if (idDealer != '') {
            jsonJefeTaller = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                data: {data: jsonJefeTaller, tipo:"JEFETALLER"},
                dataType: "text",
                url: "GuardarCapacitacion",
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
        }
        else {
            alert('Selecciona un Dealer para poder guardar.');
        }
    });
    
    $('#bGuardarS').click(function() {
    	//var Total=Number($('#hdnPorcGere').val()) + Number($('#hdnPorcJefe').val());
    	//Total = Total/2;
    	//$('#hdnTotal').val(Total);
        idDealer = $('#codigoDeal').val();
        if (idDealer != '') {
            jsonJefeTaller = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                data: {data: jsonJefeTaller, tipo:"JEFETALLER"},
                dataType: "text",
                url: "GuardarCapacitacion",
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
                window.location = "TEMPCapacitacionEvaluar.jsp";
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });
        }
        else {
            alert('Selecciona un Dealer para poder guardar.');
        }
    });
});


function obtenerInfo(id) {
    $.ajax({
        dataType: "text",
        url: "ObtenerCapacitaEval?id=" + id,
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de distribuidores');
        } else {
            json = $.parseJSON(e);
           // for (var i = 0; i < json.length; i++) {
               var  i = 0;
            	$('#dr').val(json[i].dr_code);
            	$('#codigoDR').val(json[i].dr_code);
            	$('#codigoDeal').val(json[i].sp_code);
                $('#dealer').val(json[i].sp_code);
            	
                $('#tipo_eval').val(json[i].tipo_eval);
                $('#revision').val(json[i].revision);
                $('#anio').val(json[i].anio);
                $('#datepicker').val(json[i].fecha_eval);
                $('#datepicker2').val(json[i].fecha_ini_eval);
                $('#datepicker3').val(json[i].fecha_fin_eval);
                
                cargarDR(json[i].dr_code);
                cargaDealer(json[0].dr_code, json[0].sp_code );
                cargarTablaMotores(json[0].sp_code);
            	cargarTablaJefeTaller(json[0].sp_code);
            	//cargarTablaGteServ(json[0].sp_code);
                
           // }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
}


function cargaDealer(drCode,dealer){
	//alert(drCode);
	$.ajax({
	      dataType: "text",
	      url: "ObtenerDealer?id_dr=" + drCode,
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
	              $('#dealer').append($("<option></option>")
	                              .attr("value", json[i].value)
	                              .text(json[i].text));
	              //oem[i]=json[i].oem;
	          }
	          $('#dealer').val(dealer);
	          $('#dr').val(drCode);
	      }
	  }).fail(function(e) {
	        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
	        $('#closeModal').css('display', '');
	  });
		$('#dr').val(drCode);
		
}


function cargarTablaMotores(sp_code){
	$('#tableBody').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'MotorHQSOL?idDealer=' + sp_code,
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
	
	
}


function cargarTablaJefeTaller(sp_code){

	$('#tableBody2').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerJefeTaller?id=' + sp_code + '&puesto=2',
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
                    field: 'motor',
                    title: 'Motor',
                    visible: true,
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'pID',
                    title: 'Promotion ID',
                    visible: true,
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'nomJefeTaller',
                    title: 'Nombre jefe de taller',
                    visible: true,
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'porcPosible',
                    title: '% Posible',
                    visible: true,
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'porcObtenido',
                    title: '% Obtenido',
                    visible: true,
                    align: 'center',
                    valign: 'middle'
                }]
        });
        for(var i = 0; i < json.data.length; i++){
        	//alert(json.data[i].porcObtenido);
	        if(json.data[i].porcObtenido == '100'){
		        //$('#hdnPorcJefe').val(json.data[i].porcObtenido);
		        $('#hdnTotal').val(json.data[i].porcObtenido);
		        
	        }/* else {
	        	$('#hdnPorcJefe').val('0');
	        }*/
        }
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
}
/*

function cargarTablaGteServ(sp_code){
	
	$('#tableBody3').bootstrapTable('destroy');
	$.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerGereServicio?id=' + sp_code + '&puesto=3',
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
                return 'Mostrando ' + pageTo + ' de ' + totalRows + ' registros';
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
                    field: 'motor',
                    title: 'Motor',
                    visible: true,
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'pID',
                    title: 'Promotion ID',
                    visible: true,
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'nomJefeTaller',
                    title: 'Nombre gerente de servicio',
                    visible: true,
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'porcPosible',
                    title: '% Posible',
                    visible: true,
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'porcObtenido',
                    title: '% Obtenido',
                    visible: true,
                    align: 'center',
                    valign: 'middle'
                }]
        });
        for(var i = 0; i < json.data.length; i++){
	        if(json.data[i].porcObtenido == '100'){
		        $('#hdnPorcGere').val(json.data[i].porcObtenido);
	        } 
        }
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
	
}

*/



/*
 
 
 
 
   $(function() {
        alert("entra a funcion capajefetaller jsp")
        $('#tableBody').bootstrapTable('destroy');
        $('#tableBody2').bootstrapTable('destroy');
        $('#tableBody3').bootstrapTable('destroy');
        $.ajax({
            dataType: "text",
            method: "POST",
            url: 'MotorHQSOL?idDealer=' + this.value,
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


        $.ajax({
            dataType: "text",
            method: "POST",
            url: 'CapaAdminGarantias?id=' + this.value + '&puesto=1',
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
                        field: 'pID',
                        title: 'Promotion ID',
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
            url: 'CapaAdminGarantias?id=' + this.value + '&puesto=3',
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
                        field: 'pID',
                        title: 'Promotion ID',
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

        $.ajax({
            dataType: "text",
            url: 'ObtenerCantMec?id=' + <%=idDealer%>,
            method: "POST",
            beforeSend: function() {
            }
        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar la Cantidad de Mecánicos');
            } else {
                json = $.parseJSON(e);
                for (var i = 0; i < json.length; i++) {
                    $('#tipo_eval').val(json[i].tipoEval);
                    $('#revision').val(json[i].revision);
                    $('#anio').val(json[i].anio);
                    $('#dealer').val(json[i].idDealer);
                    $('#codigoDeal').val(json[i].idDealer);
                    $('#datepicker').val(json[i].fechaEval);
                    $('#datepicker2').val(json[i].fechaIni);
                    $('#datepicker3').val(json[i].fechaFin);
                }
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al enviar la informacion');
            $('#closeModal').css('display', '');
        });
    });
 
 
 
 
 
 
 */
