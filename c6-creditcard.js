$(document).ready(function(){
    $("#acqua").click(function() {
    $("#background").removeClass("cartao-background");
    $("#background").removeClass("cartoes-backgroundrainbow");
    $("#background").removeClass("cartoes-backgroundgold");
    $("#background").removeClass("cartoes-backgroundspice");
    $("#background").removeClass("cartoes-backgroundsunset");
    $("#background").removeClass("cartoes-backgroundboreal");
    $("#background").removeClass("cartoes-backgroundcarbon");
    $("#background").addClass("cartoes-backgroundacqua");
    var image = document.getElementById('cartaoimg');
                image.src = "./Images/Credit-Card/acqua..webp";
    $("#cartaoimg").removeClass("animation");
    setTimeout(() => { $("#cartaoimg").addClass("animation"); }, 500);
    });
   });
   $(document).ready(function(){
    $("#rainbow").click(function() {
        $("#background").removeClass("cartao-background");
    $("#background").removeClass("cartoes-backgroundacqua");
    $("#background").removeClass("cartoes-backgroundgold");
    $("#background").removeClass("cartoes-backgroundspice");
    $("#background").removeClass("cartoes-backgroundsunset");
    $("#background").removeClass("cartoes-backgroundboreal");
    $("#background").removeClass("cartoes-backgroundcarbon");
    $("#background").addClass("cartoes-backgroundrainbow"); 
    var image = document.getElementById('cartaoimg');
                image.src = "./Images/Credit-Card/rainbow.webp";
    $("#cartaoimg").removeClass("animation");
    setTimeout(() => {$("#cartaoimg").addClass("animation");}, 500);
    });
   });
   $(document).ready(function(){
    $("#gold").click(function() {
        $("#background").removeClass("cartao-background");
    $("#background").removeClass("cartoes-backgroundrainbow");
    $("#background").removeClass("cartoes-backgroundacqua");
    $("#background").removeClass("cartoes-backgroundspice");
    $("#background").removeClass("cartoes-backgroundsunset");
    $("#background").removeClass("cartoes-backgroundboreal");
    $("#background").removeClass("cartoes-backgroundcarbon");
    $("#background").addClass("cartoes-backgroundgold");
    var image = document.getElementById('cartaoimg');
                image.src = "./Images/Credit-Card/gold.webp";
                $("#cartaoimg").removeClass("animation");
    setTimeout(() => {$("#cartaoimg").addClass("animation");}, 500);
    });
   });
   $(document).ready(function(){
    $("#spice").click(function() {
        $("#background").removeClass("cartao-background");
    $("#background").removeClass("cartoes-backgroundrainbow");
    $("#background").removeClass("cartoes-backgroundgold");
    $("#background").removeClass("cartoes-backgroundacqua");
    $("#background").removeClass("cartoes-backgroundsunset");
    $("#background").removeClass("cartoes-backgroundboreal");
    $("#background").removeClass("cartoes-backgroundcarbon");
    $("#background").addClass("cartoes-backgroundspice");
    var image = document.getElementById('cartaoimg');
                image.src = "./Images/Credit-Card/spice.webp";
                $("#cartaoimg").removeClass("animation");
                setTimeout(() => {$("#cartaoimg").addClass("animation");}, 500);
    });
   });
   $(document).ready(function(){
    $("#sunset").click(function() {
        $("#background").removeClass("cartao-background");
    $("#background").removeClass("cartoes-backgroundrainbow");
    $("#background").removeClass("cartoes-backgroundgold");
    $("#background").removeClass("cartoes-backgroundspice");
    $("#background").removeClass("cartoes-backgroundacqua");
    $("#background").removeClass("cartoes-backgroundboreal");
    $("#background").removeClass("cartoes-backgroundcarbon");
    $("#background").addClass("cartoes-backgroundsunset");
    var image = document.getElementById('cartaoimg');
                image.src = "./Images/Credit-Card/sunset.webp";
                $("#cartaoimg").removeClass("animation");
                setTimeout(() => {$("#cartaoimg").addClass("animation");}, 500);
    });
   });
   $(document).ready(function(){
    $("#boreal").click(function() {
        $("#background").removeClass("cartao-background");
    $("#background").removeClass("cartoes-backgroundrainbow");
    $("#background").removeClass("cartoes-backgroundgold");
    $("#background").removeClass("cartoes-backgroundspice");
    $("#background").removeClass("cartoes-backgroundsunset");
    $("#background").removeClass("cartoes-backgroundacqua");
    $("#background").removeClass("cartoes-backgroundcarbon");
    $("#background").addClass("cartoes-backgroundboreal");
    var image = document.getElementById('cartaoimg');
                image.src = "./Images/Credit-Card/boreal-forest.webp";
                $("#cartaoimg").removeClass("animation");
                setTimeout(() => {$("#cartaoimg").addClass("animation");}, 500);
    });
   });
   $(document).ready(function(){
    $("#carbon").click(function() {
        $("#background").removeClass("cartao-background");
    $("#background").removeClass("cartoes-backgroundrainbow");
    $("#background").removeClass("cartoes-backgroundgold");
    $("#background").removeClass("cartoes-backgroundspice");
    $("#background").removeClass("cartoes-backgroundsunset");
    $("#background").removeClass("cartoes-backgroundboreal");
    $("#background").removeClass("cartoes-backgroundacqua");
    $("#background").addClass("cartoes-backgroundcarbon");
    var image = document.getElementById('cartaoimg');
                image.src = "./Images/Credit-Card/carbon.webp";

    $("#cartaoimg").removeClass("animation");
    setTimeout(() => {$("#cartaoimg").addClass("animation");}, 500);
    });
   });

