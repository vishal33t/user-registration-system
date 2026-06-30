const API_URL = `${BASE_URL}/register`;
document
.getElementById("registerForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const user = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        password: document.getElementById("password").value

    };

    const response = await fetch(API_URL,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(user)

    });

    const data = await response.json();

    alert(data.message);

    if(data.success){

        window.location.href="login.html";

    }

});