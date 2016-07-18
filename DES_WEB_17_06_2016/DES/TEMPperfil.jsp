
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
     
        color:black;
    }
    .cumminsTabs li{
        color:black;
        background-color: white;

    }
    .cumminsTabs a{
        color:black;
        background-color: white;
    }
    
    
</style>


<div style=" " class="menu-lateral col-xs-2 tabs-left"> <!-- required for floating -->
    <!-- Nav tabs -->
    <ul class="nav nav-tabs tabs-left cumminsTabs" >
        <!-- <li class="active tabs-left" ><a data-toggle="tab" href="TEMPMotores.jsp">Motores</a></li> -->
        <%
            if (strRol.compareTo("ADMINISTRADOR") == 0 || strRol.compareTo("DR") == 0 || strRol.compareTo("EV_SIN") == 0) {
        %>
        <li id="perDealerT"><a  href="TEMPPerfilDealerT.jsp">Perfil Dealer</a></li>
        <li id="perDealer"><a  href="TEMPPerfilDealer.jsp">Captura de Perfil</a></li>
            <%}%>
    </ul>
</div>

<div class="col-xs-10 menu-central" style="
    margin-top: 2%;">
    <div class="tab-content" style="background-color: #ffffff;">


