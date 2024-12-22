document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.querySelector("#password");
    const eyeIcon = document.querySelector("#eye-icon");
  
    togglePassword.addEventListener("click", () => {
      // Chuyển đổi giữa 'password' và 'text'
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
  
      // Đổi icon (nếu cần)
      eyeIcon.src = type === "password" ? "eye-icon.png" : "eye-slash-icon.png";
      eyeIcon.alt = type === "password" ? "Hiện mật khẩu" : "Ẩn mật khẩu";
    });
  });
  