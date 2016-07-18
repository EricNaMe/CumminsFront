// Start from https://gist.github.com/iwek/7154578#file-csv-to-json-js
// and fix the issue with double quoted values



var count;
function csvTojs2(csv) {
    var lines = csv.split("\n");
    if (lines.length < 102) {
        var result = [];
        lines[0] = 'id,dealerDr,anio,revision,tipoMercado,tipoProducto,matriz,oem,noParte,noParteAnterior,descripcion,cantMax,comentarios,url,ponderacion,precioDealer';
        var headers = lines[0].split(",");
        $("#progress").progressbar({
            value: 0
        });
        for (var i = 1; i < lines.length; i++) {
            if (lines[i].trim() !== '') {
                var obj = {};
                lines[i] = i + ',' + lines[i] + ',,,,';
                var row = lines[i],
                        queryIdx = 0,
                        startValueIdx = 0,
                        idx = 0;
                if (row.trim() === '') {
                    continue;
                }

                while (idx < row.length) {
                    /* if we meet a double quote we skip until the next one */
                    var c = row[idx];
                    if (c === '"') {
                        do {
                            c = row[++idx];
                        } while (c !== '"' && idx < row.length - 1);
                    }

                    if (c === ',' || /* handle end of line with no comma */ idx === row.length - 1) {
                        /* we've got a value */
                        var value = row.substr(startValueIdx, idx - startValueIdx).trim();
                        /* skip first double quote */
                        if (value[0] === '"') {
                            value = value.substr(1);
                        }
                        /* skip last comma */
                        if (value[value.length - 1] === ',') {
                            value = value.substr(0, value.length - 1);
                        }
                        /* skip last double quote */
                        if (value[value.length - 1] === '"') {
                            value = value.substr(0, value.length - 1);
                        }
                        var key = headers[queryIdx++];
                        obj[key] = value;
                        startValueIdx = idx + 1;
                    }
                    ++idx;
                }
                result.push(obj);
            }
        }


        $("#progress").progressbar({
            value: 100
        });
        $('#enviar').prop('disabled', false);
    } else {
        alert('El archivo tiene mas de 100 registros');
        return null;
    }
    return result;
}

var json;
function PreviewText() {
	$('#infantCareH').addClass("active");
    var oFReader = new FileReader();
    oFReader.readAsText(document.getElementById("csvFile").files[0]);
    oFReader.onload = function(oFREvent) {
        //var csvval = oFREvent.target.result.split("\n");

        var csv = oFREvent.target.result;
        json = csvTojs2(csv);
        processCsv = true;
        for (i = 1; i < json.length; i++) {
            if (json[0].matriz !== json[i].matriz &&
                    json[0].oem !== json[i].oem &&
                    json[0].revision !== json[i].revision &&
                    json[0].anio !== json[i].anio &&
                    json[0].dealerDr !== json[i].dealerDr &&
                    json[0].tipoProducto !== json[i].tipoProducto &&
                    json[0].tipoMercado !== json[i].tipoMercado
                    ) {
                processCsv = false;
            }
        }

        if (processCsv === true) {
        	
            for (var i = 0; i < json.length; i++) {
                json[i].ponderacion = Number(100 / json.length).toFixed(2) ;
            }

            $('#matriz').val(json[0].matriz);
            $('#matrizLabel').html(json[0].matriz);
            $("#oem option[id='" + json[0].oem.toUpperCase() + "']").attr("selected", "selected");
            $('#revision').val(json[0].revision);
            $('#anio').val(json[0].anio);
            $("#para option[id='" + json[0].dealerDr.toUpperCase() + "']").attr("selected", "selected");
            $('#tipoProducto').val(json[0].tipoProducto);
            $('#rango').val(0);
            $("#mercado option[id='" + json[0].tipoMercado.toUpperCase() + "']").attr("selected", "selected");
            cargarValores(json[0].oem.toUpperCase(),json[0].dealerDr.toUpperCase(),json[0].tipoMercado.toUpperCase());
            $('#tableBody').bootstrapTable({
                idField: 'id',
                pagination: true,
                search: true,
                data: json,
                emptytext: '-',
                formatLoadingMessage: function() {
                    return 'Cargando...';
                },
                formatRecordsPerPage: function(pageNumber) {
                    return pageNumber + ' registros por pagina';
                },
                formatShowingRows: function(pageFrom, pageTo, totalRows) {
                    return 'Mostrando ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' registros';
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

                    }, {
                        field: 'id',
                        title: 'Id',
                        visible: false
                    }, {
                        field: 'noParte',
                        title: 'No. Parte',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, true);
                            }
                        }
                    }, {
                        field: 'noParteAnterior',
                        title: 'No. Parte anterior',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'descripcion',
                        title: 'Description',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text',
                            validate: function(value) {
                                return validateEmpty(value);
                            }
                        }
                    }, {
                        field: 'cantMax',
                        title: 'Cantidad minima',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, true);
                            }
                        }
                    }, {
                        field: 'comentarios',
                        title: 'Comentarios',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text'
                        }
                    }, {
                        field: 'url',
                        title: 'URL',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text'
                        }
                    }, {
                        field: 'ponderacion',
                        title: 'Ponderacion',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, true);
                            }
                        }
                    }, {
                        field: 'precioDealer',
                        title: 'Precio Dealer',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '-',
                            emptytext: '-',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }]

            });
            count = $('#tableBody').bootstrapTable('getData').length;
        } else {
            alert("El archivo tiene mas de un encabezado");
        }
    };
}


