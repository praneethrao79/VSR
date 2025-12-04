// Initialize EmailJS with your public key
emailjs.init({
    publicKey: '2aEuv9lrogCsuoAPP'  // Your existing public key
});

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('buttonmain');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Get form values
            const fromName = document.getElementById('name').value.trim();
            const phone = document.getElementById('mobile').value.trim();
            const message = document.getElementById('message').value.trim();

            // Client-side validation
            if (!fromName || !phone || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Phone number validation (10 digits)
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(phone)) {
                alert('Please enter a valid 10-digit mobile number.');
                document.getElementById('mobile').focus();
                return;
            }

            // Prepare EmailJS parameters
            const templateParams = {
                from_name: fromName,
                phone: phone,
                message: message
            };

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Send email
            emailjs.send('service_vv4cmrc', 'template_nfa1xcp', templateParams)
                .then(function(response) {
                    alert(`Thank you, ${fromName}! Your inquiry has been received. We will contact you soon at ${phone}.`);
                    contactForm.reset(); // Clear form
                }, function(error) {
                    console.error('EmailJS error:', error);
                    alert('Oops! Something went wrong. Please try again.');
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send';
                });
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

 const prices = {
    four: "₹4800/month",
    five: "₹4200/month",
    six: "₹3800/month",
    penthouse: "₹3600/month"
  };

  const roomTypeSelect = document.getElementById("roomType");
  const checkPriceBtn = document.getElementById("checkPriceBtn");
  const priceResult = document.getElementById("priceResult");

  checkPriceBtn.addEventListener("click", function () {
    const selectedValue = roomTypeSelect.value;

    if (!selectedValue) {
      priceResult.textContent = "Please select a room type.";
      return;
    }

    const price = prices[selectedValue];
    priceResult.textContent = `Price for ${roomTypeSelect.options[roomTypeSelect.selectedIndex].text}: ${price}`;
  });

