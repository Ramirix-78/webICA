var buscador = $("#table").DataTable();

$("#buscar").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    if ($("#buscar").val() == ""){
        $(".content-search").fadeOut(300);
    }else{
        $(".content-search").fadeIn(300);
    }
})