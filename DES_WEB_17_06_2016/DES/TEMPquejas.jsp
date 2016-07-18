
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

<div class="menu-lateral col-xs-2 tabs-left"> <!-- required for floating -->
    <!-- Nav tabs -->
    <ul class="nav nav-tabs tabs-left cumminsTabs" >
        <%
            if (strRol.compareTo("ADMINISTRADOR") == 0 || strRol.compareTo("DR") == 0 || strRol.compareTo("EV_SIN") == 0) {
        %>
        <!-- <li class="active tabs-left" ><a data-toggle="tab" href="TEMPMotores.jsp">Motores</a></li> -->
        <li id="quejasCons"><a  href="TEMPQuejasConsultas.jsp">Consulta de Quejas</a></li>
            <%
                if (strRol.compareTo("ADMINISTRADOR") == 0 || strRol.compareTo("DR") == 0) {
            %>
        <li id="quejasCapt"><a  href="TEMPQuejasCaptura.jsp">Captura de Quejas</a></li>
        <li id="quejasCata"><a  href="TEMPQuejasCatalogo.jsp">Cat&aacute;logo</a></li>
            <%}%>
            <%}%>
    </ul>
</div>

<div class="menu-central col-xs-10" style=" text-align:center;" >
    <div class="tab-content" style="background-color: #ffffff;">


