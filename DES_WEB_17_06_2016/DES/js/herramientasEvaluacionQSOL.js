/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
	$('#herraEvalQSOL').addClass("active");
    $('#dealer').on('change', function() {
    	 cargarTabla(this.value);
        $('#codigoDeal').val(this.value);   
    });

    $('#guardarBtn').click(function() {
        if ($('#dealer').val() != '' && $('#datepicker').val() != '' && $('#datepicker2').val() != '' && $('#datepicker3').val() != '') {
            json = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                data: {data: json, tipo: 'EVALUAQSOL'},
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
        if ($('#dealer').val() != '' && $('#datepicker').val() != '' && $('#datepicker2').val() != '' && $('#datepicker3').val() != '') {
            json = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                data: {data: json, tipo: 'EVALUAQSOL'},
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
            for (var i = 0; i < json.length; i++) {
                $('#tipo_eval').val(json[i].tipoEval);
                $('#revision').val(json[i].revision);
                $('#anio').val(json[i].anio);
                
                //$('#dr').val(json[i].codigoDR);
                //$('#dealer').val(json[i].idDealer);}
            
                $('#codigoDR').val(json[i].codigoDR);
               
                cargarDR(json[i].codigoDR);
                cargarDealers(json[i].codigoDR, json[i].idDealer);
                cargarTabla(json[i].idDealer);
                
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
}

function cargarTabla(sp_code){
	$('#tableBody').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        data:{fecha_ini_eval:$('#datepicker').val()},
        url: 'HerramientasEvaluaLicQSOL?id_dealer=' + sp_code,
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        
        for (var i = 0; i < json.data.length; i++) {
            $('#Total').val(json.data[i].porcOtorgado.replace("%", ""));
        	//console.log();
        }
        $('#tableBody').bootstrapTable({
            dataType: 'json',
            emptytext: '-',
            data: json.data,
            idField: 'idQSOL',
            uniqueId: 'idQSOL',
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
                    field: 'idQSOL',
                    title: 'ID QSOL',
                    visible: false
                },
                {
                    field: 'licencia',
                    title: 'Licencia',
                    visible: true
                },
                {
                    field: 'fechaExp',
                    title: 'Fecha de expiracio&oacute;n',
                    visible: true
                },
                {
                    field: 'porcPosible',
                    title: '% Posible',
                    visible: true
                },
                {
                    field: 'porcOtorgado',
                    title: '% Otorgado',
                    visible: true
                }]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
}