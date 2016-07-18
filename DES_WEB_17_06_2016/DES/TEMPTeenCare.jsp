   <%@include file="TEMPcatalogos.jsp"%>

	<script src="js/teenCare.js"></script>
    <script src="js/validaciones.js"></script>
	<br>
	
	 <style>
       table.tabla-scroll tbody,
       table.tabla-scroll thead { display: block; }
       
       table.tabla-scroll {
    /* width: 100%; */ /* Optional */
    /* border-collapse: collapse; */
    border-spacing: 0;
 
}
        
        table.tabla-scroll thead tr th { 
  		  height: 30px;
    	  line-height: 30px;
    
			}
			
		table.tabla-scroll tbody {
    	  height: 400px;
    	  overflow-y: auto;
    	  overflow-x: hidden;
			}
        </style>
        
      
            <div style="text-align:center;" class="col-md-12" >
           	    <label for="tableMatrizInfant" style="font-family: arial; font-weight: bold;">Matrices Infant Care</label>
               
            </div>
            <div style="margin-bottom:30px;" class="col-md-12">
             	<div class="col-md-6 col-md-offset-3 " >               
                    <table data-height="442"  class="tabla-scroll" id="tableMatrizInfant"></table>
                </div>
            </div>
	
            <div class="col-md-12" style="text-align:center; margin-bottom:30px;" >              
                    <button type="button" id="importar"  class="btn btn-default" >Importar</button>               
            </div>

		<br><br>
    		<div style="text-align:center; margin-bottom:30px;" class="col-md-12">
            <label class="titulo-plantilla" for="tableMatrizTeenCare" style="font-family: arial; font-weight: bold;">Matrices Teen Care</label>
            </div>
            <div style="margin-bottom:20px;" class="col-md-12">
            <table id="tableMatrizTeenCare" > </table>
            </div>
            
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
  
 <%@include file="footer.jsp"%>