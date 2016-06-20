	<script>

	$(function() {
		
		cargarDR(null);
				

		 $('#dr').on('change', function() {
			 
			 	$('#codigo_DR').val($('#dr').val());
			 	$("#codigoDeal").val("");
			 	
			 	cargarDealers($('#dr').val(),null);
		 		
		 });
		 
	});

	function cargarDR(drCode){
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
	                $('#dr')
	                        .append($("<option></option>")
	                                .attr("value", json[i].value)
	                                .text(json[i].text));
	            }
	            $('#dr').val(drCode);
	        }
	    }).fail(function(e) {
	                $('#headerModal').html('Ocurrio un error al enviar la informacion');
	                $('#closeModal').css('display', '');
	    });
	}

	
	function cargarDealers(drCode, sp_code){
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
	                  $('#dealer').append($("<option></option>")
	                                  .attr("value", json[i].value)
	                                  .text(json[i].text));
	                  		//oem[i]=json[i].oem;
	                  //oem[i]=json[i].oem;
	              }
	              $('#dealer').val(sp_code);
	          }
	      }).fail(function(e) {
		        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
		        $('#closeModal').css('display', '');
	      });
	}

</script>
	              
	              
	              
<div class="row">
 	<div class="col-sm-4">
		<label for="dr">DR</label>
		<select id ="dr" name="dr" class="form-control" style="width:200px;"></select>
	</div>
	<div class="col-sm-2">
    	<label for="codigo_DR">Codigo DR</label>
    	<input class="form-control"  name="codigo_DR" id="codigo_DR"  type="text" style="background-color:#ffffff; color:#000000; width:80px;"  disabled >
	</div>
</div>
      	
      	
<div class="row">  
	<div class="col-sm-4">
		<label for="dealer">Dealer</label>
		<select id ="dealer" name="dealer" class="form-control" style="width:200px;"></select>	
	</div>
	<div class="col-sm-2">
		<label for="codigoDeal">Codigo Dealer</label>
	 	<input class="form-control"  name="codigoDeal" id="codigoDeal"  type="text" style="background-color:#ffffff; color:#000000; width:80px;"  disabled >
    </div>   
</div>