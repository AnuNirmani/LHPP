// Lightweight replacement for the WPForms AJAX submission pipeline.
// The original form posted to a WordPress backend (admin-ajax.php) that
// does not exist in this static rebuild, so this handles validation and
// feedback purely client-side. Wire the TODO below to a real endpoint
// (mailto link, Formspree, a small serverless function, etc.) to receive
// submissions for real.
(function () {
	var form = document.getElementById('wpforms-form-1620');
	if (!form) return;

	var container = document.getElementById('wpforms-1620');
	var nameField = document.getElementById('wpforms-1620-field_4');
	var emailField = document.getElementById('wpforms-1620-field_5');
	var messageField = document.getElementById('wpforms-1620-field_3');
	var submitBtn = document.getElementById('wpforms-submit-1620');

	function showError(field, message) {
		clearError(field);
		var err = document.createElement('label');
		err.className = 'wpforms-error';
		err.style.color = '#cc0000';
		err.style.fontSize = '13px';
		err.style.display = 'block';
		err.style.marginTop = '4px';
		err.textContent = message;
		err.setAttribute('data-generated-error', '1');
		field.insertAdjacentElement('afterend', err);
		field.classList.add('wpforms-field-required-error');
	}

	function clearError(field) {
		field.classList.remove('wpforms-field-required-error');
		var next = field.nextElementSibling;
		if (next && next.getAttribute('data-generated-error') === '1') {
			next.remove();
		}
	}

	function isValidEmail(value) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
	}

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		var valid = true;
		[nameField, emailField, messageField].forEach(clearError);

		if (!nameField.value.trim()) {
			showError(nameField, 'This field is required.');
			valid = false;
		}
		if (!emailField.value.trim()) {
			showError(emailField, 'This field is required.');
			valid = false;
		} else if (!isValidEmail(emailField.value.trim())) {
			showError(emailField, 'Please enter a valid email address.');
			valid = false;
		}
		if (!messageField.value.trim()) {
			showError(messageField, 'This field is required.');
			valid = false;
		}

		if (!valid) return;

		// TODO: replace with a real submission endpoint once this site has a backend.
		submitBtn.disabled = true;
		submitBtn.textContent = 'Sending...';

		setTimeout(function () {
			container.innerHTML =
				'<div class="wpforms-confirmation-container-full" style="padding:20px 0;">' +
				'<p style="color:#17354f;font-size:16px;font-weight:600;">Thank you! Your message has been received.</p>' +
				'<p style="color:#111;font-size:14px;">This is a static copy of the site, so submissions are not emailed automatically yet. ' +
				'Please contact us directly at <a href="mailto:info@lakehppl.com">info@lakehppl.com</a> or ' +
				'<a href="https://wa.me/+94117683700">+94 117 683 700</a> in the meantime.</p>' +
				'</div>';
		}, 400);
	});
})();
