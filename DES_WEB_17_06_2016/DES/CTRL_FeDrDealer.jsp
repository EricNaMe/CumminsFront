
<%

    if (!"".equals(idDealer) && idDealer != null) {
%>




<%
    }
%>


<script>

    var oem = [];
    $(function() {


    <% 
    String bandLog=(String)session.getAttribute("bandLog"); 
    if ("".equals(idDealer) || idDealer == null) { 
    	if (bandLog!="true" ){
    	
    		System.out.println("Evento DR 1");%>
        	cargarDR(null);
	    <%  
	    } else {
	    	System.out.println("Evento DR 2");
	    	String DR = (String)session.getAttribute("strIdDr");
	    	String sp_code = (String)session.getAttribute("strIdDealer");
	    	
	    	if (DR.equals(sp_code)){
	    		sp_code = null;
	    	}
	    	
	    %>
	    	
			
	    	cargarDR(<%=(String)session.getAttribute("strIdDr")%>);
	    	cargarDealers(<%=(String)session.getAttribute("strIdDr")%>,<%=sp_code%>);
	    	$('#tipo_eval').val('<%=(String)session.getAttribute("strTipoEval")%>');
	        $('#revision').val('<%=(String)session.getAttribute("strRevision")%>');
	        $('#anio').val('<%=(String)session.getAttribute("strAnio")%>');
	        cargarFechas();

    <%	} 
    }  %>

        $('#dr').on('change', function() {

            $('#codigoDR').val($('#dr').val());
            $("#codigoDeal").val("");
            if ( $("#oem").length > 0 ) {
            	$('#oem').val("");
			}
            cargarDealers($('#dr').val(), null);
            //cargarDR(null);
        });

        $('#dealer').on('change', function() {
            $("#codigoDeal").val($('#dealer').val());
        });
    });

    function cargarDR(drCode) {
    	console.log("drCode:" + drCode);
        $.ajax({
            dataType: "text",
            url: "ObtenerDR",
            method: "POST",
            beforeSend: function() {

            }
        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar catalogo de distribuidores');
            } else {
                json = $.parseJSON(e);
                $('#dr').html($("<option></option>"));
                for (var i = 0; i < json.length; i++) {
                	if(json[i].value==drCode){   
                		$('#dr')
                            .append($("<option></option>")
                                    .attr("value", json[i].value)
                                    .text(json[i].text));
                	}else if(drCode==null || drCode == ""){
                		$('#dr')
                        .append($("<option></option>")
                                .attr("value", json[i].value)
                                .text(json[i].text));
                	}
                }
            	
                $('#dr').val(drCode);
                $('#dr').val(drCode);
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al enviar la informacion');
            $('#closeModal').css('display', '');
        });
    }


    function cargarDealers(drCode, sp_code) {
        $.ajax({
            dataType: "text",
            url: "ObtenerDealer?id_dr=" + drCode,
            method: "GET",
            beforeSend: function() {

            }
        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar catalogo de rangos');
            } else {
                json = $.parseJSON(e);
                $('#dealer').html($("<option></option>"));
                for (var i = 0; i < json.length; i++) {
                   if(json[i].value== sp_code){
                	$('#dealer').append($("<option></option>")
                            .attr("value", json[i].value)
                            .text(json[i].text));
                    oem[i] = json[i].oem;
                    //oem[i]=json[i].oem;
                    if ( $("#oem").length > 0 ) {
                    	//$('#oem').val(oem[i]);
                    	$('#oem').val(json[i].oem);
					}
                   }else if(sp_code==null || drCode == ""){
                	   $('#dealer').append($("<option></option>")
                               .attr("value", json[i].value)
                               .text(json[i].text));
                       	oem[i] = json[i].oem;
                   }
                }
                $('#dealer').val(sp_code);
                $('#codigoDeal').val(sp_code);
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
            $('#closeModal').css('display', '');
        });
    }

    function cargarFechas() {
        var tipoEval = $('#tipo_eval').val();
        var revision = $('#revision').val();
        var anio = $('#anio').val();
        if (tipoEval != '' && revision != '' && anio != '') {
            $.ajax({
                dataType: "text",
                data: {tipoEval: tipoEval, revision: revision, anio: anio},
                url: "ObtenerFechas",
                method: "GET",
                beforeSend: function() {
                }
            }).done(function(e) {
                if (e === 'error') {
                    alert('Ocurrio un error al cargar catalogo de rangos');
                } else {
                    json = $.parseJSON(e);
                    for (var i = 0; i < json.length; i++) {
                        $('#datepicker').val(json[i].fechaEval);
                        $('#datepicker2').val(json[i].fechaIni);
                        $('#datepicker3').val(json[i].fechaFin);
                    }
                }
            }).fail(function(e) {
                $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
                $('#closeModal').css('display', '');
            });
        } else {
            $('#datepicker').val('');
            $('#datepicker2').val('');
            $('#datepicker3').val('');
        }
    }
