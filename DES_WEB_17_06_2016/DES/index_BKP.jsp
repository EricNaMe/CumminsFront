<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>Dealers Evaluation System</title>

<%
   /*
    String grupo = (String) session.getAttribute("grupo");
    if (grupo == null ||
            grupo.compareTo("") == 0) {
        // Asigna el ID de usuario
        String IDUser = request.getHeader("UID");
        IDUser = (IDUser == null) ? request.getHeader("SM_UNIVERSALID")  : IDUser.toUpperCase();
        IDUser = (IDUser == null) ? request.getHeader("SM_USER") : IDUser.toUpperCase();
        IDUser="JG706";
        session.setAttribute("wwid", IDUser);
        
        // Guarda la URI a la que se esta intentando ingresar
        String requestedURI = request.getRequestURI();

        if (IDUser == null ||
                IDUser.compareTo("") == 0) {
            // 
            if (session.getAttribute("requestedURI") != null &&
                    ((String) session.getAttribute("requestedURI")).compareTo("/DES/index_MAIN.jsp") == 0) {
                response.sendRedirect("no_autorizado.jsp");
            } else {
                // Sino esta en index.jsp entonces obtiene a que URI esta intentando ingresar el usuario
                if (request.getQueryString() != null &&
                    request.getQueryString().compareTo("") != 0) {
                    requestedURI += "?" + request.getQueryString();
                }
                session.setAttribute("requestedURI", requestedURI);
                response.sendRedirect("/DES/index_MAIN.jsp");
            }
            return;
        } else {
            session.setAttribute("wwid", IDUser);

            // Si esta en index.jsp
            if (requestedURI.compareTo("/DES/index.jsp") == 0) {
                // Si todavia no se asigna el requestedURI a la sesion
                if (session.getAttribute("requestedURI") == null ||
                        ((String) session.getAttribute("requestedURI")).compareTo("") == 0) {
                    session.setAttribute("requestedURI", requestedURI);
                }
            } else {
                // Sino esta en index.jsp entonces obtiene a que URI esta intentando ingresar el usuario
                if (request.getQueryString() != null &&
                    request.getQueryString().compareTo("") != 0) {
                    requestedURI += "?" + request.getQueryString();
                }
                session.setAttribute("requestedURI", requestedURI);
            }
            response.sendRedirect("ValidarUsuario");
            return;
        }
    }
    
    */
%>

<link rel="stylesheet" href="styles/StyleCummins.css" type="text/css" />
<link rel="stylesheet" href="styles/bootstrap.vertical-tabs.css" type="text/css" />

<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>



<script type="text/javascript">
	$(document).ready(function() {
		$("#tabs").tabs();
	});
</script>
</head>

<body>


<div class="encabezado">
   <img src="img/cummins.gif"  height="70px" alt="ABO IT" />     
   <img src="img/global.bmp"  height="70px" alt="Global" align="right" />
</div>

<div class="contenido">
	<div id="tabs" style="color:#000000">
		<ul class="nav nav-tabs">
		
			<li><a data-toggle="tab" href="#tabs-1">Perfil</a></li>
		   		
			<li><a data-toggle="tab" href="#tabs-2">Partes</a></li>
		    <li><a data-toggle="tab" href="#tabs-3">Capacitación</a></li>
		    
		    <li><a data-toggle="tab" href="#tabs-4">Herramientas & Software</a></li>
		    <li><a data-toggle="tab" href="#tabs-5">Eficiencia</a></li>
		    
		   	<li><a data-toggle="tab" href="#tabs-6">Branding</a></li>
		    <li><a data-toggle="tab" href="#tabs-7">Quejas</a></li>
		    
		    <li><a data-toggle="tab" href="#tabs-8">Desarrollo de Dealers</a></li>
		    <li><a data-toggle="tab" href="#tabs-9">Catálogos</a></li>
	   	</ul>
	   
		<div id="tabs-1">
			<iframe  style="height:300px;" name="iframe1" src="PerfilDealer.jsp"  scrolling="yes" width="100%" marginheight="0" marginwidth="0" frameborder="0"></iframe>
		</div>
		<div id="tabs-2">
			<iframe  style="height:300px;" name="iframe2" src="partes.jsp"  scrolling="yes" width="100%" marginheight="0" marginwidth="0" frameborder="0"></iframe>
		</div>
		<div id="tabs-3">CONTENIDO Capacitación</div>
		<div id="tabs-4">CONTENIDO Herramientas & Software</div>
		<div id="tabs-5">CONTENIDO Eficiencia</div>
		<div id="tabs-6">CONTENIDO Branding</div>
		<div id="tabs-7">CONTENIDO Quejas</div>
		<div id="tabs-8">CONTENIDO Desarrollo de Dealers</div>
		<div id="tabs-9">
			<iframe  style="height:450px;" name="iframe3" src="catalogos.jsp"  scrolling="no" width="100%" marginheight="0" marginwidth="0" frameborder="0"></iframe>
		</div>
	</div>
</div>

</body>

</html>
