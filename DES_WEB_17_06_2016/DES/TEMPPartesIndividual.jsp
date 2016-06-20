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
        $( document ).ready(function() {
       		ObtenerPartesEval(<%=idDealer%>);
       		
       		//caragarMatriz(sp_code, matrix,tipo_eval, revision, anio)
        });
        </script>
        
         <%
            }else {if((String)session.getAttribute("bandLog")=="true"){
            	System.out.println("EVENTO2");
        %>
 		  	<script>
 		  	$( document ).ready(function() {
 		  		caragarMatriz(<%=(String)session.getAttribute("strIdDealer")%>,null,'<%=(String)session.getAttribute("strTipoEval")%>', <%=(String)session.getAttribute("strRevision")%>, <%=(String)session.getAttribute("strAnio")%>);
 		  	});
        	</script>
   
 		<%} }%>
        
       


<div class="table-responsive">
    <form role="form" id="formPartes"> 
    	<h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Partes individual</h1>
			<br><br>
        <%@include file="CTRL_FeDrDealer.jsp"%>

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

      

		<div id="status_eval"></div>

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
