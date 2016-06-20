

$(function() {
	$('#capaMecanico').addClass("active");
    $('#dealer').on('change', function() {
        $('#qtyMecRegis').val("");
        $('#qtyAyudaReg').val("");
       
       
        cargarTablas(this.value);
        obtenerInsite(this.value);
    });

    $('#bGuardar').click(function() {
        idDealer = $('#codigoDeal').val();
        if (idDealer != '') {
            jsonCapaMecanico = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                data: {data: jsonCapaMecanico, tipo: "MECANICO"},
                dataType: "text",
                url: "GuardarCapacitacion",
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
        else {
            alert('Selecciona un Dealer para poder guardar.');
        }
    });
    
    $('#bGuardarS').click(function() {
        idDealer = $('#codigoDeal').val();
        if (idDealer != '') {
            jsonCapaMecanico = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                data: {data: jsonCapaMecanico, tipo: "MECANICO"},
                dataType: "text",
                url: "GuardarCapacitacion",
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
                window.location = "TEMPCapacitacionEvaluar.jsp";
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });
        }
        else {
            alert('Selecciona un Dealer para poder guardar.');
        }
    });
});

function cargarTablas(id) {
    $('#tableQtyMecanicos').bootstrapTable('destroy');
    $('#tableMotoresCapacitaMec').bootstrapTable('destroy');
    $('#tableMecanicosCapacitaMec').bootstrapTable('destroy');
    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerMotoresQtyMec?id=' + id,
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tableQtyMecanicos').bootstrapTable({
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
            columns: [ {
                    field: 'motor',
                    title: 'Motor',
                    type: 'text'
                }, {
                    field: 'qtyMecanicos',
                    title: 'M&iacute;nimo de <br> mec&aacute;nicos requeridos',
                    type: 'text'
                }]
        });
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });

    $.ajax({
        dataType: "text",
        method: "POST",
        url: 'ObtenerMotoresCapacitaMec?id=' + id,
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tableMotoresCapacitaMec').bootstrapTable({
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
            columns: [ {
                    field: 'motor',
                    title: 'Motor',
                    visible: true
                }, {
                    field: 'No_Req_Mec',
                    title: 'T&eacute;cnicos<br>requeridos',
                    visible: true
                }, {
                    field: 'Mec_Cert',
                    title: 'T&eacute;cnicos<br>calificados',
                    visible: true
                }, {
                    field: 'P_Motor',
                    title: '% Posible',
                    visible: true
                }, {
                    field: 'P_Obt_Motor',
                    title: '% Obtenido',
                    visible: true
                }]
        });
        if(json.data[json.data.length - 1] != null){
	        $('#hdnTotal').val(json.data[json.data.length - 1].P_Obt_Motor);
        } else {
        	$('#hdnTotal').val('0');
        }
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });

    $.ajax({
        dataType: "text",
        method: "POST",
        //url: 'ObtenerMecanicoCapacita?id=' + id,
        url: 'PerfilDealer?id_deal=' + id,
        beforeSend: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        json = $.parseJSON(e);
        $('#tableMecanicosCapacitaMec').bootstrapTable({
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
            /*columns: [{
                    field: 'ID_Mecanico',
                    title: 'ID',
                    visible: true
                }, {
                    field: 'Nombre_Mecanico',
                    title: 'Nombre',
                    visible: true
                }, {
                    field: 'Cursos_Mecanicot',
                    title: 'Cursos en los que est&aacute;† calificado',
                    visible: true
                }]*/
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
        $('#myModal').modal('hide');
    }).fail(function(e) {
        $('#closeModal').css('display', '');
        $('#headerModal').html('Ocurrio un error al cargar los datos');
    });
}



function obtenerInsite(sp_code){
	 $.ajax({
         dataType: "text",
         url: 'ObtenerInsite?SP_CODE=' + sp_code,
         method: "POST",
         beforeSend: function() {
         }
     }).done(function(e) {
         if (e === 'error') {
             alert('Ocurrio un error al cargar la Cantidad de Mec√°nicos');
         } else {
             json = $.parseJSON(e);
             for (var i = 0; i < json.length; i++) {
                 $('#qtyMecRegis').val(json[i].mec_rec);
                 $('#qtyAyudaReg').val(json[i].ayudantes);
             }
         }
     }).fail(function(e) {
         $('#headerModal').html('Ocurrio un error al enviar la informacion');
         $('#closeModal').css('display', '');
     });
	
}
