 <%@include file="TEMPcatalogos.jsp"%>
        
        <script src="js/ponderaciones.js"></script>
        <script src="js/validaciones.js"></script>
        

         <div class="table-responsive" >
            <form  id = "formPonderacioneModulos">					
                    <div style="margin-top:20px; margin-bottom:30px;" class="col-md-12" >
						<div class="col-md-1 col-md-offset-2">
						   <label for="modulo">M&oacute;dulo:</label>
						</div>
						<div class="col-md-4">
							<input type="text" name="modulo" id="modulo" class="form-control">
						</div>                       
                        <div class="col-md-2">
                        	<input type="button" value="Agregar modulo" id ="agregarModulo" class="btn btn-default">
						</div>
                    </div>   
            </form>
       
                <div class="col-md-12" style="text-align:center;" id="toolbar">
                    <button id="guardarTablaMod" class="btn btn-default">Guardar</button>          
                </div>
                <div class="col-md-10 col-md-offset-1" style="margin-top:20px; margin-bottom:20px;">
                <table class="table table-striped" id="tablePonderacionModulos" data-toolbar="#toolbar" data-toggle="table">
                    <thead>
                        <tr >
                            <th >M&oacute;dulo</th>                  
                            <th >% M&oacute;dulo</th>
                        </tr>
                    </thead>
                </table>
 				</div>
                

            <form  id = "formSubModulos">
                <div class="row">
                    <div class="col-md-12" >
                    	<div class="col-md-5">
                    		<div class="col-md-3">
                    			<label for="listaModulos">M&oacute;dulos:</label>
                    		</div>
                    		<div class="col-md-8">
                    			<select class="form-control" id="moduloSel" name="moduloSel" ></select>
                    		</div>  
                    	</div>
                    	<div class="col-md-7">
                    		<div class="col-md-3">
                    			 <label for="subModulo">Subm&oacute;dulo:</label>
                    		</div>
                    		<div class="col-md-5">
                    			 <input type="text" name="subModulo"  id="subModulo" class="form-control">
                    		</div>
                    		<div class="col-md-3">
                    			<input type="button" value="Agregar submodulo" id ="agregarSubmodulo" class="btn btn-default">
                    		</div>                    	
                    	</div>
                    </div>
                </div>
            </form>
            
    
                <div style="margin-top:20px; margin-bottom:20px;"class="col-md-12" style="text-align:center;" id="toolbarSub">
                    <button id="guardarTablaSub" class="btn btn-default">Guardar</button>          
                </div>
                
                <div class="col-md-10 col-md-offset-1">
                <table class="table table-striped" id="tablePonderacion" data-toolbar="#toolbarSub" data-toggle="table">
                    <thead>
                        <tr >
                            <th >M&oacute;dulo</th>
                            <th >Subm&oacute;dulo</th>
                            <th >% Subm&oacute;dulo</th>
                            <th >% M&oacute;dulo</th>
                        </tr>
                    </thead>
                </table>
           		</div>
  </div>

 <%@include file="footer.jsp"%>