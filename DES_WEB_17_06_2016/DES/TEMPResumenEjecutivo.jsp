
 <%@include file="TEMPresumen.jsp"%>
 
<script src="js/resumenEjecutivo.js"></script>
<LINK REL="stylesheet" TYPE="text/css" MEDIA="print, handheld" HREF=styles/printable.css>
<%
    IDUser = request.getHeader("UID");
    alRol = com.cummins.servlets.RolUsuario.obtenerRol(IDUser);
    strSpCode = alRol[0][0];
    strRol = alRol[0][1].toUpperCase();
    strTab = alRol[0][2];
    session.setAttribute("SPCODE", strSpCode);
    if (strRol.compareTo("EV_SIN") == 0) {
        response.sendRedirect("no_autorizado.jsp");
    }
    String idDealer = (String) request.getParameter("id");
    System.out.println("****ID: " + idDealer);
    if (!"".equals(idDealer) && idDealer != null) {
%>
<script>
    obtenerInfo(<%=idDealer%>);
</script>
<%
    }
%>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<form name="myform" id="myform">
<input type="hidden" name="pTotal" id="pTotal"/>
<input type="hidden" name="hTotal" id="hTotal"/>
<input type="hidden" name="cTotal" id="cTotal"/>
<input type="hidden" name="eTotal" id="eTotal"/>
<input type="hidden" name="qTotal" id="qTotal"/>
<br>
<h1 class="titulo-plantilla" style="font-family: arial; font-weight: bold; text-align: center;">Resultado Evaluación</h1>
<br><br>
    <%@include file="CTRL_FeDrDealer.jsp"%>
<br><br>

 
         <div style="text-align:center;margin-bottom:20px;" class="col-sm-12">
                <button style="" type="button" class="btn btn-default"  id="calcular">Calcular</button>
         </div>
        
        
    <!--      <div style="margin-bottom:30px;" class="col-sm-12">
            <div class="col-sm-4 col-sm-offset-1">
                <div class="table-responsive" style="">


                    <table class="table table-striped" data-toggle="table" id="tableRangos"></table>
                </div>
            </div>
            <div class="col-sm-5 col-sm-offset-1"  style="font-size: 12px; margin-top:30px; border:1px solid gray;">           
                <label  for="SubPorc"><a style="color:gray;text-decoration: none;  font-family: helvetica;"><b>Nota:</b> El dealer podrá tramitar garantías y rescates, así como realizar reparaciones mayores solamente a unidades en las plataformas con resultado AUTORIZADO. Si queda no autorizado por quejas en algún producto, quedará como NO AUTORIZADO para todos los productos.</a> </label>
            </div>  
            
        </div> -->
        
          <div id="tablaNota" style="display:inline-block;"class="col-lg-12 ">
            <div  class="col-lg-5 TablaImpreso">
            <table class="tablaPonderacion "  style="border:none;">
            <thead>
            <tr>
            <td style="font-weight: bold; font-size: 14px;text-align: center;" colspan="3">Ponderación por Módulos</td>
            </tr>
            </thead>
            <tbody >
            <tr>
            <td><UL type = disk >
			<LI> </UL></UL></td>
			<td>Partes</td>
			<td>25%</td>
            </tr>
             <tr>
            <td><UL type = disk >
			<LI> </UL></UL></td>
			<td>Herramientas&nbsp;&nbsp;</td>
			<td>30%</td>
            </tr>
               <tr>
            <td><UL type = disk >
<LI> </UL></UL></td>
<td>Capacitación</td>
<td>25%</td>
            </tr>
               <tr>
            <td><UL type = disk >
<LI> </UL></UL></td>
<td>Eficiencia</td>
<td>20%</td>
            </tr>
              <tr>
            <td><UL type = disk >
