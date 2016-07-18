<%@include file="TEMPeficiencia.jsp"%>
<%String idDealer=""; %>

<script src="js/rescates.js"></script>



<script>
    $(document).ready(function() {

        $('#dealer').on('change', function() {
            $('#codigoDeal').val(this.value);
        });
    });
</script>

<%
     idDealer = (String) request.getParameter("id");
    System.out.println("****ID: " + idDealer);
    if (!"".equals(idDealer) && idDealer != null) {
%>
<script>
		obtenerInfo(<%=idDealer%>);
</script>
<%
    }
%>

<br>

<h1 class="titulo-plantilla" style="font-family: arial;  font-weight: bold; text-align: center;">Eficiencia rescates</h1>
<br><br>
<form id="frmCheck">
    <input type='hidden' name='DispPosibleH' id='DispPosibleH'>
    <input type='hidden' name='Radios' id='Radios'>
    <%@include file="CTRL_FeDrDealer.jsp"%>  

    <br></br>
	    

    <script>

        function desaparece1() {
            //document.getElementById("divPlacas").style.display = "none";
           document.getElementById("divPlacas").style.visibility = "hidden";
            $('#placas').val("");
        }

        function aparece1() {
            //document.getElementById("divPlacas").style.display = "block";
        	document.getElementById("divPlacas").style.visibility = "visible";
        }

        function aparece2() {
            document.getElementById("divMarca").style.visibility = "visible";
            //document.getElementById("divSerie").style.display = "block";
        }

        function desaparece2() {
            document.getElementById("divMarca").style.visibility = "hidden";
            //document.getElementById("divSerie").style.display = "none";
            $('#marca').val("");
            $('#NoSerie').val("");
        }


        function desaparece3() {
            document.getElementById("divCelular").style.visibility = "hidden";
            $('#noCelu').val("");
        }

        function aparece3() {
            document.getElementById("divCelular").style.visibility = "visible";
        }

        function desaparece4() {
            document.getElementById("divInline").style.visibility = "hidden";
            $('#inLine').val("");
        }

        function aparece4() {
            document.getElementById("divInline").style.visibility = "visible";
        }

        function aparece5() {
            document.getElementById("TablaPCID").style.display = "block";
        }

        function desaparece5() {
            document.getElementById("TablaPCID").style.display = "none";
        }
    </script>

    <div class="row">
        <div style="margin-left:20px;" class="col-md-5">
            <div class="table-responsive">
                <table class="table table-striped"  data-toggle="table">
                    <thead>
                        <tr >
                            <th >Datos a Evaluar</th>
                            <th >Sí &nbsp;</th>
                            <th >No</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Camioneta (15%)</td>
                        <td>
                            <input type="radio" id="Pregunta1" name="Pregunta1" value="Y" onclick="if (this.checked) {
                                        aparece1()
                                    }" >
                        </td>
                        <td>
                            <input type="radio" id="Pregunta1" name="Pregunta1" checked value="N" onclick="if (this.checked) {
                                        desaparece1()
                                    }">
                        </td>
                    </tr>
                    <tr>
                        <td>Laptop para Rescates (5%)</td>
                        <td>
                            <input type="radio" id="Pregunta2" name="Pregunta2" value="Y"  onclick="if (this.checked) {
                                        aparece2()
                                    }" >
                        </td>
                        <td>
                            <input type="radio" id="Pregunta2" name="Pregunta2" checked value="N"  onclick="if (this.checked) {
                                        desaparece2()
                                    }">
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Celular 24/7 (5%)</td>
                        <td>
                            <input type="radio" id="Pregunta4" name="Pregunta4" value="Y" onclick="if (this.checked) {
                                        aparece3()
                                    }">
                        </td>
                        <td>
                            <input type="radio" id="Pregunta4" name="Pregunta4" checked value="N" onclick="if (this.checked) {
                                        desaparece3()
                                    }">
                        </td>
                    </tr>
                    <tr>
                        <td>Tiene al menos un conteo de calibración en Insite de Rescates (5%)</td>
                        <td>
                            <input type="radio" id="Pregunta6" name="Pregunta6"  value="Y">
                        </td>
                        <td>
                            <input type="radio" id="Pregunta6" checked name="Pregunta6" value="N">
                        </td>
                    </tr>
                    <tr>
                        <td>Tiene Inline para Rescates (5%)</td>
                        <td>
                            <input type="radio" id="Pregunta3" name="Pregunta3" value="Y">
                        </td>
                        <td>
                            <input type="radio" id="Pregunta3" name="Pregunta3" checked value="N">
                        </td>
                    </tr>
					
                    <tr>
                        <td>Tiene Insite para Rescates (5%)</td>
                        <td>
                            <input type="radio" id="Pregunta5" name="Pregunta5" value="Y" onclick="if (this.checked) {
                                        aparece5()
                                    }">
                        </td>
                        <td>
                            <input type="radio" id="Pregunta5" name="Pregunta5" checked value="N" onclick="if (this.checked) {
                                        desaparece5()
                                    }">
                        </td>
                    </tr>
                </table>
            </div>
        </div>

		<br><br>
        <div class="col-md-6" style="">
        	<div class="row"></div>
            <div style="margin-top:0px;" class="row">
                <div id="divPlacas" style="visibility:hidden;"class="col-sm-12">
                    <div class="col-sm-3">
                        <label data-toggle="tooltip" data-placement="top" title="Campo obligatorio"  for="placas"><FONT COLOR="red">*</FONT> Placas:</label>
                    </div>
                    <div class="col-sm-3">
                        <input  type="text" style="height:30px;" class="form-control" id="placas" name="placas">
                    </div>
                    <div class="col-sm-6">
                    </div>
                </div>
            </div>
            <br>
            <div style="margin-top:-10px;" class="row">
                <div id="divMarca"  style="visibility:hidden;"  class="col-sm-12">
                    <div class="col-sm-3">
                        <label data-toggle="tooltip" data-placement="top" title="Campo obligatorio" class=""  for="marca"><FONT COLOR="red">*</FONT> Marca:</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" style="height:30px;"  class="form-control" id="marca" name="marca">
                    </div>
                    <div class="col-sm-3">
                        <label data-toggle="tooltip" data-placement="top" title="Campo obligatorio" class="" for="NoSerie"><FONT COLOR="red">*</FONT> No. de Serie:</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" style="height:30px;"  class="form-control" id="NoSerie" name="NoSerie">
                    </div>
                </div>
            </div>

            <br>
            <div style="margin-top:-10px;" class="row">
                <div class="col-sm-9" id="divCelular"  style="visibility:hidden;">
                    <div class="col-sm-6">
                        <label data-toggle="tooltip" data-placement="top" title="Campo obligatorio" class="" for="noCelu"><FONT COLOR="red">*</FONT> Número de celular:</label>
                    </div>
                    <div class="col-sm-6">
                        <input style="height:30px;" type="text"  class="form-control" id="noCelu" name="noCelu">
                    </div>
                </div>
            </div>

            <br></br>
            <div class="row">
                <div class="col-sm-9" id="divInline" style="visibility:hidden;">
                    <div class="col-sm-7">
                        <label data-toggle="tooltip" data-placement="top" title="Campo obligatorio" class="" for="inLine">¿Cuántos INLINE's tienen?</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text"  class="form-control" id="inLine" name="inLine">
                    	<h6>Campo obligatorio</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="col-md-12" style="text-align:center; margin-top:20px; margin-bottom:20px;">
    <button style="" type="button" class="btn btn-default"  id="Calcular">Calcular</button>
    </div>
    
    <br><br>
    
    <div class="col-sm-12" id="TablaPCID" style="display:none; margin-bottom:30px;">
        <div class="table-responsive"  >
            <table class="table" id='tableBody4' data-toggle="table"></table>
        </div>

    </div>

    <br></br>  
 
    <div>
        <div class="col-sm-12" style="margin-bottom:20px;">
            <div class="table-responsive" style='top:0px;;' >
                <table class="table table-striped"  data-toggle="table" id='tableBody5'></table>
            </div>

        </div>
    </div>

    <br></br>
    <br></br>
    <div class="col-md-12" style="">
        <h3 class="titulo-plantilla" style="text-align: center; font-weight:bold;">No Disponibilidades</h3>

    </div>

    </br></br></br>
    
        <div class="col-md-12" style="margin-bottom:30px;">
            <div class="table-responsive" style="height:400;" >
                <table id="tableBody" class="table table-striped" data-toggle='table' data-toolbar="#toolbar" ></table>

            </div>
        </div>


        <br></br>
        <br></br>
        <div class="row">
            <div class="col-sm-12" style="">
                <h3 class="titulo-plantilla" style="text-align: center; font-weight:bold;">Rescates que exceden el tiempo objetivo</h3>

            </div>
        </div>    



        
            <div class="col-md-12" style="margin-bottom:20px; ">
                <div class="table-responsive" style='top:0px; max-height:400px; ' >
                    <table id="tableBody2" class="table table-striped" data-toggle='table' data-toolbar="#toolbar" ></table>
                </div>
            </div>
       

       

        <div class='col-sm-4 ' style="margin-left: 38.66666667%;">
            <div class="table-responsive" style='max-height: 120px; top:0px; ' >
                <table style="boder:1px solid; border-color:#DDDDDD;" border="1" bordercolor="#DDDDDD" >
                    <tr ><td style="text-align:center; font-weight: bold; font-size:12px;  border-color:#DDDDDD;" >Porcentaje Posible</td><td style="text-align:center;font-weight: bold; font-size:12px; border-color:#DDDDDD;">Porcentaje Obtenido</td></tr>
                    <tr ><td style="text-align:center;"> <p id="DispPosible" name='DispPosible'> </td><td style="text-align:center;"> <p id="DispTotal" name='DispTotal'> </td></tr></Table>
                    <input type ="hidden" name="Total"  id="Total"  > 
            </div>

        </div>

        <div class='col-sm-12' style="margin-top: 30px; margin-bottom: 30px; text-align:center;">
        	
            <button style="" type="button" class="btn btn-default"  id="enviar">Guardar</button>
         <button style="" type="button" class="btn btn-default"  id="enviarS">Guardar y Salir</button>
        </div>

</form>
<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
</script>


<%@include file="footer.jsp"%>  
