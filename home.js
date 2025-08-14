
document.addEventListener('DOMContentLoaded', function () {

    /*** CART COUNT SETUP ***/
    const cartCount = document.querySelector('.cart-count');
    let count = parseInt(localStorage.getItem('cartCount')) || 0;
    if (cartCount) cartCount.textContent = count;

    function handleAddToCart(button) {
        count++;
        localStorage.setItem('cartCount', count);
        if (cartCount) cartCount.textContent = count;

        // Button flash effect
        button.style.backgroundColor = '#4CAF50';
        setTimeout(() => button.style.backgroundColor = '', 500);

        // "+1" floating effect
        const plusOne = document.createElement('span');
        plusOne.textContent = '+1';
        plusOne.classList.add('plus-one');
        plusOne.style.position = 'absolute';
        plusOne.style.top = '-10px';
        plusOne.style.right = '10px';
        plusOne.style.color = 'red';
        plusOne.style.fontWeight = 'bold';
        button.appendChild(plusOne);

        setTimeout(() => plusOne.remove(), 1000);
    }

    // Add to Cart button setup
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.style.position = 'relative';
        button.addEventListener('click', () => handleAddToCart(button));
    });

    /*** NEWSLETTER BUTTON ***/
    const newsletterButton = document.querySelector('.newsletter-form button');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', function (e) {
            e.preventDefault();
            this.textContent = 'Subscribed!';
            this.style.backgroundColor = '#4CAF50';
            setTimeout(() => {
                this.textContent = 'Subscribe';
                this.style.backgroundColor = '';
            }, 2000);
        });
    }

    /*** HERO SLIDESHOW ***/
    const slides = document.querySelectorAll('.hero-slideshow img');
    if (slides.length > 0) {
        let index = 0;
        slides[0].classList.add('active'); // Ensure first is visible
        setInterval(() => {
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }, 10000);
    }

    /*** QUANTITY BUTTONS ***/
    window.increase = function (btn) {
        let container = btn.parentElement;
        let quantityEl = container.querySelector(".quantity");
        let minusBtn = container.querySelector(".minus-btn");
        if (!quantityEl || !minusBtn) return;

        quantityEl.style.display = "inline";
        minusBtn.style.display = "inline";

        let value = parseInt(quantityEl.textContent) || 0;
        quantityEl.textContent = value + 1;
    };

    window.decrease = function (btn) {
        let container = btn.parentElement;
        let quantityEl = container.querySelector(".quantity");
        if (!quantityEl) return;

        let value = parseInt(quantityEl.textContent) || 0;
        value--;

        if (value <= 0) {
            quantityEl.textContent = 0;
            quantityEl.style.display = "none";
            let minusBtn = container.querySelector(".minus-btn");
            if (minusBtn) minusBtn.style.display = "none";
        } else {
            quantityEl.textContent = value;
        }
    };

});

