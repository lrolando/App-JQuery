$(function(){

    var letras = ["App-JQuery/Letras/a.jpg","App-JQuery/Letras/b.jpg","App-JQuery/Letras/c.jpg","App-JQuery/Letras/d.jpg","App-JQuery/Letras/e.jpg"];

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
