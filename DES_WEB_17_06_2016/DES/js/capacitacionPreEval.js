/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
	$('#capaVerificacion').addClass("active");
	
	$('#btnPrint').on('click', function() {
        
    	var divContents = $("#printForm").html();
        var printWindow = window.open('', '', 'height=600,width=1000');
        printWindow.document.write('<html><head><title>Dealers Evaluation System</title>');
        
        printWindow.document.write('<link rel="stylesheet" href="cummins_styles/bootstrap.min.css">');
		printWindow.document.write('<script src="scripts/jquery.min.js"></script>');
		printWindow.document.write('<script src="scripts/bootstrap.min.js"></script>');
		
		printWindow.document.write('<script src="scripts/jquery.dataTables.min.js"></script>');
		printWindow.document.write('<script src="scripts/dataTables.bootstrap.min.js"></script>');
		printWindow.document.write('<script src="scripts/dataTables.buttons.min.js"></script>');
		printWindow.document.write('<script src="scripts/buttons.bootstrap.min.js"></script>');
		printWindow.document.write('<script src="scripts/dataTables.select.min.js"></script>');
		printWindow.document.write('<script src="scripts/bootstrap-table.js"></script>');
		printWindow.document.write('<script src="scripts/mindmup-editabletable.js"></script>');
		printWindow.document.write('<script src="scripts/bootstrap-editable.js"></script>');
		printWindow.document.write('<script src="scripts/bootstrap-table-editable.js"></script>');
		
		printWindow.document.write('<link rel="stylesheet" href="cummins_styles/bootstrap-table.min.css">');
		printWindow.document.write('<link rel="stylesheet" href="cummins_styles/bootstrap-table.css">');
		printWindow.document.write('<link rel="stylesheet" href="cummins_styles/buttons.bootstrap.min.css">');
		printWindow.document.write('<link rel="stylesheet" href="cummins_styles/select.bootstrap.min.css">');
		printWindow.document.write('<link rel="stylesheet" href="cummins_styles/bootstrap-editable.css">');
		
		printWindow.document.write('<link rel="stylesheet" href="css/infantCare.css">');
		
		printWindow.document.write('<link rel="stylesheet" href="cummins_styles/jquery-ui.css">');
		
		printWindow.document.write('<script src="scripts/jquery-ui.js"></script>');
		
		printWindow.document.write('<script src="scripts/jquery.serialize-object.min.js"></script>');
		
		printWindow.document.write('<script type="text/javascript" src="scripts/bootstrap-table-export.js"></script>');
		printWindow.document.write('<script type="text/javascript" src="scripts/FileSaver.min.js"></script>');
		printWindow.document.write('<script type="text/javascript" src="scripts/jspdf.js"></script>');
		printWindow.document.write('<script type="text/javascript" src="scripts/jspdf.plugin.autotable.js"></script>');
		printWindow.document.write('<script type="text/javascript" src="scripts/tableExport.js"></script>');
		
		printWindow.document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/css/bootstrap-datepicker.css">');
		printWindow.document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/js/bootstrap-datepicker.js"></script>');
		printWindow.document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/locales/bootstrap-datepicker.es.min.js"></script>');
		
        printWindow.document.write('</head><body >');
        printWindow.document.write(divContents);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
        
        $('#hola').html(divContents);
         
    });
	
    $.ajax({
        dataType: "text",
        url: "ObtenerDR",
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de distribuidores');
        } else {
            json = $.parseJSON(e);
            $('#dr').html($("<option></option>"));
            for (var i = 0; i < json.length; i++) {
                $('#dr').append($("<option></option>")
                        .attr("value", json[i].value)
                        .text(json[i].text));
            }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });

    $('#dr').on('change', function() {
        $.ajax({
            dataType: "text",
            url: "ObtenerDealer?id_dr=" + this.value,
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
                    $('#dealer')
                            .append($("<option></option>")
                                    .attr("value", json[i].value)
                                    .text(json[i].text));
                }
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
            $('#closeModal').css('display', '');
        });
        $('#codigoDR').val(this.value);
        $('#codigoDeal').val("");
    });


    $('#dealer').on('change', function() {
        $('#codigoDeal').val(this.value);
        adminGarantiasPrev($('#dealer').val(),$('#tipo_eval').val(),$('#revision').val(),$('#anio').val());
        cargarTablaJefeTaller($('#dealer').val());
       // cargarTablaGteServ(this.value);
        
        var strIdDealer = this.value;
        if (strIdDealer) {
            $('#tableBody').bootstrapTable('destroy');
            $.ajax({
                data: {id: strIdDealer, tipo: 'PreEval'},
                dataType: "text",
                method: "POST",
                //url: 'ObtenerMotoresPreEval',
                url: 'ObtenerMotoresCapacitaMec',
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
                            title: 'Motor',
                            field: 'motor',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }, {
                            //field: 'cantMec',
                        	field: 'Mec_Cert',
                            title: 'Cantidad de Tecnicos',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });

            $('#tableBody2').bootstrapTable('destroy');
            $.ajax({
                data: {idDealer: strIdDealer},
                dataType: "text",
                method: "POST",
                url: 'MotoresPreEvaluacion',
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
                            title: 'Motor',
                            field: 'nomMotor',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }, {
                            field: 'nomTec',
                            title: 'Nombre Tecnico',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }, {
                            field: 'promId',
                            title: 'Promotion ID',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }, {
                            field: 'selecOpc',
                            title: 'Seleccionar una Opcion',
                            align: 'center',
                            valign: 'middle',
                            formatter: 'formatterBoton'
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });
/*
            $('#tableBody3').bootstrapTable('destroy');
            $.ajax({
                data: {idDealer: strIdDealer},
                dataType: "text",
                method: "POST",
                url: 'ObtenerJefeGerentePre',
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
                            title: 'Jefe de Taller',
                            field: 'jefeTaller',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }, {
                            field: 'gerServ',
                            title: 'Gerente de Servicio',
                            align: 'center',
                            type: 'text',
                            valign: 'middle'
                        }]
                });
                $('#myModal').modal('hide');
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al cargar los datos');
            });
*/
            $.ajax({
                data: {idDealer: strIdDealer},
                dataType: "text",
                url: "ObtenerDatosPreEval",
                method: "POST",
                beforeSend: function() {
                }
            }).done(function(e) {
                if (e === 'error') {
                    alert('Ocurrio un error al cargar los datos');
                } else {
                    json = $.parseJSON(e);
                    for (var i = 0; i < json.length; i++) {
                        $('#adminGara').val(json[i].admonGara);
                        $('#promId1').val(json[i].promotionId1);
                        $('#fechaCer').val(json[i].fechaCer);
                        $('#nombreCer').val(json[i].nolmbreCer);
                        //$('#darAlta').val(json[i].darAlta);
                        //$('#promId2').val(json[i].promotionId2);
                    }
                }
            }).fail(function(e) {
                $('#headerModal').html('Ocurrio un error al enviar la informacion');
                $('#closeModal').css('display', '');
            });
        }
    });
    
    
    
    
});

