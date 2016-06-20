<script>



var oem = [];;  


$('#dr').on('change', function() {
	

		$.ajax({
	          dataType: "text",
	          url: "ObtenerDealer?id_dr=" + this.value,
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
	                  oem[i]=json[i].oem;
	              }
	          }
	      }).fail(function(e) {
		        $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
		        $('#closeModal').css('display', '');
	      });
		
		
	});



</script>


<label for="dealer">Dealer</label>
<select id ="dealer" name="dealer" class="form-control" style="width:200px;"></select>

