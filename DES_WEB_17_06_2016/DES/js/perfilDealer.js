/* APP MAU
 * To change this license header, choose License Headers in Project Properties.

 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var idDealerLoc = "";
var DealerVar;
var json;
var OEMVAR;
var DrObt;

var done1=false;
var done2=false;
var done3=false;

var modulo;
var submodulo;

var oem = [];

$(function() {
	
	/*
	if (idDealer!="" & idDealer!=null){
    	obtenerPerfil(idDealer);
    	 $('#dealer').val(idDealer);
    	 $('#dealer').val(idDealer);
    }*/
	
	
	obtenerModulos();
	
	$('#perDealer').addClass("active");
/*		 
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
	
 */   
	/*
    $('#dr').on('change', function() {
    	
    	obtenerDealer(this.value);
    	$('#codigoDR').val(this.value);
        $('#oem').val("");
        $('#codigoDeal').val("");
        
    });*/
	
    $('#modulo1').on('change', function() {
    	obtenerSubModulo(this);
    });
    $('#modulo2').on('change', function() {
    	obtenerSubModulo(this);
    });
    $('#modulo3').on('change', function() {
    	obtenerSubModulo(this);
    });
    $('#modulo4').on('change', function() {
    	obtenerSubModulo(this);
    });
	
	
    
    $('#dealer').on('change', function() {
    	$('#oem').val(oem[$("#dealer").prop('selectedIndex')-1]);
    	cargarTablas ($('#dealer').val());
    });

    $('#guardarPerfil').click(function() {
    	alert('obtiene codigo del dealer');
        idDealerLoc = $('#codigoDeal').val();
        //alert(idDealer);
        if (idDealerLoc != '') {
            jsonPerfil = JSON.stringify($('#myform').serializeArray());
            alert('manda llamar el servlet guardaperfil');
            $.ajax({
                data: {data: jsonPerfil},
                dataType: "text",
                url: "GuardarPerfil",
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
            	alert('confirmacion de guardado en perfil');
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
            }).fail(function(e) {
            	alert('error de guardado en perfil');
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });

            jsonPerfil = JSON.stringify($('#tableCheckBoxObl').bootstrapTable('getAllSelections'));
            alert("llamado GUARDAMOTORESPERFIL");
            $.ajax({
                data: {data: jsonPerfil},
                dataType: "text",
                url: "GuardarMotoresPerfil?id_deal=" + idDealerLoc,
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
            	alert('confirmacion de guardado de motores');
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
            }).fail(function(e) {
            	alert('error de guardado de motores');
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });
            /*
            jsonPerfil = JSON.stringify($('#tableCheckBoxNoDisp').bootstrapTable('getAllSelections'));
            $.ajax({
                data: {data: jsonPerfil},
                dataType: "text",
                url: "GuardarMotoresPerfilOpc?id_deal=" + idDealerLoc,
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
            });*/
            $('#tableBodyChk').bootstrapTable('refresh');
            $('#tableBodyChk').bootstrapTable('refresh');
        } else {
            alert('Selecciona un OEM para poder guardar.');
        }
    });
    
    
    $('#guardarPerfilS').click(function() {
        idDealerLoc = $('#codigoDeal').val();
        //alert(idDealer);
        if (idDealerLoc != '') {
            jsonPerfil = JSON.stringify($('#myform').serializeArray());
            alert('manda llamar al servlet guarda perfil boton guardar y salir');
            $.ajax({
                data: {data: jsonPerfil},
                dataType: "text",
                url: "GuardarPerfil",
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
            	 alert('guardado de perfil exitoso en boton guardar y salir');
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
                
                done1=true;
                if (done1 == true && done2 == true ){
                	window.location = "TEMPPerfilDealerT.jsp";
                }
             
                //window.location = "TEMPPerfilDealerT.jsp";
            }).fail(function(e) {
            	 alert('error de guardado en boton guardar y salir');
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });

            jsonPerfil = JSON.stringify($('#tableCheckBoxObl').bootstrapTable('getAllSelections'));
            alert('manda llamar al servlet guardaMotoresPerfil en boton guardar y salir');
            $.ajax({
                data: {data: jsonPerfil},
                dataType: "text",
                url: "GuardarMotoresPerfil?id_deal=" + idDealerLoc,
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
            	 alert('guardado exitoso en motores en boton guardar y salir');
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
                
          
                done2=true;
                if (done1 == true && done2 == true ){
                	window.location = "TEMPPerfilDealerT.jsp";
                }
                
            }).fail(function(e) {
            	 alert('error en guardar motorees en boton guardar y salir');
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });
            /*
            jsonPerfil = JSON.stringify($('#tableCheckBoxNoDisp').bootstrapTable('getAllSelections'));
            $.ajax({
                data: {data: jsonPerfil},
                dataType: "text",
                url: "GuardarMotoresPerfilOpc?id_deal=" + idDealerLoc,
                method: "GET",
                success: function(result){
                	if (done1 == true && done2 == true && done3 == true){
                    	window.location = "TEMPPerfilDealerT.jsp";
                    }
                },
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
                
               
                done3=true;
                
                if (done1 == true && done2 == true && done3 == true){
                	window.location = "TEMPPerfilDealerT.jsp";
                }
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });*/
            $('#tableBodyChk').bootstrapTable('refresh');
            $('#tableBodyChk').bootstrapTable('refresh');
        } else {
            alert('Selecciona un OEM para poder guardar.');
        }
        
        //window.location = "TEMPPerfilDealerT.jsp";
    });
    
    
    
});


