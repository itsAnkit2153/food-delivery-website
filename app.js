// showing navbar when click menu on mobile view

const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

//close menu when click

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})

//move the menu to right and left when click back and next 
var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});

//when click back and next on menu filters

$(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    });
});

$(".next-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    });
});

// Food Categories and Items Data
const foodCategories = {
    "all": "All Menus",
    "burger": "Burger",
    "pizza": "Pizza", 
    "wine": "Wine",
    "icecream": "Ice Cream",
    "coffee": "Coffee",
    "seafood": "Seafood",
    "healthy": "Healthy"
};

const foodItems = [
    // Seafood Category
    {
        id: 1,
        name: "Cioppino",
        category: "seafood",
        price: "2000Rs",
        image: "images/seafood.jpg",
        description: "Enjoy the delicious taste of Cioppino - a fresh and filling seafood meal"
    },
    {
        id: 2,
        name: "Sushi Platter",
        category: "seafood",
        price: "899Rs",
        image: "images/Sushi Platter.jpg",
        description: "Fresh, artistic, and delectable—Japanese sushi rolls! 🍱"
    },
    {
        id: 15,
        name: "Grilled Salmon",
        category: "seafood",
        price: "1299Rs",
        image: "images/Grilled Salmon.jpg",
        description: "Perfectly grilled Atlantic salmon with herbs and lemon butter sauce 🐟"
    },
    {
        id: 16,
        name: "Lobster Thermidor",
        category: "seafood",
        price: "2499Rs",
        image: "images/Lobster Thermidor.jpg",
        description: "Classic French lobster dish with creamy sauce and cheese gratin 🦞"
    },
    {
        id: 17,
        name: "Fish & Chips",
        category: "seafood",
        price: "599Rs",
        image: "images/Fish & Chips.jpg",
        description: "Crispy battered cod with golden fries and tartar sauce 🐟🍟"
    },
    {
        id: 18,
        name: "Shrimp Scampi",
        category: "seafood",
        price: "899Rs",
        image: "images/Shrimp Scampi.jpg",
        description: "Garlic butter shrimp with white wine sauce and pasta 🍤"
    },
    {
        id: 19,
        name: "Crab Cakes",
        category: "seafood",
        price: "799Rs",
        image: "images/Crab Cakes.jpg",
        description: "Maryland-style crab cakes with remoulade sauce 🦀"
    },

    // Pizza Category
    {
        id: 3,
        name: "Margherita Pizza",
        category: "pizza",
        price: "599Rs",
        image: "images/Margherita Pizza.jpg",
        description: "Delicious, cheesy, and freshly baked—pizza at your doorstep! 🍕"
    },
    {
        id: 20,
        name: "Pepperoni Pizza",
        category: "pizza",
        price: "699Rs",
        image: "images/Pepperoni Pizza.jpg",
        description: "Classic pepperoni pizza with melted mozzarella and tomato sauce 🍕"
    },
    {
        id: 21,
        name: "BBQ Chicken Pizza",
        category: "pizza",
        price: "799Rs",
        image: "images/BBQ Chicken Pizza.jpg",
        description: "BBQ sauce, grilled chicken, red onions, and cilantro 🍕🍗"
    },
    {
        id: 22,
        name: "Veggie Supreme Pizza",
        category: "pizza",
        price: "649Rs",
        image: "images/Veggie Supreme Pizza.jpg",
        description: "Loaded with bell peppers, mushrooms, olives, and tomatoes 🍕🥬"
    },
    {
        id: 23,
        name: "Four Cheese Pizza",
        category: "pizza",
        price: "749Rs",
        image: "images/Four Cheese Pizza.jpg",
        description: "Mozzarella, cheddar, parmesan, and gorgonzola cheese blend 🍕🧀"
    },
    {
        id: 24,
        name: "Hawaiian Pizza",
        category: "pizza",
        price: "679Rs",
        image: "images/Hawaiian Pizza.jpg",
        description: "Ham, pineapple, and mozzarella - sweet and savory delight 🍕🍍"
    },

    // Wine Category
    {
        id: 4,
        name: "Red Wine",
        category: "wine",
        price: "1599Rs",
        image: "images/wine.jpg",
        description: "Smooth, rich, and perfectly aged—wine for every occasion! 🍷"
    },
    {
        id: 25,
        name: "Chardonnay",
        category: "wine",
        price: "1299Rs",
        image: "images/Chardonnay.jpg",
        description: "Buttery and full-bodied white wine with oak notes 🍷"
    },
    {
        id: 26,
        name: "Cabernet Sauvignon",
        category: "wine",
        price: "1799Rs",
        image: "images/Cabernet Sauvignon.jpg",
        description: "Bold red wine with black fruit and tannin structure 🍷"
    },
    {
        id: 27,
        name: "Pinot Grigio",
        category: "wine",
        price: "999Rs",
        image: "images/Pinot Grigio.jpg",
        description: "Light and crisp white wine with citrus notes 🍷"
    },
    {
        id: 28,
        name: "Merlot",
        category: "wine",
        price: "1399Rs",
        image: "images/Merlot.jpg",
        description: "Smooth red wine with plum and chocolate flavors 🍷"
    },
    {
        id: 29,
        name: "Prosecco",
        category: "wine",
        price: "899Rs",
        image: "images/Prosecco.jpg",
        description: "Italian sparkling wine perfect for celebrations 🍾"
    },

    // Burger Category
    {
        id: 5,
        name: "Big Beef Burger",
        category: "burger",
        price: "499Rs",
        image: "images/burger.jpg",
        description: "Juicy, flavorful, and loaded—burgers made to satisfy! 🍔"
    },
    {
        id: 30,
        name: "Chicken Burger",
        category: "burger",
        price: "399Rs",
        image: "images/Chicken Burger.jpg",
        description: "Grilled chicken breast with lettuce, tomato, and mayo 🍔🍗"
    },
    {
        id: 31,
        name: "Veggie Burger",
        category: "burger",
        price: "349Rs",
        image: "images/Veggie Burger.jpg",
        description: "Plant-based patty with fresh vegetables and special sauce 🍔🥬"
    },
    {
        id: 32,
        name: "Cheese Burger",
        category: "burger",
        price: "449Rs",
        image: "images/Cheese Burger.jpg",
        description: "Classic beef burger with melted cheddar cheese 🍔🧀"
    },
    {
        id: 33,
        name: "Bacon Burger",
        category: "burger",
        price: "549Rs",
        image: "images/Bacon Burger.jpg",
        description: "Beef patty with crispy bacon and BBQ sauce 🍔🥓"
    },
    {
        id: 34,
        name: "Mushroom Swiss Burger",
        category: "burger",
        price: "479Rs",
        image: "images/Mushroom Swiss Burger.jpg",
        description: "Beef burger with sautéed mushrooms and Swiss cheese 🍔🍄"
    },

    // Coffee Category
    {
        id: 6,
        name: "Hot Coffee",
        category: "coffee",
        price: "99Rs",
        image: "images/coffee.jpg",
        description: "Bold, aromatic, and energizing—coffee for every moment! ☕"
    },
    {
        id: 35,
        name: "Cappuccino",
        category: "coffee",
        price: "149Rs",
        image: "images/Cappuccino.jpg",
        description: "Espresso with steamed milk and foamy milk top ☕"
    },
    {
        id: 36,
        name: "Latte",
        category: "coffee",
        price: "129Rs",
        image: "images/Latte.jpg",
        description: "Smooth espresso with steamed milk and light foam ☕"
    },
    {
        id: 37,
        name: "Americano",
        category: "coffee",
        price: "119Rs",
        image: "images/Americano.jpg",
        description: "Espresso with hot water for a bold, clean taste ☕"
    },
    {
        id: 38,
        name: "Mocha",
        category: "coffee",
        price: "159Rs",
        image: "images/Mocha.jpg",
        description: "Espresso with chocolate syrup and steamed milk ☕🍫"
    },
    {
        id: 39,
        name: "Espresso",
        category: "coffee",
        price: "89Rs",
        image: "images/Espresso.jpg",
        description: "Strong, concentrated coffee shot for true coffee lovers ☕"
    },

    // Ice Cream Category
    {
        id: 7,
        name: "Belgian Chocolate Sundae",
        category: "icecream",
        price: "249Rs",
        image: "images/Belgian Chocolate Sundae.jpg",
        description: "Sweet, creamy, and decadent—premium ice cream delight! 🍨"
    },
    {
        id: 40,
        name: "Vanilla Ice Cream",
        category: "icecream",
        price: "149Rs",
        image: "images/Vanilla Ice Cream.jpg",
        description: "Classic vanilla bean ice cream with rich, creamy texture 🍨"
    },
    {
        id: 41,
        name: "Strawberry Ice Cream",
        category: "icecream",
        price: "169Rs",
        image: "images/Strawberry Ice Cream.jpg",
        description: "Fresh strawberry ice cream with real fruit pieces 🍨🍓"
    },
    {
        id: 42,
        name: "Mint Chocolate Chip",
        category: "icecream",
        price: "179Rs",
        image: "images/Mint Chocolate Chip.jpg",
        description: "Refreshing mint ice cream with chocolate chips 🍨🍃"
    },
    {
        id: 43,
        name: "Cookie Dough Ice Cream",
        category: "icecream",
        price: "189Rs",
        image: "images/Cookie Dough Ice Cream.jpg",
        description: "Vanilla ice cream with chunks of cookie dough 🍨🍪"
    },
    {
        id: 44,
        name: "Rocky Road Ice Cream",
        category: "icecream",
        price: "199Rs",
        image: "images/Rocky Road Ice Cream.jpg",
        description: "Chocolate ice cream with marshmallows and nuts 🍨🍫"
    },

    // Healthy Category
    {
        id: 8,
        name: "Fresh Salad",
        category: "healthy",
        price: "279Rs",
        image: "images/salad.jpg",
        description: "Fresh, crisp, and healthy—salads packed with flavor! 🥗"
    },
    {
        id: 9,
        name: "Palak Paneer Paratha",
        category: "healthy",
        price: "99Rs",
        image: "images/paratha.jpg",
        description: "Soft, flavorful, and stuffed with goodness—Palak Paneer Paratha! 🫓💚"
    },
    {
        id: 10,
        name: "Chicken Biryani",
        category: "healthy",
        price: "299Rs",
        image: "images/Biryani.jpg",
        description: "Fragrant, spicy, and loaded with flavors—Chicken Biryani perfection! 🍛🔥"
    },
    {
        id: 11,
        name: "Schezwan Noodles",
        category: "healthy",
        price: "199Rs",
        image: "images/Schezwan Noodles.jpg",
        description: "Spicy, flavorful, and perfectly stir-fried—Chinese noodles with a kick! 🍜"
    },
    {
        id: 12,
        name: "Masala Dosa",
        category: "healthy",
        price: "149Rs",
        image: "images/Masala Dosa.jpg",
        description: "Crispy, golden, and filled with spiced potatoes—South Indian delight! 🥞"
    },
    {
        id: 13,
        name: "Creamy Alfredo Pasta",
        category: "healthy",
        price: "349Rs",
        image: "images/Creamy Alfredo Pasta.jpg",
        description: "Rich, creamy, and indulgent—Italian pasta perfection! 🍝"
    },
    {
        id: 14,
        name: "Club Sandwich",
        category: "healthy",
        price: "199Rs",
        image: "images/Club Sandwich.jpg",
        description: "Fresh, loaded, and triple-decked—classic club sandwich! 🥪"
    },
    {
        id: 45,
        name: "Quinoa Bowl",
        category: "healthy",
        price: "229Rs",
        image: "images/Quinoa Bowl.jpg",
        description: "Nutritious quinoa with roasted vegetables and tahini dressing 🥗"
    },
    {
        id: 46,
        name: "Grilled Chicken Breast",
        category: "healthy",
        price: "399Rs",
        image: "images/Grilled Chicken Breast.jpg",
        description: "Lean grilled chicken with herbs and lemon 🍗"
    },
    {
        id: 47,
        name: "Avocado Toast",
        category: "healthy",
        price: "179Rs",
        image: "images/Avocado Toast.jpg",
        description: "Sourdough toast with mashed avocado and microgreens 🥑🍞"
    },
    {
        id: 48,
        name: "Greek Yogurt Parfait",
        category: "healthy",
        price: "159Rs",
        image: "images/Greek Yogurt Parfait.jpg",
        description: "Greek yogurt with granola, berries, and honey 🥛🫐"
    },
    {
        id: 49,
        name: "Vegetable Stir Fry",
        category: "healthy",
        price: "189Rs",
        image: "images/Vegetable Stir Fry.jpg",
        description: "Fresh vegetables stir-fried in light soy sauce 🥬"
    },
    {
        id: 50,
        name: "Brown Rice Bowl",
        category: "healthy",
        price: "209Rs",
        image: "images/Brown Rice Bowl.jpg",
        description: "Nutritious brown rice with steamed vegetables and tofu 🍚"
    }
];

