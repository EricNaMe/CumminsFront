    <%@include file="TEMPcatalogos.jsp"%>

        <script src="js/motorNEW.js"></script>

     <br>
        <div class="table-responsive">
            <div class="container-body" style="margin: 20px">
              	<form id= 'formMotor' method="post">
                <div class="col-sm-12" style="margin-bottom:30px;">
                    <div class="col-sm-4 form-inline">
                    	<div class="col-sm-3">
                        	<label for="motor">Motor:</label>
                        </div>
                        <div class="col-sm-8">
                       	    <input type="text" id="motor" name="motor" style="" class="form-control"/>
 						</div>                 
                    </div>
                    <div class="col-sm-3 form-inline">
                    	<div class="col-sm-4">
	                	<label for="rango">Rango:</label>
	                	</div>
	                	<div class="col-sm-8">
	                	<select id ="rango" name ="rango" class="form-control" style=""> </select>
                		</div>
                	</div>
					
					<div class="col-sm-4 form-inline">
						<div class="col-sm-2">
                        	<label for="oem">OEM:</label>
                        </div>
                        <div class="col-sm-7">
                        	<select id ="oem" name="oem" class="form-control" style="" ></select>                        
                        </div>
                    </div>
                    
                 </div>
                 <br><br>
                  <div style="margin-bottom:20px;" class="col-sm-12">
                    <div class="col-sm-6 form-inline">
                    	<div class="col-sm-3">
                       		 <label for="aplicacion">Aplicaci&oacute;n:</label>
                        </div>
                        <div class="col-sm-7">
                       		 <select id ="aplicacion" name ="aplicacion" class="form-control" style=""> </select>
                    	</div>
                    </div>
                    <div class="col-sm-6 form-inline">
                    	<div class="col-sm-6">
                        	<label for="certificado">Certificado de Emisiones:</label>
                        </div>
                        <div style="margin-left:-15px;" class="col-sm-5">
                        	<select id ="certificado" name ="certificado" class="form-control" style=""> </select>
                    	</div>
                    </div>
                </div>
                <br><br>
                   
                </form>
                
                <div style="margin-bottom:20px;" class="container-body col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form class="form-horizontal" role="form" id = 'formMotorTable'>
                       

                     
                        <div class="table-responsive" >
                            <table id="tableMotores" data-toolbar="#toolbar">
                            </table>
                        </div> 
                    </form>
                </div>
                
                 <div style="text-align:center; margin-bottom:20px;" class="col-sm-12">
                        <button type="button" id="saveMotor" class="btn btn-default">Guardar</button>
                 </div>	
  		</div>  
  </div>   
  
           
 <%@include file="footer.jsp"%>