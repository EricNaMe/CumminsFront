<%@include file="TEMPcapacitacion.jsp"%>


<script src="js/capacitacionMecanico.js"></script>

<%
    String idDealer = (String) request.getParameter("id");
    System.out.println("****ID: " + idDealer);
    if (!"".equals(idDealer) && idDealer != null) {
%>
<script>
    $(function() {
       
    	$('#tableQtyMecanicos').bootstrapTable('destroy');
        $('#tableMotoresCapacitaMec').bootstrapTable('destroy');
        $('#tableMecanicosCapacitaMec').bootstrapTable('destroy');
        $('#qtyMecRegis').val("");
        $('#qtyAyudaReg').val("");
        
        $.ajax({
            dataType: "text",
            url: 'ObtenerCantMec?id=' + <%=idDealer%>,
            method: "POST",
            beforeSend: function() {
            }
        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar la Cantidad de Mecánicos');
            } else {
                json = $.parseJSON(e);
                for (var i = 0; i < json.length; i++) {
                    $('#qtyMecRegis').val(json[i].cantMecReg);
                    $('#qtyAyudaReg').val(json[i].cantAyuReg);
                    $('#tipo_eval').val(json[i].tipo_eval);
                    $('#revision').val(json[i].revision);
                    $('#anio').val(json[i].anio);
                    $('#dr').val(json[i].dr);
                    $('#codigoDR').val(json[i].dr);
                    $('#dealer').val(json[i].idDealer);
                    $('#codigoDeal').val(json[i].idDealer);
                    $('#datepicker').val(json[i].fechaEval);
                    $('#datepicker2').val(json[i].fechaIni);
                    $('#datepicker3').val(json[i].fechaFin);
 					
                    
                    cargarDR(json[i].dr);
                    cargarDealers(json[i].dr, json[i].idDealer);
                    
                    cargarTablas(json[i].idDealer);

                }
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al enviar la informacion');
            $('#closeModal').css('display', '');
        });
    });
    
    
</script>
<%
            }else if((String)session.getAttribute("bandLog")=="true"){
        %>
 		  	<script>
 		  	$( document ).ready(function() {
 		  		cargarTablas (<%=(String)session.getAttribute("strIdDealer")%>);
	  	        $('#tableQtyMecanicos').bootstrapTable('refresh');
	  	        $('#tableMotoresCapacitaMec').bootstrapTable('refresh');
	  	        $('#tableMecanicosCapacitaMec').bootstrapTable('refresh');
	  	        obtenerInsite(<%=(String)session.getAttribute("strIdDealer")%>);
 		  		
 		  	});
        	</script>
   
 		<%} %>

<br>
<div style=" position:absolute; top:20px; left:80px; height:140%; width:90%;">
    <h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Evaluaci&oacute;n mec&aacute;nicos</h1>
	</br><br>
    <form name="myform" id="myform">
        <%@include file="CTRL_FeDrDealer.jsp"%>
		<input type="hidden" name="hdnTotal" id="hdnTotal"/>
        </br>  </br>  </br> </br>  </br>  </br> </br>  </br>  </br>
        <div>
            <div class="col-md-9" >
                <label style="position:relative; top:-40px;" class="" for="qtyMecRegis"  >Cantidad de mecánicos registrados en sistema:</label>
                <input style="position:relative;width:70px; left:500px; top:-45px;"  name="qtyMecRegis" id="qtyMecRegis" type="text"  class="col-md-2 form-control" readonly  >
            </div>

        </div>
        <br></br></br>
        <div>
            <div class="col-md-9" >
                <label style="position:relative;top:-40px;" class="" for="qtyAyudaReg">Cantidad de ayudantes de mecánicos registrados en sistema:</label>
                <input style="position:relative;width:70px; left:500px; top:-45px;" type="text" name="qtyAyudaReg" id="qtyAyudaReg" class="col-md-2 form-control" id="usr" readonly >
            </div>
        </div>    
        </br>  </br>  </br>
    </form>
    <div>
        <!--<span ><a style="text-decoration: none;"><i><b>Nota: Si la cantidad de mecánicos y/o ayudantes de mecánicos no es correcta, favor de actualizar en base de datos de Promotion y en el perfil del Dealer para que la cantidad mínima de mecánicos requeridos sea correcta.</b></i> </a></span>-->
		<span ><a style="color:black;text-decoration: none; background-color:#FFFFFF;"><b>Nota:</b> Si la cantidad de mecánicos y/o ayudantes de mecánicos no es correcta, favor de actualizar en base de datos de Promotion y en el perfil del Dealer para que la cantidad mínima de mecánicos requeridos sea correcta.</a></span>
    </div>



    <div style="position:relative; display:inline-block;">
        <div class="table-responsive" style='position:relative;  height: 190px; top:30px; width:400px;' class="container" >
            <table id="tableQtyMecanicos" align="right" data-toggle="table"></table>
        </div>
    </div>

    <div style="position:relative; display:inline-block;">
        <div class="table-responsive" style='position:relative;  height: 190px; top:30px; ' >
            <table id="tableMotoresCapacitaMec" align="right" data-toggle="table"></table>
        </div>
    </div>

    <br></br>

    <!--<div class='col-sm-3'>
        <div style='display:inline-block; ' class="col-md-4">
            <button type="button" class="btn btn-default"  id="bEvaluar">Evaluar</button>
        </div>
    </div>-->

    </br>
    <div style="position:relative; left:250px; display:inline-block;">
        <div class="table-responsive container" style='position:relative;  height: 190px; top:30px; width:400px;' >
            <table id="tableMecanicosCapacitaMec" align="right" data-toggle="table"></table>
        </div>
    </div>
    <br></br>
    <div style="display:inline-block;">
        <button  type="button" class="btn btn-default"  id="bGuardar">Guardar</button>
        <button  type="button" class="btn btn-default"  id="bGuardarS">Guardar y Salir</button>
    </div> 
</div>


<%@include file="footer.jsp"%>