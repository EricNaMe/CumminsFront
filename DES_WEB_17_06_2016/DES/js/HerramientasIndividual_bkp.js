/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
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
	        }
	    }).fail(function(e) {
	       	$('#headerModal').html('Ocurrio un error al enviar la informacion');
	       	$('#closeModal').css('display', '');
	     });
	
	//-------------------------------------------
	  var oem = [];  
	  $('#dr').on('change', function() {

		  $('#codigo_DR').val($('#dr').val());
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
	                    $('#dealer').append($("<option></option>")
	                                    .attr("value", json[i].value)
	                                    .text(json[i].text));
	                    		//oem[i]=json[i].oem;
	                    oem[i]=json[i].oem;
	                }
	            }
	        }).fail(function(e) {
		        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
		        $('#closeModal').css('display', '');
	        });
			
		});
	    
	//------------------------------------------------------------------------
	  $('#dealer').on('change', function() {
		  $('#sp_code').val($('#dealer').val());
		  $('#oem').val(oem[$("#dealer").prop('selectedIndex')-1]);
		  
		  
		  $.ajax({
	            dataType: "text",
	            url: "ObtenerListaHerramientasDealer?SP_CODE=" + this.value,
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
	                    oem[i]=json[i].oem;
	                }
	            }
	        }).fail(function(e) {
		        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
		        $('#closeModal').css('display', '');
	        });
	  });
	
	  
	
//----------------------------------------------------------------------------	  
	  
	  $('#matriz').on('change', function() {
		  $('#tableBody').bootstrapTable("destroy");
		  //var json;
		  $.ajax({
		        dataType: "text",
		        method: "GET",
		        //url: 'GetHerramientasIndBdy?SP_CODE=' + $('#dealer').val() + '&id_matriz=' +  $('#matriz').val() ,
		        beforeSend: function() {
		        	 $('#headerModal').html('Solicitando informacion...');
		             $('#closeModal').css('display', 'none');
		             $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
		        }
		    }).done(function(e) {
		       // json = $.parseJSON(e);
	        
		        $('#tableBody').bootstrapTable({
		            dataType: 'json',
		            emptytext: '-',
		            //data: json,
		            url: 'GetHerramientasIndBdy?SP_CODE=' + $('#dealer').val() + '&id_matriz=' +  $('#matriz').val() ,
		            idField: 'id_rel_matriz',
		            uniqueId: 'id_rel_matriz',
		            search: true,
		            onPreBody: function(){
		            	
		            },
		            pagination: true,
		            formatLoadingMessage: function() {
		            	 $('#headerModal').html('Solicitando informacion...');
			             $('#closeModal').css('display', 'none');
			             $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
		            	
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
  		                field: 'id_rel_matriz',
  		                title: 'id_rel_matriz',
  		                visible: true
  		            }, {
  		                field: 'id_matriz',
  		                title: 'id_matriz'
  		            }, {
  		                field: 'no_parte',
  		                title: 'no_parte'
  		            }, {
  		                field: 'no_parte_ant',
  		                title: 'no_parte_ant'
  		            }, {
  		                field: 'descripcion',
  		                title: 'descripcion'
  		            }, {
  		                field: 'uso',
  		                title: 'uso',
  		                class: 'TextFormat',
		                editable: {
	                        defaultValue: '-',
	                        emptytext: '-',
	                        url: 'GuardarHerramientasIndBdy?sp_code=' + $('#dealer').val() ,
	                        type: 'text'
	                    }
  		            }, {
  		                field: 'cm',
  		                title: 'cm'
  		            }, {
  		                field: 'existencia',
  		                title: 'existencia',
  		                class: 'TextFormat',
		                editable: {
	                        defaultValue: '-',
	                        emptytext: '-',
	                        url: 'GuardarHerramientasIndBdy?sp_code=' + $('#dealer').val() ,
	                        type: 'text',
  	                        success: function(response, newValue) {
  	                        	ShowTotal();
  	                        }
	                    }
  		            }, {
  		                field: 'ponderacion',
  		                title: 'ponderacion'
  		            }, {
  		                field: 'nueva',
  		                title: 'nueva',
  		                class: 'TextFormat',
  		                editable: {
  		                	defaultValue: '-',
  		                	emptytext: '-',
  		                	url: 'GuardarHerramientasIndBdy?sp_code=' + $('#dealer').val() ,
  		                	type: 'select',
  		                	source: [{value: 'Y', text: 'SI'}, {value: 'N', text: 'NO'}]
  		                	//source: "ObtenerRango"
  		                }
  		            }, {
  		                field: 'ubicacion',
  		                title: 'ubicacion',
  		                class: 'TextFormat',
		                editable: {
	                        defaultValue: '-',
	                        emptytext: '-',
	                        url: 'GuardarHerramientasIndBdy?sp_code=' + $('#dealer').val() ,
	                        type: 'text'
	                    }
  		            }]
		        });
		        
		        
		        $('#myModal').modal('hide');
		    }).fail(function(e) {
		        $('#closeModal').css('display', '');
		        $('#headerModal').html('Ocurrio un error al cargar los datos');
		    });
		  ShowTotal();
	  });
	  
	  
	  
	  $('#savePartes').click(function() {
	        if ($('#motor').val() != '' || $('#rango').val() != '') {
	            $.ajax({
	                dataType: "text",
	                url: "GuardarHerramienta",//?motor=" + $('#motorAdd').val(),
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





function ShowTotal(){
	  $.ajax({
	      dataType: "text",
	      url: 'ObtenerPorcentPartesHtas?sp_code=' + + $('#dealer').val() + '&id_matriz=' +  $('#matriz').val() +"&PoH=H",
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