function obtenerPerfil(idDealer) {
	
    $.ajax({
        dataType: "text",
        url: "ObtenerPerfilDealer?id_dealer=" + idDealer,
        method: "POST",
        beforeSend: function() {
            $('#headerModal').html('Agregando registro...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de distribuidores');
        } else {
            
        	json = $.parseJSON(e);
        		DrObt =json[0].dr;
        		$('#dr').val(DrObt);
            	$('#codigoDR').val(DrObt);
            	
            	idDealer=json[0].spCode;
            	//obtenerDealer(DrObt);
            	
            	
        		$('#noMeca').val(json[0].noMecanicos);
                $('#datepicker').val(json[0].fechaEval);
                $('#datepicker3').val(json[0].fechaFinEval);
                $('#datepicker2').val(json[0].fechaIniEval);
                $('#tipo_eval').val(json[0].tipoEval);
                $('#fronterizo').val(json[0].fronterizo);
                $('#noAyudantes').val(json[0].noAyudantes);
                $('#noBahia').val(json[0].noBahia);
                $('#dealer').val(json[0].spCode);
                $('#oem').val(json[0].oem);
                $('#codigoDeal').val(json[0].spCode);
                
                $('#revision').val(json[0].revision);
                $('#anio').val(json[0].anio);

                
                cargarDR(DrObt);
                cargarDealers(json[0].dr, json[0].spCode);
                cargarTablas(json[0].spCode);
                $('#dr').val(DrObt);
                $('#dealer').val(json[0].spCode);
                $('#dealer').val(json[0].spCode);
                $('#dr').val(DrObt);
                $('#dr').val(DrObt);
                $('#dr').val(DrObt);
                //$('#oem').val(oem[$("#dealer").prop('selectedIndex')-1]);
                
                
                obtenerModulos2('1', json[0].modulo1);
                obtenerModulos2('2', json[0].modulo2);
                obtenerModulos2('3', json[0].modulo3);
                obtenerModulos2('4', json[0].modulo4);
                
                
               modulo1=json[0].modulo1;
               submodulo1=json[0].submodulo1;
               
               modulo2=json[0].modulo2;
               submodulo2=json[0].submodulo2;
               
               modulo3=json[0].modulo3;
               submodulo3=json[0].submodulo3;
               
               modulo4=json[0].modulo4;
               submodulo4=json[0].submodulo4;
                

                obtenerSubodulos2('1',modulo1,submodulo1);
                obtenerSubodulos2('2',modulo2,submodulo2);
                //obtenerSubodulos2('3',modulo3,submodulo3);
                //obtenerSubodulos2('4',modulo4,submodulo4);
                
                rq1=json[0].requerido1;
                rq2=json[0].requerido2;
                rq3=json[0].requerido3;
                rq4=json[0].requerido4;
                
                
                alert(rq1+'--'+rq2+'--'+rq3+'--'+rq4);
                
                if (rq1==="on"){
                  $( "#requerido1" ).prop( "checked", true );
                }
                
                if (rq2==="on"){
                  $( "#requerido2" ).prop( "checked", true );
                }

                if (rq3==="on"){
                  $( "#requerido3" ).prop( "checked", true );
                }

                if (rq4==="on"){
                  $( "#requerido4" ).prop( "checked", true );
                }
              
                
               
               
                
                
                
                //obtenerSubodulos2('2', json[0].modulo2, json[0].submodulo2);
                //obtenerSubodulos2('3', json[0].modulo3, json[0].submodulo3);
                //obtenerSubodulos2('4', json[0].modulo4, json[0].submodulo4);
                
                
                
                
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
    


}


function cargarTablas (idDealer){
	console.log(" idDealer exito:" +idDealer);
	
    $('#tableCheckBoxObl').bootstrapTable('destroy');
    
    
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerMotoresObl?id_deal=' + idDealer,
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tableCheckBoxObl').bootstrapTable({
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
                    field: 'ID_MOTORES_OEM',
                    title: 'IDMotoresOEM',
                    visible: false
                }, {
                    checkbox: true,
                    field: 'check'
                }, {
                    type: 'text',
                    title: 'Motor',
                    field: 'motor',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'tipoMotor',
                    title: 'TipoMotor',
                    visible: false
                }]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
/*
    $('#tableCheckBoxNoDisp').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerMotoresOpc?id_deal=' + idDealer,
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tableCheckBoxNoDisp').bootstrapTable({
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
                return 'Mostrando ' + /*pageFrom + ' a ' + *//*pageTo + ' de ' + totalRows + ' registros';
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
                    field: 'ID_MOTORES_OEM',
                    title: 'IDMotoresOEM',
                    visible: false
                }, {
                    checkbox: true,
                    field: 'check'
                }, {
                    type: 'text',
                    title: 'Motor',
                    field: 'motor',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'tipoMotor',
                    title: 'TipoMotor',
                    visible: false
                }]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
    
    */

    $('#tableBody').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'PerfilDealer?id_deal=' + idDealer,
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
                    field: 'no',
                    title: 'No.',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'nombre',
                    title: 'Nombre',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'status',
                    title: 'Estatus',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'motor',
                    title: 'Motor',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }]
        });
        //var j = 0;
      
        for(var i = 0 ; i < json.data.length; i++){
        	/*if(json.data[i].status == 'Mecanicos'){
        		j++;
        		
        	}*/
        	$('#noMecProm').val(json.data[i].MECS);
        }
    	//$('#noMecProm').val(j);
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
    $('#codigoDeal').val(idDealer);


    $('#tableBodyChk').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerNivelServicio?id_deal=' + idDealer,
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tableBodyChk').bootstrapTable({
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
                    field: 'ID_MOTORES_OEM',
                    title: 'idMotoresOEM',
                    visible: false
                }/*, {
                    checkbox: true,
                    field: 'status'
                }*/, {
                    type: 'text',
                    title: 'Motor',
                    field: 'motor',
                    align: 'center',
                    valign: 'middle'
                }, {
                    type: 'text',
                    title: 'Autorizado',
                    field: 'autorizado',
                    align: 'center',
                    valign: 'middle',
                    class: 'TextFormat',
                    editable: {
                        defaultValue: 'autorizado',
                        emptytext: 'autorizado',
                        emptyclass: 'TextFormat',
                        type: 'select',
                        source: [{value: 'autorizado', text: 'autorizado'},{value: 'endesarrollo', text: 'En Desarrollo'} ,{value: 'Nautorizado', text: 'No autorizado'}]
                    }
                }]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });


	//$('#oem').val(oem[$("#dealer").prop('selectedIndex')-1]);
