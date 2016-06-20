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
<FONT COLOR="red">*Campos obligatorios</FONT>
<h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Eficiencia rescates</h1>
<br><br>
<form id="frmCheck">
    <input type='hidden' name='DispPosibleH' id='DispPosibleH'>
    <input type='hidden' name='Radios' id='Radios'>
    <%@include file="CTRL_FeDrDealer.jsp"%>  

    <br></br>
	    

    <script>

        function desaparece1() {
            //document.getElementById("divPlacas").style.display = "none";
            $('#divPlacas').css({'display':'none'});
            $('#placas').val("");
        }

        function aparece1() {
            //document.getElementById("divPlacas").style.display = "block";
            $('#divPlacas').css({'display':'block'});
        }

        function aparece2() {
            document.getElementById("divMarca").style.display = "block";
            //document.getElementById("divSerie").style.display = "block";
        }

        function desaparece2() {
            document.getElementById("divMarca").style.display = "none";
            //document.getElementById("divSerie").style.display = "none";
            $('#marca').val("");
            $('#NoSerie').val("");
        }


        function desaparece3() {
            document.getElementById("divCelular").style.display = "none";
            $('#noCelu').val("");
        }

        function aparece3() {
            document.getElementById("divCelular").style.display = "block";
        }

        function desaparece4() {
            document.getElementById("divInline").style.display = "none";
            $('#inLine').val("");
        }

        function aparece4() {
            document.getElementById("divInline").style.display = "block";
        }

        function aparece5() {
            document.getElementById("TablaPCID").style.display = "block";
        }

        function desaparece5() {
            document.getElementById("TablaPCID").style.display = "none";
        }
    </script>

    <div class="row">
        <div class="col-md-6">
            <div class="table-responsive">
                <table class="table table-striped"  data-toggle="table">
                    <thead>
                        <tr >
                            <th >Datos a evaluar</th>
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
            <div class="row">
                <div id="divPlacas" style="display:none;"class="col-sm-12">
                    <div class="col-sm-3">
                        <label   for="placas"><FONT COLOR="red">*</FONT> Placas:</label>
                    </div>
                    <div class="col-sm-3">
                        <input  type="text" class="form-control" id="placas" name="placas">
                    </div>
                    <div class="col-sm-6">
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div id="divMarca"  style="display:none;"  class="col-sm-12">
                    <div class="col-sm-3">
                        <label class=""  for="marca"><FONT COLOR="red">*</FONT> Marca:</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text"  class="form-control" id="marca" name="marca">
                    </div>
                    <div class="col-sm-3">
                        <label class="" for="NoSerie"><FONT COLOR="red">*</FONT> No. de Serie:</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text"  class="form-control" id="NoSerie" name="NoSerie">
                    </div>
                </div>
            </div>

            <br>
            <div class="row">
                <div class="col-sm-9" id="divCelular"  style="display:none;">
                    <div class="col-sm-4">
                        <label class="" for="noCelu"><FONT COLOR="red">*</FONT> Número de celular:</label>
                    </div>
                    <div class="col-sm-8">
                        <input type="text"  class="form-control" id="noCelu" name="noCelu">
                    </div>
                </div>
            </div>

            <br></br>
            <div class="row">
                <div class="col-sm-9" id="divInline" style="display:none;">
                    <div class="col-sm-7">
                        <label class="" for="inLine">¿Cuántos INLINE's tienen?</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text"  class="form-control" id="inLine" name="inLine">
                    	<h6>Campo obligatorio</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>







    <br><br>






    <div id="TablaPCID" style="display:none;">
        <div class="table-responsive"  >
            <table class="table" id='tableBody4' data-toggle="table"></table>
        </div>

    </div>


    <br></br>  


    


    <br></br>  


    <div>
        <div class="col-sm-12">
            <div class="table-responsive" style='top:0px;;' >

                <table class="table table-striped"  data-toggle="table" id='tableBody5'></table>
            </div>

        </div>




    </div>

    <br></br>
    <br></br>
    <div class="col-md-12" style="">
        <h3 style="text-align: center;">NO DISPONIBILIDADES</h3>

    </div>

    </br></br></br>
    <div>
        <div class="col-md-12" style="">
            <div class="table-responsive" style="height:400;" >


                <table id="tableBody" class="table table-striped" data-toggle='table' data-toolbar="#toolbar" ></table>



            </div>




        </div>


        <br></br>
        <br></br>
        <div class="row">
            <div style="col-sm-12">
                <h3 style="text-align: center;">RESCATES QUE EXCEDEN EL TIEMPO OBJETIVO</h3>

            </div>
        </div>    



        <div class="row">
            <div class="col-md-12" style="height:400;">
                <div class="table-responsive" style='top:0px; ' >
                    <table id="tableBody2" class="table table-striped" data-toggle='table' data-toolbar="#toolbar" ></table>
                </div>
            </div>
        </div>

        <br>
        <br>

        <div class='col-sm-4 col-sm-offset-5' style="">
            <div class="table-responsive" style='max-height: 120px; top:0px; ' >
                <table style="boder:1px solid; border-color:#DDDDDD;" border="1" bordercolor="#DDDDDD" >
                    <tr ><td style="text-align:center; font-weight: bold; font-size:15px; width:80px; border-color:#DDDDDD;" >Porcentaje Posible:</td><td> <p id="DispPosible" name='DispPosible'> </td></tr>
                    <tr ><td style="text-align:center; border-color:#DDDDDD; width:80px;">Porcentaje Obtenido:</td><td> <p id="DispTotal" name='DispTotal'> </td></tr></Table>
                    <input type ="hidden" name="Total"  id="Total"  > 
            </div>

        </div>

        <div class='col-sm-9 col-sm-offset-3' style="margin-top: 30px;">
        	<button style="" type="button" class="btn btn-default"  id="Calcular">Calcular</button>
            <button style="" type="button" class="btn btn-default"  id="enviar">Enviar evaluación</button>
            <button style="" type="button" class="btn btn-default"  id="enviarS">Enviar evaluación y Salir</button>
        </div>

</form>



<%@include file="footer.jsp"%>  
