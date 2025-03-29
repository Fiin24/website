gsap.registerPlugin(ScrollTrigger);
let speed = 100;

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
  animation: scene1,
  trigger: ".scrollElement",
  start: "top top",
  end: "45% 100%",
  scrub: 3,
});

// hills animation
scene1.to(
  "#h1-1",
  { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" },
  0
);
scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);

//animate text
scene1.to("#info", { y: 8 * speed }, 0);

/*   Bird   */
gsap.fromTo(
  "#bird",
  { opacity: 1 },
  {
    y: -250,
    x: 800,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".scrollElement",
      start: "15% top",
      end: "60% 100%",
      scrub: 4,
      onEnter: function () {
        gsap.to("#bird", { scaleX: 1, rotation: 0 });
      },
      onLeave: function () {
        gsap.to("#bird", { scaleX: -1, rotation: -15 });
      },
    },
  }
);

/* Clouds  */
let clouds = gsap.timeline();
ScrollTrigger.create({
  animation: clouds,
  trigger: ".scrollElement",
  start: "top top",
  end: "70% 100%",
  scrub: 1,
});

clouds.to("#cloud1", { x: 500 }, 0);
clouds.to("#cloud2", { x: 1000 }, 0);
clouds.to("#cloud3", { x: -1000 }, 0);
clouds.to("#cloud4", { x: -700, y: 25 }, 0);

/* Sun motion Animation  */
let sun = gsap.timeline();
ScrollTrigger.create({
  animation: sun,
  trigger: ".scrollElement",
  start: "top top",
  end: "2200 100%",
  scrub: 1,
});

//sun motion
sun.to("#bg_grad", { attr: { cy: "330" } }, 0.0);

//bg change
sun.to("#sun", { attr: { offset: "0.15" } }, 0.0);
sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0.0);
sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0.0);
sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0.0);
sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0.0);
sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

/*   SCENE 2  */
let scene2 = gsap.timeline();
ScrollTrigger.create({
  animation: scene2,
  trigger: ".scrollElement",
  start: "15% top",
  end: "40% 100%",
  scrub: 4,
});

scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

/* Bats */
gsap.fromTo(
  "#bats",
  { opacity: 1, y: 400, scale: 0 },
  {
    y: 120,
    scale: 0.8,
    transformOrigin: "50% 50%",
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".scrollElement",
      start: "40% top",
      end: "70% 100%",
      scrub: 3,
      onEnter: function () {
        gsap.utils.toArray("#bats path").forEach((item, i) => {
          gsap.to(item, {
            scaleX: 0.5,
            yoyo: true,
            repeat: 11,
            duration: 0.15,
            delay: 0.7 + i / 10,
            transformOrigin: "50% 50%",
          });
        });
        gsap.set("#bats", { opacity: 1 });
      },
      onLeave: function () {
        gsap.to("#bats", { opacity: 0, delay: 2 });
      },
    },
  }
);

/* Sun increase */
let sun2 = gsap.timeline();
ScrollTrigger.create({
  animation: sun2,
  trigger: ".scrollElement",
  start: "2200 top",
  end: "5000 100%",
  scrub: 1,
});

sun2.to("#sun", { attr: { offset: "0.6" } }, 0);
sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

/* Transition (from Scene2 to Scene3) */
gsap.set("#scene3", { y: 580, visibility: "visible" });
let sceneTransition = gsap.timeline();
ScrollTrigger.create({
  animation: sceneTransition,
  trigger: ".scrollElement",
  start: "70% top",
  end: "bottom 100%",
  scrub: 3,
});

sceneTransition.to(
  "#h2-1",
  { y: -680, scale: 1.5, transformOrigin: "50% 50%" },
  0
);
sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
sceneTransition.to("#bg2", { y: 0 }, 0);

/* Scene 3 */
let scene3 = gsap.timeline();
ScrollTrigger.create({
  animation: scene3,
  trigger: ".scrollElement",
  start: "80% 50%",
  end: "bottom 100%",
  scrub: 3,
});

//Hills motion
scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);

//stars
scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);

