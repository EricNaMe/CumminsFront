    <%@include file="TEMPcatalogos.jsp"%>

        <script src="js/cursosPromotion.js"></script>

     <br>
        <div class="table-responsive">
            <div class="container-body" style="margin: 20px">
              	<form id= 'formMotor' method="post">
	                <div class="col-md-12">
	                	<div class="col-md-6">
	                    	<div class="col-sm-2 form-inline">
	                      	  <label for="idProg">Id Programa:</label>
	                    	</div>
	                    	<div class="col-md-4">
	                        	<input type="text" id="idProg" name="idProg" style="" class="form-control"/>
	                    	</div>
	                    	<div class="col-sm-2 form-inline">
		                		<label for="NomProg">Nombre Programa:</label>		                	 
	                		</div>
	                		<div class="col-sm-4">
	                			<input type="text" id="NomProg" name="NomProg" style="" class="form-control"/>
	                		</div>
	                    </div>
	                    <div class="col-md-6">
	                    		<div class="col-md-2">
	                   		 		<label for="status">Status:</label>
	                    		</div>
	                   		 	<div class="col-md-4">
	                   				 <select id ="status" name ="status" class="form-control" style=""> 
                        				<option value='Y'>Activo</option>
                        				<option value='N'>Inactivo</option>
                        			</select>
	                   			 </div>
	                   			 <div class="col-md-2">
				                    	<label for="puesto">Puesto:</label>
				                  </div>
	                    		  <div class="col-md-4">
	                     				<select id ="puesto" name ="puesto" class="form-control" style="width:160px;"> </select>
	                    		  </div>	                    	
	                    </div>  
	                </div>
             
               
                    <div class="col-sm-12" style="text-align:center; margin-top:20px; margin-bottom:20px;">
                        <button type="button" id="saveMotor" class="btn btn-default">Guardar</button>
                    </div>	
                
                </form>
                
                <div class="container-body col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form class="form-horizontal" role="form" id = 'formMotorTable'>
                        <div class="table-responsive" >
                            <table id="tableMotores" data-toolbar="#toolbar">
                            </table>
                        </div> 
                    </form>
                </div>
  		</div>  
  </div>   
  
           
 <%@include file="footer.jsp"%>