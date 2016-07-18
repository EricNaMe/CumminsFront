/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var oem = [];

$(document).ready(function() {
	$('#partesIndividualH').addClass("active");
	
 /*  
	var a = $.get("ID_MATRIZ");
	//alert(a);
	//window.location.href = "GetPartesIndMatriz?ID_MATRIZ=" + a ;
	$.ajax({
        dataType: "text",
        url: "GetPartesIndMatriz?ID_MATRIZ=" + a,
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de rangos');
        } else {
            json = $.parseJSON(e);
            //$('#rango').html($("<option></option>"));
            for (var i = 0; i < json.length; i++) {
             
            	//$('#rango').append($("<option></option>")
                //                .attr("value", json[i].id_matriz)
                //                .text(json[i].id_matriz));
				
                $('#tipo_producto').val(json[i].tipo_producto);
                $('#matriz_name').val(json[i].matriz_name);
                $('#dealer_dr').val(json[i].dealer_dr);
                
            }
        }
    }).fail(function(e) {
         $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
         $('#closeModal').css('display', '');
    });
*/
	
	
   //----------------------------------------------------
	  

		//cargarDR(null);

	
	
	
	//-------------------------------------------
	/*    
	  $('#dr').on('change', function() {

		  $('#codigo_DR').val($('#dr').val());
		  cargarDealers($('#dr').val(), null);
			
		});*/
	    
	//------------------------------------------------------------------------
	  $('#dealer').on('change', function() {
		  $('#sp_code').val($('#dealer').val());
		  $('#oem').val(oem[$("#dealer").prop('selectedIndex')-1]);
		  caragarMatriz( $('#dealer').val(),null,$('#tipo_eval').val(), $('#revision').val(), $('#anio').val());
	  });
	
	  
	
//----------------------------------------------------------------------------	  
	  
	  $('#matriz').on('change', function() {
		 
		  
		  cargarTabla( $('#dealer').val(), $('#matriz').val(), $('#tipo_eval').val(), $('#revision').val(), $('#anio').val());
		  ShowTotal($('#dealer').val(), $('#matriz').val(), $('#tipo_eval').val(), $('#revision').val(), $('#anio').val());
		  
		  
	  });
	  
	
//--------------------------------------------------------------	  
	  
	  
	  $('#savePartes').click(function() {
	        if ($('#motor').val() != '' || $('#rango').val() != '') {
	            $.ajax({
	                dataType: "text",
	                url: "GuardarPartes",//?motor=" + $('#motorAdd').val(),
	                method: "POST",
	                data: $("#formPartes").serialize(),
	                beforeSend: function() {
	                    /*
	                	$('#headerModal').html('Agregando registro...');
	                    $('#closeModal').css('display', 'none');
	                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
	                	*/
	                	$('#headerModal').html('Agregando registro...');
	                    $('#closeModal').css('display', 'none');
	                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
	                }
	            }).done(function(e) {
	                $('#headerModal').html(e);
	                //$('#myModal').modal('hide');
	                
	                $('#closeModalEliminar').css('display', '');
	            }).fail(function(e) {
	                $('#closeModal').css('display', '');
	                $('#headerModal').html('Ocurrio un error al guardar los datos');
	                ('#motorAdd')[0].reset();
	            });
	            $('#tableMotores').bootstrapTable('refresh');
	            $('#tableMotores').bootstrapTable('refresh');
	        } else {
	            alert('Indique el nombre del Motor para agregar registro.');
	        }
	    });
	  
	  $('#savePartesS').click(function() {
	        if ($('#motor').val() != '' || $('#rango').val() != '') {
	            $.ajax({
	                dataType: "text",
	                url: "GuardarPartes",//?motor=" + $('#motorAdd').val(),
	                method: "POST",
	                data: $("#formPartes").serialize(),
	                beforeSend: function() {
	                    $('#headerModal').html('Agregando registro...');
	                    $('#closeModal').css('display', 'none');
	                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
	                }
	            }).done(function(e) {
	                $('#headerModal').html(e);
	                $('#myModal').modal('hide');
	                window.location = "TEMPPartesEvaluadas.jsp";
	            }).fail(function(e) {
	                $('#closeModal').css('display', '');
	                $('#headerModal').html('Ocurrio un error al guardar los datos');
	                ('#motorAdd')[0].reset();
	            });
	            $('#tableMotores').bootstrapTable('refresh');
	            $('#tableMotores').bootstrapTable('refresh');
	        } else {
	            alert('Indique el nombre del Motor para agregar registro.');
	        }
	    });
	    
});


function ShowTotal(sp_code, matriz, tipo_eval, revision, anio){
  $.ajax({
      dataType: "text",
      url: 'ObtenerPorcentPartesHtas?sp_code=' + sp_code + '&id_matriz=' + matriz +"&PoH=P" +'&tipo_eval=' + tipo_eval + '&revision='+  revision + '&anio='+anio ,
      method: "GET"
  }).done(function(e) {
      if (e === 'error') {
    	 $('#Total').val('');
      } else {
         json = $.parseJSON(e);
    	 $('#Total').val(json[0].Total);
    	 $('#DispTotal').html('Porcentaje Obtenido: ' + json[0].Total + ' %');
 	  }
  });
}





