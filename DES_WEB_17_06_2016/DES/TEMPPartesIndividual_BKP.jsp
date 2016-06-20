<%@include file="TEMPpartes.jsp"%>

      <script src="js/PartesIndividual.js"></script>
        <script src="js/validaciones.js"></script>


<br>

  <script>
  
  var idDealer="";
 /* $(function() {
    $( "#datepicker" ).datepicker({
    	format: 'dd/mm/yyyy',
    	autoclose: true
    });

    $( "#datepicker2" ).datepicker({
    	format: 'dd/mm/yyyy',
    	autoclose: true
    });

    $( "#datepicker3" ).datepicker({
    	format: 'dd/mm/yyyy',
    	autoclose: true
    });
  });*/
  function cargarFechas() {
      var tipoEval = $('#tipo_eval').val();
      var revision = $('#revision').val();
      var anio = $('#anio').val();
      if (tipoEval != '' && revision != '' && anio != '') {
          $.ajax({
              dataType: "text",
              data: {tipoEval: tipoEval, revision: revision, anio: anio},
              url: "ObtenerFechas",
              method: "GET",
              beforeSend: function() {
              }
          }).done(function(e) {
              if (e === 'error') {
                  alert('Ocurrio un error al cargar catalogo de rangos');
              } else {
                  json = $.parseJSON(e);
                  for (var i = 0; i < json.length; i++) {
                      $('#datepicker').val(json[i].fechaEval);
                      $('#datepicker2').val(json[i].fechaIni);
                      $('#datepicker3').val(json[i].fechaFin);
                  }
              }
          }).fail(function(e) {
              $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
              $('#closeModal').css('display', '');
          });
      } else {
          $('#datepicker').val('');
          $('#datepicker2').val('');
          $('#datepicker3').val('');
      }
  }
  
  </script>

		<%
            String idDealer = (String) request.getParameter("id");
            System.out.println("****ID: " + idDealer);
            if (!"".equals(idDealer) && idDealer != null) {
        %>
        <script>
       		 ObtenerPartesEval(<%=idDealer%>);
        </script>
        <%
            }
        %>


