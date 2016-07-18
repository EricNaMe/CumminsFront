<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%

    String IDUser = request.getHeader("UID");
	session.setAttribute("WWID", IDUser.toUpperCase());
    String[][] alRol = com.cummins.servlets.RolUsuario.obtenerRol(IDUser);
    String strSpCode = alRol[0][0];
    String strRol = alRol[0][1].toUpperCase();
    String strTab = alRol[0][2];
    session.setAttribute("SPCODE", strSpCode);
    
    //String strIdDealer=(String)session.getAttribute("strIdDealer");
    //String strTipoEval=(String)session.getAttribute("strTipoEval");
    //String strRevision=(String)session.getAttribute("strRevision");
    //String strAnio= (String)session.getAttribute("strAnio");
    //String strIdDr= (String)session.getAttribute("strIdDr");
    //String bandLog= (String)session.getAttribute("bandLog");
   
%>
<html>
    <head>
        <title>Dealers Evaluation System (DES) </title>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="cummins_styles/bootstrap.min.css">
        <script src="scripts/jquery.min.js"></script>
        <script src="scripts/bootstrap.min.js"></script>
        
        <link rel="stylesheet" href="css/jquery.printpage.css" type="text/css" media="screen" />
        <script src="js/jquery.printpage.js"></script>
        <script src="js/jQuery.print.js"></script>

        <script src="scripts/jquery.dataTables.min.js"></script>
        <script src="scripts/dataTables.bootstrap.min.js"></script>
        <script src="scripts/dataTables.buttons.min.js"></script>
        <script src="scripts/buttons.bootstrap.min.js"></script>
        <script src="scripts/dataTables.select.min.js"></script>
        <script src="scripts/bootstrap-table.js"></script>
        <script src="scripts/mindmup-editabletable.js"></script>
        <script src="scripts/bootstrap-editable.js"></script>
        <script src="scripts/bootstrap-table-editable.js"></script>

        <link rel="stylesheet" href="cummins_styles/bootstrap-table.min.css">
        <link rel="stylesheet" href="cummins_styles/bootstrap-table.css">
        <link rel="stylesheet" href="cummins_styles/buttons.bootstrap.min.css">
        <link rel="stylesheet" href="cummins_styles/select.bootstrap.min.css">
        <link rel="stylesheet" href="cummins_styles/bootstrap-editable.css">

        <link rel="stylesheet" href="css/infantCare.css">
        <!-- progress bar -->
        <link rel="stylesheet" href="cummins_styles/jquery-ui.css">

        <script src="scripts/jquery-ui.js"></script>

        <!-- json serialize -->
        <script src="scripts/jquery.serialize-object.min.js"></script>

        <!-- excel export --> 
        <script type="text/javascript" src="scripts/bootstrap-table-export.js"></script>
        <script type="text/javascript" src="scripts/FileSaver.min.js"></script>
        <script type="text/javascript" src="scripts/jspdf.min.js"></script>
        <script type="text/javascript" src="scripts/jspdf.plugin.autotable.js"></script>
        <script type="text/javascript" src="scripts/tableExport.js"></script>

        <!-- DatePicker -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/css/bootstrap-datepicker.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/js/bootstrap-datepicker.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/locales/bootstrap-datepicker.es.min.js"></script>

        <link rel="stylesheet" href="styles/bootstrapmodificado.min.css">
        <!-- NS813 -->
		<link rel="stylesheet" href="styles/CMI-left-navigation-component.css">
		<link rel="stylesheet" href="styles/CMI-header-component.css">
		<link rel="stylesheet" href="styles/CMI-social-media-footer-component.css">
		<link rel="stylesheet" href="styles/CMI-banner-navigation-component.css">
		
		
		
        <style type="text/css">

            .minimal {
            top: 35px;
        	}
        	
            body {   
                background-image: #fff;
                margin:0px;
            }

            .encabezado {
                background-color:#F21E1E;
                margin-left:10px;
                margin-right:10px;
                margin-top:10px;
                margin-bottom:10px;
                border: #F21E1E 8px solid;
                border-spacing: 8px;
            }

            .contenido {
                border-radius: 5px;
                margin-top:0px;
                background-image:url('img/bg01.bmp');
                height:520px;
                margin-left:10px;
                margin-right:10px;
                margin-bottom:10px;
            }


            .TextFormat a {
                color:#000000;
                background-color: transparent;

            }

            .groupRow a{
                background-color: #D3D3D3;
            }
            .groupRow td{
                background-color: #D3D3D3;
            }


			.disabledClass{
			    pointer-events: none;
			    background-color: #CCCCCC;
			}
			
			

        </style>
    </head>

    <body>