function ObtenerPartesEval(idDealer) {
    //alert(idDealer);
    $.ajax({
        dataType: "text",
        url: "ObtenerPartesEval?id=" + idDealer,
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de distribuidores');
        } else {
            json = $.parseJSON(e);
            
                $('#tipo_eval').val(json[0].tipo_eval);
                $('#revision').val(json[0].revision);
                $('#anio').val(json[0].anio);
                $('#tipo_producto').val(json[0].tipo_producto);
                $('#matriz').val(json[0].id_matriz);
                $('#dr').val(json[0].codigo_DR);
                $('#codigo_DR').val(json[0].codigo_DR);
                $('#oem').val(json[0].oem);
                $('#dealer').val(json[0].sp_code);
                $('#sp_code').val(json[0].sp_code);
                $('#Total').val(json[0].porcentaje);
                $('#datepicker').val(json[0].fecha_eval);
                $('#datepicker3').val(json[0].fecha_fin_eval);
                $('#datepicker2').val(json[0].fecha_ini_eval);
                
                $('#codigoDeal').val(json[0].sp_code);
                
                cargarDR(json[0].codigo_DR);
                cargarTabla( json[0].sp_code , json[0].id_matriz,json[0].tipo_eval,json[0].revision,json[0].anio);
                ShowTotal(json[0].sp_code , json[0].id_matriz,json[0].tipo_eval,json[0].revision,json[0].anio);
                cargarDealers(json[0].codigo_DR, json[0].sp_code);
                caragarMatriz(json[0].sp_code, json[0].id_matriz,json[0].tipo_eval,json[0].revision,json[0].anio);
        }
        
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
   // cargarTablas(idDealer);
}



function cargarTabla(sp_code, matriz,tipo_eval, revision, anio){
	
	var json;
	var params = sp_code + '&id_matriz=' + matriz +'&tipo_eval=' + tipo_eval + '&revision='+  revision + '&anio='+anio ;
	
	 $('#tableBody').bootstrapTable("destroy");
	  $.ajax({
	        dataType: "text",
	        method: "GET",
	        //url: 'GetPartesIndBdy?SP_CODE=' + sp_code + '&id_matriz=' + matriz +'&tipo_eval=' + tipo_eval + '&revision='+  revision + '&anio='+anio ,
	        url: 'GetPartesIndBdy?SP_CODE=' +  params,
	        beforeSend: function() {
	        	 $('#headerModal').html('Solicitando informacion...');
	             $('#closeModal').css('display', 'none');
	             $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
	        }
	    }).done(function(e) {
	        json = $.parseJSON(e);
	        //alert( $('#matriz').find(":selected").text());
	        $('#tableBody').bootstrapTable({
	            dataType: 'json',
	            emptytext: '-',
	            data: json,
	            idField: 'id_rel_matriz_dealer',
	            uniqueId: 'id_rel_matriz_dealer',
	            search: true,
	            pagination: true,
	            showExport: true,
	            exportTypes:['excel', 'pdf'],
	            exportDataType:'all',
	            exportOptions: {
	                fileName: 'Partes_Individual'
	            },
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
	                field: 'id_rel_matriz_dealer',
	                title: 'id_rel_matriz_dealer',
	                visible: false
	            },{
	                field: 'no_parte',
	                title: 'N/P',
                    align: 'center',
                    valign: 'middle'
	            }, {
	                field: 'no_parte_ant',
	                title: 'N/P<BR>Anterior',
                    align: 'center',
                    valign: 'middle'
	            }, {
	                field: 'descripcion',
	                title: 'Descripci&oacute;n',
                    align: 'center',
                    valign: 'middle'
	            }/*, {
	                field: 'comentario',
	                title: 'Coentarios',
	                class: 'TextFormat',
	                editable: {
                        defaultValue: '-',
                        emptytext: '-',
                        url: 'GuardarPartesIndBdy?sp_code=' + $('#dealer').val() ,
                        type: 'text',
                        /*success: function(response, newValue) {
                        	 ShowTotal($('#dealer').val(), $('#matriz').val());
                        }
                    }
	            }*/, {
	                field: 'ponderacion',
	                title: 'Ponderaci&oacute;n',
                    align: 'center',
                    valign: 'middle'
	            }, {
	                field: 'cm',
	                title: 'Ctd.<BR>M&iacute;nima',
                    align: 'center',
                    valign: 'middle'
	            }, {
	                field: 'existencia',
	                title: 'Existencia',
	                class: 'TextFormat',
	                editable: {
                        defaultValue: '',
                        emptytext: '----------',
                        //url: 'GuardarPartesIndBdy?sp_code=' + $('#dealer').val() ,
                        url: 'GuardarPartesIndBdy?sp_code=' + $('#codigoDeal').val() ,
                        type: 'text',
                        success: function(response, newValue) {
                        	 ShowTotal($('#dealer').val(), $('#matriz').val(), $('#tipo_eval').val(), $('#revision').val(), $('#anio').val());
                        	 //alert($('#matriz').val());
                        	 actualizarStatus(params);
                        	 
                        	 //mostrarStatus (params);

                        },
                        validate: function(value) {
                            return validateNumberMin(value, false);
                        }
                    },
                    align: 'center',
                    valign: 'middle'
	            }, {
	                field: 'ubicacion',
	                title: 'Ubicaci&oacute;n',
	                class: 'TextFormat',
	                editable: {
	                	defaultValue: '',
                        emptytext: '----------',
                        url: 'GuardarPartesIndBdy?sp_code=' + $('#dealer').val() ,
                        type: 'text'
                       /*
                        success: function(response, newValue) {
                        	 //ShowTotal($('#dealer').val(), $('#matriz').val());
                        	actualizarStatus(params);

                        }
                        */
                    },
                    align: 'center',
                    valign: 'middle'
	            }, {
	                field: 'volumen_vta_1',
	                title: 'Vol.<BR>Venta',
	                class: 'TextFormat',
	                editable: {
	                	defaultValue: '',
                        emptytext: '----------',
                        url: 'GuardarPartesIndBdy?sp_code=' + $('#dealer').val() ,
                        type: 'text',
                      /*
                        success: function(response, newValue) {
                        	 //ShowTotal($('#dealer').val(), $('#matriz').val());
                        	actualizarStatus(params);
                        	
                        }
                        */
                    	validate: function(value) {
                            return validateNumberMin(value, false);
                        }
                    },
                    align: 'center',
                    valign: 'middle'
	            }, {
	                field: 'url',
	                title: 'URL',
                    align: 'center',
                    valign: 'middle'
	            }]
	        });
	        
	        
	        $('#myModal').modal('hide');
	    }).fail(function(e) {
	        $('#closeModal').css('display', '');
	        $('#headerModal').html('Ocurrio un error al cargar los datos');
	    });
	  
	  mostrarStatus (params);
}


