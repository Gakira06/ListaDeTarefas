document.addEventListener('DOMContentLoaded',()=>{

    const loginForm =document.getElementById("form-login");

    if(loginForm){
        loginForm.addEventListener('submit',(e)=>{
            e.preventDefault();

            const username=document.getElementById("username").value;
            const paswword =document.getElementById("password").value;

            localStorage.getItem("username");
            localStorage.getItem("password");


            if(username === "gakira" && paswword === "Pallotti2016*"){

                let token = Math.random().toString(16).substring(2)+
                            Math.random().toString(16).substring(2)
                            
                localStorage.setItem("username",username);
                localStorage.setItem("password",token);
                window.location.href = 'src/pages/listaDeTarefas.html';;


                
            }
            else{
                alert("usuario e senha invalidos")
            }
            loginForm.reset();
        })
    }

})