<div style="position:fixed; width:100%; z-index:9; height:35px;" class="top">
 <a class="" style="float:right;color:#ddd; margin-top:5px;   margin-right:20px; font-weight:bold;" href="https://access.cummins.com/RC_OnlineLogin/cola/logoutend.jsp" >Cerrar Sesión</a>   		
</div>	

 <div class="header no-print col-md-12" style="">
 <div class="container-fluid"> 
 	<div class="navbar-header">
 		<div class="logo col-sm-5 col-md-4 col-lg-4">
 			<a href="http://localhost:8080/DES">
                <div class="logo_img">
                     <img src="img/cummins_logo.png" alt="logo"/>
                </div>
                <div class="sub-brand">
                     <h2>Distribution</h2>
                </div>
              
            </a>
 		
 		</div>
 		  <div style="float:right;">
                <h2 style="font-size:22px; font-size: 20px;
    			margin-top: 5px; color:white;">Sistema de Certificación de Dealers</h2>
          </div>
 	</div>
 	<nav class="main_menu col-md-10">
 		<ul id="nav" class="pull-right" style="padding-left:0px;">
 		<%
                    if (strRol.compareTo("ADMINISTRADOR") == 0 || strRol.compareTo("DR") == 0 || strRol.compareTo("EV_SIN") == 0) {
                %>
                
 		 	<li><a href="TEMPPerfilDealerT.jsp">Perfil</a></li>
         	<li class="divider"></li>
		 	<li><a href="TEMPPartesEvaluadas.jsp">Partes</a></li>
         	<li class="divider"></li>
         	<li><a href="TEMPCapacitacionEvaluar.jsp">Capacitación</a></li>
         	<li class="divider"></li>
         	<li><a href="TEMPHerramientasSoftware.jsp">Herramientas y Software</a></li>
         	<li class="divider"></li>
         	 <%
                        if (strRol.compareTo("ADMINISTRADOR") == 0 || strRol.compareTo("DR") == 0) {
                    %>
         	<li><a href="TEMPEficienciaEva.jsp">Eficiencia</a></li>
         	<li class="divider"></li>
         	<% } %>
         	<li><a href="TEMPQuejasConsultas.jsp">Quejas</a></li>
         	<li class="divider"></li>
         	<%
                   if (strRol.compareTo("ADMINISTRADOR") == 0 || strRol.compareTo("DR") == 0) {
                %>
         	<li><a href="TEMPResumenEval.jsp">Resultado Evaluación</a></li>
         	<li class="divider"></li>
         	<% }
                        if (strRol.compareTo("ADMINISTRADOR") == 0) {%>
         	<li><a href="TEMPcatalogos.jsp">Catálogos</a></li>
         	<li class="divider"></li>
         	<% }%>
                    <% } else {
                            response.sendRedirect("no_autorizado.jsp");
                        }%>
         	<li><a href="InicioSesion.jsp">Cambiar Dealer</a></li>
         	<li class="divider"></li>
         </ul>	
 	</nav>
 	  
 </div>   		
 </div>
 		
        <!--  <div class="">  -->

            <!--  <div class="encabezado">
            <a style="background-color: #F21E1E; text-align: right;" href="https://access.cummins.com/RC_OnlineLogin/cola/logoutend.jsp">Cerrar sesi&oacute;n</a>
            <br>
                <!--  
                <img src="img/cummins.gif"  height="70px" alt="ABO IT" />     
                <img src="img/global.bmp"  height="70px" alt="Global" align="right" />
                 -->
                 <img src="img/izq.png"  height="70px" alt="ABO IT" />     
                <img src="img/der.png"  height="70px" alt="Global" align="right" />
            </div>-->

           
            
            
            <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="headerModal">Enviando informacion</h4>
                        </div>
                        <div class="modal-body">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped active" role="progressbar"
                                     aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" id="closeModal" style="display: none">Close</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal" id="closeModalEliminar" style="display: none">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-content" style ="background-color: #FFFFFF; ">   
          
            
            
            

