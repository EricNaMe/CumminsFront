


var inlineLen;
$(function() {
	
	$('#mecReg').keyup(function (e){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        //numberVal(e);
    });
	$('#inreq').keyup(function (e){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
	$('#ayuMecReg').keyup(function (e){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
    $('#contCal').keyup(function (e){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
    $('#zapIt').keyup(function (e){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
    $('#inlineTall').keyup(function (e){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
	
	$('#herraElect').addClass("active");

    $('#dealer').on('change', function() {
        //cargarTablas($('#dealer').val());
        $('#mecReg').val('');
        $('#ayuMecReg').val('');
        $('#inreq').val('');
        $('#contCal').val('');
        $('#zapIt').val('');
        $('#inlineTall').val('');
        
        cargarTablas($('#dealer').val());
		//cargarZapit();
    });
    
    $("#btnExport").click(function (e) {
    	 window.open('data:application/vnd.ms-excel,' + encodeURIComponent(
    	    		$('#totalDiv').html()
    	    	));
        e.preventDefault();
    });
    
    
    
   
    
    
    $('#dr').on('change', function() {
        $('#mecReg').val('');
        $('#ayuMecReg').val('');
        $('#inreq').val('');
        $('#contCal').val('');
        $('#zapIt').val('');
        $('#inlineTall').val('');
    });
    
    $('#calcularBbtn').click(function() {
    	
    	if($('#dealer').val() != null && $('#dealer').val() != ''){
    		//cargarTablas($('#dealer').val());
    		
    		
    		
    		cargarZapit();
    	} else {
    		alert('Selecciona un Dealer para poder Calcular.');
    	}
    });
    
    $('#guardarBtn').click(function() {
    	cargarZapit();
    	if($('#contCal').val() != '' && $('#zapIt').val() != '' && $('#inlineTall').val() != ''){
    		if(!isNaN($('#contCal').val()) && !isNaN($('#zapIt').val()) && !isNaN($('#inlineTall').val())){
		        json = JSON.stringify($('#myform').serializeArray());
		        $.ajax({
		            data: {data: JSON.stringify($('#myform').serializeArray()), tipo: 'ELECTRONICA'},
		            dataType: "text",
		            url: "GuardarHerramientas",
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
		        
		        guardarPCID();
    		} else {
        		alert('Los campos Conteos de calibración, Zap it y Cantidad de Inlines deben de ser numericos.');
        	}
    	} else {
    		alert('Debe llenar todos los campos obligatorios. *');
    	}
    });
    
    $('#guardarBtnS').click(function() {
    	if($('#contCal').val() != '' && $('#zapIt').val() != '' && $('#inlineTall').val() != ''){
    		if(!isNaN($('#contCal').val()) && !isNaN($('#zapIt').val()) && !isNaN($('#inlineTall').val())){
		        json = JSON.stringify($('#myform').serializeArray());
		        $.ajax({
		            data: {data: json, tipo: 'ELECTRONICA'},
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
		        guardarPCID();
    		} else {
        		alert('Los campos Conteos de calibración, Zap it y Cantidad de Inlines deben de ser numericos.');
        	}
    	} else {
    		alert('Debe llenar todos los campos obligatorios. *');
    	}
    });
});

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
            var drcode ="";
            var spcode ="";
            for (var i = 0; i < json.length; i++) {
                $('#tipo_eval').val(json[i].tipoEval);
                $('#revision').val(json[i].revision);
                $('#anio').val(json[i].anio);
                $('#dr').val(json[i].codigoDR);
                drcode=json[i].codigoDR;
                $('#codigoDR').val(json[i].codigoDR);
                $('#dealer').val(json[i].idDealer);
                spcode=json[i].idDealer;
                $('#codigoDeal').val(json[i].idDealer);
                $('#datepicker').val(json[i].fechaEval);
                $('#datepicker2').val(json[i].fechaIni);
                $('#datepicker3').val(json[i].fechaFin);
                $('#mecReg').val(json[i].mecReg);
                $('#ayuMecReg').val(json[i].ayuMecReg);
                $('#inreq').val(json[i].inlineReq);
                $('#contCal').val(json[i].contCal);
                $('#zapIt').val(json[i].zapIt);
                $('#inlineTall').val(json[i].inlineTall);
                cargarDR(drcode);
                cargarDealers(drcode,spcode);
                cargarTablas(spcode);
            }
            
            
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
}

function cargarTablas(spcode){
	$.ajax({
        dataType: "text",
        url: "ObtenerInsite?SP_CODE=" + spcode,
        method: "POST",
        beforeSend: function() {
        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar la suma de ponderacion');
        } else {
            json = $.parseJSON(e);
            for (var i = 0; i < json.length; i++) {
                $('#mecReg').val(json[i].mec_rec);
                $('#ayuMecReg').val(json[i].ayudantes);
                $('#inreq').val(json[i].insite);
            }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
	
	//--------------------
	
	$('#tableBodyINLIE').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'HerramientasElectronica?idDealer='+ spcode,
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        inlineLen=json.length;
        $('#tableBodyINLIE').bootstrapTable({
            dataType: 'json',
            emptytext: '-',
            checkboxHeader:false,
            rowStyle: 'rowselect',
            data: json,
            showExport: true,
            exportTypes:['excel', 'pdf'],
            exportDataType:'all',
            exportOptions: {
                fileName: 'HerramientasEvaluadas'
            },
           
            /*
            onLoadSuccess: function( data ) {
            	
            	inlineLen=data.length;
            	alert(inlineLen);
            	cargarZapit();
	        	
	        },*/
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
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'fecha_De_Expiracion',
                    title: 'Fecha de Expiraci&oacute;n',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'solicitado_Por',
                    title: 'Solicitado por',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
	
    //---------------------------
  /* 
    $('#tableInsite').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'HerramientasInsite?SP_CODE='+ spcode,
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
    	
    	json = $.parseJSON(e);
        for(var i = 0; i < json.data.length; i++){
        	//console.log(json.data[i].porcObtenidoIns);
        	$('#Total').val(json.data[i].porcObtenidoIns);
        }

        
        
        $('#tableInsite').bootstrapTable({
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
                    field: 'idInsite',
                    title: 'IdDealer',
                    visible: false
                }, {
                    field: 'inlineReq',
                    title: "INSITE's/INLINE's requeridos",
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'insiteReg',
                    title: "INSITE's/INLINE's registrados",
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'porcObtenidoIns',
                    title: '% Obtenido',
                    type: 'text',
                    align: 'center',
                    valign: 'middle'
                }]
        });
        $('#myModal').modal('hide');
        
        cargarZapit();
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
    */
    
    //cargarZapit();
}




function numberVal(e){
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        (e.keyCode == 65 && e.ctrlKey === true) || 
        (e.keyCode >= 35 && e.keyCode <= 39)) {
             return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
}


function cargarZapit(){

	
	$('#TableResult').css('display', '');
	
	var select = $('#tableBodyINLIE').bootstrapTable('getSelections').length;
	//alert(select);
	
	$('#insiteReq').html(Number($('#inreq').val()));
	$('#inlineReq').html(Number($('#inreq').val()));
	//$('#insiteObt').html(Number(inlineLen));
	$('#insiteObt').html(Number(select));
	$('#inlineObt').html(Number($('#inlineTall').val()));
	$('#calibObt').html(Number($('#contCal').val()));
	$('#zapitObt').html(Number($('#zapIt').val()));
	
	
	
	
	var tot1,tot2,tot3,tot4;
	var inreq = Number($('#inreq').val());
	//var insObt = Number(inlineLen);
	var insObt = Number(select);
	var inlObt = Number($('#inlineTall').val());
	var calibObt = Number($('#contCal').val());
	var zapitObt = Number($('#zapIt').val());

	
	if (insObt >= inreq){
		tot1=45;
	}else{
		if(insObt==0){
			tot1=0;
		}else{
		//   obt  / req
			var num =(insObt/inreq).toFixed(2);
			num = num*0.45;
			num = num * 100;
			tot1 = num.toFixed(2);
		}
	}
	$('#tot1').html(tot1 + '%');
	
	
	if (inlObt >= inreq){
		tot2=40;
	}else{
		if(inlObt==0){
			tot2=0;
		}else{
			//   obt  / req
			var num =(inlObt/inreq).toFixed(2);
			num = num*0.4;
			num = num * 100;
			tot2 = num.toFixed(2);
			
		}
	}
	$('#tot2').html(tot2 + '%');
	
	var calibReq =2;
	if (calibObt >= calibReq){
		tot3=10;
	}else{
		if(calibObt==0){
			tot3=0;
		}else{
			//   obt  / req
			var num =(calibObt/calibReq).toFixed(2);
			num = num*0.1;
			num = num * 100;
			tot3 = num.toFixed(2);
		}
	}
	$('#tot3').html(tot3 + '%');
	
	
	var zapitReq =1;
	if (zapitObt >= zapitReq){
		tot4=5;
	}else{
		if(zapitObt==0){
			tot4=0;
		}else{
			//   obt  / req
			var num =(zapitObt/zapitReq).toFixed(2);
			num = num*0.05;
			num = num * 100;
			tot4 = num.toFixed(2);
		}
	}
	$('#tot4').html(tot4 + '%');
	
	$('#tot5').html(Number(tot4) + Number(tot3)+ Number(tot2)+ Number(tot1));
	$('#Total').val(Number(tot4) + Number(tot3)+ Number(tot2)+ Number(tot1));
	
}


function guardarPCID(){
	json = JSON.stringify($('#myform').serializeArray());
    JsonDataPcid = JSON.stringify($('#tableBodyINLIE').bootstrapTable('getData'));
    $.ajax({
        data: {data: json, DataPcid: JsonDataPcid },
        dataType: "text",
        url: "GuardarRelPCID?heta=Y",
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
	if (row.status == false && row.editable=='N' ){
		return {
	        classes: 'disabledClass'
	    };
	}else {
		return {
	        classes: ''
	    };
	}
}





