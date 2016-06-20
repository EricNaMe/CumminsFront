    <%@include file="TEMPcatalogos.jsp"%>

        <script src="js/motor.js"></script>

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
	                	<select id ="rango" name ="rango" class="form-control" style="width:100px;"> </select>
                	</div>

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