/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 

$(document).ready(function() {
	$('#herraIndivi').addClass("active");
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

*/    
    

    //------------------------------------------------------------------------
    $('#dealer').on('change', function() {
        $('#sp_code').val($('#dealer').val());
        
        $('#oem').val(oem[$("#dealer").prop('selectedIndex') - 1]);


        obtener_lista_Herram($('#dealer').val(),null /*, $('#tipo_eval').val(), $('#revision').val(), $('#anio').val()*/);
    });



//----------------------------------------------------------------------------	  

    $('#matriz').on('change', function() {
        cargarDatos($('#dealer').val(), $('#matriz').val(), $('#tipo_eval').val(), $('#revision').val(), $('#anio').val());
    });



    $('#guardarBtn').click(function() {
        if ($('#dealer').val() != '' && $('#datepicker').val() != '' && $('#datepicker2').val() != '' && $('#datepicker3').val() != '' && $('#matriz').val() != '') {
            json = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                data: {data: json, tipo: 'INDIVIDUAL'},
                dataType: "text",
                url: "GuardarHerramientas",
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
            alert('Debe llenar todos los campos para poder Guardar.');
        }
    });
    
    $('#guardarBtnS').click(function() {
        if ($('#dealer').val() != '' && $('#datepicker').val() != '' && $('#datepicker2').val() != '' && $('#datepicker3').val() != '' && $('#matriz').val() != '') {
            json = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                data: {data: json, tipo: 'INDIVIDUAL'},
                dataType: "text",
                url: "GuardarHerramientas",
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
                window.location = "TEMPHerramientasSoftware.jsp";
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });
        } else {
            alert('Debe llenar todos los campos para poder Guardar.');
        }
    });

/*
    $("#datepicker").datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true
    });

    $("#datepicker2").datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true
    });

    $("#datepicker3").datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true
    });
 */

});





function ShowTotal(sp_code, matriz, tipo_eval, revision, anio) {
    $.ajax({
        dataType: "text",
        url: 'ObtenerPorcentPartesHtas?sp_code=' + sp_code + '&id_matriz=' + matriz + "&PoH=H"+'&tipo_eval=' + tipo_eval + '&revision='+  revision + '&anio='+anio ,
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
    $.get = function(key) {
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
    };
})(jQuery);

function obtenerInfo(id) {
    $.ajax({
        dataType: "text",
        url: "ObtenerHerramientas?id=" + id,
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de distribuidores');
        } else {
            json = $.parseJSON(e);
            var sp_code="";
            var matriz="";
            var drcode ="";
            for (var i = 0; i < json.length; i++) {
                $('#tipo_eval').val(json[i].tipoEval);
                $('#revision').val(json[i].revision);
                $('#anio').val(json[i].anio);
                $('#dr').val(json[i].codigoDR);
                drcode=json[i].codigoDR;
                $('#codigoDR').val(json[i].codigoDR);
                $('#sp_code').val(json[i].codigoDR);
                $('#dealer').val(json[i].idDealer);
                sp_code = json[i].idDealer;
                $('#codigoDeal').val(json[i].idDealer);
                $('#sp_code').val(json[i].idDealer);
                $('#datepicker').val(json[i].fechaEval);
                $('#datepicker2').val(json[i].fechaIni);
                $('#datepicker3').val(json[i].fechaFin);
                $('#oem').val(json[i].oem);
                $('#matriz').val(json[i].matriz);
                matriz = json[i].matriz;
                $('#Total').val(json[i].total);
                cargarDR(drcode);
                cargarDealers(drcode,sp_code);
                obtener_lista_Herram(sp_code,matriz/*,json[i].tipoEval,json[i].revision,json[i].anio*/);
                //cargarDatos(sp_code,matriz);
                cargarDatos(sp_code,matriz,json[i].tipoEval, json[i].revision, json[i].anio);
            }
            
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
   
}

function cargarDatos(spcode,matriz, tipo_eval, revision, anio) {
	var params = spcode + '&id_matriz=' + matriz +'&tipo_eval=' + tipo_eval + '&revision='+  revision + '&anio='+anio ;
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
            url: 'GetHerramientasIndBdy?SP_CODE=' + spcode + '&id_matriz=' + matriz +'&tipo_eval=' + tipo_eval + '&revision='+  revision + '&anio='+anio ,
            idField: 'id_rel_matriz',
            uniqueId: 'id_rel_matriz',
            search: true,
            onPreBody: function() {
            },
            pagination: true,
            showExport: true,
            exportTypes:['excel', 'pdf'],
            exportDataType:'all',
            exportOptions: {
                fileName: 'Evaluacion de Herramientas'
            },
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
                    visible: false
                }, {
                    field: 'id_matriz',
                    title: 'id_matriz',
                    visible: false
                }, {
                    field: 'no_parte',
                    title: 'N/P',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'no_parte_ant',
                    title: 'N/P<BR>anterior',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'descripcion',
                    title: 'Descripci&oacute;n',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'uso',
                    title: 'Uso',
                    class: 'TextFormat',
                    editable: {
                    	defaultValue: '',
                        emptytext: '----------',
                        url: 'GuardarHerramientasIndBdy?sp_code=' + $('#dealer').val(),
                        type: 'text'
                    },
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
                        url: 'GuardarHerramientasIndBdy?sp_code=' + $('#dealer').val(),
                        type: 'text',
                        success: function(response, newValue) {
                            ShowTotal(spcode,matriz,tipo_eval, revision, anio);
                            actualizarStatus(params);
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
                        url: 'GuardarHerramientasIndBdy?sp_code=' + $('#dealer').val(),
                        type: 'text'
                    },
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'ponderacion',
                    title: 'Ponderaci&oacute;n',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'nueva',
                    title: 'Nueva',
                    class: 'TextFormat',
                    editable: {
                    	defaultValue: 'N',
                        emptytext: 'NO',
                        url: 'GuardarHerramientasIndBdy?sp_code=' + $('#dealer').val(),
                        type: 'select',
                        source: [{value: 'Y', text: 'SI'}, {value: 'N', text: 'NO'}]
                                //source: "ObtenerRango"
                    },
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'comentarios',
                    title: 'Comentarios',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'matriz_name',
                    title: 'Motor',
                    align: 'center',
                    valign: 'middle'
                }]
        });


        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
    ShowTotal(spcode,matriz, tipo_eval, revision, anio);
    mostrarStatus (params);
}


function obtener_lista_Herram(spcode, matriz){
	
	 $.ajax({
         dataType: "text",
         url: "ObtenerListaHerramientasDealer?SP_CODE=" + spcode,
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
                 oem[i] = json[i].oem;
             }
             $('#matriz').val(matriz);
         }
     }).fail(function(e) {
         $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
         $('#closeModal').css('display', '');
     });
	
}



function actualizarStatus(params){
	$.ajax({
        dataType: "text",
        url: "CambiarStatusHetas?new_status=P",//?motor=" + $('#motorAdd').val(),
        method: "POST",
        data: $("#myform").serialize(),
    }).done(function(e) {
        mostrarStatus (params);
    }).fail(function(e) {
    });
}



function mostrarStatus(params){
	$.ajax({
        dataType: "text",
        method: "GET",
        url: 'GetStatusEvalHetas?SP_CODE=' + params,
        
    }).done(function(e) {
    	json = $.parseJSON(e);
        for (var i = 0; i < json.length; i++) {
        	$('#status_eval').html(json[i].status_eval);
        }
    }).fail(function(e) { 
    });
}