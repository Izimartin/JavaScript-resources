$(function(){
  
    $("#typed").typed({
        strings: ["ingeniero en soporte técnico","ingeniero en redes","desarrollador de páginas web"], //Strings to display when typing
        typeSpeed: 30,
        backDelay: 600,
        loop: true,
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); }
    });

    function foo(){ console.log("Callback"); }

});