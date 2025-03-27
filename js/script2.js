document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os botões
    const btnEntrar = document.querySelector(".buttons .btn:nth-child(1)");
    const btnHome = document.querySelector(".buttons .btn:nth-child(2)");
    const btnRegistrar = document.querySelector(".register-btn");

    // Adiciona eventos de clique
    btnEntrar.addEventListener("click", function () {
        window.location.href = "login.html"; // Redireciona para a página de login
    });

    btnHome.addEventListener("click", function () {
        window.location.href = "index.html"; // Redireciona para a página inicial
    });

    btnRegistrar.addEventListener("click", function () {
        alert("Registro realizado com sucesso!"); // Exibe um alerta ao registrar
    });
});

