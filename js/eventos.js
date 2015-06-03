var inicio = function()
{
	var muestraInicio = function()
	{
		$("#section1").show("slow");
		$("#section2").hide("fast");
		$("#section3").hide("fast");
	}
	var muestraActividades = function()
	{
		$("#section2").show("slow");
		$("#section1").hide("fast");
		$("#section3").hide("fast");
	}
	var muestraAcerca = function()
	{
		$("#section3").show("slow");
		$("#section2").hide("fast");
		$("#section1").hide("fast");
	}


	$("#btn_inicio").on("click", muestraInicio);
	$("#btn_Acti").on("click", muestraActividades);
	$("#btn_acerca").on("click", muestraAcerca);
}
$(document).on("ready",inicio);