var total;
var TotalSuma =0;
$(function() {
	$('#efiRescates').addClass("active");
    $('#Pregunta5').click(function() {
        var strIdDealer = $('#codigoDeal').val();
        var strFechaIni = $('#datepicker2').val();
        var strFechaFin = $('#datepicker3').val();
        if (strIdDealer != '' && strFechaIni != '' && strFechaFin != '') {
        	cargarTablaPCID(strIdDealer,strFechaIni,strFechaFin);
        } else {
            alert('Intruduzca Dealer, Fecha Inicio Evaluacion y Fecha Fin Evaluacion para porder Calcular');
        }
    });

 
    $('#Calcular').click(function() {
        var strIdDealer = $('#codigoDeal').val();
        var strFechaIni = $('#datepicker2').val();
        var strFechaFin = $('#datepicker3').val();
        var array="";
        for (var i = 1; i<= 6; i++){
    		if (i == 1) {
            	array += $('input[name=Pregunta'+i+']:checked').val();
            } else {
            	array += "," + $('input[name=Pregunta'+i+']:checked').val();
            }
    	}
        $('#Radios').val(array);
       
        if (strIdDealer != '' && strFechaIni != '' && strFechaFin != '') {
        	var totSum =suma();
        	obtenerEficiencia(strIdDealer,strFechaIni,strFechaFin,$('#dr').val(),totSum);
        	ObtenerRespNoDisp(strIdDealer,strFechaIni,strFechaFin,$('#dr').val());
        	ObteneRescatesExced(strIdDealer,strFechaIni,strFechaFin,$('#dr').val());
            
            //ShowTotal(strIdDealer, strFechaIni, strFechaFin);
        } else {
            alert('Intruduzca Dealer, Fecha Inicio Evaluacion y Fecha Fin Evaluacion para porder Calcular');
        }
    });

    $('#enviar').click(function() {
        if ($('#DispPosibleH').val() != '') {
            var flag = true;
            var Pregunta1 = document.querySelector('input[name = "Pregunta1"]:checked');
            var Pregunta2 = document.querySelector('input[name = "Pregunta2"]:checked');
            var Pregunta4 = document.querySelector('input[name = "Pregunta4"]:checked');
            //var Pregunta7 = document.querySelector('input[name = "Pregunta7"]:checked');
            if (Pregunta1.value == 'Y' && $('#placas').val() == '') {
                flag = false;
            } else if (Pregunta2.value == 'Y' && $('#marca').val() == '' && $('#NoSerie').val() == '') {
                flag = false;
            } else if (Pregunta4.value == 'Y' && $('#noCelu').val() == '') {
                flag = false;
            } else if (Pregunta4.value == 'Y' && $('#noCelu').val() != '') {
            	if(isNaN($('#noCelu').val())){
            		alert('El número de celular debe de ser nuemrico.');
            		return false;
            	}
            	if($('#noCelu').val().length < 10){
            		alert('El número de celular no esta completo.');
            		return false;
            	}
            } /*else if (Pregunta7.value == 'si' && $('#inLine').val() == '') {
                flag = false;
            }*/
            if (flag) {
                json = JSON.stringify($('#frmCheck').serializeArray());
                JsonDataPcid = JSON.stringify($('#tableBody4').bootstrapTable('getSelections'));
                $.ajax({
                    data: {data: json, tipo: 'RESCATES', DataPcid: JsonDataPcid, radios: $('#Radios').val() },
                    //data: {data: json, tipo: 'RESCATES' },
                    dataType: "text",
                    url: "GuardarEfiRescate",
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
                
                
                guardarPCID();
                
                
            } else {
                alert('Debes llenar todos los campos para poder Enviar evaluacion.');
            }
        } else {
            alert('Debe Calcular los datos para poder Enviar evaluacion.');
        }
    });
    
    $('#enviarS').click(function() {
    	if ($('#DispPosibleH').val() != '') {
            var flag = true;
            var Pregunta1 = document.querySelector('input[name = "Pregunta1"]:checked');
            var Pregunta2 = document.querySelector('input[name = "Pregunta2"]:checked');
            var Pregunta4 = document.querySelector('input[name = "Pregunta4"]:checked');
            //var Pregunta7 = document.querySelector('input[name = "Pregunta7"]:checked');
            if (Pregunta1.value == 'Y' && $('#placas').val() == '') {
                flag = false;
            } else if (Pregunta2.value == 'Y' && $('#marca').val() == '' && $('#NoSerie').val() == '') {
                flag = false;
            } else if (Pregunta4.value == 'Y' && $('#noCelu').val() == '') {
                flag = false;
            } else if (Pregunta4.value == 'Y' && $('#noCelu').val() != '') {
            	if(isNaN($('#noCelu').val())){
            		alert('El número de celular debe de ser nuemrico.');
            		return false;
            	}
            	if($('#noCelu').val().length < 10){
            		alert('El número de celular no esta completo.');
            		return false;
            	}
            } /*else if (Pregunta7.value == 'si' && $('#inLine').val() == '') {
                flag = false;
            }*/
            if (flag) {
                json = JSON.stringify($('#frmCheck').serializeArray());
                //JsonDataPcid = JSON.stringify($('#tableBody4').bootstrapTable('getSelections'));
                $.ajax({
                    //data: {data: json, tipo: 'RESCATES', DataPcid: JsonDataPcid},
                	data: {data: json, tipo: 'RESCATES', DataPcid: JsonDataPcid, radios: $('#Radios').val() },
                	dataType: "text",
                    url: "GuardarEfiRescate",
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
                
                guardarPCID();
            } else {
                alert('Debes llenar todos los campos para poder Enviar evaluacion.');
            }
        } else {
            alert('Debe Calcular los datos para poder Enviar evaluacion.');
        }
    });
});

function suma() {

    var VariablePregunta = 0;
    var Pregunta1 = document.querySelector('input[name = "Pregunta1"]:checked');
    var Pregunta2 = document.querySelector('input[name = "Pregunta2"]:checked');
    var Pregunta3 = document.querySelector('input[name = "Pregunta3"]:checked');
    var Pregunta4 = document.querySelector('input[name = "Pregunta4"]:checked');
    var Pregunta5 = document.querySelector('input[name = "Pregunta5"]:checked');
    var Pregunta6 = document.querySelector('input[name = "Pregunta6"]:checked');
   // var Pregunta7 = document.querySelector('input[name = "Pregunta7"]:checked');
    if (Pregunta1.value === "Y") {
        VariablePregunta += 15;
    }
    if (Pregunta2.value === "Y") {
        VariablePregunta += 5;
    }
    if (Pregunta3.value === "Y") {
        VariablePregunta = VariablePregunta + 5;
    }
    if (Pregunta4.value === "Y") {
        VariablePregunta += 5;
    }
    if (Pregunta5.value === "Y") {

        
        var band = true;
        var json2 = $('#tableBody4').bootstrapTable('getData');
        for (var i = 0; i< json2.length ;i++){
        	if(	json2[i].Valido_Auditorias=='SI'){
        		band = false;
        	}
        }
        if (band==false){
        	VariablePregunta += 5;
        }
        

    }
    if (Pregunta6.value === "Y") {
        VariablePregunta += 5;
    }

    return VariablePregunta;
    
}

function ShowTotal(id, fechaIni, fechaFin, suma) {
    $.ajax({
        dataType: "text",
        data: {idDealer: id, fechaIni: fechaIni, fechaFin: fechaFin, idDr: $('#dr').val(), suma: suma},
        url: 'ObtenerPorcRescates',
        method: "GET"
    }).done(function(e) {
        if (e === 'error') {
        } else {
            json = $.parseJSON(e);
            for (var i = 0; i < json.length; i++) {
                $('#DispPosible').html("100%");
                $('#DispTotal').html(json[i].PorcLogradoRes);
                $('#DispPosibleH').val(json[i].PorcPosibleRes);
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
               	cargarDR(json[i].codigodr);
               	cargarDealers(json[0].codigodr, json[0].sp_code );
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
                
                //console.log("#001: "+json[i].fechafin);
                
                if (json[i].placas != "" && json[i].placas != null){
	                $('#placas').val(json[i].placas);
	                aparece1();
	                $("input[name=Pregunta1][value='Y']").prop("checked",true);
                }
                
                //console.log("#002: "+json[i].fechafin);
                
                if ((json[i].marca != "" && json[i].marca != null) || (json[i].noserie !="" && json[i].noserie != null)){
                	aparece2(); 
                	$('#marca').val(json[i].marca);
                    $('#NoSerie').val(json[i].noserie); 
	                $("input[name=Pregunta2][value='Y']").prop("checked",true);
                }
               
                //console.log("#003: "+json[i].fechafin);
                
                if (json[i].nocel != "" && json[i].nocel != null){
                	aparece3();
                	$('#noCelu').val(json[i].nocel);
	                $("input[name=Pregunta4][value='Y']").prop("checked",true);
                }
                
                if (json[i].inline != "" && json[i].inline != null){
                	aparece4();
                	$('#inLine').val(json[i].inline);
	               // $("input[name=Pregunta7][value='si']").prop("checked",true);
                }
            	
            	strRadios = json[0].radios.split(",");
            	
            	for (var j=0; j<6 ; j++){
            		//console.log(strRadios[j]);
            		$("input[name=Pregunta" + (j+1) +"][value='"+strRadios[j] +"']").prop("checked",true);
            	}
            	

            	
            	if (strRadios[4]=='Y'){
            		aparece5();
        			cargarTablaPCID(json[i].sp_code, json[i].fechaini, json[i].fechafin);
        			
            	}
            	
            	var totSum;   	
            	
            	var fechaini = json[0].fechaini;
            	var sp_code= json[0].sp_code;
            	var fechafin=json[0].fechafin;
            	var codigodr=json[0].codigodr;
            	
            	setTimeout(function() {
            		totSum =suma();
            		//console.log(totSum);
            		obtenerEficiencia(sp_code,fechaini,fechafin,codigodr,totSum);
                	ObtenerRespNoDisp(sp_code,fechaini,fechafin,codigodr);
                	ObteneRescatesExced(sp_code,fechaini,fechafin,codigodr);
            	}, 2000);
            	
                
                
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
}



function cargarTablaPCID(strIdDealer,strFechaIni,strFechaFin){
	 $('#tableBody4').bootstrapTable('destroy');
     $.ajax({
         data: {idDealer: strIdDealer, fechaIni: strFechaIni, fechaFin: strFechaFin},
         dataType: "text",
         method: "POST",
         url: 'ObtenerPCID',
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
             rowStyle: 'rowselect',
             checkboxHeader:false,
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
	                field: 'status',
	                checkbox: true
		         },{
                     field: 'PCID',
                     title: 'PCID',
                     align: 'center',
                     valign: 'middle',
                     type: 'text'
                 }, {
                     field: 'Fecha_Expiracion',
                     title: 'Fecha de Expiraci&oacute;n',
                     align: 'center',
                     valign: 'middle',
                     type: 'text'
                 }, {
                     field: 'Valido_Auditorias',
                     title: 'V&aacute;lido para Auditor&iacute;a',
                     align: 'center',
                     valign: 'middle',
                     type: 'text'
                 }, {
                     field: 'Comentarios',
                     title: 'Comentarios',
                     align: 'center',
                     valign: 'middle',
                     type: 'text'
                 }]
         });
         $('#myModal').modal('hide');
        
      
     	
         //obtenerEficiencia(json[i].sp_code,json[i].fechaini,json[i].fechafin,json[i].codigodr,totSum);
     }).fail(function(e) {
         $('#closeModal').css('display', '');
         $('#headerModal').html('Ocurrio un error al cargar los datos');
     });
	
}


function obtenerEficiencia(strIdDealer,strFechaIni,strFechaFin,dr,suma){
	 $('#tableBody5').bootstrapTable('destroy');
     $.ajax({
         dataType: "text",
         method: "POST",
         data: {idDealer: strIdDealer, fechaIni: strFechaIni, fechaFin: strFechaFin, idDr: dr, suma: suma},
         url: 'ObtenerEficienciaRescates',
         beforeSend: function() {

             $('#headerModal').html('Solicitando informacion...');
             $('#closeModal').css('display', 'none');
             $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
         }
     }).done(function(e) {
         json = $.parseJSON(e);
         console.log(e);
         var len= json.data.length;
         
         
         
         $('#tableBody5').bootstrapTable({
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
                     field: 'Rescates',
                     title: '',
                     type: 'text'
                 }, {
                     field: 'Cantidad',
                     title: 'Cantidad',
                     align: 'center',
                     valign: 'middle',
                     type: 'text'
                 }, {
                     field: 'PorcPosibleRes',
                     title: '% Posibles',
                     align: 'center',
                     valign: 'middle',
                     type: 'text'
                 }, {
                     field: 'PorcLogradoRes',
                     title: '% Obtenidos',
                     align: 'center',
                     valign: 'middle',
                     type: 'text'
                 }]
         });
         
        
         console.log(json.data[len-1].PorcLogradoRes);
         console.log(json.data[len-2].PorcLogradoRes);
         
         
         total = Number(json.data[len-1].PorcLogradoRes) + Number(json.data[len-2].PorcLogradoRes);
         //alert(total);
         $('#DispTotal').html(total + '%');
         $('#Total').val(total);
         $('#DispPosible').html("100%");
         
         $('#DispPosibleH').val(total+ '%');
         
         $('#myModal').modal('hide');
         /*for (var i = 0; i < json.length; i++) {
             $('#datepicker').val(json[i].fechaEval);
             $('#datepicker2').val(json[i].fechaIni);
             $('#datepicker3').val(json[i].fechaFin);
         }¨*/
         
     }).fail(function(e) {
         $('#closeModal').css('display', '');
         $('#headerModal').html('Ocurrio un error al cargar los datos');
     });
	
}



function ObtenerRespNoDisp(strIdDealer,strFechaIni,strFechaFin,dr){
	
	$('#tableBody').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        data: {idDealer: strIdDealer, fechaIni: strFechaIni, fechaFin: strFechaFin, idDr: $('#dr').val()},
        url: 'ObtenerResNoDisp',
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
                    field: 'FechaLlamada',
                    title: 'Fecha de llamada',
                    type: 'text'
                }, {
                    field: 'QuienAtendioLlamada',
                    title: '¿Qui&eacute;n atendi&oacute; la llamada?',
                    type: 'text'
                },
                {
                    field: 'Cliente',
                    title: 'Cliente',
                    type: 'text'
                },
                {
                    field: 'Razones',
                    title: 'Razones por las que no se pudo atender',
                    type: 'text'
                }
            ]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
	
}


