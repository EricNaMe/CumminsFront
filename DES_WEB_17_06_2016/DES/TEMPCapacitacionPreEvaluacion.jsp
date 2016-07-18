     
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
            
            @media screen{
            .Oculto{
            display:none;
            }
            }
            
            @media print{
            #divInputFecha{
            margin-left:-40px;
            width:300px;
            
            }
            
            .DarAlta1{
            margin-right:120px;
            }
            
             #DarAlta2{
            margin-left:120px;
            }
            
             #DarAlta3{
            margin-right:160px;
            }
            #divPregunta1{
            margin-left:50px;
            }
            
            #divPromotion{
            margin-left:60px;
            }
            
            #divbotones{
            margin-right:80px;
            }
            
            }
        </style>
       
        <div id="" class="eficiencia-container container-fluid">
         <br> 
        <h1 id="exp" class="titulo-plantilla" style="font-family: arial;  font-weight: bold; text-align: center;">Verificaci&oacute;n de datos</h1>
         <br><br>
 

<%@include file="CTRL_FeDrDealer.jsp"%>  
       
            
            <div id="outprint" style="text-align: center;"> 
            
            <div class="Oculto">
            	<div>
     				<label>DR:&nbsp;</label><label id="drTexto"></label>
     			</div>
     		<br>
     			<div>
     				<label>Dealer:&nbsp;</label><label id="dealerTexto"></label>
     			</div>
            </div>
            
            <div class="row">
                <div class="col-lg-6 col-lg-offset-3" style="display:inline-block; ">

                    <table class="" id="tableBody" data-toggle="table">
                    </table>
                </div>

            </div>
            <h4 style="margin-bottom:10px;margin-top:20px; font-weight:bold;" class='titulo-plantilla text-center'>Favor de verificar los siguientes datos</h4>

		<div  class="col-sm-12">
            <div id="divPregunta1" class="col-sm-6">
                <div  class="col-xs-6">
                    <label   for="usr">¿Cuántos mecánicos tienen?</label>
                </div>
                <div class="col-xs-3">
                    <input  type="text"  class="form-control" id="usr">
                </div>
            </div>
         	<div class="col-sm-6">
                <div class="col-xs-8">
                    <label   for="usr">¿Cuántos ayudantes mecánicos tienen?</label>
                </div>
                <div class="col-xs-3">
                    <input  type="text"  class="form-control" id="usr">
                </div>
            </div>
        </div>  

            <br><br><br>

            <div class="row">

                <div style="display:inline-block;" class="col-md-12">
                    <div class="table-responsive" style="">
                        <table class="printSection table table-striped" id="tableBody2" data-toggle="table">
                        </table>
                        <div style="text-align:right; margin-top:20px;" class="col-md-12">
                        <div style="border-bottom:1px solid;"class="col-md-8 col-md-offset-1">
                        <a>&nbsp;</a>
                        </div>                        
                        <div id="DarAlta1" >
                       <a  class=" btn btn-default" style="border-color:#000000;margin-right:130px; color:#000000;" id="enviar">Dar de Alta</a>
                        </div>
                        </div>

                    <!--     <table class="table">
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
                        
                        </table> -->
                    </div>
                </div>

            </div>

            <h4 class="titulo-plantilla text-center" style="font-weight:bold;"  >Administrador de Garantías</h4>
            <br><br>
            <div class="col-lg-12" style="margin-bottom:10px;">
            <div style="display:inline-block;" class="col-xs-6">
                <div class="col-sm-6 ">
                    <label  for="sel1">Administrador de Garantías:</label>
                </div>
                <div class="col-sm-5">

                    <input   type="text" class="form-control" id="adminGara" readonly>
                </div>
            </div>
            
             <div style="display:inline-block;" class="col-xs-6">
                <div id="divPromotion" style="text-align:left;" class="col-sm-5 ">
                    <label  style="margin-left: 5px;" for="sel1">Promotion ID:</label>
                </div>
                <div style="margin-left: -2px;"class="col-sm-5">

                    <input  type="text" class="form-control" id="promId1" readonly>
                </div>
            </div>
            </div>

            
            <br><br>

           
			<div class="col-md-12">
            <div class="col-xs-6">
                <div class="col-sm-5 ">
                    <label for="sel1">Fecha de certificación:</label>
                </div>
                <div  style="margin-left: 42px;"class="col-sm-5">

                    <input id="divInputFecha" type="text" class=" form-control" id="fechaCer" readonly>
                </div>
            </div>

            <div class="col-xs-6">
                <div class="col-sm-5 ">
                    <label for="sel1">Nombre de certificación:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class=" form-control" id="nombreCer" readonly> 
                </div>
            </div>
            </div>
            
            <div id="divbotones" class="col-sm-11" style="text-align:right; margin-top:20px; margin-bottom:30px;">
            <button style="margin-right: 20px;" class=" btn btn-default" type="button"   id="enviar" >Verificado</button>      
            <button  class=" btn btn-default" type="button"   id="enviar">Dar de baja</button>
            </div>

            <br><br>  <br>


    
    		   <div style=" margin-top:20px; margin-bottom:20px;" class="col-md-12">
    		   			<div class="col-md-3"><label>Administrador de Garantías:</label></div>
                        <div style="border-bottom:1px solid;" class="col-md-2 ">
                        <a>&nbsp;</a>
                        </div>
                        <div class="col-md-2"><label>Promotion ID:</label></div>
                        <div style="border-bottom:1px solid;"class="col-md-2 ">
                        <a>&nbsp;</a>
                        </div>                          
                        <div id="DarAlta2" >
                       <a  class=" btn btn-default" style="border-color:#000000;margin-right:130px; color:#000000;" id="enviar">Dar de Alta</a>
                        </div>
               </div>
            <!-- <table class="table">
                 <tr>
                     <td>&nbsp;<label>Dar de alta a:</label></td>
                     <td>&nbsp;</td>
                     <td>&nbsp;</td>
                     <td><button class="col-md-offset-7 btn btn-default" disabled type="button" style="border-color:#000000; color:#000000;"  id="enviar">Dar de Alta</button></td>
                 </tr>
                 <tr>
                     <td>&nbsp;<label>Promotion ID:</label></td>
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
                     <td>&nbsp;<label>Promotion ID:</label></td>
                     <td>&nbsp;</td>
                     <td>&nbsp;</td>
                     <td><button class="col-md-offset-7 btn btn-default" disabled type="button"  style="border-color:#000000; color:#000000;" id="enviar">Dar de Alta</button></td>
                 </tr>
             </table>
			-->

			<div  class="col-md-12" style="color:gray; border:1px solid #ddd; font-size:12px; margin-bottom:20px;">
            <h4 style="font-size:12px; font-align:justify;"><b>Nota:</b> La certificación tiene una vigencia de 3 años. Verificar al momento de la evaluación,
                que el administrador de garantías cuente con una certificación o recertificación con fecha menor
                o igual a 3 años de la fecha de evaluar del Dealer.</h4>
            </div>    



            <div  style="display:inline-block;" class="col-md-12">
                <div class="col-md-8 col-md-offset-2">
                <div class="table-responsive" style="">
                    <table class="table table-striped" id="tableBody3" data-toggle="table">
                    </table>
                 </div>
                 </div>
              </div>    
                    
                 <div style="text-align:right; margin-top:20px;" class="col-md-12">
                        <div style="border-bottom:1px solid;"class="col-md-8 col-md-offset-1">
                       	 	 <a>&nbsp;</a>
                        </div>                        
                        <div id="DarAlta3" class="col-md-2">
                      		 <a  class=" btn btn-default" style="border-color:#000000;margin-right:130px; color:#000000;" id="enviar">Dar de Alta</a>
                        </div>
                  </div>  
           
       
            
            
        </div>
        <div id="botonImprimir" class='col-md-12' style="text-align:center; margin-bottom:20px;">
            <button style="text-align: center;" type="button"  class="btn btn-default no-print"  id="btnPrint2">Imprimir</button>
        </div><br><br>
        </div>
      
        </div>
        </div>
    </body>
    
 
          <script>
        $('#btnPrint2').click(function(){
        	$("#drTexto").text($("#dr option:selected").text());
        	$("#dealerTexto").text($("#dealer option:selected").text());
        	$("#fechaEvalTexto").text($("#dealer option:selected").text());
            $("#outprint").print();
       });
        </script>
    
    
</html>