/*	
    $.ajax({
        dataType: "text",
        url: "ObtenerOEM?id_deal=" + this.value,
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de distribuidores');
        } else {
            json = $.parseJSON(e);
            for (var i = 0; i < json.length; i++) {
                $('#oem').val(json[i].oem);
            }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
    
    */
    
    $('#tableCheckBoxObl').bootstrapTable('refresh');
    	$('#tableBody').bootstrapTable('refresh');
       	 $('#tableBodyChk').bootstrapTable('refresh');
	
}

/*
function obtenerDealer(DR){
	//alert('Hola:' + DR); 
	 $('#dr').val(DR);
	$.ajax({
         dataType: "text",
         url: "ObtenerDealer?id_dr=" + DR,
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
                 oem[i]=json[i].oem;
                 //alert();
             }
             $('#dealer').val(idDealer);
             $('#dr').val(DR);
         }
     }).fail(function(e) {
         $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
         $('#closeModal').css('display', '');
     });
	 $('#dealer').val(idDealer);
	 $('#dealer').val(idDealer);
	 $('#dr').val(DR);
	 $('#dr').val(DR);
	 //$('#oem').val(oem[$("#dealer").prop('selectedIndex')-1]);
     
}
*/


(function($) {  
    $.get = function(key)   {  
        key = key.replace(/[\[]/, '\\[');  
        key = key.replace(/[\]]/, '\\]');  
        var pattern = "[\\?&]" + key + "=([^&#]*)";  
        var regex = new RegExp(pattern);  
        var url = unescape(window.location.href);  
        var results = regex.exec(url);  
        if (results === null) {  
            return null;  
        } else {  
            return results[1];  
        }  
    }  ;
})(jQuery);  


