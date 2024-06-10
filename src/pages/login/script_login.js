function login_page(){
    const stand_user = "admin";
    const stand_pass = "admin";
    var userinput = window.document.getElementById("user-input");
    var passwinput = window.document.getElementById("passw-input");
    var loginfailed = window.document.getElementById("span-login-failed");
    var userinputvalue = userinput.value;
    var passwinputvalue = passwinput.value;

    if(userinputvalue && passwinputvalue === stand_user && stand_pass){
        window.location.href = "http://127.0.0.1:5500/src/pages/site/main_site_index.html";
    } else {
        loginfailed.style.paddingTop = "20px";
        loginfailed.innerText = "Usuário ou senha incorretos";
        loginfailed.style.color = "red";
        loginfailed.style.font = "normal 10pt Arial";
    }
};

document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('login-button-input').click();
    }
});

document.getElementById('passw-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('login-button-input').click();
    }
});
