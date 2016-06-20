
 <%@include file="TEMPresumen.jsp"%>
 
<script src="js/resumenEjecutivo.js"></script>
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
<h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Resumen ejecutivo</h1>
			<br><br>
    <%@include file="CTRL_FeDrDealer.jsp"%>
<br><br>

    <div>
        <style>
            .Cabecera td{
                border:solid;
                border-color: white;
            }
            td{
                border:solid;
            }
        </style>
        <br><br><br>
        <input type="button" onclick="printNivelServivio();" value="print">
        <div class="row">
            <div class="col-sm-4">
                <div class="table-responsive" style="height:350px; width:300px;">


                    <table class="table table-striped" data-toggle="table" id="tableRangos"></table>
                </div>
            </div>
            <div class="col-sm-4 col-sm-offset-3"  style="font-size: 16px; border-style:solid; background-color: whitesmoke; width:340px;">           
                <label style="padding-left: 5px;" for="SubPorc"><a style="color:black;text-decoration: none; background-color:#FFFFFF; font-family: arial;"><b>Nota:</b> El dealer podrá tramitar garantías y rescates, así como realizar reparacioones mayores solamente a unidades en las plataformas con resultado AUTORIZADO.</a> </label>
            </div>  
            <div class="col-sm-4 col-sm-offset-3"  style="font-size: 16px; border-style:solid; background-color: whitesmoke; width:340px;">           
                <label style="padding-left: 5px;" for="SubPorc"><a style="color:black;text-decoration: none; background-color:#FFFFFF; font-family: arial;">Si queda no autorizado por quejas en algún producto, quedará como NO AUTORIZADO para todos los productos.</a> </label>
            </div>  
        </div>    
			<div id ="divTemp"></div>
        <h3 class="text-center">Compromisos / comentarios generales</h3>
        <div class="col-sm-12">
            <textarea class="form-control" rows="5" name="comentaGeneral" id="comentaGeneral"></textarea>
        </div>

        <br><br><br><br><br><br>
            <div style="margin-top:40px;" class="row">
                <div class="col-sm-6">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" name="nombre1" id="nombre1">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" name="puesto1" id="puesto1">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" name="dealer1" id="dealer1">
                        </div>
                    </div> 


                </div>

                <div class="col-sm-6">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" name="nombre2" id="nombre2">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" name="puesto2" id="puesto2">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" name="dealer2" id="dealer2">
                        </div>
                    </div> 


                </div>
            </div>
            <br></br></br>

            <div class="row">
                <div class="col-sm-6">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" name="nombre3" id="nombre3">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" name="puesto3" id="puesto3">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" name="dealer3" id="dealer3">
                        </div>
                    </div> 


                </div>

                <div class="col-sm-6 ">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" name="nombre4" id="nombre4">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" name="puesto4" id="puesto4">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" name="dealer4" id="dealer4">
                        </div>
                    </div> 
                </div>

            </div>
            <br><br><br>

            <div class="col-sm-6 col-sm-offset-3">
                <div class="col-sm-12">
                    <div class="col-sm-3">
                        <label>Nombre:</label>
                    </div>    
                    <div class="col-sm-7">
                        <input class="form-control" type="text" name="nombre5" id="nombre5">
                    </div>
                </div>    
                <br><br><br>
                <div class="col-sm-12">
                    <div class="col-sm-3">
                        <label>Puesto:</label>
                    </div>    
                    <div class="col-sm-7">
                        <input class="form-control" type="text" name="puesto5" id="puesto5">
                    </div>
                </div>  
                <br><br><br>
                <div class="col-sm-12">
                    <div class="col-sm-3">
                        <label>Dealer:</label>
                    </div>    
                    <div class="col-sm-7">
                        <input class="form-control" type="text" name="dealer5" id="dealer5">
                    </div>
                </div> 


            </div>
        </form>



        <div style="margin-top:40px;" class="col-sm-12">
            <div style="" class="col-sm-4">
                <button style="" type="button" class="btn btn-default"  id="calcular">Calcular</button>
            </div>

            <div class="col-sm-4">
                <button style="" type="button" class="btn btn-default"  id="enviar">Enviar Auditoria</button>
            </div>

            <div class="col-sm-4">
                <button style="" type="button" class="btn btn-default"  id="guardar">Guardar</button>
                <button style="" type="button" class="btn btn-default"  id="guardarS">Guardar y Salir</button>
            </div>
        </div>
        
        <br></br><br>

    </div>
</body>
</html>
