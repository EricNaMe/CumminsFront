    <%@include file="TEMPcatalogos.jsp"%>
    
        <script src="js/configMotor.js"></script>
        <br>
        <div class="container-fluid"> 
        <div style="margin-top:20px;margin-bottom:30px;" class="col-sm-12">
            <div class="col-sm-1 col-sm-offset-3" >
                <label for="motor">Motor:</label>
            </div>
            <div class="col-sm-4">    
                <select id ="motor" name ="motor" class="form-control" style=""></select>
            </div>
        </div>
        
        <style>
       table.tabla-scroll tbody,
       table.tabla-scroll thead { display: block; }
        
        table.tabla-scroll thead tr th { 
  		  height: 30px;
    	  line-height: 30px;
    
			}
			
		table.tabla-scroll tbody {
    	  height: 102px;
    	  overflow-y: auto;
    	  overflow-x: hidden;
			}
        </style>
        
        <script>
        var $table = $('table.tabla-scroll'),
        $bodyCells = $table.find('tbody tr:first').children(),
        colWidth;

    // Adjust the width of thead cells when window resizes
    $(window).resize(function() {
        // Get the tbody columns width array
        colWidth = $bodyCells.map(function() {
            return $(this).width();
        }).get();
        
        // Set the width of thead columns
        $table.find('thead tr').children().each(function(i, v) {
            $(v).width(colWidth[i]);
        });    
    }).resize(); // Trigger resize handler
        </script>
		<br><br>
        <div class="row">
            <div class="table-responsive col-sm-6 " >
                <table class="tabla-scroll" id="tableMatrizInfant"  data-height="200"></table>
            </div>
            <div class="table-responsive col-sm-6"  >
                <table class="tabla-scroll" id="tableHerramientas"  data-height="200"></table>
            </div>
        </div>
		<br><br>
        <div class="row">
            <div class="table-responsive col-sm-6 tabla-scroll"  >
                <table class="tabla-scroll" id="tableAdminGarantias"  data-height="200"></table>
            </div>
            <div class="table-responsive col-sm-6 tabla-scroll"  >
                <table class="tabla-scroll" id="tableJefeTaller"  data-height="200"></table>
            </div>
        </div>
		<br><br>
        <div class="row">
            <div class="table-responsive col-sm-6 tabla-scroll"  >
                <table class="tabla-scroll" id="tableGerenteServicios"  data-height="200"></table>
            </div>
            <div class="table-responsive col-sm-6 tabla-scroll"  >
                <table class="tabla-scroll" id="tableMecanicos"  data-height="200"></table>
            </div>
        </div>

		<div style="margin-bottom:20px; margin-top:30px;" class="col-sm-12" style="text-align:center;">
		<button id="guardar" class="btn btn-default">Guardar</button> 
        </div>
        </div>
        
        <div class="table-responsive" >
            <table class="table table-striped" id = "tableConfigMotores" data-height="450">
            </table>
        </div>

</div>
<%@include file="footer.jsp"%>