function formatterBoton(value, row) {
    return '<button class="btn btn-default" disabled type="button" style="border-color:#000000; color:#000000;">Verificado</button>&nbsp;&nbsp;' +
            '<button class="btn col-md-offset-4 btn-default" disabled type="button" style="border-color:#000000; color:#000000;">Dar de baja</button>';
}






function cargarTablaJefeTaller(sp_code){
	$('#tableBody3').bootstrapTable('destroy');
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
	        if(json.data[i] == '100'){
		        $('#hdnPorcJefe').val(json.data[i].porcObtenido);
	        } else {
	        	$('#hdnPorcJefe').val('0');
	        }
        }
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
}




function cargarTablaGteServ(sp_code){
	
	$('#tableBody4').bootstrapTable('destroy');
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
        $('#tableBody4').bootstrapTable({
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
                    visible: true
                }, {
                    field: 'nomJefeTaller',
                    title: 'Nombre Gerente de Servicio',
                    visible: true
                }, {
                    field: 'porcPosible',
                    title: '% Posible',
                    visible: false
                }, {
                    field: 'porcObtenido',
                    title: '% Obtenido',
                    visible: false
                }]
        });
        for(var i = 0; i < json.data.length; i++){
	        if(json.data[i] == '100'){
		        $('#hdnPorcGere').val(json.data[i].porcObtenido);
	        } else {
	        	$('#hdnPorcGere').val('0');
	        }
        }
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
	
}




function adminGarantiasPrev(sp_code,strTipoEval,strRev,strAnio){
	$.ajax({
        dataType: "text",
        method: "POST",
        data: {id: sp_code, puesto: '1', tipoEval: strTipoEval, revision: strRev, anio: strAnio},
        url: 'CapaAdminGarantiasPreEval',
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        //for (var i = 0;i < json.length ;i++ ){
        	//json[0].
        	
        	$('#adminGara').val(json.data[0].nombreAdmin);
        	$('#promId1').val(json.data[0].pID);
        	$('#nombreCer').val(json.data[0].nombreCurso);
        	$('#fechaCer').val(json.data[0].fechaCurso);
        	
        	
        //}
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
	
}







