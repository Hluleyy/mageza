setTimeout(() => {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('app').style.display = 'block';
}, 3000);


// Admin dB //
let icon = document.querySelector(".menu_icon");

icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
});

/** Register form */

/** register script */
// Registration modal logic
const registerModal = document.getElementById('registrationModal');
const showRegister = document.getElementById('showRegister');
const closeModal = document.getElementById('closeModal');
const registerForm = document.getElementById('register-Form');

if (showRegister && registerModal) {
  showRegister.onclick = function (e) {
    e.preventDefault();
    registerModal.style.display = 'flex';
  };
}
if (closeModal && registerModal) {
  closeModal.onclick = function () {
    registerModal.style.display = 'none';
  };
}

// Save registration form data to backend
if (registerForm) {
  registerForm.onsubmit = async function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Registration successful');
        registerModal.style.display = 'none';
        e.target.reset();
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      alert('Error connecting to backend');
    }
  };
}

// (Removed duplicate getGreeting and typeGreeting function definitions)

      // Responsive greeting
    function getGreeting() {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good morning, Que Marshall!';
      if (hour < 18) return 'Good afternoon, Que Marshall!';
      return 'Good evening, Que Marshall!';
    }
  // Responsive greeting with typing letter by letter effect
  function showTypedGreeting(elementId, speed = 60) {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) greeting = 'Good morning, Que Marshall!';
    else if (hour < 18) greeting = 'Good afternoon, Que Marshall!';
    else greeting = 'Good evening, Que Marshall!';

    const el = document.getElementById(elementId);
    el.textContent = '';
    let i = 0;
    function type() {
      if (i < greeting.length) {
        el.textContent += greeting[i];
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  showTypedGreeting('greeting');