// Xử lý sự kiện nhấn nút "ĐĂNG KÝ NGAY"
document.querySelector('.register-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn form nạp lại trang
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
  
    // Kiểm tra tính hợp lệ
    if (!name || !email || !password || !confirmPassword) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Mật khẩu và Nhập lại mật khẩu không khớp!');
      return;
    }
  
    // Giả lập lưu thông tin tài khoản (Thay bằng API thực tế nếu cần)
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
  
    alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
    // Chuyển hướng về trang đăng nhập
    window.location.href = 'dangnhap.html';
  });
  