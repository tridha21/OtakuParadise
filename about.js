document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button[class*="md:hidden"]');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'hidden bg-white shadow-lg rounded-md mt-2 absolute right-4 w-48';
    mobileMenu.innerHTML = `
        <div class="py-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</a>
            <a href="#" class="block px-4 py-2 text-sm text-indigo-600 font-medium bg-gray-100">About</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Services</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
        </div>
    `;
    document.querySelector('nav').appendChild(mobileMenu);

    mobileMenuButton.addEventListener('click', function() {
         mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking elsewhere
    document.addEventListener('click', function(event) {
        if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
});