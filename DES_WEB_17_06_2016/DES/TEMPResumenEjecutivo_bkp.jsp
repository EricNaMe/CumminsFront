
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
<script src="js/resumenEjecutivo.js"></script>


<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>



    <%@include file="CTRL_FeDrDealer.jsp"%>


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
        <div class="row">
            <div class="col-sm-4">
                <div class="table-responsive" style="height:200px;">


                    <table class="table table-striped" data-toggle="table" id="tableRangos"></table>


                </div>
            </div>
            <div class="col-sm-4 col-sm-offset-3"  style="font-size: 16px; border-style:solid; background-color: whitesmoke; width:340px;">           

                <label style="padding-left: 5px;" for="SubPorc"><a style="color:black; text-decoration: none; text-align: justify; font-size: 14px;  font-family: arial;">Nota: El dealer podrá tramitar garantías y rescates, así como realizar reparacioones mayores solamente a unidades en las plataformas con resultado AUTORIZADO.</a> </label>

            </div>  

            <div class="col-sm-4 col-sm-offset-3"  style="font-size: 16px; border-style:solid; background-color: whitesmoke; width:340px;">           

                <label style="padding-left: 5px;" for="SubPorc"><a style="color:black; text-decoration: none; text-align: justify; font-size: 14px;  font-family: arial;">Si queda no autorizado por quejas en algún producto, quedará como NO AUTORIZADO para todos los productos.</a> </label>

            </div>  
        </div>    

        <br></br>

        <h3 class="text-center">Compromisos / comentarios generales</h3>
        <div class="col-sm-12">
            <textarea class="form-control" rows="5" id="comentaGeneral"></textarea>
        </div>

        <br><br><br><br><br><br>
        <form name="myform" id="myform">
            <div style="margin-top:40px;" class="row">
                <div class="col-sm-6">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="nombre1">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="puesto1">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="dealer1">
                        </div>
                    </div> 


                </div>

                <div class="col-sm-6">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="nombre2">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="puesto2">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="dealer2">
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
                            <input class="form-control" type="text" id="nombre3">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="puesto3">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="dealer3">
                        </div>
                    </div> 


                </div>

                <div class="col-sm-6 ">
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Nombre:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="nombre4">
                        </div>
                    </div>    
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Puesto:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="puesto4">
                        </div>
                    </div>  
                    <br><br><br>
                    <div class="col-sm-12">
                        <div class="col-sm-3">
                            <label>Dealer:</label>
                        </div>    
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="dealer4">
                        </div>
                    </div> 


                </div>

            </div>
            <br></br></br>

            <div class="col-sm-6 col-sm-offset-3">
                <div class="col-sm-12">
                    <div class="col-sm-3">
                        <label>Nombre:</label>
                    </div>    
                    <div class="col-sm-7">
                        <input class="form-control" type="text" id="nombre5">
                    </div>
                </div>    
                <br><br><br>
                <div class="col-sm-12">
                    <div class="col-sm-3">
                        <label>Puesto:</label>
                    </div>    
                    <div class="col-sm-7">
                        <input class="form-control" type="text" id="puesto5">
                    </div>
                </div>  
                <br><br><br>
                <div class="col-sm-12">
                    <div class="col-sm-3">
                        <label>Dealer:</label>
                    </div>    
                    <div class="col-sm-7">
                        <input class="form-control" type="text" id="dealer5">
                    </div>
                </div> 


            </div>
        </form>



        <div style="margin-top:40px;" class="col-sm-12">
            <div style="" class="col-sm-4">
                <button style="" type="button" class="btn-default"  id="calcular">Calcular</button>
            </div>

            <div class="col-sm-4">
                <button style="" type="button" class="btn-default"  id="enviar">Enviar Auditoria</button>
            </div>

            <div class="col-sm-4">
                <button style="" type="button" class="btn-default"  id="guardar">Guardar</button>
            </div>
        </div>

        <br></br><br>

    </div>
</body>
</html>
