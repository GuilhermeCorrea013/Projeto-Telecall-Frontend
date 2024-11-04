const form   = document.getElementById('form');
const campos = document.querySelectorAll(".form-control");
const spans  = document.querySelectorAll(".span-required");
const CpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
const CelRegex = /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/;
const erro = false;



/*function saveData() {

    let nome = document.getElementById("name").value;
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
        return v.login == login
    })) {
        alert("esse login ja existe")
    }

    else {
        user_records.push({
            "nome": nome,
            "login": login,
            "senha": senha,
        })
    }
    localStorage.setItem("users", JSON.stringify(user_records));
    window.location.href = "login.html";
}
*/

function enviar(){
    nameValidado();
    nameMValidado();
    CpfValidado();
    CelValidado();
    TelFixoValidado();
    EstadoValidate();
    CidadeValidate();
    BairroValidate(); 
    EnderecoValidate();
    num_residValidate();
    LoginValidate();
    SenhaValidate();
    senhaConfirmValidate();
    if(this.erro == false ){
        let nome = document.getElementById("name").value;
        let login = document.getElementById("login").value;
        let senha = document.getElementById("senha").value;

        let user_records=new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        if(user_records.some((v)=>{
            return v.login == login
        })){
            alert("esse login ja existe")
        }
    
    else{
            user_records.push({
            "nome" : nome,
            "login" : login,
            "senha" : senha,
        })
    }
    localStorage.setItem("users", JSON.stringify(user_records));
    window.location.href="login.html";
    }
}

function setError(cadastro){

    campos[cadastro].style.border = "2px solid #f00";
    spans[cadastro].style.display = "block";
    this.erro = true
    alert

}

function removeError(cadastro){

    campos[cadastro].style.border = "2px solid green";
    spans[cadastro].style.display = "none";
    this.erro=false
}

function nameValidado(){
    if(campos[0].value.length < 15 || campos[0].value.length == "" )
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function nameMValidado(){
    if(campos[1].value.length < 15 || campos[1].value.length == "" )
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function CpfValidado(){
    if(!CpfRegex.test(campos[2].value))
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }

}

function CelValidado(){
    if(!CelRegex.test(campos[3].value))
    {
        setError(3);
    }
    else
    {
        removeError(3);
    }
}

function TelFixoValidado(){
    if(!CelRegex.test(campos[4].value))
    {
        setError(4);
    }
    else
    {
        removeError(4);
    }
}

function EstadoValidate(){
    if(campos[5].value.length == "" )
    {
        setError(5);
    }
    else
    {
        removeError(5);
    }
}

function CidadeValidate(){
    if(campos[6].value.length < 3 || campos[6].value.length == "" )
    {
        setError(6);
    }
    else
    {
        removeError(6);
    }
}

function BairroValidate(){
    if(campos[7].value.length < 3 || campos[7].value.length == "" )
    {
        setError(7);
    }
    else
    {
        removeError(7);
    }
}

function EnderecoValidate(){
    if(campos[8].value.length < 3 || campos[8].value.length == "" )
    {
        setError(8);
    }
    else
    {
        removeError(8);
    }
}

function num_residValidate(){
    if(campos[9].value.length == "" )
    {
        setError(9);
    }
    else
    {
        removeError(9);
    }
}

function LoginValidate(){
    if(campos[10].value.length !== 6 || campos[10].value.length == "" )
    {
        setError(10);
    }
    else
    {
        removeError(10);
    }
}

function SenhaValidate(){
    if(campos[11].value.length !== 8 || campos[11].value.length == "" )
    {
        setError(11);
    }
    else
    {
        removeError(11);
        senhaConfirmValidate()
    }
}

function senhaConfirmValidate(){
    if(campos[12].value !== campos[11].value || campos[12].value.length == "" )
    {
        setError(12);
    }
    else
    {
        removeError(12);
    }
}