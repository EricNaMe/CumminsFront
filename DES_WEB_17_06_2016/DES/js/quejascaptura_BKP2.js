
$(function() {
	$('#quejasCapt').addClass("active");
	$('#buttonAdd').hide(true);
	
	 $('#dr').on('change', function() {
    	$('#buttonAdd').hide(true);
    });
	 
    $('#dealer').on('change', function() {
    	$('#buttonAdd').show(true);
        cargarTabla($('#dealer').val());

        $('#codigoDeal').val(this.value);
    });
    
    $('#buttonAdd').click(function() {
        $.ajax({
            dataType: "text",
            url: "GuardarQuejaCaptura?id_dealer=" + $('#codigoDeal').val(),
            method: "GET",
            beforeSend: function() {
                $('#headerModal').html('Agregando registro...');
                $('#closeModal').css('display', 'none');
                $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
            }
        }).done(function(e) {
            $('#tableQuejasCaptura').bootstrapTable('refresh');
            $('#myModal').modal('hide');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al guardar los datos');
        }); 
    }); 

    $('#guardarBtn').click(function() {
        if ($('#codigoDeal').val() != '' && $('#datepicker2').val() != '' && $('#datepicker3').val() != '') {
            json = JSON.stringify($('#myform').serializeArray());
            $.ajax({
                dataType: "text",
                data: {data: json},
                url: "GuardarQuejaCaptura",
                method: "GET",
                beforeSend: function() {
                    $('#headerModal').html('Agregando registro...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                }
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModalEliminar').css('display', '');
                window.location = "TEMPQuejasConsultas.jsp";
            }).fail(function(e) {
                $('#closeModal').css('display', '');
                $('#headerModal').html('Ocurrio un error al guardar los datos');
            });
        } else {
            alert('Intruduzca Dealer, Fecha Inicio Evaluacion y Fecha Fin Evaluacion para porder Calcular');
        }
    });


    if (idDealer != "" & idDealer != null) {
        obtenerInfo(idDealer);
    }
});

function obtenerInfo(id) {
    $.ajax({
        dataType: "text",
        url: "ObtenerHeaderQueja?id=" + id,
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
                $('#datepicker').val(json[i].fechaEval);
                $('#datepicker2').val(json[i].fechaIni);
                $('#datepicker3').val(json[i].fechaFin);
                obtenerQuejaDealer(json[i].spCode);
            }
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al enviar la informacion');
        $('#closeModal').css('display', '');
    });
}

function eliminarRegistro(id) {
    $('#tableQuejasCaptura').bootstrapTable('removeByUniqueId', id);
    $.ajax({
        dataType: "text",
        url: "EliminarQuejasCaptura?id=" + id,
        method: "GET",
        beforeSend: function() {
            $('#headerModal').html('Eliminando registro...');
            $('#closeModal').css('display', 'none');
            $('#closeModalEliminar').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
        }
    }).done(function(e) {
        $('#headerModal').html(e);
        $('#closeModalEliminar').css('display', '');
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al eliminar el registro');
        $('#closeModalEliminar').css('display', '');
    });
}



function linkFormatterEliminar(value, row) {
    return '<a href=javascript:eliminarRegistro(' + row.id_queja + ')>'
            + '<img src="img/file_delete.png" alt="Eliminar" style="width:22px; height:22px;"> </a>';
}


var dist = "";

function obtenerQuejaDealer(idDealer) {
    $.ajax({
        dataType: "text",
        url: "ObtenerDrDealer?id=" + idDealer,
        method: "GET",
        beforeSend: function() {

        }
    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de rangos');
        } else {
            json = null;
            json = $.parseJSON(e);
            dist = json[0].Dr;
            dist = Number(dist);
            $('#codigoDR').val(dist);
            $('#codigoDeal').val(idDealer);
            $('#dr').val(dist);
            cargarDR(dist);
            ObtenerDealer(dist, idDealer);
            cargarTabla(idDealer);
        }
    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
        $('#closeModal').css('display', '');
    });
    $('#dealer').val(idDealer);
    $('#dr').val(dist);
}





