window.onload = function () {
    document.getElementById("user").value = "";
    document.getElementById("password").value = "";
  };
  
  document
    .getElementById("loginForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
  
      const userInput = document.getElementById("user");
      const passwordInput = document.getElementById("password");
  
      const user = userInput.value.trim();
      const password = passwordInput.value.trim();
  
      userInput.value = user;
      passwordInput.value = password;
  
      try {
        const result = await authenticateUser(user, password);
        if (result === "Inicio de sesión exitoso") {
          Swal.fire({
            icon: "success",
            title: "¡Éxito!",
            text: "Inicio de sesión exitoso",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "../landing.html"; // Redirige a landing.html
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Credenciales inválidas",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error en la autenticación",
        });
      }
    });
  
  const loginButton = document.querySelector(".containerButton button");
  loginButton.addEventListener("mouseover", function () {
    const user = document.getElementById("user").value.trim();
    const password = document.getElementById("password").value.trim();
  });
  
  async function authenticateUser(user, password) {
    // Simulación de autenticación
    if (user === "cenfo" && password === "123") {
      return "Inicio de sesión exitoso";
    } else {
      return "Credenciales inválidas";
    }
  }