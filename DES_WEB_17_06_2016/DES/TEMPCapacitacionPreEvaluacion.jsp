     
<%@include file="TEMPcapacitacion.jsp"%>

<%
            String idDealer = (String) request.getParameter("id");
            System.out.println("****ID: " + idDealer);
            %>


   <script src="js/capacitacionPreEval.js"></script>
    
        <style>
            /*body{
                text-align: center;
            }*/
            .eficiencia-container{
                display: inline-block;
                width: 100%;
                max-width: 1100px;
                text-align: left;
            }
            .Evaluacion input{
                margin-left:-30px;
                padding:0px;
            }
            .revision {
                margin-left:0;
            }
        </style>
       
        <div class="eficiencia-container container-fluid">
         <br> 
        <h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Verificaci&oacute;n de datos</h1>
         <br><br>
<div id="printForm" style="text-align: center;">  
      
          <!-- 
            <div class="table-responsive" style="height:200px;">
                <div>
                    <div class="col-sm-6">
                        <div class="col-xs-4">
                            <label class="" for="dr">DR:</label>
                        </div>
                        <div class="col-xs-6">
                            <select readonly id="dr" name="dr" class="col-md-5 form-control" style="background-color:#ffffff;"></select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="col-xs-4">
                            <label class="" for="codigoDR">Código DR:</label>
                        </div>
                        <div class="col-xs-6">
                            <input type="text" readonly style="background-color:#ffffff;" id="codigoDR" name="codigoDR" class="col-md-2 form-control">
                        </div>
                    </div>
                </div>
                <br><br>
                <div>
                    <div class="col-sm-6">
                        <div class="col-xs-4">
                            <label class="" for="dealer">Dealer:</label>
                        </div>
                        <div class="col-xs-6">
                            <select id ="dealer" readonly name="dealer" class="col-md-5 form-control" style="background-color:#ffffff;"></select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="col-xs-4">
                            <label class="" for="codigoDeal">Código Dealer:</label>
                        </div>
                        <div class="col-xs-6">
                            <input type="text" readonly style="background-color:#ffffff;" name="codigoDeal" id="codigoDeal" class="col-md-2 form-control">
                        </div>
                    </div>
                </div>
            </div>
