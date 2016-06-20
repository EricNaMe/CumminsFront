    <%@include file="TEMPcatalogos.jsp"%>

        <script src="js/cursosPromotion.js"></script>

     <br>
        <div class="table-responsive">
            <div class="container-body" style="margin: 20px">
              	<form id= 'formMotor' method="post">
	                <div class="row">
	                    <div class="col-sm-4 form-inline">
	                        <label for="idProg">Id Programa</label>
	                        <input type="text" id="idProg" name="idProg" style="width: 150px;" class="form-control"/>
	                    </div>
	                    <div class="col-sm-3 form-inline">
		                	<label for="NomProg">Nombre Programa</label>
		                	 <input type="text" id="NomProg" name="NomProg" style="width: 150px;" class="form-control"/>
	                	</div>
	                </div>
                <div class="row">
                    <div class="col-sm-4 form-inline">
                        <label for="status">Status</label>
                        <select id ="status" name ="status" class="form-control" style="width:100px;"> 
                        	<option value='Y'>Activo</option>
                        	<option value='N'>Inactivo</option>
                        </select>
                    </div>
                    <div class="col-sm-3 form-inline">
	                	<label for="puesto">Puesto</label>
                        <select id ="puesto" name ="puesto" class="form-control" style="width:100px;"> </select>
                	</div>
				</div>
                <div class="row">
                    <div class="col-sm-2">
                        <button type="button" id="saveMotor" class="btn btn-default">Guardar</button>
                    </div>	
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