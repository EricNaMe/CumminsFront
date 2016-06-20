<%@include file="TEMPcatalogos.jsp"%>    

<script src="js/calenEval.js"></script>
<script src="js/validaciones.js"></script>
<script type="text/javascript">
$(function() {
   $( "#datepicker" ).datepicker({
   	format: 'dd/mm/yyyy',
   	autoclose: true
   });

   $( "#datepicker2" ).datepicker({
   	format: 'dd/mm/yyyy',
   	autoclose: true
   });
	
   $('#datepicker').on('change', function() {
	   //$('#datepicker2').val(this.value);
	   $("#datepicker2").datepicker('setDate', this.value);
	   $("#datepicker2").val('');
   });
});
</script>

<form id="formCalenEval" >

    <br>

    <div class="row">
        <div class="col-sm-4">
            <div class="col-sm-4">
                <label  for="tipo_eval">Tipo de evaluaci&oacute;n:</label>
            </div>
            <div class="col-sm-8" >
                <select class="form-control" id ="tipo_eval" name="tipoEval" class="form-control" >
                    <option value = 'E' >Evaluaci&oacute;n</option>
                    <option value = 'P' >Pre evaluaci&oacute;n</option>
                </select>
            </div>
        </div>

        <div class="col-sm-4">
            <div class="col-sm-4">
                <label  for="revision">Revisi&oacute;n:</label>
            </div>
            <div class="col-sm-6">
                <select class="form-control" id ="revision" name="revision" class="form-control" >
                    <option value = '1' >1a</option>
                    <option value = '2' >2a</option>
                    <!--option value = '3' >3a</option-->
                </select>
            </div>    
        </div>



        <div class="col-xs-3">
            <div class="col-sm-3 text-right">
                <label for="sel1">A&ntilde;o:</label>
            </div>
            <div class="col-sm-9">
                <select class="form-control" id="anioEval" name ="anioEval">
                    <!--option>2005</option> <option>2006</option> <option>2007</option>
                    <option>2008</option> <option>2009</option> <option>2010</option>
                    <option>2011</option> <option>2012</option> <option>2013</option>
                    <option>2014</option> <option>2015</option--> <option>2016</option>
                    <option>2017</option> <option>2018</option> <option>2019</option>
                    <option>2020</option> <option>2021</option> <option>2022</option>
                    <option>2023</option> <option>2024</option> <option>2025</option>
                    <option>2026</option> <option>2027</option> <option>2028</option>
                    <option>2029</option> <option>2030</option>
                </select>
            </div>
        </div>
    </div>

		

    <br></br>
 	<div class="col-sm-4">
	    <div class="col-xs-6" style="width:47%;">
	        <label for="datepicker">Fecha inicio evaluación:</label>
	    </div>
	    <div class="col-xs-6" style="width:53%;">
	        <input id="datepicker" name="fecIniEval" class="form-control" type="text" value=""/>
	    </div>
	</div>    

<div class="col-sm-4">
    <div class="col-xs-6" style="width:47%;">
        <label for="datepicker2">Fecha fin evaluación:</label>
    </div>
    <div class="col-xs-6" style="width:53%;">
        <input id="datepicker2" name="fecFinEval" class="form-control" type="text" value=""/>
    </div>
</div> 
<div  class="col-sm-4">
        <label class="col-sm-3" >Status:</label>

        <div class="col-sm-8"> 

            <label class="radio-inline">
                <input type="radio" value="Y" name="estatus" checked id="estatus">Activo
            </label>

            <label class="radio-inline">
                <input type="radio" value="N" name="estatus" id="estatus2">Inactivo
            </label>
        </div> 

    </div> 


    <br></br>


    <div class="col-sm-3 col-sm-offset-5" >
        <input type="button" value="Guardar" id = "Guardar" class ="btn btn-default" >
    </div>


</form>

<div class="col-sm-12">
    <div class="" >
        <table class="table table-striped" id="TableCalenEval"></table>
    </div>
</div>

<%@include file="footer.jsp"%>