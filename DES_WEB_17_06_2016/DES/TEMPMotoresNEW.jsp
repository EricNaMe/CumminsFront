    <%@include file="TEMPcatalogos.jsp"%>

        <script src="js/motorNEW.js"></script>

     <br>
        <div class="table-responsive">
            <div class="container-body" style="margin: 20px">
              	<form id= 'formMotor' method="post">
                <div class="row">
                    <div class="col-sm-4 form-inline">
                        <label for="motor">Motor</label>
                        <input type="text" id="motor" name="motor" style="width: 150px;" class="form-control"/>
                    </div>
                    <div class="col-sm-3 form-inline">
	                	<label for="rango">Rango</label>
	                	<select id ="rango" name ="rango" class="form-control" style="width:90px;"> </select>
                	</div>
					
					<div class="col-sm-4 form-inline">
                        <label for="oem">OEM:</label>
                        <select id ="oem" name="oem" class="form-control" style="width:100px;" >  
                        </select>
                    </div>
                    
                 </div>
                 <br><br>
                  <div class="row">
                    <div class="col-sm-4 form-inline">
                        <label for="aplicacion">Aplicaci&oacute;n</label>
                        <select id ="aplicacion" name ="aplicacion" class="form-control" style="width:100px;"> </select>
                    </div>
                    <div class="col-sm-6 form-inline">
                        <label for="certificado">Certificado de Emisiones</label>
                        <select id ="certificado" name ="certificado" class="form-control" style="width:100px;"> </select>
                    </div>
                </div>
                <br><br>
                    <div class="col-sm-2">
                        <button type="button" id="saveMotor" class="btn btn-default">Guardar</button>
                    </div>	
                </form>
                <br><br>
                
                <br><br>
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