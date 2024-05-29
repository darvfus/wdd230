document.getElementById('registration-form').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-passwd').value;
    const passwordError = document.getElementById('password-error');

    if (password !== confirmPassword) {
      event.preventDefault();
      passwordError.style.display = 'block';
      document.getElementById('password').style.borderColor = 'red';
      document.getElementById('confirm-passwd').style.borderColor = 'red';
    } else {
      passwordError.style.display = 'none';
      document.getElementById('password').style.borderColor = '';
      document.getElementById('confirm-passwd').style.borderColor = '';
    }
  });