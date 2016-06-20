$(function() {
  
	
	   $('#tableBody').bootstrapTable({
	        dataType: 'json',
	        emptytext: '-',
	        //data: json.data,
	        url: 'tableBody',
	        idField: 'ID_Queja',
	        uniqueId: 'ID_Queja',
	        formatLoadingMessage: function() {
	        	$('#headerModal').html('Solicitando informacion...');
	             $('#closeModal').css('display', 'none');
	             $('#myModal').modal({keyboard: false, backdrop: 'static'}, 'show');
	            return 'Cargando...';
	        },
	        onLoadSuccess: function(){
	        	//$('#headerModal').hide();
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
	                field: 'ID_Queja',
	                title: '#',
	                type: 'text'
	            }, {
	                field: 'Queja',
	                title: 'Queja',
	                type: 'text'
	            }, {
	                field: 'Ponderacion',
	                title: '% Ponderaci&oacute;n',
	                align: 'center',
	                valign: 'middle',
	                class: 'TextFormat',
	                editable: {
	                    defaultValue: '----------',
	                    emptytext: '----------',
	                    url: 'GuardarQuejaCatalogo',
	                    type: 'text',
	                    success: function(response, newValue) {
	                    	ShowTotal();
	                    		//$('#tableTotal').bootstrapTable('refresh');
	                    		//$('#tableTotal').bootstrapTable('refresh');
	                    }
	                }
	            }, {
	                field: 'eliminar',
	                title: 'Eliminar',
	                formatter: 'linkFormatterEliminar',
	                align: 'center',
	                valign: 'middle'
	            }]
	    });
	
});