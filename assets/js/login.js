const validUsers = ["admin", "orka"]; // Username valid (simulasi)
const otpKode = "123456"; // Kode OTP simulasi

function cekUsername() {
  const username = document.getElementById("username").value.trim();
  if (validUsers.includes(username)) {
    alert("Kode OTP telah dikirim! (Simulasi: 123456)");
    document.getElementById("form-username").style.display = "none";
    document.getElementById("form-otp").style.display = "block";
  } else {
    alert("Username tidak dikenali.");
  }
}

function verifikasiOTP() {
  const otp = document.getElementById("otp").value.trim();
  if (otp === otpKode) {
    alert("Login berhasil!");
    window.location.href = "beranda.html"; // Halaman setelah login
  } else {
    alert("Kode OTP salah.");
  }
}