// Cart System for Main Page
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let currentCategory = "all";
    let currentSearchTerm = "";
    let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

    // Function to render food items based on category and search
    function renderFoodItems(category = "all", searchTerm = "") {
        const detailWrapper = document.querySelector('.detail-wrapper');
        if (!detailWrapper) return;

        let filteredItems = foodItems;

        // Filter by category
        if (category !== "all") {
            filteredItems = filteredItems.filter(item => item.category === category);
        }

        // Filter by search term
        if (searchTerm.trim() !== "") {
            const searchLower = searchTerm.toLowerCase();
            filteredItems = filteredItems.filter(item => 
                item.name.toLowerCase().includes(searchLower) ||
                item.description.toLowerCase().includes(searchLower) ||
                item.category.toLowerCase().includes(searchLower)
            );
        }
        
        if (filteredItems.length === 0) {
            detailWrapper.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #666;">
                    <h3>No items found</h3>
                    <p>Try adjusting your search or category filter</p>
                </div>
            `;
            return;
        }

        detailWrapper.innerHTML = filteredItems.map(item => `
            <div class="detail-card">
                <img class="detail-img" src="${item.image}" alt="${item.name}">
                <div class="detail-desc">
                    <div class="detail-name">
                        <h4>${item.name}</h4>
                        <p class="detail-sub">${item.description}</p>
                        <p class="price">${item.price}</p>
                    </div>
                    <ion-icon class="detail-favorites" name="bookmark-outline" data-item-id="${item.id}"></ion-icon>
                </div>
            </div>
        `).join("");

        // Re-attach event listeners to bookmark icons
        attachBookmarkListeners();
    }

    // Function to attach bookmark event listeners
    function attachBookmarkListeners() {
        const bookmarks = document.querySelectorAll(".detail-favorites");
        bookmarks.forEach((bookmark) => {
            bookmark.addEventListener("click", function () {
                const itemId = parseInt(this.getAttribute('data-item-id'));
                const item = foodItems.find(food => food.id === itemId);
                
                if (!item) return;

                // Check if the item is already in the cart
                const existingItem = cart.find(cartItem => cartItem.name === item.name);

                if (!existingItem) {
                    cart.push({ 
                        name: item.name, 
                        price: item.price, 
                        img: item.image,
                        id: item.id 
                    });
                    this.setAttribute("name", "bookmark");
                    alert(item.name + " added to cart!");
                } else {
                    cart = cart.filter(cartItem => cartItem.name !== item.name);
                    this.setAttribute("name", "bookmark-outline");
                    alert(item.name + " removed from cart!");
                }

                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartIcon();
            });
        });
    }

    // Search functionality
    function setupSearch() {
        const searchInput = document.getElementById('search');
        const searchBtn = document.querySelector('.search-btn');

        // Search button click
        if (searchBtn) {
            searchBtn.addEventListener('click', function() {
                const searchTerm = searchInput.value.trim();
                currentSearchTerm = searchTerm;
                
                // Reset category filter when searching
                resetCategoryFilters();
                
                renderFoodItems(currentCategory, searchTerm);
                
                if (searchTerm !== "") {
                    showSearchResults(searchTerm);
                }
            });
        }

        // Enter key press in search input
        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const searchTerm = searchInput.value.trim();
                    currentSearchTerm = searchTerm;
                    
                    // Reset category filter when searching
                    resetCategoryFilters();
                    
                    renderFoodItems(currentCategory, searchTerm);
                    
                    if (searchTerm !== "") {
                        showSearchResults(searchTerm);
                    }
                }
            });

            // Clear search when input is cleared
            searchInput.addEventListener('input', function() {
                if (this.value.trim() === "") {
                    currentSearchTerm = "";
                    renderFoodItems(currentCategory, "");
                }
            });
        }
    }

    // Function to show search results message
    function showSearchResults(searchTerm) {
        const filteredItems = foodItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        if (filteredItems.length > 0) {
            console.log(`Found ${filteredItems.length} items for "${searchTerm}"`);
        }
    }

    // Function to reset category filters
    function resetCategoryFilters() {
        const filterCards = document.querySelectorAll('.filter-card');
        filterCards.forEach(card => card.classList.remove('active'));
        
        // Activate "All Menus" filter
        const allMenusCard = document.querySelector('.filter-card:first-child');
        if (allMenusCard) {
            allMenusCard.classList.add('active');
        }
        currentCategory = "all";
    }

    // Category filter functionality
    function setupCategoryFilters() {
        const filterCards = document.querySelectorAll('.filter-card');
        
        filterCards.forEach(card => {
            card.addEventListener('click', function() {
                // Remove active class from all filter cards
                filterCards.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked card
                this.classList.add('active');
                
                // Get category from the card
                const categoryText = this.querySelector('p').textContent.toLowerCase();
                let category = "all";
                
                // Map category text to category key
                if (categoryText.includes('burger')) category = "burger";
                else if (categoryText.includes('pizza')) category = "pizza";
                else if (categoryText.includes('wine')) category = "wine";
                else if (categoryText.includes('ice cream')) category = "icecream";
                else if (categoryText.includes('coffee')) category = "coffee";
                else if (categoryText.includes('seafood')) category = "seafood";
                else if (categoryText.includes('healthy')) category = "healthy";
                
                currentCategory = category;
                
                // Clear search when changing categories
                const searchInput = document.getElementById('search');
                if (searchInput) {
                    searchInput.value = "";
                    currentSearchTerm = "";
                }
                
                renderFoodItems(category, currentSearchTerm);
            });
        });
    }

    // User account functionality
    function setupUserAccount() {
        const userIcon = document.querySelector('.user');
        if (userIcon) {
            userIcon.addEventListener('click', function(e) {
                e.preventDefault();
                if (isLoggedIn) {
                    showUserProfile();
                } else {
                    showAuthOptions();
                }
            });
        }
    }

    // Show authentication options (Sign In/Sign Up)
    function showAuthOptions() {
        showModal('Account', `
            <div class="auth-options">
                <div class="auth-tabs">
                    <button class="auth-tab active" data-tab="signin">Sign In</button>
                    <button class="auth-tab" data-tab="signup">Sign Up</button>
                </div>
                
                <div class="auth-content" id="signin-content">
                    <form class="auth-form" id="signin-form">
                        <input type="email" placeholder="Email" required>
                        <input type="password" placeholder="Password" required>
                        <button type="submit" class="auth-submit">Sign In</button>
                    </form>
                    <div class="auth-divider">
                        <span>or</span>
                    </div>
                    <button class="social-auth google-auth">
                        <ion-icon name="logo-google"></ion-icon>
                        Continue with Google
                    </button>
                </div>
                
                <div class="auth-content" id="signup-content" style="display: none;">
                    <form class="auth-form" id="signup-form">
                        <input type="text" placeholder="Full Name" required>
                        <input type="email" placeholder="Email" required>
                        <input type="password" placeholder="Password" required>
                        <input type="password" placeholder="Confirm Password" required>
                        <button type="submit" class="auth-submit">Sign Up</button>
                    </form>
                </div>
            </div>
        `);

        // Setup auth tab switching
        const authTabs = document.querySelectorAll('.auth-tab');
        const authContents = document.querySelectorAll('.auth-content');
        
        authTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Update active tab
                authTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Show corresponding content
                authContents.forEach(content => {
                    content.style.display = 'none';
                });
                document.getElementById(targetTab + '-content').style.display = 'block';
            });
        });

        // Setup form submissions
        setupAuthForms();
    }

    // Setup authentication forms
    function setupAuthForms() {
        const signinForm = document.getElementById('signin-form');
        const signupForm = document.getElementById('signup-form');

        if (signinForm) {
            signinForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(this);
                const email = this.querySelector('input[type="email"]').value;
                const password = this.querySelector('input[type="password"]').value;
                
                // Simple validation (in real app, this would connect to backend)
                if (email && password) {
                    // Simulate successful login
                    const user = {
                        name: email.split('@')[0],
                        email: email,
                        id: Date.now()
                    };
                    
                    loginUser(user);
                } else {
                    alert('Please fill in all fields');
                }
            });
        }

        if (signupForm) {
            signupForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = this.querySelector('input[type="text"]').value;
                const email = this.querySelector('input[type="email"]').value;
                const password = this.querySelectorAll('input[type="password"]')[0].value;
                const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
                
                if (password !== confirmPassword) {
                    alert('Passwords do not match');
                    return;
                }
                
                if (name && email && password) {
                    // Simulate successful registration
                    const user = {
                        name: name,
                        email: email,
                        id: Date.now()
                    };
                    
                    loginUser(user);
                } else {
                    alert('Please fill in all fields');
                }
            });
        }
    }

    // Login user function
    function loginUser(user) {
        isLoggedIn = true;
        currentUser = user;
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));
        
        // Close modal and show success message
        const modal = document.querySelector('.sidebar-modal');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
        
        alert(`Welcome back, ${user.name}!`);
        updateUserIcon();
    }

    // Show user profile
    function showUserProfile() {
        showModal('My Profile', `
            <div class="user-profile">
                <div class="profile-header">
                    <div class="profile-avatar">
                        <ion-icon name="person-circle"></ion-icon>
                    </div>
                    <div class="profile-info">
                        <h3>${currentUser.name}</h3>
                        <p>${currentUser.email}</p>
                    </div>
                </div>
                
                <div class="profile-actions">
                    <button class="profile-btn" onclick="showEditProfile()">
                        <ion-icon name="create-outline"></ion-icon>
                        Edit Profile
                    </button>
                    <button class="profile-btn" onclick="showOrderHistory()">
                        <ion-icon name="receipt-outline"></ion-icon>
                        Order History
                    </button>
                    <button class="profile-btn" onclick="showAddresses()">
                        <ion-icon name="location-outline"></ion-icon>
                        My Addresses
                    </button>
                    <button class="profile-btn logout-btn" onclick="handleLogout()">
                        <ion-icon name="log-out-outline"></ion-icon>
                        Logout
                    </button>
                </div>
            </div>
        `);
    }

    // Update user icon based on login status
    function updateUserIcon() {
        const userIcon = document.querySelector('.user');
        if (userIcon) {
            if (isLoggedIn) {
                userIcon.innerHTML = '<ion-icon name="person-circle"></ion-icon>';
                userIcon.title = `Welcome, ${currentUser.name}`;
            } else {
                userIcon.innerHTML = '<ion-icon name="person-outline"></ion-icon>';
                userIcon.title = 'Sign In / Sign Up';
            }
        }
    }

    // Sidebar menu functionality
    function setupSidebarMenu() {
        const sidebarMenus = document.querySelectorAll('.sidebar-menus a');
        const sidebarLogout = document.querySelector('.sidebar-logout a');

        // Menu items functionality
        sidebarMenus.forEach(menuItem => {
            menuItem.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all menu items
                sidebarMenus.forEach(item => item.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                const menuText = this.textContent.trim();
                handleMenuClick(menuText);
            });
        });

        // Logout functionality
        if (sidebarLogout) {
            sidebarLogout.addEventListener('click', function(e) {
                e.preventDefault();
                handleLogout();
            });
        }
    }

    // Function to handle menu item clicks
    function handleMenuClick(menuText) {
        switch(menuText.toLowerCase()) {
            case 'home':
                showHomeContent();
                break;
            case 'bills':
                showBillsContent();
                break;
            case 'wallet':
                showWalletContent();
                break;
            case 'notification':
                showNotificationContent();
                break;
            case 'contact us':
                showContactContent();
                break;
            case 'setting':
                showSettingContent();
                break;
            default:
                showHomeContent();
        }
    }

    // Menu content functions
    function showHomeContent() {
        // Show main content (default view)
        const mainContent = document.querySelector('.main');
        if (mainContent) {
            mainContent.style.display = 'block';
        }
        console.log('Home clicked - showing main content');
    }

    function showBillsContent() {
        // Create and show bills modal
        showModal('Bills & Orders', `
            <div class="bills-content">
                <h3>Recent Orders</h3>
                <div class="bill-item">
                    <div class="bill-header">
                        <span class="order-id">Order #12345</span>
                        <span class="order-date">2024-01-15</span>
                    </div>
                    <div class="bill-details">
                        <p><strong>Items:</strong> Pizza, Coffee</p>
                        <p><strong>Total:</strong> ₹698</p>
                        <p><strong>Status:</strong> <span class="status delivered">Delivered</span></p>
                    </div>
                </div>
                <div class="bill-item">
                    <div class="bill-header">
                        <span class="order-id">Order #12344</span>
                        <span class="order-date">2024-01-14</span>
                    </div>
                    <div class="bill-details">
                        <p><strong>Items:</strong> Burger, Salad</p>
                        <p><strong>Total:</strong> ₹778</p>
                        <p><strong>Status:</strong> <span class="status delivered">Delivered</span></p>
                    </div>
                </div>
            </div>
        `);
    }

    function showWalletContent() {
        // Create and show wallet modal
        showModal('Wallet', `
            <div class="wallet-content">
                <div class="wallet-balance">
                    <h3>Current Balance</h3>
                    <div class="balance-amount">₹1,250</div>
                </div>
                <div class="wallet-actions">
                    <button class="wallet-btn add-money">Add Money</button>
                    <button class="wallet-btn view-history">Transaction History</button>
                </div>
                <div class="recent-transactions">
                    <h4>Recent Transactions</h4>
                    <div class="transaction-item">
                        <span class="transaction-type credit">+₹500</span>
                        <span class="transaction-desc">Added Money</span>
                        <span class="transaction-date">2024-01-15</span>
                    </div>
                    <div class="transaction-item">
                        <span class="transaction-type debit">-₹299</span>
                        <span class="transaction-desc">Order Payment</span>
                        <span class="transaction-date">2024-01-14</span>
                    </div>
                </div>
            </div>
        `);
    }

    function showNotificationContent() {
        // Create and show notifications modal
        showModal('Notifications', `
            <div class="notifications-content">
                <div class="notification-item unread">
                    <div class="notification-icon">🍕</div>
                    <div class="notification-text">
                        <h4>Order Delivered!</h4>
                        <p>Your pizza order has been delivered successfully.</p>
                        <span class="notification-time">2 minutes ago</span>
                    </div>
                </div>
                <div class="notification-item">
                    <div class="notification-icon">🎉</div>
                    <div class="notification-text">
                        <h4>Special Offer!</h4>
                        <p>Get 20% off on your next order. Use code: SAVE20</p>
                        <span class="notification-time">1 hour ago</span>
                    </div>
                </div>
                <div class="notification-item">
                    <div class="notification-icon">📱</div>
                    <div class="notification-text">
                        <h4>App Update</h4>
                        <p>New features available! Update your app now.</p>
                        <span class="notification-time">1 day ago</span>
                    </div>
                </div>
            </div>
        `);
    }

    function showContactContent() {
        // Create and show contact modal
        showModal('Contact Us', `
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Get in Touch</h3>
                    <div class="contact-item">
                        <ion-icon name="call-outline"></ion-icon>
                        <span>+91 98765 43210</span>
                    </div>
                    <div class="contact-item">
                        <ion-icon name="mail-outline"></ion-icon>
                        <span>support@foodtime.com</span>
                    </div>
                    <div class="contact-item">
                        <ion-icon name="location-outline"></ion-icon>
                        <span>123 Food Street, Mumbai, India</span>
                    </div>
                </div>
                <form class="contact-form">
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Your Email" required>
                    <textarea placeholder="Your Message" rows="4" required></textarea>
                    <button type="submit" class="contact-submit">Send Message</button>
                </form>
            </div>
        `);
    }

    function showSettingContent() {
        // Create and show settings modal
        showModal('Settings', `
            <div class="settings-content">
                <div class="setting-item">
                    <label>Push Notifications</label>
                    <input type="checkbox" checked>
                </div>
                <div class="setting-item">
                    <label>Email Notifications</label>
                    <input type="checkbox" checked>
                </div>
                <div class="setting-item">
                    <label>Dark Mode</label>
                    <input type="checkbox">
                </div>
                <div class="setting-item">
                    <label>Language</label>
                    <select>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Spanish</option>
                    </select>
                </div>
                <div class="setting-item">
                    <label>Currency</label>
                    <select>
                        <option>₹ (INR)</option>
                        <option>$ (USD)</option>
                        <option>€ (EUR)</option>
                    </select>
                </div>
                <button class="save-settings">Save Settings</button>
            </div>
        `);
    }

    function handleLogout() {
        if (confirm('Are you sure you want to logout?')) {
            // Clear cart and user data
            localStorage.removeItem('cart');
            localStorage.removeItem('lastOrder');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('currentUser');
            
            // Update login status
            isLoggedIn = false;
            currentUser = null;
            
            // Update user icon
            updateUserIcon();
            
            // Close modal if open
            const modal = document.querySelector('.sidebar-modal');
            if (modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.remove();
                }, 300);
            }
            
            // Show logout message
            alert('You have been logged out successfully!');
        }
    }

    // Function to show modal
    function showModal(title, content) {
        // Remove existing modal if any
        const existingModal = document.querySelector('.sidebar-modal');
        if (existingModal) {
            existingModal.remove();
        }

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'sidebar-modal';
        modal.innerHTML = `
            <div class="sidebar-modal-content">
                <div class="sidebar-modal-header">
                    <h2>${title}</h2>
                    <button class="sidebar-modal-close">&times;</button>
                </div>
                <div class="sidebar-modal-body">
                    ${content}
                </div>
            </div>
        `;

        // Add modal to body
        document.body.appendChild(modal);

        // Show modal
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);

        // Close modal functionality
        const closeBtn = modal.querySelector('.sidebar-modal-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.remove();
                }, 300);
            }
        });
    }

    // Update cart icon quantity
    function updateCartIcon() {
        const cartIcon = document.querySelector('.cart');
        if (cartIcon) {
            // Add a small badge to show cart count
            let badge = cartIcon.querySelector('.cart-badge');
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'cart-badge';
                badge.style.cssText = 'position: absolute; top: -5px; right: -5px; background: #ff4444; color: white; border-radius: 50%; width: 20px; height: 20px; font-size: 12px; display: flex; align-items: center; justify-content: center;';
                cartIcon.style.position = 'relative';
                cartIcon.appendChild(badge);
            }
            badge.textContent = cart.length;
            badge.style.display = cart.length > 0 ? 'flex' : 'none';
        }
    }

    // Initialize
    renderFoodItems();
    setupCategoryFilters();
    setupSearch();
    setupSidebarMenu();
    setupUserAccount();
    updateUserIcon();
    updateCartIcon();
});






