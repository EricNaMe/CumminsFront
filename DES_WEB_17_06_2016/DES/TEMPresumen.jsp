
<%@include file="header.jsp"%>
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

<div class="menu-lateral col-xs-2 tabs-left"> <!-- required for floating -->
    <!-- Nav tabs -->
    <ul class="nav nav-tabs tabs-left cumminsTabs" >
        <!-- <li class="active tabs-left" ><a data-toggle="tab" href="TEMPMotores.jsp">Motores</a></li> -->

        <li id="resEval"><a  href="TEMPResumenEval.jsp">Consulta Resultados Evaluación</a></li>
        <li id="resEjec"><a  href="TEMPResumenEjecutivo.jsp">Captura Resultado Evaluación</a></li>
         
    </ul>
</div>

<div style="" class="col-xs-10 menu-central" >
    <div class="tab-content" style="background-color: #ffffff;">