<LI> </UL></UL></td>
<td>Quejas</td>
<td>% Reducido</td>
            </tr>
            
            </tbody>
            </table>
            
            
            
            
            </div>
            
             <div class="col-sm-5 col-sm-offset-1 NotaImpreso"  style="font-size: 12px; margin-top:30px; ">           
                <label  for="SubPorc"><a style="color:black;text-decoration: none;  font-family: helvetica;"><b>Nota:</b> El dealer podrá tramitar garantías y rescates, así como realizar reparaciones mayores solamente a unidades en las plataformas con resultado AUTORIZADO. <BR><BR> <b>Si queda no autorizado por quejas en algún producto, quedará como NO AUTORIZADO para todos los productos.</b></BR></BR></a> </label>
            </div>
            </div> 
        
         
         
		<div style="margin-top:30px; margin-bottom:30px;" class="col-lg-12" id="divTemp"></div>
		
		
        <h3 style="font-weight:bold;" class="text-center titulo-plantilla">Compromisos / Comentarios Generales</h3>
        <div class="col-sm-12">
            <textarea class="form-control" rows="5" name="comentaGeneral" id="comentaGeneral"></textarea>
        </div>

        <br><br><br><br><br><br>
            <div style="margin-top:40px;" class="row">
                <div class="col-sm-4">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="nombre1" id="nombre1">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="puesto1" id="puesto1">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="dealer1" id="dealer1">
                        </div>
                    </div> 


                </div>

                <div class="col-sm-4">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="nombre2" id="nombre2">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="puesto2" id="puesto2">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="dealer2" id="dealer2">
                        </div>
                    </div> 


                </div>
                
                   <div class="col-sm-4">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="nombre3" id="nombre3">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="puesto3" id="puesto3">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="dealer3" id="dealer3">
                        </div>
                    </div> 


                </div>
            </div>
            <br></br></br>

            <div class="row">
                <div class="col-sm-4">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="nombre4" id="nombre4">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="puesto4" id="puesto4">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="dealer4" id="dealer4">
                        </div>
                    </div> 


                </div>

                <div class="col-sm-4 ">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="nombre5" id="nombre5">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="puesto5" id="puesto5">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="dealer5" id="dealer5">
                        </div>
                    </div> 
                </div>
                <div class="col-sm-4 ">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="nombre6" id="nombre6">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="puesto6" id="puesto6">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="dealer6" id="dealer6">
                        </div>
                    </div> 
                </div>
                

            </div>
            <br><br><br>

          
        </form>


        <div style="margin-top:40px; margin-bottom:30px; text-align:center;" class="col-sm-12">
           
            
                <button style="" type="button" class="btn btn-default"  id="enviar">Enviar Auditoria</button>                       
                <button style="" type="button" class="btn btn-default"  id="guardar">Guardar</button>
                <button style="" type="button" class="btn btn-default"  id="guardarS">Guardar y Salir</button>
                <button class="btn btn-default" id="btnPrint2"   >Imprimir</button>
            
        </div>
        
              <style>
                .Cabecera td{
                    border:solid;
                   
                }
                
                .TablaResultados td{
                 border:solid;
                    
                }
                .Impresion-eficiencia-container{
               
                }
                
                @media screen{
                .outprint{
              			  display:none;
              			  }
                }
                
                @media print{
                td{
                border:1px solid black;
                }
                }
                
               
                
                
            
            </style>
     
        
        <br></br><br>
 
    </div>
</body>

 <div   class="outprint container-fluid ">

            <h1 id="outprint" class="text-center" ><b>Sistema de Certificación de Dealers</b></h1>
            <h2 class="text-center" >1ra. Evaluación 2016</h2>
            <h4 class="text-center" >Periodo Evaluado: Del 1ro. De Septiembre de 2015 al 30 de marzo de 2016</h4>
            <h4 class="text-center">Vigencia del Nivel Obtenido: Hasta nueva evaluación (6 meses aproximadamente)</h4>


            <br>   <br>   
            <h1 id="dealerTexto" class="text-center"><b></b></h1>
            <br><br>

            <h4 class="text-left"><b>Nivel de Servicio Obtenido</b></h4>

      
            <div class="col-md-11" id ="divTemp3"></div>
      
            <br>
            
          
          <style>
          .tablaPonderacion {
          
          }
          </style>
       
            
            <div style="display:inline-block;"class="col-lg-12">
            <div  class="col-lg-4  col-lg-offset-1 TablaImpreso">
            <table class="tablaPonderacion "  style="border:none;">
            <thead>
            <tr>
            <td style="font-weight: bold; font-size: 14px;text-align: center;"
            colspan="3">Ponderación por Módulos</td>
            </tr>
            </thead>
            <tbody >
            <tr>
            <td><UL type = disk >
