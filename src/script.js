$(document).ready(() => {
    $(".nav-toggle").on("click", () => {
        $("#nav-bar ul").slideToggle("medium");

    });

    $("#contact-form").on("submit", function (event){
        event.preventDefault();

        if (!$("#name").val() ) 
        {
            alert("Campo nome deve ser informado");
        }


        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        };
        console.log(formData);

// Caso queira enviar para o backend, descomente o código abaixo
/*
$.ajax({
    type: "POST",
    url: "endereco-backend",  // Substitua pela URL real
    data: formData,
    success: function(response) {
        console.log("Formulario enviado com sucesso");
    },
    error: function(error) {
        console.error("Erro ao enviar o formulario", error);
    }
});
*/

    });
});