function ObtenerDealer(Dr, spcode) {
    $.ajax({
        dataType: "text",
        url: "ObtenerDealer?id_dr=" + Dr,
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
            }
        }
        $('#dealer').val(spcode);

    }).fail(function(e) {
        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
        $('#closeModal').css('display', '');
    });
    $('#dealer').val(spcode);
    $('#dealer').val(spcode);
    $('#dr').val(dist);

}

function cargarTabla(idDealer) {
    $('#tableQuejasCaptura').bootstrapTable('destroy');
    $('#tableQuejasCaptura').bootstrapTable({
        dataType: 'json',
        emptytext: '-',
        //data: json.data,
        url: 'ObtenerQuejasCaptura?id_dealer=' + idDealer,
        idField: 'id_queja',
        uniqueId: 'id_queja',
        search: true,
        formatLoadingMessage: function() {
            $('#headerModal').html('Solicitando informacion...');
            $('#closeModal').css('display', 'none');
            $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
            return 'Cargando...';
        },
        onLoadSuccess: function() {
            $('#myModal').modal('hide');
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
                field: 'Folio',
                title: 'Folio',
                align: 'center',
                valign: 'middle',
                type: 'text'
            }, {
                field: 'fecha_crea',
                title: 'Fecha de Creaci&oacute;n',
                align: 'center',
                valign: 'middle',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    format: 'dd/mm/yyyy',
                    viewformat: 'dd/mm/yyyy',
                    type: 'date'
                }
            }, {
                field: 'fecha_queja',
                title: 'Fecha de Queja',
                align: 'center',
                valign: 'middle',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    format: 'dd/mm/yyyy',
                    viewformat: 'dd/mm/yyyy',
                    type: 'date'
                }
            }, {
                field: 'nombre_cliente',
                title: 'Cliente',
                align: 'center',
                class: 'TextFormat',
                valign: 'middle',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    type: 'text'
                }
            }, {
                field: 'contact_cliente',
                title: 'Contacto del Cliente',
                align: 'center',
                class: 'TextFormat',
                valign: 'middle',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    type: 'text'
                }
            }, {
                field: 'queja',
                title: 'Queja',
                align: 'center',
                valign: 'middle',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    type: 'select',
                    source: 'ObtenerListaQuejas'
                }
            }, {
                field: 'descrip_queja',
                title: 'Descripci&oacute;n de la Queja',
                align: 'center',
                valign: 'middle',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    type: 'text'
                }
            }, {
                field: 'seg_queja',
                title: 'Seguimiento de la Queja',
                align: 'center',
                valign: 'middle',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    type: 'text'
                }
            }, {
                field: 'reporta',
                title: 'Reporta',
                align: 'center',
                valign: 'middle',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    type: 'text'
                }
            }, {
                field: 'soporte',
                title: 'Soporte',
                align: 'center',
                valign: 'middle',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    type: 'text'
                }
            }, {
                field: 'resp_seg',
                title: 'Responsable del Seguimiento',
                align: 'center',
                valign: 'middle',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    type: 'text'
                }
            }/*, {
                field: 'C_Responsable',
                title: 'Correo del Responsable',
                align: 'center',
                valign: 'middle',
                class: 'TextFormat',
                editable: {
                    defaultValue: '-',
                    emptytext: '-',
                    url: 'GuardarQuejaCaptura',
                    type: 'text'
                }
            }*/, {
                field: 'status',
                title: 'Estatus de la Queja',
                class: 'TextFormat',
                align: 'center',
                valign: 'middle',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    type: 'select',
                    source: [{value: 1, text: 'Activo'}, {value: 2, text: 'Inactivo'}]
                }
            }, {
                field: 'fecha_cierre',
                title: 'Fecha de Cierre',
                align: 'center',
                valign: 'middle',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    format: 'dd/mm/yyyy',
                    viewformat: 'dd/mm/yyyy',
                    type: 'date'
                }
            }, {
                field: 'compromiso',
                title: 'Compromiso con el Dealer',
                align: 'center',
                valign: 'middle',
                class: 'TextFormat',
                editable: {
                    defaultValue: '----------',
                    emptytext: '----------',
                    url: 'GuardarQuejaCaptura',
                    type: 'text'
                }
            }, {
                field: 'eliminar',
                title: 'Eliminar',
                class: 'TextFormat',
                formatter: 'linkFormatterEliminar',
                align: 'center',
                valign: 'middle'
            }]
    });
}