 <%@include file="TEMPcatalogos.jsp"%>
		
		<style type="text/css">
		.buttonlnk {
		    display: block;
		    width: 190px;
		    height: 37px;
		    background: #ffffff;
		    padding: 6px;
		    text-align: center;
		    border-radius: 5px;
		    border:1px #000000 solid;
		    color: #000000;
		    font-weight: bold;
		    valign:middle;
		}
		
		.buttonlnk:hover{
		    color: #808080;
		    border:1px #808080 solid;
		}
		
		</style>
  
  		<script src="js/infantCareLista.js"></script>
        <script src="js/validaciones.js"></script>
		      	
            
            	
            	
            	
            	<div style="text-align:center; margin-top:30px; margin-bottom:30px;" class="col-sm-12">
                <label class="titulo-plantilla" for="tableMatrizInfantCare">Matrices Infant Care</label>
                </div>
                
                <div style="margin-bottom:20px;" class="col-sm-12">
            	<div style="margin-left:-20px;" class="col-sm-4 col-sm-offset-5">
				<a href="TEMPInfantCareImport.jsp"  class="buttonlnk">Generar Infant Care<img style="margin-left:10px" src="img/Upload.png" alt="Upload CSV" height="25" width="25"> </a>
				</div>
				</div>
                <div class="col-sm-12">
                <table id="tableMatrizInfantCare" >

                </table>
                </div>
          

   
      <%@include file="footer.jsp"%>  
