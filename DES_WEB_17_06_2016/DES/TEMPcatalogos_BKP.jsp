
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
        <li id="tempMoto"><a  href="TEMPMotores.jsp">Motores</a></li>
        <li id="temMotoOEM"><a  href="TEMPMotoresOEM.jsp">Motores por OEM</a></li>
        <li id="participaMoto"><a  href="TEMPporcenMotDR.jsp">% Participaci&oacute;n Motores en DR</a></li>
        <li id="configMoto"><a  href="TEMPConfigMotor.jsp">Configuraci&oacute;n de Motores</a></li>
        <li id="calEvaluacion"><a  href="TEMPCalenEval.jsp">Calendario de Evaluaciones</a></li>
        <li id="geneICare"><a  href="TEMPInfantCare.jsp">Generaci&oacute;n de Infant Care</a></li>
        <li id="geneTCare"><a  href="TEMPTeenCare.jsp">Generaci&oacute;n de Teen Care</a></li>
        <li id="geneHerra"><a  href="TEMPHerramientas.jsp">Generaci&oacute;n de Herramientas</a></li>
        <li id="tempPonde"><a  href="TEMPPonderaciones.jsp">Ponderaciones</a></li>
            <%} else if (strRol.compareTo("DR") == 0 || strRol.compareTo("EV_SIN") == 0) {
                    response.sendRedirect("no_autorizado.jsp");
                }%>
    </ul>
</div>

<div class="col-xs-9" >
    <div class="tab-content" style="background-color: #ffffff;">