function cargarDR(dcCode){
	
	$.ajax({
        dataType: "text",
        url: "ObtenerDR",
        method: "POST",
        beforeSend: function() {}
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de distribuidores');
        } else {
            json = $.parseJSON(e);
            $('#dr').html($("<option></option>"));
            for (var i = 0; i < json.length; i++) {
                $('#dr')
                        .append($("<option></option>")
                                .attr("value", json[i].value)
                                .text(json[i].text));
            }
            $('#dr').val(dcCode);
        }
    }).fail(function(e) {
       	$('#headerModal').html('Ocurrio un error al enviar la informacion');
       	$('#closeModal').css('display', '');
     });
	
}

function cargarDealers(drCode, sp_code){
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
                  		oem[i]=json[i].oem;
                  oem[i]=json[i].oem;
              }
              $('#dealer').val(sp_code);
          }
      }).fail(function(e) {
	        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
	        $('#closeModal').css('display', '');
      });
}




function caragarMatriz(sp_code, matrix,tipo_eval, revision, anio){

	  $.ajax({
          dataType: "text",
          url: "ObtenerListaMatrizDealer?SP_CODE=" + sp_code +'&tipo_eval=' + tipo_eval + '&revision='+  revision + '&anio='+anio +'&tipo=I' ,
          method: "GET",
          beforeSend: function() {

          }
      }).done(function(e) {
          if (e === 'error') {
              alert('Ocurrio un error al cargar catalogo de rangos');
          } else {
              json = $.parseJSON(e);
              $('#matriz').html($("<option></option>"));
              for (var i = 0; i < json.length; i++) {
                  $('#matriz').append($("<option></option>")
                                  .attr("value", json[i].value)
                                  .text(json[i].text));
                  		//oem[i]=json[i].oem;
                  //oem[i]=json[i].oem;
              }
              $('#matriz').val(matrix);
          }
      }).fail(function(e) {
	        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
	        $('#closeModal').css('display', '');
      });
}

function actualizarStatus(params){
	$.ajax({
        dataType: "text",
        url: "CambiarStatusPartes?new_status=P",//?motor=" + $('#motorAdd').val(),
        method: "POST",
        data: $("#formPartes").serialize()
    }).done(function(e) {
        mostrarStatus (params);
    }).fail(function(e) {
        
    });
}

function mostrarStatus(params){
	
	$.ajax({
        dataType: "text",
        method: "GET",
        url: 'GetStatusEvalPartes?SP_CODE=' + params,
        
    }).done(function(e) {
    	json = $.parseJSON(e);
        for (var i = 0; i < json.length; i++) {
        	$('#status_eval').html(json[i].status_eval);
        }
        
    }).fail(function(e) {
        
    });
	
}

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