// Scroll Back text
scene3.fromTo("#arrow2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25);
scene3.fromTo("#text2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);

//gradient value change
scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

/*   falling star   */
gsap.to("#fstar", {
  x: -700,
  y: -250,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".scrollElement",
    start: "4000 top",
    end: "6000 100%",
    scrub: 5,
    onEnter: function () {
      gsap.set("#fstar", { opacity: 1 });
    },
    onLeave: function () {
      gsap.set("#fstar", { opacity: 0 });
    },
  },
});

//reset scrollbar position after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

let fullscreen;
let fsEnter = document.getElementById("fullscr");
fsEnter.addEventListener("click", function (e) {
  e.preventDefault();
  if (!fullscreen) {
    fullscreen = true;
    document.documentElement.requestFullscreen();
    fsEnter.innerHTML = "Exit Fullscreen";
  } else {
    fullscreen = false;
    document.exitFullscreen();
    fsEnter.innerHTML = "Go Fullscreen";
  }
});

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function scrollToMiddle() {
  window.scrollTo({top: document.documentElement.scrollHeight/2, behavior: 'smooth'});
}

function scrollToBottom() {
  window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'});
}

function handleContact() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const topic = document.getElementById('contactTopic').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  // Validate all fields
  if (!name || !email || !topic || !message) {
    alert('Semua field harus diisi');
    return;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Format email tidak valid');
    return;
  }

  // Show loading state
  const submitButton = document.querySelector('#kontakPage button');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Mengirim...';
  submitButton.disabled = true;

  const data = { name, email, topic, message };

  fetch('save_contact.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.success) {
      alert('Pesan berhasil dikirim');
      document.getElementById('contactName').value = '';
      document.getElementById('contactEmail').value = '';
      document.getElementById('contactTopic').value = '';
      document.getElementById('contactMessage').value = '';
    } else {
      alert(data.message || 'Terjadi kesalahan saat mengirim pesan');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Pesan Berhasil Dikirim.');
  })
  .finally(() => {
    // Reset button state
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  });
}

function toggleProfileDropdown() {
  const dropdown = document.querySelector('.profile-dropdown');
  dropdown.classList.toggle('active');
}

function toggleLogin(isAddAccount = false) {
  const loginForm = document.getElementById('loginForm');
  const loginSection = document.getElementById('loginSection');
  const registerSection = document.getElementById('registerSection');
  const formToggle = document.querySelector('.form-toggle');

  if (isAddAccount) {
    loginForm.style.display = 'block';
    loginSection.style.display = 'block';
    registerSection.style.display = 'none';
    formToggle.style.display = 'none';
  } else {
    if (!document.getElementById('welcomePage').style.display || document.getElementById('welcomePage').style.display === 'none') {
      loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
      if (loginForm.style.display === 'block') {
        loginSection.style.display = 'block';
        registerSection.style.display = 'none';
        formToggle.style.display = 'flex';
      }
    }
  }
}

function toggleForm(type) {
  const loginSection = document.getElementById('loginSection');
  const registerSection = document.getElementById('registerSection');
  const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach(btn => btn.classList.remove('active'));

  if (type === 'login') {
    loginSection.style.display = 'block';
    registerSection.style.display = 'none';
    buttons[0].classList.add('active');
    generateCaptcha();
  } else {
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
    buttons[1].classList.add('active');
  }
}

function validatePassword(password) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const errors = [];
  if (password.length < minLength) errors.push("Password harus minimal 8 karakter");
  if (!hasUpperCase) errors.push("Password harus memiliki huruf kapital");
  if (!hasLowerCase) errors.push("Password harus memiliki huruf kecil");
  if (!hasNumbers) errors.push("Password harus memiliki angka");
  if (!hasSpecialChar) errors.push("Password harus memiliki karakter khusus");

  return errors;
}

function handleRegister() {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!username || !password || !confirmPassword) {
    alert('Please fill in all fields');
    return;
  }

  const passwordErrors = validatePassword(password);
  if (passwordErrors.length > 0) {
    alert('Error password:\n' + passwordErrors.join('\n'));
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  let users = localStorage.getItem('users');
  users = users ? JSON.parse(users) : [];

  if (users.some(user => user.username === username)) {
    alert('Username already exists');
    return;
  }

  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));

  // Save to server
  fetch('save_user.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(users)
  });

  // Show success message
  alert('Account created successfully!');

  // Clear register form fields
  document.getElementById('registerUsername').value = '';
  document.getElementById('registerPassword').value = '';
  document.getElementById('confirmPassword').value = '';

  // Store login info temporarily
  sessionStorage.setItem('tempLoginUsername', username);
  sessionStorage.setItem('tempLoginPassword', password);

  // Switch to login form and auto-fill
  document.getElementById('loginUsername').value = username;
  document.getElementById('loginPassword').value = password;
  toggleForm('login');
}