</script>


<div class="row">
    <div class="col-sm-5">
        <div class="col-sm-4">
            <label  for="tipo_eval">Tipo de evaluación:</label>
        </div>
        <div class="col-sm-8" >
            <select readonly="readonly" style="background-color:#ffffff;" onchange="cargarFechas();" id ="tipo_eval" name="tipo_eval" class="form-control" >
                <option></option>
                <option value = 'E' >Evaluación</option>
                <option value = 'P' >Pre evaluación</option>
            </select>
        </div>
    </div>

    <div class="col-sm-3">
        <div class="col-sm-4">
            <label  for="revision">Revisión:</label>
        </div>
        <div class="col-sm-8">
            <select readonly style="background-color:#ffffff;" onchange="cargarFechas();" class="form-control" id ="revision" name="revision" class="form-control" >
                <option></option>
                <option value = '1' >1a</option>
                <option value = '2' >2a</option>
                <!--option value = '3' >3a</option-->
            </select>
        </div>    
    </div>


    <div class="col-xs-4">
        <div class="col-sm-3" style="width:47%;">
            <label for="anio">Año:</label>
        </div>
        <div class="col-sm-9" style="width:53%;">
            <select readonly style="background-color:#ffffff;" onchange="cargarFechas();" class="form-control" id="anio" name="anio">
                <!--<option></option>
                option>2005</option> <option>2006</option> <option>2007</option>
                <option>2008</option> <option>2009</option> <option>2010</option>
                <option>2011</option> <option>2012</option> <option>2013</option>
                <option>2014</option> <option>2015</option>--> <option>2016</option>
                <option>2017</option> <option>2018</option> <option>2019</option>
                <option>2020</option> <option>2021</option> <option>2022</option>
                <option>2023</option> <option>2024</option> <option>2025</option>
                <option>2026</option> <option>2027</option> <option>2028</option>
                <option>2029</option> <option>2030</option>
            </select>
        </div>
    </div>
</div>

<br>

<div class="col-sm-5">
    <div class="col-xs-3">
        <label class="" for="dr">DR:</label>
    </div>
    <div class="col-xs-9">
        <select readonly style="background-color:#ffffff;"  class="col-md-5 form-control" id="dr" name="dr"></select>
    </div>
</div>

<div class="col-sm-3">
    <div class="col-xs-3">
        <!--<label class="" for="codigoDR">Código DR:</label>-->
    </div>
    <div class="col-xs-9">
        <input readonly style="background-color:#ffffff;" type="hidden"  class="col-md-7 form-control" id="codigoDR" name="codigoDR">

    </div>
</div>

<div class="col-sm-4"> 
    <div class="col-xs-3" style="width:47%;">
        <label for="datepicker">Fecha evaluación:</label>
    </div>
    <div class="col-xs-9" style="width:53%;">
        <input readonly style="background-color:#ffffff;" id="datepicker" name="fecha_eval" class="form-control" type="text" value=""/>
    </div>
</div>

<br><br><br>   

<div class="col-sm-5">
    <div class="col-xs-3" >
        <label class="" for="dealer">Dealer:</label>
    </div>
    <div class="col-xs-9">
        <select readonly style="background-color:#ffffff;"  class="col-md-5 form-control" id="dealer" name="dealer"></select>
    </div>
</div>

<div class="col-sm-3">
    <div class="col-xs-3" >
        <label class="" for="codigoDeal">Código Dealer:</label>
    </div>
    <div class="col-xs-9" >
        <input readonly style="background-color:#ffffff;" type="text"  class="col-md-7 form-control" id="codigoDeal" name="codigoDeal">
    </div>
</div>

<div class="col-sm-4">
    <div class="col-xs-3" style="width:47%;">
        <label for="datepicker2">Fecha inicio evaluación:</label>
    </div>
    <div class="col-xs-9" style="width:53%;">
        <input readonly style="background-color:#ffffff;" id="datepicker2" name="fecha_ini_eval" class="form-control" type="text" value=""/>
    </div>
</div>  

<br><br><br>   

<div style="" class="col-sm-4 col-sm-offset-8">
    <div class="col-xs-3" style="width:47%;">
        <label for="datepicker3">Fecha fin evaluación:</label>
    </div>
    <div class="col-xs-9" style="width:53%;">
        <input readonly style="background-color:#ffffff;" id="datepicker3" name="fecha_fin_eval" class="form-control" type="text" value=""/>
    </div>
</div> 
