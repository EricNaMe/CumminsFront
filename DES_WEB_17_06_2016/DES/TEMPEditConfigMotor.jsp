 <%@include file="TEMPcatalogos.jsp"%>

		<script src="js/EditConfigMotor.js"></script>
		
		<!--
        <div class="row">
            <div class="col-sm-4 form-inline" >
                <label for="motor">Motor</label>
                <!-- 
                <select id ="motor" name ="motor" class="form-control" style="width:200px;"></select>
                 --><!-- 
                 <input type="hidden" name="motor" value="English">
                <input class="form-control" id="motorName" type="text" placeholder="Disabled input here..." disabled value="MOTOR">
            </div>
        </div>
		-->
		
		 <div class="row" style="padding-top:25px;">
            <div class="col-sm-5 form-inline" >
                <label for="motor">Mot&oacute;r</label>
                <select id ="motor" name ="motor" class="form-control" style="width:230px; background-color:#ffffff;"></select>
            </div>
        </div>
		<br><br>
        <div class="row">
            <div class="table-responsive col-sm-6"  >
                <table id="tableMatrizInfant"  data-height="200"></table>
            </div>
            <div class="table-responsive col-sm-6"  >
                <table id="tableHerramientas"  data-height="200"></table>
            </div>
        </div>
        
        <br><br>

        <div class="row">
            <div class="table-responsive col-sm-6"  >
                <table id="tableAdminGarantias"  data-height="200"></table>
            </div>
            <div class="table-responsive col-sm-6"  >
                <table id="tableJefeTaller"  data-height="200"></table>
            </div>
        </div>
		<br><br>
        <div class="row">
            <div class="table-responsive col-sm-6"  >
                <table id="tableGerenteServicios"  data-height="200"></table>
            </div>
            <div class="table-responsive col-sm-6"  >
                <table id="tableMecanicos"  data-height="200"></table>
            </div>
        </div>
	<br><br>
	<button id="guardar" class="btn btn-default"  >Guardar</button> 
        


 <%@include file="footer.jsp"%>