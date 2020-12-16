$(function(){

    var letras = ["Letras/a.jpg","Letras/b.jpg","Letras/c.jpg","Letras/d.jpg","Letras/e.jpg"];

    var random = Math.floor(Math.random()*(5))
    
    var letraaleatoria = letras[random]
    
    $("#letrachica").attr("src",letraaleatoria)

    $(".btn").click(function(){

        if($(this).attr("src")==$('#letrachica').attr("src"))
        {alert("Tiene buena vista")}
        else
        {alert("Debe hacerse un control")}
    })


})
