

$(function() {
    //alert("entra a function normal")
    $('#dealer').on('change', function() {
        $('#tableQtyMecanicos').bootstrapTable('destroy');
        $('#tableMotoresCapacitaMec').bootstrapTable('destroy');
        $('#tableMecanicosCapacitaMec').bootstrapTable('destroy');
        $('#qtyMecRegis').val("");
        $('#qtyAyudaReg').val("");
        $.ajax({
            dataType: "text",
            method: "POST",
            url: 'ObtenerMotoresQtyMec?id=' + this.value,
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
                columns: [{
                        field: 'IDmotor',
                        title: 'IdMotor',
                        visible: false
                    }, {
                        field: 'motor',
                        title: 'Motor',
                        type: 'text'
                    }, {
                        field: 'qtyMecanicos',
                        title: 'Mìnimo de Mecànicos Requeridos',
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
            url: 'ObtenerCantMec?id=' + this.value,
            method: "POST",
            beforeSend: function() {
            }
        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar la Cantidad de Mecánicos');
            } else {
                json = $.parseJSON(e);
                for (var i = 0; i < json.length; i++) {
                    $('#qtyMecRegis').val(json[i].cantMecReg);
                    $('#qtyAyudaReg').val(json[i].cantAyuReg);
                }
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al enviar la informacion');
            $('#closeModal').css('display', '');
        });
    });
    

    $('#bEvaluar').click(function() {
        $('#tableMotoresCapacitaMec').bootstrapTable('destroy');
        $('#tableMecanicosCapacitaMec').bootstrapTable('destroy');
        $.ajax({
            dataType: "text",
            method: "POST",
            url: 'ObtenerMotoresCapacitaMec?id=' + this.value,
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
                columns: [{
                        field: 'ID_Motor',
                        title: 'Motor',
                        visible: true
                    }, {
                        field: 'No_Req_Mec',
                        title: 'Tècnicos Requeridos',
                        visible: true
                    }, {
                        field: 'Mec_Cert',
                        title: 'Tècnicos Calificados',
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
            $('#myModal').modal('hide');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al cargar los datos');
        });

        $.ajax({
            dataType: "text",
            method: "POST",
            url: 'ObtenerMecanicoCapacita?id=' + this.value,
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
                columns: [{
                        field: 'ID_Mecanico',
                        title: 'ID',
                        visible: true
                    }, {
                        field: 'Nombre_Mecanico',
                        title: 'Nombre',
                        visible: true
                    }, {
                        field: 'Cursos_Mecanicot',
                        title: 'Cursos en los que està calificado',
                        visible: true
                    }]
            });
            $('#myModal').modal('hide');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al cargar los datos');
        });
    });
});

/*
 function cargaDatos(id) {
 alert("esta mierda no funciona")
 $('#tableQtyMecanicos').bootstrapTable('destroy');
 $('#tableMotoresCapacitaMec').bootstrapTable('destroy');
 $('#tableMecanicosCapacitaMec').bootstrapTable('destroy');
 $('#qtyMecRegis').val("");
 $('#qtyAyudaReg').val("");
 $.ajax({
 dataType: "text",
 method: "POST",
 url: 'ObtenerMotoresQtyMec?id=' + id.value,
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
 return 'Mostrando ' + /*pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' registros';
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
 field: 'IDmotor',
 title: 'IdMotor',
 visible: false
 }, {
 field: 'motor',
 title: 'Motor',
 type: 'text'
 }, {
 field: 'qtyMecanicos',
 title: 'Mìnimo de Mecànicos Requeridos',
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
 url: 'ObtenerCantMec?id=' + id.value,
 method: "POST",
 beforeSend: function() {
 }
 }).done(function(e) {
 if (e === 'error') {
 alert('Ocurrio un error al cargar la Cantidad de Mecánicos');
 } else {
 json = $.parseJSON(e);
 for (var i = 0; i < json.length; i++) {
 $('#qtyMecRegis').val(json[i].cantMecReg);
 $('#qtyAyudaReg').val(json[i].cantAyuReg);
 }
 }
 }).fail(function(e) {
 $('#headerModal').html('Ocurrio un error al enviar la informacion');
 $('#closeModal').css('display', '');
 });
 }
 */