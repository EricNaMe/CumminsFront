/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
	$('#resEjec').addClass("active");
    $('#calcular').click(function() {
        var strIdDealer = $('#codigoDeal').val();
        var strRevision = $('#revision').val();
        var strTipoEval = $('#tipo_eval').val();
        var strAnio = $('#anio').val();
        if (strIdDealer != '' && strRevision != '' && strTipoEval != '' && strAnio != '') {
        	cargarTablas(strIdDealer, strRevision, strTipoEval, strAnio);
        } else {
            alert('Intruduzca Dealer, Tipo Evalucacui�n, Revision y A�o para porder Calcular');
        }
    });

    $('#guardar').click(function() {
    	var strDealer = $('#codigoDeal').val();
    	var strTipoEval = $('#tipo_eval').val();
    	var strRev = $('#revision').val();
    	var strAnio = $('#anio').val();
    	if(strDealer != '' && strTipoEval != '' && strRev != '' && strAnio != '') {
    		jsonRes = JSON.stringify($('#myform').serializeArray());
	        $.ajax({
	            data: {data: jsonRes},
	            dataType: "text",
	            url: "GuardarResumenEjec",
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
    });
    
    $('#guardarS').click(function() {
    	var strDealer = $('#codigoDeal').val();
    	var strTipoEval = $('#tipo_eval').val();
    	var strRev = $('#revision').val();
    	var strAnio = $('#anio').val();
    	if(strDealer != '' && strTipoEval != '' && strRev != '' && strAnio != '') {
    		jsonRes = JSON.stringify($('#myform').serializeArray());
	        $.ajax({
	            data: {data: jsonRes},
	            dataType: "text",
	            url: "GuardarResumenEjec",
	            method: "GET",
	            beforeSend: function() {
	                $('#headerModal').html('Agregando registro...');
	                $('#closeModal').css('display', 'none');
	                $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
	            }
	        }).done(function(e) {
	            $('#headerModal').html(e);
	            $('#closeModalEliminar').css('display', '');
	            window.location = "TEMPResumenEval.jsp";
	        }).fail(function(e) {
	            $('#closeModal').css('display', '');
	            $('#headerModal').html('Ocurrio un error al guardar los datos');
	        });
    	}
    });
});

function obtenerInfo(id){
	$.ajax({
        data: {idDealer: id},
        dataType: "text",
        url: "ObtenerResumenComent",
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar la suma de ponderacion');
        } else {
            json = $.parseJSON(e);
            for (var i = 0; i < json.length; i++) {
                $('#tipo_eval').val(json[i].tipoEval);
                $('#revision').val(json[i].revision);
                $('#anio').val(json[i].anio);
                $('#dr').val(json[i].dr);
                $('#codigoDR').val(json[i].dr);
                $('#dealer').val(json[i].dealer);
                $('#codigoDeal').val(json[i].dealer);
                $('#datepicker').val(json[i].fechaEval);
                $('#datepicker2').val(json[i].fechaIni);
                $('#datepicker3').val(json[i].fechaFin);
                $('#comentaGeneral').val(json[i].comentarios);
                $('#nombre1').val(json[i].nombre1);
                $('#nombre2').val(json[i].nombre2);
                $('#nombre3').val(json[i].nombre3);
                $('#nombre4').val(json[i].nombre4);
                $('#nombre5').val(json[i].nombre5);
                $('#puesto1').val(json[i].puesto1);
                $('#puesto2').val(json[i].puesto2);
                $('#puesto3').val(json[i].puesto3);
                $('#puesto4').val(json[i].puesto4);
                $('#puesto5').val(json[i].puesto5);
                $('#dealer1').val(json[i].dealer1);
                $('#dealer2').val(json[i].dealer2);
                $('#dealer3').val(json[i].dealer3);
                $('#dealer4').val(json[i].dealer4);
                $('#dealer5').val(json[i].dealer5);
                cargarDR(json[i].dr);
                cargarDealers(json[i].dr,json[i].dealer);
                cargarTablas(json[i].dealer, json[i].revision, json[i].tipoEval, json[i].anio);
            }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
}

function cargarTablas(id, revision, tipoEval, anio){
	alert('carga la tabla');
    var Content = '<table border=1>';
    var Datos = false;
	$.ajax({
        data: {idDealer: id, revision:revision , tipoEval: tipoEval, anio: anio},
        dataType: "text",
        url: "ResumenEjecutivo",
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar los datos');
        } else {
        	alert('empieza el for para barrido de datos');
            json = $.parseJSON(e);
        	alert('numro de informacion a barrer'+json.length);
            for (var i = 0; i < json.length; i++) {
            	if (i == 0) {
            		alert('crea el encabezado');
            		
            	
            		Content += '<tr>';
            			Content += '<td class="text-center" >&nbsp;&nbsp;MOTOR&nbsp;&nbsp;</td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;NIVEL OBTENIDO&nbsp;&nbsp;</td>';
            			Content += '<td></td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;PARTES&nbsp;&nbsp;</td>';
            			Content += '<td colspan="3" class="text-center">&nbsp;&nbsp;CAPACITACION&nbsp;&nbsp;</td>';
            			Content += '<td colspan="4" class="text-center">&nbsp;&nbsp;HERRAMIENTAS Y SOFTTWARE&nbsp;</td>';
            			Content += '<td colspan="2" class="text-center">&nbsp;&nbsp;EFICIENCIA&nbsp;&nbsp;</td>';
            			Content += '<td></td>';
            			Content += '<td></td>';
            		Content += '</tr>';
            		Content += '<tr>';
            			Content += '<td></td>';
            			Content += '<td></td>';
            			Content += '<td></td>';
            			Content += '<td></td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;Tecnicos&nbsp;&nbsp;</td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;Admin. Garantias&nbsp;&nbsp;</td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;Jefe de Taller&nbsp;&nbsp;</td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;Taller&nbsp;&nbsp;</td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;Elec.&nbsp;&nbsp;</td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;Uso QSOL&nbsp;&nbsp;</td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;Licencia QSOL&nbsp;&nbsp;</td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;Grantias&nbsp;&nbsp;</td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;Rescates&nbsp;&nbsp;</td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;% Reducido&nbsp;&nbsp;</td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;% Promedio Ponderacion&nbsp;&nbsp;</td>';
            		Content += '</tr>';
            		
            		
            		console.log(json);
            		/*
            		
                    Content += '<tr class="Cabecera" style="background-color:black; border-bottom-color: white; border-style: solid; border-color:white; color:white;">';
                    Content += '<td rowspan="2"   border:1px solid #FFFFFF;  >PRODUCTO</td> ';
                    Content += '<td rowspan="2" class="text-center" >NIVEL OBTENIDO</td>';
                    Content += '<td rowspan="2" class="text-center"  >PARTES</td>';
                    Content += '<td class="text-center"  colspan="4">HERRAMIENTA</td> ';
                    Content += '<td class="text-center"  colspan="3" >CAPACITACI&Oacute;N</td>';
                    Content += '<td class="text-center" style="text-align: center;"  colspan="2">EFICIENCIA</td>';
                    Content += '<td rowspan="2">QUEJAS</td>';
                    Content += '<td rowspan="2">Total</td>';
                    Content += '</tr>';

                    Content += '<tr class="Cabecera" style="background-color:black; border-bottom-color: white; border-style: solid; border-color:white; color:white;">';
                    Content += '<td style="border-style: solid; border-color:white;">Taller</td>';
                    Content += '<td >Elec</td>';
                    Content += '<td>UsoQSOL</td>';
                    Content += '<td >Evalua Qsol</td>';
                    Content += '<td >T&eacute;cnicos</td>';
                    Content += '<td>Jefe T.</td>';
                    //Content += '<td>Gte. Serv</td>';
                    Content += '<td>Admon. Garant&iacute;as </td>';
                    Content += '<td>Garant&iacute;as</td>';
                    Content += '<td>Rescates</td>';
                    Content += '</tr>';
                    */
                }    
            	alert('crea el cuerpo');
            		Content += '<tr>';
            		
            			Content += '<td class="text-center" rowspan="3">'+json[i].producto+'</td>';
            			Content += '<td class="text-center" rowspan="3">'+json[i].nivContenido+'</td>';
            			Content += '<td class="text-center">&nbsp;&nbsp;Cal. X Mod. Obtenido&nbsp;&nbsp;</td>';
            			//Validacion si el modulo de partes es menor a 80%
            			if (json[i].P_PARTES < 80) {
            				Content += '<td class="text-center" bgcolor="red">' + json[i].P_PARTES + '</td>';
            			}
            			else{
            				Content += '<td class="text-center">' + json[i].P_PARTES + '</td>';
            			}
            			//Validacion si el modulo de tecnicos es menor a 80%
            			if (json[i].C_MECANICO < 80) {
            				Content += '<td class="text-center" bgcolor="red">' + json[i].C_MECANICO + '</td>';
            			}
            			else{
            				Content += '<td class="text-center">' + json[i].C_MECANICO + '</td>';
            			}
            			//Validacion si el modulo de admin garantias es menor a 80%
            			if (json[i].C_ADMIN_GARANTIAS < 80) {
            				Content += '<td class="text-center" bgcolor="red">' + json[i].C_ADMIN_GARANTIAS + '</td>';
            			}
            			else{
            				Content += '<td class="text-center">' + json[i].C_ADMIN_GARANTIAS + '</td>';
            			}
            			
            			Content += '<td class="text-center">' + json[i].C_JEFETALLER+ '</td>';
            			Content += '<td class="text-center">' + json[i].H_INDIVIDUAL + '</td>';
            			Content += '<td class="text-center">' + json[i].H_ELECTRONICA + '</td>';
            			Content += '<td class="text-center">' + json[i].H_USQSOL + '</td>';
            			Content += '<td class="text-center">' + json[i].H_EVALUAQSOL+ '</td>';
            			
            			//Validacion si el modulo garantias es menor a 80%
            			if (json[i].E_GARANTIAS < 80) {
            				Content += '<td class="text-center" bgcolor="red">' + json[i].E_GARANTIAS+ '</td>';
            			}
            			else{
            				Content += '<td class="text-center">' + json[i].E_GARANTIAS+ '</td>';
            			}
            			//Validacion si el modulo rescates es menor a 80%
            			if (json[i].E_RESCATES < 80) {
            				Content += '<td class="text-center"  bgcolor="red">' + json[i].E_RESCATES+ '</td>';
            			}
            			else{
            				Content += '<td class="text-center">' + json[i].E_RESCATES+ '</td>';
            			}
            			        			

            		Content += '</tr>';
            		
            		Content += '<tr>';
            		
        				//Content += '<td></td>';
        				//Content += '<td></td>';
        				Content += '<td class="text-center">&nbsp;&nbsp;Max. Posible&nbsp;&nbsp;</td>';
        				Content += '<td class="text-center">' + json[i].PART_MAX + '</td>';
        				Content += '<td class="text-center">' + json[i].CAPMEC_MAX + '</td>';
        				Content += '<td class="text-center">' + json[i].CAPADM_MAX + '</td>';
        				Content += '<td class="text-center">' + json[i].CAPJT_MAX + '</td>';
        				Content += '<td class="text-center">' + json[i].HERESP_MAX + '</td>';
        				Content += '<td class="text-center">' + json[i].HERELEC_MAX + '</td>';
        				Content += '<td class="text-center">' + json[i].HERUSQSOL_MAX + '</td>';
        				Content += '<td class="text-center">' + json[i].HEREVQSOL_MAX + '</td>';
        				Content += '<td class="text-center">' + json[i].EFIGAR_MAX + '</td>';
        				Content += '<td class="text-center">' + json[i].EFIRESC_MAX + '</td>';

        		    Content += '</tr>';
        		    Content += '<tr>';
            		
    					Content += '<td class="text-center">Detalle</td>';
    					Content += '<td class="text-center">' + json[i].T_PARTES + '</td>';
    					Content += '<td class="text-center">' + json[i].T_CAPMEC + '</td>';
    					Content += '<td class="text-center">' + json[i].T_CAPADM + '</td>';
    					Content += '<td class="text-center">' + json[i].T_CAPJT + '</td>';
    					Content += '<td class="text-center">' + json[i].T_HERESP + '</td>';
    					Content += '<td class="text-center">' + json[i].T_HERELEC + '</td>';
    					Content += '<td class="text-center">' + json[i].T_HERUSQSOL + '</td>';
    					Content += '<td class="text-center">' + json[i].T_HEREVQSOL + '</td>';
    					Content += '<td class="text-center">' + json[i].T_EFIGAR + '</td>';
    					Content += '<td class="text-center">' + json[i].T_EFIRESC + '</td>';
    					
    				Content += '</tr>';
    				
    				Content += '<tr>';
    				
						Content += '<td class="text-center" colspan="3" bgcolor="BAB3B3"><B>Resultado</B></td>';
						//Validacion si el modulo de partes es menor a 80%
            			if (json[i].P_PARTES < 80) {
            				Modulo1=0;
            				Content += '<td class="text-center" bgcolor="red">0</td>';
            			}
            			else{
            				Content += '<td class="text-center" bgcolor="BAB3B3">' + json[i].T_PARTES + '</td>';
            				Modulo1=json[i].T_PARTES;
            			}
						///////
            			if (json[i].C_MECANICO < 80 || json[i].C_ADMIN_GARANTIAS < 8) {
            				Content += '<td colspan="3" class="text-center" bgcolor="red">0</td>';
            				Modulo2=0;
            			}
            			else{
            				Modulo2=parseInt(json[i].T_CAPMEC)+parseInt(json[i].T_CAPADM)+parseInt(json[i].T_CAPJT);
            				Content += '<td colspan="3" class="text-center" bgcolor="BAB3B3">'+ Modulo2 +'</td>';
            			}
            		    ///////
            			if (json[i].H_INDIVIDUAL < 80) {
            				Content += '<td colspan="4" class="text-center" bgcolor="red">0</td>';
            				Modulo3=0;
            			}
            			else{
            				Modulo3=parseInt(json[i].T_HERESP)+parseInt(json[i].T_HERELEC)+parseInt(json[i].T_HERUSQSOL)+parseInt(json[i].T_HEREVQSOL);
            				Content += '<td colspan="4" class="text-center" bgcolor="BAB3B3">' + Modulo3 + '</td>';
            			}
            		///////
            			if (json[i].E_GARANTIAS < 80 || json[i].E_RESCATES < 8) {
            				Content += '<td colspan="2" class="text-center" bgcolor="red">0</td>';
            				Modulo4=0;
            			}
            			else{
            				Modulo4=parseInt(json[i].T_EFIGAR)+parseInt(json[i].T_EFIRESC);
            				Content += '<td colspan="2" class="text-center" bgcolor="BAB3B3">' + Modulo4 + '</td>';
            			}
					
						Content += '<td class="text-center" bgcolor="BAB3B3">' + json[i].quejas + '</td>';
						Modulo5=
						Total=Modulo1+Modulo2+Modulo3+Modulo4;
			            Content += '<td class="text-center" bgcolor="BAB3B3">' + Total + '</td>';
						
					
					Content += '</tr>';
            		
            		/*
            	
                Content += '<tr>';
                Content += '<td rowspan="2" >' + json[i].producto + '</td>';
                Content += '<td rowspan="2" class="text-center" >' + json[i].nivContenido + '</td>';
                Content += '<td rowspan="2" class="text-center"  >' + json[i].partes + '</td>';
                Content += '<td class="text-center"  colspan="4">' + json[i].herramientas + '</td>';
                Content += '<td class="text-center"  colspan="3" >' + json[i].capacitacion + '</td>';
                Content += '<td class="text-center" style="text-align: center;"  colspan="2">' + json[i].eficiencia + '</td>';
                Content += '<td rowspan="2">' + json[i].quejas + '</td>';
                Content += '<td rowspan="2">' + json[i].total + '</td>';
                Content += '</tr>';
                Content += '<tr>';
                Content += '<td>' + json[i].taller + '</td>';
                Content += '<td>' + json[i].elec + '</td>';
                Content += '<td>' + json[i].usoQSOL + '</td>';
                Content += '<td>' + json[i].evaluaQsol + '</td>';
                Content += '<td>' + json[i].tecnicos + '</td>';
                
                Content += '<td>' + json[i].jefeT + '</td>';
               
                Content += '<td>' + json[i].admonGtias + '</td>';
                Content += '<td>' + json[i].garantias + '</td>';
                Content += '<td>' + json[i].rescates + '</td>';
             
                Content += '</tr>';
                */
                Datos = true;
                $('#pTotal').val(json[i].pTotal);
                $('#hTotal').val(json[i].hTotal);
                $('#cTotal').val(json[i].cTotal);
                $('#eTotal').val(json[i].eTotal);
                $('#qTotal').val(json[i].qTotal);
                $('#totalcal').val(json[i].total);
                
                console.log('&&&&&&&&&&&&&&&&&&&&&&&&&');
                console.log(json[i].jefeT);
                console.log('&&&&&&&&&&&&&&&&&&&&&&&&&');
            }
            if (Datos) {
                Content += '</table>';
                //$("#tblDatos").append(Content);   
                $("#divTemp").html(Content);
            }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });

    $('#tableRangos').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerResumenRangos?idDealer=' + id,
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tableRangos').bootstrapTable({
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
                    field: 'seccion',
                    title: 'Seccion',
                    align: 'center',
                    valign: 'middle',
                    type: 'text'
                }, {
                    field: 'rangos',
                    title: 'Rangos',
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
}

function printNivelServivio(){
var content="";
content+='<html><head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">';
content+='<title></title><script src="scripts/jquery.min.js"></script>';
content+='<script src="js/jQuery.print.js"></script>';
content+='<script type="text/javascript">';
content+='$( document ).ready(function() {';
content+='var d = new Date(); var month = new Array(); month[0] = "Enero";';
content+='month[1] = "Febrero"; month[2] = "Marzo"; month[3] = "Abril";';
content+='month[4] = "Mayo"; month[5] = "Junio"; month[6] = "Julio"; month[7] = "Augosto";';
content+='month[8] = "Septiembre"; month[9] = "Octubre"; month[10] = "Novembiembre"; ';
content+='month[11] = "Diciembre";';
content+='$("#dateLabel").html(d.getDate()+" de "+ month[d.getMonth()] +" del " + d.getFullYear());';
content+='$("#printable").print({';

content+='addGlobalStyles : true,';
content+='globalStyles : true,';
content+='stylesheet : null,';
content+='rejectWindow : true,';
content+='noPrintSelector : ".no-print",';
content+='iframe : true,';
content+='append : null,';
content+='prepend : null';
content+='});';


content+='});';
content+='</script></head><body><div id="divPrint"><table style="width:100%">';
content+='<tr><td><img src="img/izq.png"  height="70px" alt="ABO IT" /></td>';
content+='<td style="width:70%"></td><td style="width:30%; valign:bottom;"> <div id="dateLabel"></div></td>';
content+='</tr></table><br>';
content+='<h1 style="text-align:center; font-weight:bold;">Sistema de Certificaci&oacute;n de Dealers</h1>';
content+='<h1 style="text-align:center;">';
content+='1 Evaluaci&oacute;n 2016';
content+='</h1><br><br><h1 style="text-align:center;">';
content+= $("#dealer option:selected").text();
content+='</h1><br><h3>Nivel de Servicio Obtenido por Plataforma</h3><br>';

content+=$("#divTemp").html();

content+='<br><br>';



content+='<table  style="width:100%"><tr><td style="width:50%">';

content+=$("#tableRangos").html();

content+='</td><td style="width:50%">';

content+='<label style="padding-left: 5px;" for="SubPorc"><a style="color:black;text-decoration: none; background-color:#FFFFFF; font-family: arial;"><b>Nota:</b> El dealer podr� tramitar garant�as y rescates, as� como realizar reparacioones mayores solamente a unidades en las plataformas con resultado AUTORIZADO.</a> </label>';

//////////////////////////////////////
content+='</td></tr></table><h2>COMPROMISOS/COMENTARIOS GENERALES</h2>';

content+=$("#comentaGeneral").val();

content+='<br><h3>Firmas de Acuerdo</h3></div>';
content+='<table style="width:100%" ><tr><td style="width:50%">';
content+=$("#nombre1").val() + '<br>';
content+=$("#puesto1").val() + '<br>';
content+=$("#dealer1").val() + '<br>';
content+='</td><td style="width:50%">';
content+=$("#nombre2").val() + '<br>';
content+=$("#puesto2").val() + '<br>';
content+=$("#dealer2").val() + '<br>';
content+='</td></tr><tr><td><br>';
content+=$("#nombre3").val() + '<br>';
content+=$("#puesto3").val() + '<br>';
content+=$("#dealer3").val() + '<br>';
content+='</td><td><br>';
content+=$("#nombre4").val() + '<br>';
content+=$("#puesto4").val() + '<br>';
content+=$("#dealer4").val() + '<br>';
content+='</td></tr></table></div>';
content+='</body></html>';


var printable ="";
printable += '<!DOCTYPE html>';
printable += '<html><head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"><title></title>';
printable += '<script src="scripts/jquery.min.js"></script> <script src="js/jQuery.print.js"></script>';
printable += '<script type="text/javascript">';
printable += '$( document ).ready(function() {  ';
printable += '	var d = new Date();';
printable += '	var month = new Array();';
printable += '	month[0] = "Enero";';
printable += '	month[1] = "Febrero";';
printable += '	month[2] = "Marzo";';
printable += '	month[3] = "Abril";';
printable += '	month[4] = "Mayo";';
printable += '	month[5] = "Junio";';
printable += '	month[6] = "Julio";';
printable += '	month[7] = "Augosto";';
printable += '	month[8] = "Septiembre";';
printable += '	month[9] = "Octubre";';
printable += '	month[10] = "Novembiembre";';
printable += '	month[11] = "Diciembre";';
printable += '	$("#dateLabel").html(d.getDate()+" de "+ month[d.getMonth()] +" del " + d.getFullYear());';
	//$("#yourdropdownid option:selected").text();

printable += '	$("#printable").print({';
printable += '	    addGlobalStyles : true,';
printable += '	    globalStyles : true,';
printable += '	    stylesheet : null,';
printable += '	    rejectWindow : true,';
printable += '	    noPrintSelector : ".no-print",';
printable += '	    iframe : true,';
printable += '	    append : null,';
printable += '	    prepend : null';
printable += '	});';
printable += '});';
printable += '</script>';
printable += '</head>';
printable += '<body>';
printable += '<div id="printable">';

printable += '<table style="width:100%;">';
printable += '<tr><td><img src="img/izq.png"  height="70px" alt="ABO IT" /></td>';
printable += '<td style="width:70%"></td><td style="width:30%; valign:bottom;"> <div id="dateLabel"></div></td>';
printable += '</tr></table>';
printable += '<br>';
printable += '<h1 style="text-align:center; font-weight:bold;">Sistema de Certificaci&oacute;n de Dealers</h1>';
printable += '<h1 style="text-align:center;"> 1 Evaluaci&oacute;n 2016 </h1>';
printable += '<br><br>';

printable += '<h1 style="text-align:center;">';
printable += $("#dealer option:selected").text();
printable +='</h1>';
printable +='</h1><br><h3>Nivel de Servicio Obtenido por Plataforma</h3><br>';

printable +=$("#divTemp").html();

printable +='<br><br>';

printable += '</div>';
printable += '</body>';
printable += '</html>';
	

var printWindow = window.open('', '', 'height=600,width=1000');
printWindow.document.write(printable);
printWindow.document.close();
//printWindow.print();
}