/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
	$('#configMoto').addClass("active");

	
    $('#tableMatrizInfant').bootstrapTable({
        idField: 'idBody',
        uniqueId: 'idBody',
        pagination: false,
        clickToSelect: true,
        search: true,
        dataType: 'json',
        height: 200,
        url: 'GetMatrizInfantTeen',
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
                title: 'Agregar',
                field: 'check',
                checkbox: true

            }, {
                field: 'id',
                title: 'Id',
                visible: false
            }, {
                field: 'nombreMatrizTeenCare',
                //title: 'Matriz',
                title: 'Partes de motores'
            }, {
                field: 'para',
                title: 'para',
                visible: false

            }, {
                field: 'ultimaModificacion',
                title: 'Ultima modificacion',
                visible: false

            }]

    });


    $('#tableHerramientas').bootstrapTable({
        idField: 'idBody',
        uniqueId: 'idBody',
        pagination: false,
        search: true,
        clickToSelect: true,
        dataType: 'json',
        url: 'GetMatrizTeenCareHerramientas?id_header=0000',
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
                title: 'Agregar',
                field: 'check',
                checkbox: true

            }, {
                field: 'id',
                title: 'Id',
                visible: false
            }, {
                field: 'nombreMatrizTeenCare',
                //title: 'Matriz'
                title: 'Herramientas'
            }, {
                field: 'para',
                title: 'para',
                visible: false

            }, {
                field: 'ultimaModificacion',
                title: 'Ultima modificacion',
                visible: false
            }]

    });


    $.ajax({
        dataType: "text",
        url: "ObtenerMotores",
        method: "POST",
        beforeSend: function() {

        }

    }).done(function(e) {
        if (e === 'error') {
            alert('Ocurrio un error al cargar catalogo de motores');
        } else {
            jsonMotor = $.parseJSON(e);
            $('#motor').html($("<option></option>"));
            for (var i = 0; i < jsonMotor.length; i++) {
                $('#motor')
                        .append($("<option></option>")
                                .attr("value", jsonMotor[i].value)
                                .text(jsonMotor[i].text));
            }
        }


    })
            .fail(function(e) {
                $('#headerModal').html('Ocurrio un error al cargar catalogo de motores');
                $('#closeModal').css('display', '');
            });



    $('#tableAdminGarantias').bootstrapTable({
        idField: 'idCurso',
        uniqueId: 'idCurso',
        pagination: false,
        clickToSelect: true,
        search: true,
        dataType: 'json',
        url: 'GetCursos?id=1',
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
                title: 'Agregar',
                field: 'check',
                checkbox: true

            }, {
                field: 'idCurso',
                title: 'Id',
                visible: false
            }, {
                field: 'nombreCurso',
                title: 'Capacitación administrador de garantias'
            }]

    });

    $('#tableJefeTaller').bootstrapTable({
        idField: 'idCurso',
        uniqueId: 'idCurso',
        pagination: false,
        clickToSelect: true,
        search: true,
        dataType: 'json',
        url: 'GetCursos?id=2',
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
                title: 'Agregar',
                field: 'check',
                checkbox: true

            }, {
                field: 'idCurso',
                title: 'Id',
                visible: false
            }, {
                field: 'nombreCurso',
                title: 'Capacitación jefe de taller'
            }]

    });


    $('#tableGerenteServicios').bootstrapTable({
        idField: 'idCurso',
        uniqueId: 'idCurso',
        pagination: false,
        clickToSelect: true,
        search: true,
        dataType: 'json',
        url: 'GetCursos?id=3',
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
                title: 'Agregar',
                field: 'check',
                checkbox: true

            }, {
                field: 'idCurso',
                title: 'Id',
                visible: false
            }, {
                field: 'nombreCurso',
                title: 'Capacitación gerente de servicios'
            }]

    });



    $('#tableMecanicos').bootstrapTable({
        idField: 'idCurso',
        uniqueId: 'idCurso',
        pagination: false,
        clickToSelect: true,
        search: true,
        dataType: 'json',
        url: 'GetCursos?id=4',
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
                title: 'Agregar',
                field: 'check',
                checkbox: true

            }, {
                field: 'idCurso',
                title: 'Id',
                visible: false
            }, {
                field: 'nombreCurso',
                title: 'Capacitación mec&aacute;nicos'
            }]

    });


    $("#guardar").click(function() {

        jsonMotores = JSON.stringify($('#tableMatrizInfant').bootstrapTable('getSelections'));
        jsonHerramientas = JSON.stringify($('#tableHerramientas').bootstrapTable('getSelections'));

        jsonAdmin = JSON.stringify($('#tableAdminGarantias').bootstrapTable('getSelections'));
        jsonJefe = JSON.stringify($('#tableJefeTaller').bootstrapTable('getSelections'));
        jsonGerente = JSON.stringify($('#tableGerenteServicios').bootstrapTable('getSelections'));
        jsonMecanico = JSON.stringify($('#tableMecanicos').bootstrapTable('getSelections'));
        
  

        
        if(jsonAdmin =="[]" || jsonJefe =="[]" || jsonGerente =="[]" || jsonMecanico =="[]" || jsonMotores =="[]"|| jsonHerramientas =="[]"){
        	alert('Revise que todos los campos esten llenos o seleccionados ');
        }else{
        	
        	data = '{"motor":' + $('#motor').val() + ', "dataMotores":' + jsonMotores + ', "dataHerramientas":' + jsonHerramientas + ', "dataAdmin":' + jsonAdmin + ', "dataJefe":' + jsonJefe + ', "dataGerente":' + jsonGerente + ', "dataMecanico":' + jsonMecanico + '}';


            $.ajax({
                dataType: "text",
                url: "SaveConfMotor",
                method: "POST",
                beforeSend: function() {
                    $('#headerModal').html('Enviando Informacion...');
                    $('#closeModalEliminar').css('display', 'none');
                    $('#closeModal').css('display', 'none');
                    $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
                },
                data: {"data": data}
            }).done(function(e) {
                $('#headerModal').html(e);
                $('#closeModal').css('display', '');
                $('#tableConfigMotores').bootstrapTable('refresh');
                $('#tableConfigMotores').bootstrapTable('refresh');

            }).fail(function(e) {
                    $('#headerModal').html('Ocurrio un error al enviar la informacion');
                    $('#closeModal').css('display', '');

            });
             

            $('#tableConfigMotores').bootstrapTable('refresh');
            $('#tableConfigMotores').bootstrapTable('refresh');
        	
        }
        
    });


    $('#tableConfigMotores').bootstrapTable({
        idField: 'id_header',
        uniqueId: 'id_header',
        pagination: true,
        search: true,
        dataType: 'json',
        url: 'GetConfigMotores',
        //----------------------------
        showExport: true,
        exportTypes:['excel', 'pdf'],
        exportDataType:'all',
        exportOptions: {
            fileName: 'Motores'
        },
        //----------------------------
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
                title: 'id_header',
                field: 'id_header',
                visible: false

            },{
                title: 'id_motor',
                field: 'id_motor',
                visible: false

            }, {
                field: 'motor',
                title: 'Motor',

                
            }, {
                field: 'matriz_Infant',
                title: 'Matriz partes'
            }, {
                field: 'herramientas',
                title: 'Herramientas'

            }, {
                field: 'curso_mecanicos',
                title: 'Curso mec&aacute;nicos'

            }, {
                field: 'curso_Gte_Serv',
                title: 'Curso gerente serv.'

            }, {
                field: 'curso_Jefe_Taller',
                title: 'Curso jefe taller'

            }, {
                field: 'curso_Admin_Gar',
                title: 'Curso admin garantias'
                		
            }, {
                field: 'link',
                title: 'Editar',
                align: 'center',
                valign: 'middle',
                formatter:'EditarConfMot',
                class: 'TextFormat'
            }, {
                field: 'link',
                title: 'Eliminar',
                align: 'center',
                valign: 'middle',
                formatter:'EliminarConfMot',
                class: 'TextFormat'
            }]

    });
    

});


function EditarConfMot(value,row) {
	
	//	<img src="../img/file_edit_.png" alt="Editar" style="width:15px; height:15px;">

	 // return '<a href=EditConfigMotor.jsp?id_header='+row.id_header+'> Editar </a>';
	return '<a href=TEMPEditConfigMotor.jsp?id_header='+row.id_header+'&motor=' + row.id_motor + '>'
			+'<img src="img/file_edit.png" alt="Editar" style="width:22px; height:22px;"> </a>';
	
};


function EliminarConfMot(value,row) {
	
	//return '<a href=javascript:eliminarRegistro(' + row.id_header + ')>Eliminar</a>';
	return '<a href=javascript:eliminarRegistro(' + row.id_header + ')>'
	+'<img src="img/file_delete.png" alt="Eliminar" style="width:22px; height:22px;"> </a>';
	
	
};



function eliminarRegistro(idMotores) {
	
    $.ajax({
        dataType: "text",
        url: "EliminarConfMot?id_header=" + idMotores,
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
    
    $('#tableConfigMotores').bootstrapTable('refresh');
    $('#tableConfigMotores').bootstrapTable('refresh');

}