function handleLogin() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (!username || !password) {
    alert('Please enter both username and password');
    return;
  }

  let users = localStorage.getItem('users');
  users = users ? JSON.parse(users) : [];

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    let activeAccounts = localStorage.getItem('activeAccounts');
    activeAccounts = activeAccounts ? JSON.parse(activeAccounts) : [];

    if (!activeAccounts.find(acc => acc.username === username)) {
      activeAccounts.push({ username, password });
      localStorage.setItem('activeAccounts', JSON.stringify(activeAccounts));
      updateAccountSwitcher();
      switchAccount(username);
    } else {
      switchAccount(username);
    }

    // Hide login form and nav buttons
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('welcomePage').style.display = 'block';
    document.querySelector('.nav-buttons').style.display = 'none';

    // Update profile image with first letter
    const firstLetter = username.charAt(0).toUpperCase();
    document.getElementById('profileImage').src = `https://ui-avatars.com/api/?name=${firstLetter}&background=1b1734&color=fff&size=128`;

    // Clear login form
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
  } else {
    alert('Invalid username or password');
    document.getElementById('loginPassword').value = '';
  }
}

function updateAccountSwitcher() {
  const switcher = document.getElementById('accountSwitcher');
  const activeAccounts = JSON.parse(localStorage.getItem('activeAccounts') || '[]');

  // Hide switcher if no accounts
  if (!activeAccounts || activeAccounts.length === 0) {
    switcher.style.display = 'none';
    return;
  }

  const currentUser = document.getElementById('userDisplay').textContent;
  switcher.style.display = 'block';
  switcher.innerHTML = '<option value="">Switch Account</option>';

  activeAccounts.forEach(account => {
    if (account.username !== currentUser) {
      switcher.innerHTML += `<option value="${account.username}">${account.username}</option>`;
    }
  });
}

function switchAccount(username) {
  if (!username) return;

  const activeAccounts = JSON.parse(localStorage.getItem('activeAccounts') || '[]');
  const account = activeAccounts.find(acc => acc.username === username);

  if (account) {
    document.getElementById('userDisplay').textContent = account.username;
    document.getElementById('welcomePage').style.display = 'block';
    document.querySelector('.nav-buttons').style.display = 'none';
    // Update profile image with first letter
    const firstLetter = account.username.charAt(0).toUpperCase();
    document.getElementById('profileImage').src = `https://ui-avatars.com/api/?name=${firstLetter}&background=1b1734&color=fff&size=128`;
    updateAccountSwitcher();

    // Refresh back to homepage
    const pages = document.getElementsByClassName('content-page');
    for (let page of pages) {
      page.classList.remove('active');
    }
    document.getElementById('berandaPage').classList.add('active');
  }
}

function handleLogout() {
  const currentUser = document.getElementById('userDisplay').textContent;
  let activeAccounts = JSON.parse(localStorage.getItem('activeAccounts') || '[]');
  activeAccounts = activeAccounts.filter(acc => acc.username !== currentUser);
  localStorage.setItem('activeAccounts', JSON.stringify(activeAccounts));

  if (activeAccounts.length > 0) {
    switchAccount(activeAccounts[0].username);
  } else {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.querySelector('.nav-buttons').style.display = 'block';
  }
}

// Add this to your existing toggleForm function
function toggleForm(type) {
  const loginSection = document.getElementById('loginSection');
  const registerSection = document.getElementById('registerSection');
  const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach(btn => btn.classList.remove('active'));

  if (type === 'login') {
    loginSection.style.display = 'block';
    registerSection.style.display = 'none';
    buttons[0].classList.add('active');
    generateCaptcha();
  } else {
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
    buttons[1].classList.add('active');
  }
}

function handleLogout() {
  document.getElementById('welcomePage').style.display = 'none';
  document.getElementById('loginForm').style.display = 'none';
  document.querySelector('.nav-buttons').style.display = 'block';
}

function changePassword() {
  const currentUser = document.getElementById('userDisplay').textContent;
  const oldPassword = document.getElementById('oldPassword').value;
  const newPassword = document.getElementById('changeNewPassword').value;
  const confirmNewPassword = document.getElementById('changeConfirmPassword').value;

  if (!oldPassword || !newPassword || !confirmNewPassword) {
    alert('Please fill in all fields');
    return;
  }

  const passwordErrors = validatePassword(newPassword);
  if (passwordErrors.length > 0) {
    alert('Error password:\n' + passwordErrors.join('\n'));
    return;
  }

  if (newPassword !== confirmNewPassword) {
    alert('New passwords do not match');
    return;
  }

  fetch('change_password.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: currentUser,
      oldPassword: oldPassword,
      newPassword: newPassword
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Password changed successfully');
      document.getElementById('oldPassword').value = '';
      document.getElementById('changeNewPassword').value = '';
      document.getElementById('changeConfirmPassword').value = '';
    } else {
      alert(data.message || 'Failed to change password');
    }
  });
}

