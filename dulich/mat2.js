// Hàm xử lý hiện/ẩn mật khẩu
document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.getElementById("toggle-password");
    const passwordField = document.getElementById("password");
  
    const toggleConfirmPassword = document.getElementById("toggle-confirm-password");
    const confirmPasswordField = document.getElementById("confirm-password");
  
    function toggleVisibility(toggleIcon, passwordInput) {
      const isPasswordHidden = passwordInput.type === "password";
      passwordInput.type = isPasswordHidden ? "text" : "password";
      toggleIcon.src = isPasswordHidden ? "anh/eye-slash-icon.png" : "anh/eye-icon.png";
      toggleIcon.alt = isPasswordHidden ? "Ẩn mật khẩu" : "Hiện mật khẩu";
    }
  
    togglePassword.addEventListener("click", function () {
      toggleVisibility(togglePassword, passwordField);
    });
  
    toggleConfirmPassword.addEventListener("click", function () {
      toggleVisibility(toggleConfirmPassword, confirmPasswordField);
    });
  });
  