function ObteneRescatesExced(strIdDealer,strFechaIni,strFechaFin,dr){
	
	$('#tableBody2').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        data: {idDealer: strIdDealer, fechaIni: strFechaIni, fechaFin: strFechaFin, idDr: $('#dr').val()},
        url: 'ObtenerRescatesExced',
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
                    field: 'FechaLlamada',
                    title: 'Fecha de llamada',
                    type: 'text'
                }, {
                    field: 'QuienAtendioLlamada',
                    title: '¿Qui&eacute;n atendi&oacute; la llamada?',
                    type: 'text'
                },
                {
                    field: 'Cliente',
                    title: 'Cliente',
                    type: 'text'
                },
                {
                    field: 'Razones',
                    title: 'Razones por las que no se pudo atender',
                    type: 'text'
                }
            ]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
}


function guardarPCID(){
	json = JSON.stringify($('#frmCheck').serializeArray());
    JsonDataPcid = JSON.stringify($('#tableBody4').bootstrapTable('getData'));
    $.ajax({
        data: {data: json, DataPcid: JsonDataPcid, status:"H"},
        dataType: "text",
        url: "GuardarRelPCID?heta=N",
        method: "POST",
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


function rowselect(row, index){
	if (row.status == false && row.editable=='N' && row.Valido_Auditorias =='NO'){
		return {
	        classes: 'disabledClass'
	    };
	}else {
		return {
	        classes: ''
	    };
	}
}