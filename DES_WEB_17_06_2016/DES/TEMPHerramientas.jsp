   <%@include file="TEMPcatalogos.jsp"%>    
   
   <style type="text/css">
		.buttonlnk {
		    width: 190px;
		    height: 37px;
		    background: #ffffff;
		    padding: 6px;
		    text-align: center;
		    border-radius: 5px;
		    color: #000000;
		    font-weight: bold;
		    valign:middle;
		}
		
		
		.buttonlnk:hover{
		    color: #808080;
		}
		
		</style>
   
        <script src="js/herramientas.js"></script>
        <script src="js/validaciones.js"></script>

         


            <!-- Fila modulo-->             
            <form id="formHerramientas">   
                <div class="col-md-12" style="margin-top:30px;">
                  	<div class="col-md-4">	            
						<div class="col-md-4">
                    		<label  for="Modl">Producto:</label>
                    	</div>
                    	<div class="col-md-8">
                    		<input type="text" id="producto" name="producto" class="form-control" style =""/>
						</div>
				 	</div>	
				 	<div class="col-md-3">
				 		<div class="col-md-6">
				 			<label  for="Modl">Revision:</label>
				 		</div>
				 		<div style="margin-top:-10px;" class="col-md-6">
				 	  		<div class="radio">
                       	 		<label class=""><input type="radio" value="1" name="revision" >1</label>
                  	  		</div>
                    		<div class="radio">
                        		<label class=""><input type="radio" value="2" name="revision" >2</label>
                    		</div>
				 		</div>				 	
				 	</div>
				 	<div class="col-md-4">
				 		<div class="col-md-3">
				 			 <label class="col-xs-1" for="Modl">A&ntilde;o:</label>
				 		 </div>
				 		 <div class="col-md-5"> 
                    		<select class="form-control" id="anio" name="anio" style="">
                       	   		 <option>2016</option>
								<option>2017</option> <option>2018</option> <option>2019</option>
								<option>2020</option> <option>2021</option> <option>2022</option>
								<option>2023</option> <option>2024</option> <option>2025</option>
								<option>2026</option> <option>2027</option> <option>2028</option>
								<option>2029</option> <option>2030</option>
                  		    </select>                  		  
				 		</div>
				 	</div>
				 	
                </div>

                <div style="margin-top:30px;" class="col-md-12"> 
                	<div class="col-md-6">
                		<div class="col-md-3">
                			 <label  for="Modl">Status dealer:</label>
                		</div>
                		<div class="col-md-8">
                			<label class=""><input type="radio" value="Y" name="statusDealer">Active</label>

                   			 <label class=""><input  type="radio" value="N" name="statusDealer">Inactive</label>
                		</div>          		
                	</div>
               
                	<div class="col-md-6">
                		<div class="col-md-4">
                			<label class="" for="Modl">Unidad de negocio:</label>
                		</div>
                		<div class="col-md-4">
                			<select id="sel1" class="form-control"  style="width: 300px;">
                  			  <option>Cummins MerCruiser Diesel</option>
                   			  <option>Egine Business</option>
						      <option>Power Generation Business</option>
               				 </select>
                		</div>                	
                	</div>             	 
                </div>
                </form>



            <!-- Fila modulo-->
            <div style="margin-top:20px; margin-bottom:20px;" class="col-md-12"> 
            	<div class="col-md-6">
            		<div class="col-md-5">
            			<label class="" for="Modl">Tipo de herramienta:</label>
            		</div>
            		<div class="col-md-5">
            		     <select class="form-control"  style="" id="sel1" >
                 		   <option>Required</option>
               			 </select>
            		</div>
            	</div>
            	<div class="col-md-6">
            		<div class="col-md-4">
            			<label class="" for="Modl">Nivel de servicio:</label>
            		</div>
            		<div class="col-md-5">
            			<select class="form-control"  style="" id="sel1" >
                   		 	<option>Required</option>
              		     </select>
            		</div>            		
            	</div>  
            </div>

		
            <div id="DivBotones" style="text-align:center;" class="col-md-12" >
                <button type="button" class="btn btn-default"  id="generar">Generar</button>
                
                <a href="TEMPHerramientasImport.jsp"  class="btn btn-default buttonlnk">Importar desde CSV<img style="margin-left:10px" src="img/Upload.png" alt="Upload CSV" height="25" width="25"> </a>
                
            </div>
        
        
        <div class="col-md-12" style="margin-top:20px;" >
            <table id="tblMatrizTeen"></table>
        </div>

   <%@include file="footer.jsp"%>    

