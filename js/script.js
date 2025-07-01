const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const wrapper = document.querySelector(".wrapper");
const loginTitle = document.querySelector(".title-login");
const registerTitle = document.querySelector(".title-register");
// const signUpBtn = document.querySelector("#SignUpBtn"); // Ini mungkin sudah tidak diperlukan jika SignUpBtn adalah link
// const signInBtn = document.querySelector("#SignInBtn"); // Ini juga mungkin tidak diperlukan untuk validasi submit

// Dapatkan elemen input email dan password
const emailInput = document.getElementById('log-email');
const passwordInput = document.getElementById('log-pass');

// --- Fungsi Transisi Form (dari kode Anda sebelumnya) ---
function loginFunction(){
    loginForm.style.left = "50%";
    loginForm.style.opacity = 1;
    registerForm.style.left = "150%";
    registerForm.style.opacity = 0;
    wrapper.style.height = "500px";
    loginTitle.style.top = "50%";
    loginTitle.style.opacity = 1;
    registerTitle.style.top = "50px";
    registerTitle.style.opacity = 0;
}

function registerFunction(){
    loginForm.style.left = "-50%";
    loginForm.style.opacity = 0;
    registerForm.style.left = "50%";
    registerForm.style.opacity = 1;
    wrapper.style.height = "580px";
    loginTitle.style.top = "-60px";
    loginTitle.style.opacity = 0;
    registerTitle.style.top = "50%";
    registerTitle.style.opacity = 1;
}


document.addEventListener('DOMContentLoaded', function() {
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (email === '' || password === '') {
                alert('Email dan Kata Sandi harus diisi!'); 
              
            } else {a
                window.location.href = '/Isi_perpustakaan/index.html';
            }
        });
    }
});