<div class="table-responsive">
    <form role="form" id="formPartes"> 
    	<h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Partes individual</h1>
			<br><br>
        <div class="row">
		    <div class="col-sm-5">
		        <div class="col-sm-4">
		            <label  for="tipo_eval">Tipo de Evaluación:</label>
		        </div>
		        <div class="col-sm-8" >
		            <select readonly style="background-color:#ffffff;" onchange="cargarFechas();" id ="tipo_eval" name="tipo_eval" class="form-control" >
		                <option></option>
		                <option value = 'E' >Evaluación</option>
		                <option value = 'P' >Pre evaluación</option>
		            </select>
		        </div>
		    </div>
		
		    <div class="col-sm-3">
		        <div class="col-sm-4">
		            <label  for="revision">Revisión:</label>
		        </div>
		        <div class="col-sm-8">
		            <select readonly style="background-color:#ffffff;" onchange="cargarFechas();" class="form-control" id ="revision" name="revision" class="form-control" >
		                <option></option>
		                <option value = '1' >1a</option>
		                <option value = '2' >2a</option>
		                <!--option value = '3' >3a</option-->
		            </select>
		        </div>    
		    </div>
		
		
		    <div class="col-xs-4">
		        <div class="col-sm-3" style="width:47%;">
		            <label for="anio">Año:</label>
		        </div>
		        <div class="col-sm-9" style="width:53%;">
		            <select readonly style="background-color:#ffffff;" onchange="cargarFechas();" class="form-control" id="anio" name="anio">
		                <!--<option></option>
		                option>2005</option> <option>2006</option> <option>2007</option>
		                <option>2008</option> <option>2009</option> <option>2010</option>
		                <option>2011</option> <option>2012</option> <option>2013</option>
		                <option>2014</option> <option>2015</option>--> <option>2016</option>
		                <option>2017</option> <option>2018</option> <option>2019</option>
		                <option>2020</option> <option>2021</option> <option>2022</option>
		                <option>2023</option> <option>2024</option> <option>2025</option>
		                <option>2026</option> <option>2027</option> <option>2028</option>
		                <option>2029</option> <option>2030</option>
		            </select>
		        </div>
		    </div>
		</div>

        <br>
        
        <!--<div class="col-sm-5">
            <div class="col-xs-6">
                <label class="" for="usr">Tipo de producto:</label>
            </div>
            <div class="col-xs-6">-->
            	<input type="hidden" class="form-control" id="tipo_producto" name="tipo_producto">
                <!--<select class="form-control" id="tipo_producto" name="tipo_producto">
                    <option>Infant Care</option>
                    <option>Teen Care</option>

                </select>
            </div>
        </div>-->

		 <div class="col-sm-5">
            <div class="col-xs-3">
                <label class="" for="usr">DR:</label>
            </div>
            <div class="col-xs-9">
                <select  class="col-md-5 form-control" id="dr" name="dr"></select>
            </div>
        </div>
        
        <div class="col-sm-3">
            <div class="col-xs-3">
                <!--<label class="" for="usr">C&oacute;digo DR:</label>-->
            </div>
            <div class="col-xs-9">
            
            	 <input class="col-md-5 form-control"  name="codigo_DR" id="codigo_DR"  type="hidden" style="background-color:#ffffff; color:#000000; width:80px;"  disabled >
                
            </div>
        </div>

        <div class="col-sm-4"> 
            <div class="col-xs-3" style="width:47%;">
                <label for="Modl">Fecha evaluaci&oacute;n:</label>
            </div>
            <div class="col-xs-9" style="width:53%;">
                <input readonly style="background-color:#ffffff;" id="datepicker" class="form-control" type="text" value="" name="fecha_eval"/>
            </div>
        </div>

        <br><br><br>

        <div class="col-sm-5">
            <div class="col-xs-3">
                <label class="" for="usr">Dealer:</label>
            </div>
            <div class="col-xs-9">
                <select  class="col-md-5 form-control" id="dealer" name ="dealer"></select>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="col-xs-3">
                <label class="" for="usr">C&oacute;digo dealer:</label>
            </div>
            <div class="col-xs-9">
               
                <input class="col-md-7 form-control"  name="sp_code" id="sp_code"  type="text" style="background-color:#ffffff;"  disabled >
            </div>
        </div>

        <div class="col-sm-4">
            <div class="col-xs-3" style="width:47%;">
                <label for="Modl">Fecha inicio evaluaci&oacute;n:</label>
            </div>
            <div class="col-xs-9" style="width:53%;">
                <input readonly style="background-color:#ffffff;" id="datepicker2" class="form-control" type="text" value="" name="fecha_ini_eval"/>
            </div>
        </div>    

        <br><br><br>

        <div class="col-sm-5">
            <div class="col-xs-3">
                <label class="" for="usr">OEM:</label>
            </div>
            <div class="col-xs-9">
              
				<input class="form-control"  name="oem" id="oem"  type="text" style="background-color:#ffffff; color:#000000"  readonly >
	         
            </div>
        </div>
        
        <div class="col-sm-3">
            <div  class="col-xs-3">
                <label class="" for="usr">Motor:</label>
            </div>
            <div class="col-xs-9">
                <select class="form-control" id="matriz" name="matriz"></select>
            </div>
        </div>

        <div style=""  class="col-sm-4">
            <div class="col-xs-3" style="width:47%;">
                <label for="Modl">Fecha fin evaluaci&oacute;n:</label>
            </div>
            <div class="col-xs-9" style="width:53%;">
                <input readonly style="background-color:#ffffff;" id="datepicker3" class="form-control" type="text" value="" name="fecha_fin_eval"/>
            </div>
        </div> 

        <!--<div class="col-sm-3">
            <div class="col-xs-4">
               <label class="" for="usr">Para:</label>
            </div>
            <div class="col-xs-8">-->
            	<input type="hidden" id="para" name="para" value="DEALER"/>
                <!--<select class="form-control" id="para">
                    <option>DEALER</option>
                </select>
            </div>
        </div>-->

        <br><br>   
        
        <input type="hidden" name="Total" id="Total">
        
    </form>
</div>

<br>


<div  class="table-responsive" style="text-align:right; padding-right:30px;">
	<p id="DispTotal" style="font-weight: bold; font-size:15px; "></p>
</div>



<table id="tableBody"  data-toggle="table"></table>

<div  class="table-responsive" style="text-align:center; padding-right:30px;">
<br>
        <button type="button" id="savePartes" class="btn btn-default">Guardar</button>
        <button type="button" id="savePartesS" class="btn btn-default">Guardar y Salir</button>
</div>
<%@include file="footer.jsp"%>
