// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of handling "Buy Now" button click (client-side only, for demonstration)
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const accountId = e.target.dataset.accountId;
            alert(`Anda akan membeli akun dengan ID: ${accountId}. Proses pembayaran akan dimulai. (Ini hanya simulasi, butuh backend!)`);
            // In a real application, this would trigger:
            // 1. An API call to your backend to create an order.
            // 2. Redirection to a payment gateway or display a payment modal.
            // 3. Backend would handle payment verification and auto-order delivery.
        });
    });

    // Simple testimonial slider logic (can be expanded with full slider library)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        // You would typically implement a carousel library here (e.g., Swiper.js, Owl Carousel)
        // For now, it just displays items in a flexbox.
        console.log("Testimonial slider loaded.");
    }

    // Dynamic content loading (example - could fetch from API)
    function loadMoreAccounts() {
        // In a real app, this would fetch data from your API
        // const response = await fetch('/api/accounts');
        // const accounts = await response.json();
        const moreAccounts = [
            {
                id: 'valorant003',
                name: 'Akun Valorant',
                description: 'Akun Valorant Rank Gold, banyak skin epic.',
                price: 'Rp 300.000',
                imageUrl: 'https://via.placeholder.com/300x200?text=Akun+Valorant'
            },
            {
                id: 'disney004',
                name: 'Disney+ Hotstar',
                description: 'Akun Disney+ Hotstar Premium 6 Bulan.',
                price: 'Rp 99.000',
                imageUrl: 'https://via.placeholder.com/300x200?text=Akun+Disney'
            }
        ];

        const accountGrid = document.querySelector('.account-grid');
        moreAccounts.forEach(account => {
            const card = document.createElement('div');
            card.classList.add('account-card');
            card.innerHTML = `
                <img src="${account.imageUrl}" alt="${account.name}">
                <h4>${account.name}</h4>
                <p class="description">${account.description}</p>
                <div class="price-action">
                    <span class="price">${account.price}</span>
                    <button class="btn buy-btn" data-account-id="${account.id}">Beli Sekarang</button>
                </div>
            `;
            accountGrid.appendChild(card);
            // Re-attach event listener for new buttons
            card.querySelector('.buy-btn').addEventListener('click', (e) => {
                const accountId = e.target.dataset.accountId;
                alert(`Anda akan membeli akun dengan ID: ${accountId}. Proses pembayaran akan dimulai. (Ini hanya simulasi, butuh backend!)`);
            });
        });
    }

    // You could call loadMoreAccounts() on scroll, or with a "Load More" button
    // For demonstration, let's just call it once after initial load
    // setTimeout(loadMoreAccounts, 1000); // Simulate loading more after 1 second
});