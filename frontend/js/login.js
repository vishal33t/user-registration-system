const API_URL = `${BASE_URL}/login`;

document
    .getElementById("loginForm")
    .addEventListener("submit", async function (e) {

        e.preventDefault();

        const user = {

            email: document.getElementById("email").value,

            password: document.getElementById("password").value

        };

        try {

            const response = await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(user)

            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Login Failed");
                return;
            }

            // Save JWT Token
            localStorage.setItem("token", data.token);

            // Save User Details
            localStorage.setItem("user", JSON.stringify(data.user));

            alert(data.message);

            window.location.href = "profile.html";

        } catch (error) {

            console.error(error);

            alert("Something went wrong.");

        }

    });