-->
<%@include file="CTRL_FeDrDealer.jsp"%>  
            <style>
                .tabla1 td{
                    border: solid; 
                }
                .tabla1 tr{
                    border:solid;
                }
            </style>
            
            
            
            <div class="row">
                <div class="col-lg-12" style="display:inline-block; ">

                    <table class="table tabla1" id="tableBody" data-toggle="table">
                    </table>
                </div>

            </div>
            <h4 class='text-center'>Favor de verificar los siguientes datos</h4>

            <div class="col-sm-8">
                <div class="col-xs-6">
                    <label class="" for="usr">¿Cuántos mecánicos tienen?</label>
                </div>
                <div class="col-xs-2">
                    <input type="text"  class="col-md-2 form-control" id="usr">
                </div>
            </div>
            <br></br>
            <div class="col-sm-8">
                <div class="col-xs-6">
                    <label class="" for="usr">¿Cuántos ayudantes mecánicos tienen?</label>
                </div>
                <div class="col-xs-2">
                    <input type="text"  class="col-md-2 form-control" id="usr">
                </div>
            </div>



            <br><br><br>

            <div class="row">

                <div style="display:inline-block;" class="col-md-12">
                    <div class="table-responsive" style="">
                        <table class="table table-striped" id="tableBody2" data-toggle="table">
                        </table>

                        <table class="table">
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td><button class="col-md-offset-7 btn btn-default" disabled type="button" style="border-color:#000000; color:#000000;"  id="enviar">Dar de Alta</button></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td><button class="col-md-offset-7 btn btn-default" disabled type="button"  style="border-color:#000000; color:#000000;" id="enviar">Dar de Alta</button></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td><button class="col-md-offset-7 btn btn-default" disabled type="button" style="border-color:#000000; color:#000000;"  id="enviar">Dar de Alta</button></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td><button class="col-md-offset-7 btn btn-default" disabled type="button" style="border-color:#000000; color:#000000;"  id="enviar">Dar de Alta</button></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>

            <h4 class="text-center" >Administrador de garantías</h4>
            <br><br>
            <div style="display:inline-block;" class="col-xs-7">
                <div class="col-sm-5 ">
                    <label for="sel1">Administrador de garantías:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class="col-md-5 form-control" id="adminGara" readonly>
                </div>
            </div>

            <div class="col-sm4"><button class=" btn-default" type="button"   id="enviar" >Verificado</button>      <button class=" btn-default" type="button"   id="enviar">Dar de baja</button></div>
            <br><br>

            <div style="display:inline-block;" class="col-xs-6">
                <div class="col-sm-4 ">
                    <label for="sel1">Promoción ID:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class="col-md-5 form-control" id="promId1" readonly>
                </div>
            </div>

            <div class="col-xs-6">
                <div class="col-sm-5 ">
                    <label for="sel1">Fecha de certificación:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class="col-md-5 form-control" id="fechaCer" readonly>
                </div>
            </div>


            <br><br>  <br>

            <div class="col-xs-6">
                <div class="col-sm-5 ">
                    <label for="sel1">Nombre de certificación:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class="col-md-5 form-control" id="nombreCer" readonly> 
                </div>
            </div>

            <br><br>  <br>

            <!-- div class="col-xs-7">
                <div class="col-sm-3 ">
                    <label for="sel1">Dar de alta a:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class="col-md-6 form-control" id="darAlta">
                </div>
            </div>


            <div  class="col-xs-5">
                <div class="col-sm-4 ">
                    <label for="sel1">Promoción ID:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class="col-md-5 form-control" id="promId2">
                </div>
            </div-->
            
            <table class="table">
                 <tr>
                     <td>&nbsp;<label>Dar de alta a:</label></td>
                     <td>&nbsp;</td>
                     <td>&nbsp;</td>
                     <td><button class="col-md-offset-7 btn btn-default" disabled type="button" style="border-color:#000000; color:#000000;"  id="enviar">Dar de Alta</button></td>
                 </tr>
                 <tr>
                     <td>&nbsp;<label>Promoci&oacute;n ID:</label></td>
                     <td>&nbsp;</td>
                     <td>&nbsp;</td>
                     <td><button class="col-md-offset-7 btn btn-default" disabled type="button"  style="border-color:#000000; color:#000000;" id="enviar">Dar de Alta</button></td>
                 </tr>
                 <tr>
                     <td>&nbsp;<label>Dar de alta a:</label></td>
                     <td>&nbsp;</td>
                     <td>&nbsp;</td>
                     <td><button class="col-md-offset-7 btn btn-default" disabled type="button" style="border-color:#000000; color:#000000;"  id="enviar">Dar de Alta</button></td>
                 </tr>
                 <tr>
                     <td>&nbsp;<label>Promoci&oacute;n ID:</label></td>
                     <td>&nbsp;</td>
                     <td>&nbsp;</td>
                     <td><button class="col-md-offset-7 btn btn-default" disabled type="button"  style="border-color:#000000; color:#000000;" id="enviar">Dar de Alta</button></td>
                 </tr>
             </table>


            <h4><b>Nota:</b> La certificación tiene una vigencia de 2 años. Verificar al momento de la evaluación,
                que el administrador de garantías cuente con una certificación o recertificación con fecha menor
                o igual a 3 años de la fecha de evaluar del Dealer.</h4>



            <div style="display:inline-block;" class="col-md-12">
                <div class="table-responsive" style="">
                    <table class="table table-striped" id="tableBody3" data-toggle="table">
                    </table>
                    <table class="table">
		                 <tr>
		                     <td>&nbsp;</td>
		                     <td>&nbsp;</td>
		                     <td>&nbsp;</td>
		                     <td><button class="col-md-offset-7 btn btn-default" disabled type="button" style="border-color:#000000; color:#000000;"  id="enviar">Dar de Alta</button></td>
		                 </tr>
		                 <tr>
		                     <td>&nbsp;</td>
		                     <td>&nbsp;</td>
		                     <td>&nbsp;</td>
		                     <td><button class="col-md-offset-7 btn btn-default" disabled type="button"  style="border-color:#000000; color:#000000;" id="enviar">Dar de Alta</button></td>
		                 </tr>
		             </table>
                </div>
            </div>
            <div style="display:inline-block;" class="col-md-12">
                <div class="table-responsive" style="">

                    <table class="table">
		                 <tr>
		                     <td>&nbsp;</td>
		                     <td>&nbsp;</td>
		                     <td>&nbsp;</td>
		                     <td><button class="col-md-offset-7 btn btn-default" disabled type="button" style="border-color:#000000; color:#000000;"  id="enviar">Dar de Alta</button></td>
		                 </tr>
		                 <tr>
		                     <td>&nbsp;</td>
		                     <td>&nbsp;</td>
		                     <td>&nbsp;</td>
		                     <td><button class="col-md-offset-7 btn btn-default" disabled type="button"  style="border-color:#000000; color:#000000;" id="enviar">Dar de Alta</button></td>
		                 </tr>
		             </table>
                </div>
            </div>
            
            
        </div>
        <div id="botonImprimir" class='' style="">
            <button style="text-align: center;" type="button"  class="btn btn-default"  id="btnPrint">Imprimir</button>
        </div><br><br>
        </div>
        </div>
        </div>
    </body>
</html>

