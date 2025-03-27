function login() {
    const name = document.getElementById('nm').value;
    const pass = document.getElementById('sn').value;
    if (name === "" && pass === "") {
        alert("Erro 404");
    }
    else {
        let bemvindo = "Seja bem-vindo " + name;
        alert(bemvindo);
    }
}