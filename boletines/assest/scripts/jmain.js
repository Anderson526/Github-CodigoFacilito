
/* DOM */
let celdas = document.querySelectorAll("td");



celdas.forEach(function(td){
  td.addEventListener("click", function(ev){
    //   ev.preventDefault();   evitar la funcion principal
    console.log("click");

 });

});



// agregar o quitar clases

// let iconos = document.querySelectorAll("i");

// iconos.forEach(function(icon){

//  icon.classList.add("fa-solid");
//  icon.classList.remove("fa-solid");


// });


let close = document.querySelectorAll(".close");

close.forEach(function(close){

    close.addEventListener("click", function(ev){

        ev.preventDefault();
        // console.log("close");


        let animation = document.querySelector(".table");

        // eliminacion de etiquetas de animacion

        animation.classList.remove("animate__animated");
        animation.classList.remove("animate__bounceInDown");

        // creacion de etiquetas de animacion

        animation.classList.add("animate__animated");
        animation.classList.add("animate__bounceOut");


        //realentizar tiempo

                setTimeout(function() {
                 location.href="index.html";   
                },600);






    });


});