function obtenerModulos(){
	$.ajax({
        dataType: "text",
        url: "ObtenermModuloPerfil",
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
                $('#modulo1').append($("<option></option>")
                		.attr("value", json[i].value)
                        .text(json[i].text));
                $('#modulo2').append($("<option></option>")
                		.attr("value", json[i].value)
                        .text(json[i].text));
                $('#modulo3').append($("<option></option>")
                		.attr("value", json[i].value)
                        .text(json[i].text));
                $('#modulo4').append($("<option></option>")
                		.attr("value", json[i].value)
                        .text(json[i].text));
                //console.log(json.length);
                //console.log(json[i].text);
            }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
        $('#closeModal').css('display', '');
    });  

}


function obtenerSubModulo(obj){
	
	strObj=obj.getAttribute("name").replace("modulo", "");
	
	$.ajax({
        dataType: "text",
        url: "ObtenerSubmoduloPerfil?id=" + obj.value,
        method: "GET",
        beforeSend: function() {

        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de rangos');
        } else {
            json = $.parseJSON(e);
           
           //$('#submodulo1').empty();
            for (var i = 0; i < json.length; i++) {
                if (i==0){
                 $('#submodulo'+ strObj).empty();
                }
            	$('#submodulo' + strObj).append($("<option></option>")
                		.attr("value", json[i].value)
                        .text(json[i].text));
                console.log(json[i].text);
                //alert(i+'---'+json[i].value+'---'+json[i].text+'---submodulo' + strObj);
            }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
        $('#closeModal').css('display', '');
    }); 
	
}



/////////////



function obtenerModulos2(index, modval){
	$.ajax({
        dataType: "text",
        url: "ObtenermModuloPerfil",
        method: "GET",
        beforeSend: function() {

        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de rangos');
        } else {
            json = $.parseJSON(e);
            $('#modulo' + index).html($("<option></option>"));
            for (var i = 0; i < json.length; i++) {
                $('#modulo' + index).append($("<option></option>")
                		.attr("value", json[i].value)
                        .text(json[i].text));
              
                
            }
            $('#modulo' + index).val(modval);
          //alert(i+'---'+json[i].value+'---'+json[i].text+'---submodulo' + strObj);
           // alert ('modulo'+index+'--'+modval);
            
            
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
        $('#closeModal').css('display', '');
    });  
	
}

////////////////
function obtenerSubodulos2(index,modval,subval){
	$.ajax({
        dataType: "text",
        url: "ObtenerSubmoduloPerfil?id=" + Number(modval),
        method: "GET",
        beforeSend: function() {

        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de rangos');
        } else {
            json = $.parseJSON(e);
            $('#submodulo' + index).html($("<option></option>"));
            for (var i = 0; i < json.length; i++) {
                //alert('dentro del submenu load---submodulo'+index+'--Value--'+json[i].value+'--texto--'+json[i].text+'longitud-'+json.length);
            	if (i==0){
                    $('#submodulo'+ index).empty();
                  }
            	 $('#submodulo' + index).html($("<option></option>"));
                $('#submodulo' + index).append($("<option></option>")
                		.attr("value", json[i].value)
                        .text(json[i].text));
           
            }
            //alert(index+'---'+subval);
            $('#submodulo' + index).val(subval);
            alert ('combbo ' + index+' valor '+subval);
            
            
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
        $('#closeModal').css('display', '');
    });  
	
}

