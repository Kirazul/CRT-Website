  // Handle donation form
document.addEventListener('DOMContentLoaded', function () {
  const donateButton = document.getElementById('donate');
  if (donateButton) {
      donateButton.addEventListener('click', function () {
          const name = document.getElementById('name').value.trim();
          const email = document.getElementById('email').value.trim();
          const amount = document.getElementById('amount').value.trim();

          if (name && email && amount) {
              alert(`Merci ${name} pour votre don de ${amount} TND. Votre soutien est précieux !`);
              document.getElementById('name').value = '';
              document.getElementById('email').value = '';
              document.getElementById('amount').value = '';
          } else {
              alert('Veuillez remplir tous les champs pour effectuer un don.');
          }
      });
  }

  // Handle contact form
  const contactButton = document.getElementById('contact');
  if (contactButton) {
      contactButton.addEventListener('click', function () {
          const name = document.getElementById('name').value.trim();
          const email = document.getElementById('email').value.trim();
          const message = document.getElementById('message').value.trim();

          if (name && email && message) {
              alert('Merci pour nous avoir contactés.');
              document.getElementById('name').value = '';
              document.getElementById('email').value = '';
              document.getElementById('message').value = '';
          } else {
              alert('Veuillez remplir tous les champs pour effectuer votre demande.');
          }
      });
  }

  // Handle join forms
  const form = document.querySelector('form');
  const submitButton = document.querySelector('button[type="submit"]');

  // Function to validate membership form fields
  function validateForm() {
      const nom = document.getElementById('nom').value.trim();
      const prenom = document.getElementById('prenom').value.trim();
      const sexe = document.querySelector('input[name="sexe"]:checked');
      const email = document.getElementById('email').value.trim();
      const motivation = document.getElementById('motivation').value.trim();
      const cv = document.getElementById('cv').files.length > 0;

      if (!nom || !prenom || !sexe || !email || !motivation || !cv) {
          alert("Veuillez remplir tous les champs obligatoires !");
          return false; // Prevent form submission
      }

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
          alert("Veuillez entrer une adresse e-mail valide.");
          return false; // Prevent form submission
      }

      return true; // All validations passed
  }

  if (submitButton) {
      submitButton.addEventListener('click', function (event) {
          if (!validateForm()) {
              event.preventDefault();
          } else {
              alert("Votre demande a été envoyée avec succès. Merci de vouloir rejoindre notre association !");
          }
      });
  }

  if (form) {
      form.addEventListener('submit', function (event) {
          if (!validateForm()) {
              event.preventDefault();
          }
      });
  }




// Handle navigation links with transition animation
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.add('page-transition');

        setTimeout(() => {
            window.location.href = link.href;
        }, 1000); 

        window.addEventListener('load', function () {
            document.body.classList.add('page-enter');
        });
    });
});

// Handle hero button with transition animation
const heroButton = document.querySelector('.btn-bordered');
if (heroButton) {
    heroButton.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.add('page-transition');

        setTimeout(() => {
            window.location.href = heroButton.href;
        }, 1000); // Delay for transition animation

        window.addEventListener('load', function () {
            document.body.classList.add('page-enter');
        });
    });
}






  
  // Animate progress bars
  function animateProgressBars() {
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach((bar) => {
          const targetValue = parseInt(bar.parentElement.getAttribute('data-animate'));
          let percentage;

          if (targetValue === 21) {
              percentage = 60; // Comités Régionaux: 60%
          } else if (targetValue === 244) {
              percentage = 80; // Comités Locaux: 80%
          } else if (targetValue === 2500) {
              percentage = 70; // Volontaires Actifs: 70%
          }

          bar.style.width = percentage + '%';
          bar.setAttribute('aria-valuenow', percentage);
          bar.textContent = targetValue; // Display the actual number inside the bar
      });
  }

  // Make the progress section visible and animate bars
  const progressSection = document.getElementById('progress-section');
  if (progressSection) {
      progressSection.style.visibility = 'visible';
      progressSection.style.opacity = '1';
      animateProgressBars();
  }
});