$(function() {
	cargarValores();
    /*$.ajax({
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


    })
            .fail(function(e) {
                $('#headerModal').html('Ocurrio un error al enviar la informacion');
                $('#closeModal').css('display', '');
            });

    $.ajax({
        dataType: "text",
        url: "ObtenerOem",
        method: "POST",
        beforeSend: function() {

        }

    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo OEM');
        } else {
            jsonOem = $.parseJSON(e);
            $('#oem').html($("<option></option>"));
            for (var i = 0; i < jsonOem.length; i++) {
                $('#oem')
                        .append($("<option></option>")
                                .attr({value: jsonOem[i].value})
                                .text(jsonOem[i].text.toUpperCase()));
            }
        }


    })
            .fail(function(e) {
                $('#headerModal').html('Ocurrio un error al cargar los OEM');
                $('#closeModal').css('display', '');
            });

    $.ajax({
        dataType: "text",
        url: "ObtenerPara",
        method: "POST",
        beforeSend: function() {

        }

    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo Para DR');
        } else {
            jsonPara = $.parseJSON(e);
            $('#para').html($("<option></option>"));
            for (var i = 0; i < jsonPara.length; i++) {
                $('#para')
                        .append($("<option></option>")
                                .attr({value: jsonPara[i].value})
                                .text(jsonPara[i].text.toUpperCase()));
            }
        }


    })
            .fail(function(e) {
                $('#headerModal').html('Ocurrio un error al cargar Para DR');
                $('#closeModal').css('display', '');
            });

    $.ajax({
        dataType: "text",
        url: "ObtenerRangoInfant",
        method: "POST",
        beforeSend: function() {

        }

    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo Para DR');
        } else {
            jsonRango = $.parseJSON(e);
            $('#rango').html($("<option></option>"));
            for (var i = 0; i < jsonRango.length; i++) {
                $('#rango')
                        .append($("<option></option>")
                                .attr({value: jsonRango[i].value})
                                .text(jsonRango[i].text.toUpperCase()));
            }
        }


    })
            .fail(function(e) {
                $('#headerModal').html('Ocurrio un error al cargar Para DR');
                $('#closeModal').css('display', '');
            });

    $.ajax({
        dataType: "text",
        url: "ObtenerMercados",
        method: "POST",
        beforeSend: function() {

        }

    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo mercados');
        } else {
            jsonMercado = $.parseJSON(e);
            $('#mercado').html($("<option></option>"));
            for (var i = 0; i < jsonMercado.length; i++) {
                $('#mercado')
                        .append($("<option></option>")
                                .attr({value: jsonMercado[i].value})
                                .text(jsonMercado[i].text.toUpperCase()));
            }
        }


    })
            .fail(function(e) {
                $('#headerModal').html('Ocurrio un error al cargar mercados');
                $('#closeModal').css('display', '');
            });*/

    $('input[type=radio][name=productoNuevo]').change(function() {
        if (this.value === 'Y') {
            $('#tipoProducto').val('Infant Care');
        }
        else if (this.value === 'N') {
            $('#tipoProducto').val('Teen Care');
        }
    });

    $("#tipoProducto").change(function() {
        if ($('#tipoProducto').val() === 'Infant Care') {
            $('#productoNuevo1').prop('checked', true);
        } else if ($('#tipoProducto').val() === 'Teen Care') {
            $('#productoNuevo2').prop('checked', true);
        }
    });

    $('#enviar').click(function() {
    	//console.log($('#rango').val());
        if (
                $('#matriz').val() !== '' &&
                $('#oem').val() !== null &&
                $('#revision').val() !== null &&
                $('#revision').val() !== '' &&
                $('#anio').val() !== '' &&
                $('#para').val() !== null &&
                $('#tipoProducto').val() !== null &&
                $('#rango').val() !== null &&
                $('#mercado').val() !== null 
                //$('input:radio:checked').length > 0

                ) {

            jsonHeader = $('#formHeader').serializeJSON();
            jsonBody = JSON.stringify($('#tableBody').bootstrapTable('getData')).replace(/\\r/g, '');
            data = '{"header":' + jsonHeader + ', "data":' + jsonBody + '}';
            //console.log(data);
            $.ajax({
                dataType: "text",
                url: "SaveCsv",
                method: "POST",
                beforeSend: function() {
                    $('#headerModal').html('Enviando Informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                },
                data: {"data": data}
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModal').css('display', '');
                window.location = "TEMPInfantCare.jsp";
            })
                    .fail(function(e) {
                        $('#headerModal').html('Ocurrio un error al enviar la informacion');
                        $('#closeModal').css('display', '');
                    });
            $('#formHeader')[0].reset();
            $('#tableBody').bootstrapTable('destroy');
            //window.location = "TEMPInfantCare.jsp";
        } else {
            alert('Llene todos los campos');
        }

    });
    
    $('#buttonAdd').click(function() {

        count++;
        $('#tableBody').bootstrapTable('insertRow', {
            index: $('#tableBody').bootstrapTable('getData').length,
            row: {
                id: count,
                noParte: '',
                noParteAnterior: '',
                descripcion: '',
                cantMax: '',
                comentarios: '',
                url: '',
                ponderacion: '',
                precioDealer: ''
            }
        });
    });
    $('#buttonRemove').click(function() {
        var ids = $.map($('#tableBody').bootstrapTable('getSelections'), function(row) {
            return row.id;
        });
        $('#tableBody').bootstrapTable('remove', {
            field: 'id',
            values: ids
        });
    });
    $("#loading").dialog({
        hide: 'slide',
        show: 'slide',
        autoOpen: false
    });
});


function cargarValores(oem, para, mercado){
	$(function() {

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


	    })
	            .fail(function(e) {
	                $('#headerModal').html('Ocurrio un error al enviar la informacion');
	                $('#closeModal').css('display', '');
	            });

	    $.ajax({
	        dataType: "text",
	        url: "ObtenerOem",
	        method: "POST",
	        beforeSend: function() {

	        }

	    }).done(function(e) {
	        if (e === 'error') {
	            alert('Ocurrio un error al cargar catalogo OEM');
	        } else {
	            jsonOem = $.parseJSON(e);
	            $('#oem').html($("<option></option>"));
	            for (var i = 0; i < jsonOem.length; i++) {
	            	if(oem == jsonOem[i].text.toUpperCase()){
        				$('#oem')
                        .append($("<option selected></option>")
                                .attr({value: jsonOem[i].value})
                                .text(jsonOem[i].text.toUpperCase()));
	            	} else {
	            		$('#oem')
                        .append($("<option></option>")
                                .attr({value: jsonOem[i].value})
                                .text(jsonOem[i].text.toUpperCase()));
	            	}
	            }
	        }

	    })
	            .fail(function(e) {
	                $('#headerModal').html('Ocurrio un error al cargar los OEM');
	                $('#closeModal').css('display', '');
	            });

	    $.ajax({
	        dataType: "text",
	        url: "ObtenerPara",
	        method: "POST",
	        beforeSend: function() {

	        }

	    }).done(function(e) {
	        if (e === 'error') {
	            alert('Ocurrio un error al cargar catalogo Para DR');
	        } else {
	            jsonPara = $.parseJSON(e);
	            $('#para').html($("<option></option>"));
	            for (var i = 0; i < jsonPara.length; i++) {
	            	if(para == jsonPara[i].text.toUpperCase()){
            			$('#para')
                        .append($("<option selected></option>")
                                .attr({value: jsonPara[i].value})
                                .text(jsonPara[i].text.toUpperCase()));
	            	} else {
	            		$('#para')
                        .append($("<option></option>")
                                .attr({value: jsonPara[i].value})
                                .text(jsonPara[i].text.toUpperCase()));
	            	}
	            }
	        }

	    })
	            .fail(function(e) {
	                $('#headerModal').html('Ocurrio un error al cargar Para DR');
	                $('#closeModal').css('display', '');
	            });

	    $.ajax({
	        dataType: "text",
	        url: "ObtenerRangoInfant",
	        method: "POST",
	        beforeSend: function() {

	        }

	    }).done(function(e) {
	        if (e === 'error') {
	            alert('Ocurrio un error al cargar catalogo Para DR');
	        } else {
	            jsonRango = $.parseJSON(e);
	            $('#rango').html($("<option></option>"));
	            for (var i = 0; i < jsonRango.length; i++) {
	                $('#rango')
	                        .append($("<option></option>")
	                                .attr({value: jsonRango[i].value})
	                                .text(jsonRango[i].text.toUpperCase()));
	            }
	        }


	    })
	            .fail(function(e) {
	                $('#headerModal').html('Ocurrio un error al cargar Para DR');
	                $('#closeModal').css('display', '');
	            });

	    $.ajax({
	        dataType: "text",
	        url: "ObtenerMercados",
	        method: "POST",
	        beforeSend: function() {

	        }

	    }).done(function(e) {
	        if (e === 'error') {
	            alert('Ocurrio un error al cargar catalogo mercados');
	        } else {
	            jsonMercado = $.parseJSON(e);
	            $('#mercado').html($("<option></option>"));
	            for (var i = 0; i < jsonMercado.length; i++) {
	            	if(mercado == jsonMercado[i].text.toUpperCase()){
            			$('#mercado')
                        .append($("<option selected></option>")
                                .attr({value: jsonMercado[i].value})
                                .text(jsonMercado[i].text.toUpperCase()));
	            	} else {
	            		$('#mercado')
                        .append($("<option></option>")
                                .attr({value: jsonMercado[i].value})
                                .text(jsonMercado[i].text.toUpperCase()));
	            	}
	            }
	        }

	    })
	            .fail(function(e) {
	                $('#headerModal').html('Ocurrio un error al cargar mercados');
	                $('#closeModal').css('display', '');
	            });
	});
}