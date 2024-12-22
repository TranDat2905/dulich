document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn form nạp lại trang
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Lấy thông tin tài khoản từ localStorage
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (!user) {
      alert('Không tìm thấy tài khoản. Vui lòng đăng ký trước!');
      return;
    }
  
    // Kiểm tra email và mật khẩu
    if (user.email === email && user.password === password) {
      alert('Đăng nhập thành công!');
      // Chuyển hướng đến giao diện chính
      window.location.href = 'dulich.html';
    } else {
      alert('Email hoặc mật khẩu không đúng!');
    }
  });
  