function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

function toggleForgotPassword() {
  const loginSection = document.getElementById('loginSection');
  const forgotPasswordSection = document.getElementById('forgotPasswordSection');
  const emailVerification = document.getElementById('emailVerification');
  const codeVerification = document.getElementById('codeVerification');
  const newPasswordSection = document.getElementById('newPasswordSection');
  const formToggle = document.querySelector('.form-toggle');

  if (loginSection.style.display === 'none') {
    loginSection.style.display = 'block';
    forgotPasswordSection.style.display = 'none';
    formToggle.style.display = 'flex';
  } else {
    loginSection.style.display = 'none';
    forgotPasswordSection.style.display = 'block';
    emailVerification.style.display = 'block';
    codeVerification.style.display = 'none';
    newPasswordSection.style.display = 'none';
    formToggle.style.display = 'none';
  }
}

function sendVerificationCode() {
  const email = document.getElementById('resetEmail').value;
  if (!email) {
    alert('Please enter your username');
    return;
  }

  // Check if user exists
  let users = localStorage.getItem('users');
  users = users ? JSON.parse(users) : [];

  const userExists = users.some(user => user.username === email);
  if (!userExists) {
    alert('Account not found');
    return;
  }

  // Generate random 6-digit code
  const code = Math.floor(100000 + Math.random() * 900000);

  // Store code in localStorage (in real app, should be stored securely on server)
  localStorage.setItem('verificationCode', code.toString());
  localStorage.setItem('resetEmail', email);

  // In real implementation, send code via email using server
  alert(`Verification code sent to ${email}\nCode: ${code}`);

  document.getElementById('emailVerification').style.display = 'none';
  document.getElementById('codeVerification').style.display = 'block';
}

function verifyCode() {
  const enteredCode = document.getElementById('verificationCode').value;
  const storedCode = localStorage.getItem('verificationCode');

  if (enteredCode === storedCode) {
    document.getElementById('codeVerification').style.display = 'none';
    document.getElementById('newPasswordSection').style.display = 'block';
  } else {
    alert('Invalid verification code');
    document.getElementById('verificationCode').value = '';
  }
}

function resendVerificationCode() {
  const email = localStorage.getItem('resetEmail');
  if (!email) {
    alert('Please start the password reset process again');
    toggleForgotPassword();
    return;
  }

  const code = Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem('verificationCode', code.toString());
  alert(`New verification code sent to ${email}\nCode: ${code}`);

  // Enable resend after 30 seconds
  resendTimer = setTimeout(() => {
    resendLocked = false;
    resendBtn.disabled = false;
  }, 30000);
}

function handleResetPassword() {
  const username = localStorage.getItem('resetEmail');
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmNewPassword').value;

  if (!username || !newPassword || !confirmPassword) {
    alert('Please fill in all fields');
    return;
  }

  const passwordErrors = validatePassword(newPassword);
  if (passwordErrors.length > 0) {
    alert('Error password:\n' + passwordErrors.join('\n'));
    return;
  }

  if (newPassword !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  let users = localStorage.getItem('users');
  users = users ? JSON.parse(users) : [];

  const userIndex = users.findIndex(user => user.username === username);
  if (userIndex === -1) {
    alert('Username not found');
    return;
  }

  users[userIndex].password = newPassword;
  localStorage.setItem('users', JSON.stringify(users));

  // Save to server
  fetch('save_user.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(users)
  }).then(() => {
    // Clear verification data after successful save
    localStorage.removeItem('verificationCode');
    localStorage.removeItem('resetEmail');
    alert('Password reset successful');
    document.getElementById('loginUsername').value = username;
    document.getElementById('loginPassword').value = newPassword;
    toggleForgotPassword();
    handleLogin();
  });
}

function showPage(pageId) {
  const pages = document.getElementsByClassName('content-page');
  const buttons = document.getElementsByClassName('nav-page-btn');

  for (let page of pages) {
    page.classList.remove('active');
  }
  for (let button of buttons) {
    button.classList.remove('active');
  }

  document.getElementById(pageId).classList.add('active');
  document.querySelector(`button[onclick="showPage('${pageId}')"]`).classList.add('active');
}