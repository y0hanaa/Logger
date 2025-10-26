
const recovey = document.querySelector("#recovery");

recovery.addEventListener("click", () => {

    const newPassword = document.querySelector("#passwordRecovery").value;
    const confirmNewPassword = document.querySelector("#passwordConfirmRecovery").value;

    if (newPassword != confirmNewPassword) {
        alert("Cetifique-se de que ambas senhas sejam iguais.");
        return;
    }

    sessionStorage.setItem("password", newPassword);
    alert("Senha redefinida com sucesso.");
    window.location.href = "../pages/login.html";

});

const show = document.querySelector("#show");

show.addEventListener("change", () => {

    const passwordRecovery = document.querySelector('#passwordRecovery');
    const passwordConfirmRecovery = document.querySelector('#passwordConfirmRecovery');

    const type = passwordRecovery.getAttribute("type");
    const typeConfirm = passwordConfirmRecovery.getAttribute("type");

    if (type != "password" ||  typeConfirm != "password" ){
        passwordRecovery.setAttribute("type", "password");
        return;
    }

    passwordRecovery.setAttribute("type", "text");
    passwordConfirmRecovery.setAtribute("type", "text");

});