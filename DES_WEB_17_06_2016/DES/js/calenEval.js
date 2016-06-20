/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var count;

$(document).ready(function() {
	$('#calEvaluacion').addClass("active");


    $('#TableCalenEval').bootstrapTable({
        idField: 'idBody',
        uniqueId: 'idBody',
        pagination: true,
        search: true,
        dataType: 'json',
        //----------------------------
        showExport: true,
        exportTypes:['excel', 'pdf'],
        exportDataType:'all',
        exportOptions: {
            fileName: 'Motores'
        },
        //----------------------------
        url: 'ServletEvaluaciones',
        emptytext: '-',
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
                field: 'id',
                title: 'Id',
                visible: false
            }, {
                field: 'idBody',
                title: 'idBody',
                visible: false
            }, {
                field: 'numEval',
                title: 'Num. eval.',
                class: 'TextFormat',
                editable: {
                    url: 'UpdateEval',
                    defaultValue: '----------',
                    emptytext: '----------',
                    type: 'select',
                    class: 'TextFormat',
                    source: [{value: 1, text: '1'}, {value: 2, text: '2'}]
                    //source: 'SelectNumEval'
                }
            }, {
                field: 'tipoEval',
                title: 'Tipo eval.',
                class: 'TextFormat',
                editable: {
                    url: 'UpdateEval',
                    defaultValue: '----------',
                    emptytext: '----------',
                    type: 'select',
                    class: 'TextFormat',
                    source: [{value: 'E', text: 'EVALUACION'}, {value:'P', text: 'PRE EVALUACION'}]
                }
            }, {
                field: 'anioEval',
                title: 'Año eval.',
                class: 'TextFormat',
                editable: {
                    url: 'UpdateEval',
                    type: 'select',
                    class: 'TextFormat',
                    source: [
                             /*{value: '2005',text:'2005'},
                             {value: '2006',text:'2006'},
                             {value: '2007',text:'2007'},
                             {value: '2008',text:'2008'},
                             {value: '2009',text:'2009'},
                             {value: '2010',text:'2010'},
                             {value: '2011',text:'2011'},
                             {value: '2012',text:'2012'},
                             {value: '2013',text:'2013'},
                             {value: '2014',text:'2014'},
                             {value: '2015',text:'2015'},*/
                             {value: '2016',text:'2016'},
                             {value: '2017',text:'2017'},
                             {value: '2018',text:'2018'},
                             {value: '2019',text:'2019'},
                             {value: '2020',text:'2020'},
                             {value: '2021',text:'2021'},
                             {value: '2022',text:'2022'},
                             {value: '2023',text:'2023'},
                             {value: '2024',text:'2024'},
                             {value: '2025',text:'2025'},
                             {value: '2026',text:'2026'},
                             {value: '2027',text:'2027'},
                             {value: '2028',text:'2028'},
                             {value: '2029',text:'2029'},
                             {value: '2030',text:'2030'}
                    ]


                }
            }, {
                field: 'fecIniEval',
                title: 'Fecha inicio',
                class: 'TextFormat',
                editable: {
                    url: 'UpdateEval',
                    value: 'fecIniEval',
                    type: 'date',
                    class: 'TextFormat',
                    format: 'dd/mm/yyyy',
                    viewformat: 'dd/mm/yyyy',
                    datepicker: {
                        weekStart: 1
                    }

                }
            }, {
                field: 'fecFinEval',
                title: 'Fecha fin',
                class: 'TextFormat',
                editable: {
                    url: 'UpdateEval',
                    class: 'TextFormat',
                    value: 'fecFinEval',
                    type: 'date',
                    class: 'TextFormat',
                    format: 'dd/mm/yyyy',
                    viewformat: 'dd/mm/yyyy',
                    datepicker: {
                        weekStart: 1
                    }

                }

            }, {
                field: 'estatus',
                title: 'Estatus',
                class: 'TextFormat',
                editable: {
                    url: 'UpdateEval',
                    class: 'TextFormat',
                    defaultValue: '----------',
                    emptytext: '----------',
                    class: 'TextFormat',
                    type: 'select',
                    source: [{value: 'Y', text: 'ACTIVO'}, {value: 'N', text: 'INACTIVO'}]
                }

            }]

    });
    count = $('#tableBody').bootstrapTable('getData').length;

    $("#Guardar").click(function() {
        if (
        $('#datepicker').val() !== '' &&
        $('#anioEval').val() !== null &&
        $('#datepicker2').val() !== ''
        ) {
        	var blnRep = true;
        	jsonCalen = $('#TableCalenEval').bootstrapTable('getData');
        	for(var i = 0; i < jsonCalen.length; i++){
        		if(jsonCalen[i].tipoEval === $('#tipo_eval').val()){
			    	if(jsonCalen[i].numEval === $('#revision').val()){
			    		if(jsonCalen[i].anioEval === $('#anioEval').val()){
			    			if(jsonCalen[i].fecIniEval === $('#datepicker').val()){
			    				if(jsonCalen[i].fecFinEval === $('#datepicker2').val()){
			    					if(jsonCalen[i].estatus === $('#estatus').val()){
				    					blnRep = false;
									}
								}
							}
						}
					}
    			}
        	}
        	if(blnRep){
	            jsonHeader = $('#formCalenEval').serializeJSON();
	            $.ajax({
	                dataType: "text",
	                url: "GuardarEvaluaciones",
	                method: "POST",
	                beforeSend: function() {
	                    $('#headerModal').html('Enviando Informacion...');
	                    $('#closeModal').css('display', 'none');
	                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
	                },
	                data: {"data": jsonHeader}
	            }).done(function(e) {
	                $('#headerModal').html(e);
	                $('#closeModal').css('display', '');
	                $('#formCalenEval')[0].reset();
	                $('#TableCalenEval').bootstrapTable('refresh');
	            })
                .fail(function(e) {
                    $('#headerModal').html('Ocurrio un error al enviar la informacion');
                    $('#closeModal').css('display', '');
                });
        	} else {
        		alert('Este periodo de evaluacion ya esta candelarizado, favor de revisar.');
        	}
        } else {

            alert('Llene todos los campos');
        }


    });


    $('#fecIniEval').datepicker({
        format: "dd/mm/yyyy",
        language: 'es',
        autoclose: true
    });

    $('#fecFinEval').datepicker({
        format: "dd/mm/yyyy",
        language: 'es',
        autoclose: true
    });





});



