/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    $('#dealer').on('change', function() {
        $('#tableBody').bootstrapTable('destroy');
        $.ajax({
            dataType: "text",
            method: "POST",
            url: "CapacitaEvaluar",
            beforeSend: function() {
                $('#headerModal').html('Solicitando informacion...');
                $('#closeModal').css('display', 'none');
                $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
            }
        }).done(function(e) {
            json = $.parseJSON(e);
            $('#tableBody').bootstrapTable({
                dataType: 'json',
                emptytext: '-',
                data: json.data,
                idField: "id",
                uniqueId: "id",
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
                        title: 'Dealer',
                        visible: true
                    }, {
                        field: 'prod',
                        title: 'Producto',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'evalPreval',
                        title: 'Evaluación/Pre-Evaluación',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'tecSol',
                        title: 'Técnicos Solicitados',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'tecCal',
                        title: 'Técnicos Calificados',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'porcObtenido',
                        title: '% Obtenido',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'editar',
                        title: 'Editar/Consultar',
                        formatter: 'linkFormatterEdit',
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'eliminar',
                        title: 'Eliminar',
                        formatter: 'linkFormatterEliminar',
                        align: 'center',
                        valign: 'middle'
                    }]
            });
            $('#myModal').modal('hide');
        }).fail(function(e) {
            $('#closeModal').css('display', '');
            $('#headerModal').html('Ocurrio un error al cargar los datos');
        });
    });
});

function linkFormatterEdit(value, row) {
    var temp = row.prod;
    var mayus = temp.toUpperCase();
    if (mayus == "JEFE DE TALLER" || mayus == "GERENTE DE SERVICIO")
    {
        return '<a href=javascript:editarRegistro(' + row.id + ')>Doc Link</a>';
    }
    else if (mayus == "ADMINISTRADOR DE GARANTIAS")
    {
        return '<a href=javascript:editarRegistro2(' + row.id + ')>Doc Link</a>';
    }
    else
    {
        return '<a href=javascript:editarRegistro3(' + row.id + ')>Doc Link</a>';
    }
}

function editarRegistro(id) {
/*
    var form = $('<form action="TEMPCapacitacionJefeTaller.jsp" method="post">' +
            '<input type="hidden" name="id" value="' + id + '" />' +
            '</form>');
    $(form).submit();
    */
	window.location = "TEMPCapacitacionJefeTaller.jsp?idPartes=" + idPartes;
    //window.location = "Matriz.jsp?idPartes=" + idMotores;
}
function editarRegistro2(id) {
/*
    var form = $('<form action="CapacitacionAdminGarantias.jsp" method="post">' +
            '<input type="hidden" name="id" value="' + id + '" />' +
            '</form>');
    $(form).submit();
    */
    //window.location = "Matriz.jsp?idPartes=" + idMotores;
	window.location = "TEMPCapacitacionAdminGarantias.jsp?idPartes=" + idPartes;
}

function editarRegistro3(id) {
/*
    var form = $('<form action="CapacitacionAdminGarantias.jsp" method="post">' +
            '<input type="hidden" name="id" value="' + id + '" />' +
            '</form>');
    $(form).submit();
    */
    //window.location = "Matriz.jsp?idPartes=" + idMotores;
}

function linkFormatterEliminar(value, row) {
    return '<a href=javascript:eliminarRegistro("' + row.id + '")>Eliminar</a>';
}

function eliminarRegistro(id) {
    $('#tableBody').bootstrapTable('removeByUniqueId', id);
    $.ajax({
        dataType: "text",
        url: "EliminaCapaEvaluar?id=" + id,
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