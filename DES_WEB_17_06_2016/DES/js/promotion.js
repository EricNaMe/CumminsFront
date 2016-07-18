// Start from https://gist.github.com/iwek/7154578#file-csv-to-json-js
// and fix the issue with double quoted values



var count;
function csvTojs2(csv) {
    var lines = csv.split("\n");
    //if (lines.length < 102) {
        var result = [];
        
        lines[0] = "id,id_promos,program_id,abo_name,dist_name,responsible_branch_name,sp_code,sp_name,channel_name,promotion_id,last_name,middle_name,first_name,jobtitle,ldap_username,date_passed,program_name,ryg";
        //lines[0] = 'id,dealerDr,anio,revision,tipoMercado,tipoProducto,matriz,oem,noParte,noParteAnterior,descripcion,cantMax,comentarios,url,ponderacion,precioDealer';
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
   /*
    } else {
        alert('El archivo tiene mas de 100 registros');
        return null;
    }
    */
    return result;
}

var json;
function PreviewText() {
	$('#promotionH').addClass("active");
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
        	/*
            for (var i = 0; i < json.length; i++) {
                json[i].ponderacion = 100 / json.length ;
            }
            */
            /*
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
            */
            
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

                    }, {
                        field: 'id',
                        title: 'Id',
                        visible: false
                    }, {
                        field: 'id_promos',
                        //",,,,,,,,,,,,,,,,"
                        title: 'id_promos',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, true);
                            }
                        }
                    }, {
                        field: 'program_id',
                        title: 'program_id',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'abo_name',
                        title: 'abo_name',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateEmpty(value);
                            }
                        }
                    }, {
                        field: 'dist_name',
                        title: 'dist_name',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, true);
                            }
                        }
                    }, {
                        field: 'responsible_branch_name',
                        title: 'responsible_branch_name',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text'
                        }
                    }, {
                        field: 'sp_code',
                        title: 'sp_code',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text'
                        }
                    }, {
                        field: 'sp_name',
                        title: 'sp_name',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, true);
                            }
                        }
                    }, {
                        field: 'channel_name',
                        title: 'channel_name',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'promotion_id',
                        title: 'promotion_id',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'last_name',
                        title: 'last_name',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'middle_name',
                        title: 'middle_name',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'first_name',
                        title: 'first_name',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'jobtitle',
                        title: 'jobtitle',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'ldap_username',
                        title: 'ldap_username',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'date_passed',
                        title: 'date_passed',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'program_name',
                        title: 'program_name',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
                            type: 'text',
                            validate: function(value) {
                                return validateNumber(value, false);
                            }
                        }
                    }, {
                        field: 'ryg',
                        title: 'ryg',
                        class: 'TextFormat',
                        editable: {
                            defaultValue: '----------',
                            emptytext: '----------',
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
	//cargarValores();

    

   

    $('#enviar').click(function() {

      /*  if (
                
        		$('#matriz').val() !== '' &&
                $('#oem').val() !== null &&
                $('#revision').val() !== null &&
                $('#anio').val() !== '' &&
                $('#para').val() !== null &&
                $('#tipoProducto').val() !== null &&
                $('#rango').val() !== null &&
                $('#mercado').val() !== null 
                //$('input:radio:checked').length > 0
                ) {
       		*/
            //jsonHeader = $('#formHeader').serializeJSON();
        	
           // jsonBody = JSON.stringify($('#tableBody').bootstrapTable('getData')).replace(/\\r/g, '');
            
    	 	jsonBody = JSON.stringify($('#tableBody').bootstrapTable('getData')).replace(/\\r/g, '');
            //jsonBody = $('#tableBody').bootstrapTable('getData');
            //json = JSON.stringify(jsonBody);
            

            
            //data = '{"header":' + jsonHeader + ', "data":' + jsonBody + '}';
            
            //console.log(data);
            //console.log(jsonBody);
            $.ajax({
                dataType: "text",
                url: "SaveCsvPromotion",
                method: "POST",
                beforeSend: function() {
                    $('#headerModal').html('Enviando Informacion...');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                },
                //data: {"data": data}
                //data: {data: },
                data: {"data": jsonBody}
                //data: {data: json}
                //data: {"data": jsonBody}
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModal').css('display', '');
            })
                    .fail(function(e) {
                        $('#headerModal').html('Ocurrio un error al enviar la informacion');
                        $('#closeModal').css('display', '');
                    });

            $('#tableBody').bootstrapTable('destroy');
           // window.location = "TEMPInfantCare.jsp";
        /*
        } else {
            alert('Llene todos los campos');
        }*/

    });
    $('#buttonAdd').click(function() {

        count++;
        $('#tableBody').bootstrapTable('insertRow', {
            index: $('#tableBody').bootstrapTable('getData').length,
            row: {
            	

                id: count,
                id_promos: '',
                program_id: '',
                abo_name: '',
                responsible_branch_name: '',
                sp_name: '',
                promotion_id: '',
                middle_name: '',
                jobtitle: '',
                date_passed: '',
                delete_ind: '',
                last_update_by: '',
                last_update_date: '',
                created_by: '',
                creation_date: '',
                id_promo_rcns: '',
                ryg: '',
                program_name: '',
                ldap_username: '',
                first_name: '',
                last_name: '',
                channel_name: '',
                sp_code: '',
                dist_name: ''
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


