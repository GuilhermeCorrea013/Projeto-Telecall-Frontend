function saveData(){
    let login, senha;
    login=document.getElementById("login").value;
    senha=document.getElementById("senha").value;

    let user_record=new Array();
    user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_record.some((v)=>{
        return v.login==login && v.senha==senha
    })){
        alert("Login Concluído")
        let current_user=user_record.filter((v)=>{
            return v.login==login && v.senha==senha
        })[0]

        localStorage.setItem("name",current_user.name);
        localStorage.setItem("login",current_user.login);
        window.location.href="CpaaS.html";
    }
    else{
        alert("O login ou a senha estão incorretos");

    }
}