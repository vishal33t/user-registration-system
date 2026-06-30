const token = localStorage.getItem("token");

if (!token) {

    window.location.href = "login.html";

}

async function loadProfile() {

    try {

        const response = await fetch(`${BASE_URL}/profile`, {

            method: "GET",

            headers: {

                Authorization: `Bearer ${token}`

            }

        });

        const data = await response.json();

        if (!response.ok) {

            alert(data.message);

            localStorage.clear();

            window.location.href = "login.html";

            return;

        }

        document.getElementById("name").textContent = data.user.name;

        document.getElementById("email").textContent = data.user.email;

    }

    catch (error) {

        console.log(error);

        alert("Unable to load profile.");

    }

}

loadProfile();

document
.getElementById("logoutBtn")
.addEventListener("click", () => {

    localStorage.clear();

    window.location.href = "login.html";

});