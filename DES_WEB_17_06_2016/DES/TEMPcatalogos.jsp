
<%@include file="header.jsp"%>
<%
	
    IDUser = request.getHeader("UID");
    alRol = com.cummins.servlets.RolUsuario.obtenerRol(IDUser);
    strSpCode = alRol[0][0];
    strRol = alRol[0][1].toUpperCase();
    strTab = alRol[0][2];
    session.setAttribute("SPCODE", strSpCode);
    
%>  	
<link rel="stylesheet" href="styles/bootstrap.vertical-tabs.css">
<style type="text/css">

    .contentTab{
        margin:0px; 
        padding-right: 0px; 
        border-spacing: 0px;
        border:0px;
    }

    .cumminsTabs{
        color:#000000;
    }
    .cumminsTabs li{
        color:#000000;
        background-color:#FFFFFF;

    }
    .cumminsTabs a{
        color:#000000;
        background-color:#FFFFFF;
    }
</style>

<div class="col-xs-3 tabs-left"> <!-- required for floating -->
    <!-- Nav tabs -->
    <ul class="nav nav-tabs tabs-left cumminsTabs" >
        <%
            if (strRol.compareTo("ADMINISTRADOR") == 0) {
        %>
        <!-- <li class="active tabs-left" ><a data-toggle="tab" href="TEMPMotores.jsp">Motores</a></li> -->
        <!--
        <li><a  href="TEMPMotores.jsp">Motores</a></li>
        <li><a  href="TEMPMotoresOEM.jsp">Motores por OEM</a></li>
        -->
        <li><a  href="TEMPMotoresNEW.jsp">Motores</a></li>
        <li><a  href="TEMPporcenMotDR.jsp">% Participaci&oacute;n Motores en DR</a></li>
        <li><a  href="TEMPConfigMotor.jsp">Configuraci&oacute;n de Motores</a></li>
        <li><a  href="TEMPCalenEval.jsp">Calendario de Evaluaciones</a></li>
        <li><a  href="TEMPInfantCare.jsp">Generaci&oacute;n de Infant Care</a></li>
        <li><a  href="TEMPTeenCare.jsp">Generaci&oacute;n de Teen Care</a></li>
        <li><a  href="TEMPHerramientas.jsp">Generaci&oacute;n de Herramientas</a></li>
        <li><a  href="TEMPPonderaciones.jsp">Ponderaciones</a></li>
        <li><a  href="TEMPPromotionImport.jsp">Carga Promotion</a></li>
        <li><a  href="TEMPCursosPromotion.jsp">Cursos Promotion</a></li>
        
        
            <%	} else if (strRol.compareTo("DR") == 0 || strRol.compareTo("EV_SIN") == 0) {
                    response.sendRedirect("no_autorizado.jsp");
                }%>
    </ul>
</div>

<div class="col-xs-9" >
    <div class="tab-content" style="background-color: #ffffff;">