<LI> </UL></UL></td>
<td>Partes</td>
<td>25%</td>
            </tr>
             <tr>
            <td><UL type = disk >
<LI> </UL></UL></td>
<td>Herramientas&nbsp;&nbsp;</td>
<td>30%</td>
            </tr>
               <tr>
            <td><UL type = disk >
<LI> </UL></UL></td>
<td>Capacitación</td>
<td>25%</td>
            </tr>
               <tr>
            <td><UL type = disk >
<LI> </UL></UL></td>
<td>Eficiencia</td>
<td>20%</td>
            </tr>
              <tr>
            <td><UL type = disk >
<LI> </UL></UL></td>
<td>Quejas</td>
<td>% Reducido</td>
            </tr>
            
            </tbody>
            </table>
            
            
            
            
            </div>
            
             <div class="col-sm-5 col-sm-offset-1 NotaImpreso"  style="font-size: 12px; margin-top:30px; ">           
                <label   for="SubPorc"><a style="color:black;text-decoration: none;  font-family: helvetica;"><b>Nota:</b> El dealer podrá tramitar garantías y rescates, así como realizar reparaciones mayores solamente a unidades en las plataformas con resultado AUTORIZADO. <BR><BR> <b>Si queda no autorizado por quejas en algún producto, quedará como NO AUTORIZADO para todos los productos.</b></BR></BR></a> </label>
            </div>
            </div> 
            
            <div class="col-md-12">
            <h2>COMPROMISOS / COMENTARIOS GENERALES:</h2>                       
            </div>
            <div class="col-md-12">
            <a></a>
            </div>
            
            <div style="margin-top:30px;" class="col-md-12">
            <h3 style="font-weight:bold;">En Partes:</h3>                       
            </div>
            <div class="col-md-12">
            <a style="color:black;">El Dealer se compromete a solicitar las piezas faltantes en un periodo no mayor a 30 días.</a>
            </div>
            <div class="col-md-12">
            <h3 style="font-weight:bold;">En Eficiencia:</h3>
            </div>
            <div class="col-md-12">
            <a style="color:black;">El tiempo de captura de reclamos de garantías podría ser mejorado, eso beneficiara en términos monetarios al Dealer. Requieren monitoreo a su administrador para lograr la mejora.
            </a>
            </div>
            
            <div style="margin-bottom:200px; margin-top:200px;" class="col-md-12">
            <h2>Firmas de acuerdo:</h2>            
            </div>
            
          
            <div style="display:inline-block;width:200px; margin-right:100px; border-bottom:1px solid;" class="col-md-3">
            <a>&nbsp;</a>
            </div>
            
             <div style="display:inline-block;  width:200px; margin-right:100px; border-bottom:1px solid;" class="col-md-3 col-md-offset-1">
            <a>&nbsp;</a>
            </div>
            
             <div style="display:inline-block;  width:200px; border-bottom:1px solid;" class="col-md-3 col-md-offset-1">
            <a>&nbsp;</a>
            </div>
            
           
            
            <div style="display:inline-block;width:200px; margin-right:100px; " class="col-md-3">
            <label id="labelNombre1"></label>
            </div>
            
            <div style="display:inline-block;  width:200px; margin-right:100px; " class="col-md-3 col-md-offset-1">
            <label id="labelNombre2"></label>
            </div>
            
            <div style="display:inline-block;  width:200px; " class="col-md-3 col-md-offset-1">
            <label id="labelNombre3"></label>
            </div>
            
            <!-- Nombre -->
            
                <div style="display:inline-block;width:200px; margin-right:100px; " class="col-md-3">
            <label id="labelPuesto1"></label>
            </div>
            
            <div style="display:inline-block;  width:200px; margin-right:100px; " class="col-md-3 col-md-offset-1">
            <label id="labelPuesto2"></label>
            </div>
            
            <div style="display:inline-block;  width:200px; " class="col-md-3 col-md-offset-1">
            <label id="labelPuesto3"></label>
            </div>
            
            <!-- Puesto -->
            
                <div style="display:inline-block;width:200px; margin-right:100px; " class="col-md-3">
            <label id="labelDealer1">
			</label>
            </div>
            
            <div style="display:inline-block;  width:200px; margin-right:100px; " class="col-md-3 col-md-offset-1">
            <label id="labelDealer2">
			</label>
            </div>
            
            <div style="display:inline-block;  width:200px; " class="col-md-3 col-md-offset-1">
            <label id="labelDealer3">
			</label>
            </div>
                        
	<!-- Dealer -->
	
	<br></br><br></br><br></br>
	
	 <div style="display:inline-block;width:200px; margin-right:100px; border-bottom:1px solid;" class="col-md-3">
            <a>&nbsp;</a>
            </div>
            
             <div style="display:inline-block;  width:200px; margin-right:100px; border-bottom:1px solid;" class="col-md-3 col-md-offset-1">
            <a>&nbsp;</a>
            </div>
            
             <div style="display:inline-block;  width:200px; border-bottom:1px solid;" class="col-md-3 col-md-offset-1">
            <a>&nbsp;</a>
            </div>
	
	
	
	<div style="display:inline-block;width:200px; margin-right:100px; " class="col-md-3">
            <label id="labelNombre4"></label>
            </div>
            
            <div style="display:inline-block;  width:200px; margin-right:100px; " class="col-md-3 col-md-offset-1">
            <label id="labelNombre5"></label>
            </div>
            
            <div style="display:inline-block;  width:200px; " class="col-md-3 col-md-offset-1">
            <label id="labelNombre6"></label>
            </div>
            
            <!-- Nombre -->
            
                <div style="display:inline-block;width:200px; margin-right:100px; " class="col-md-3">
            <label id="labelPuesto4">Gerente General</label>
            </div>
            
            <div style="display:inline-block;  width:200px; margin-right:100px; " class="col-md-3 col-md-offset-1">
            <label id="labelPuesto5">Gerente Refacciones</label>
            </div>
            
            <div style="display:inline-block;  width:200px; " class="col-md-3 col-md-offset-1">
            <label id="labelPuesto6">Gerente Servicio</label>
            </div>
            
            <!-- Puesto -->
            
                <div style="display:inline-block;width:200px; margin-right:100px; " class="col-md-3">
            <label id="labelDealer4">Kwth del Bajío Suc. San Luis
			</label>
            </div>
            
            <div style="display:inline-block;  width:200px; margin-right:100px; " class="col-md-3 col-md-offset-1">
            <label id="labelDealer5">Kwth del Bajío Suc. San Luis
			</label>
            </div>
            
            <div style="display:inline-block;  width:200px; " class="col-md-3 col-md-offset-1">
            <label id="labelDealer6">Kwth del Bajío Suc. San Luis
			</label>
            </div>
                        
	<!-- Dealer -->
	
        </div>
        
        <script>
        $('#btnPrint2').click(function(){
        $("#dealerTexto").text($("#dealer option:selected").text());
        $("#divTemp3").html($("#divTemp").html());
        $("#labelNombre1").text($("#nombre1").val());
        $("#labelNombre2").text($("#nombre2").val());
        $("#labelNombre3").text($("#nombre3").val());
        $("#labelNombre4").text($("#nombre4").val());
        $("#labelNombre5").text($("#nombre5").val());
        $("#labelNombre6").text($("#nombre6").val());
        $("#labelPuesto1").text($("#puesto1").val());
        $("#labelPuesto2").text($("#puesto2").val());
        $("#labelPuesto3").text($("#puesto3").val());
        $("#labelPuesto4").text($("#puesto4").val());
        $("#labelPuesto5").text($("#puesto5").val());
        $("#labelPuesto6").text($("#puesto6").val());
        $("#labelDealer1").text($("#dealer1").val());
        $("#labelDealer2").text($("#dealer2").val());
        $("#labelDealer3").text($("#dealer3").val());
        $("#labelDealer4").text($("#dealer4").val());
        $("#labelDealer5").text($("#dealer5").val());
        $("#labelDealer6").text($("#dealer6").val());
        
            $(".outprint").print();
       });
        </script>

</html>



