/**
 * Value Finds - Application Core JavaScript
 * Single Page Application Router, Data Management, and Content Admin Panel
 */

// 1. DEFAULT DATA INITIALIZATION (PRE-POPULATED IF LOCALSTORAGE IS EMPTY)
const DEFAULT_PRODUCTS = [
  {
    id: "prod-1",
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    category: "Fragrances",
    price: "$38",
    rating: 4.6,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&auto=format&fit=crop&q=80",
    affLink: "https://amazon.com",
    desc: "Often referred to as the ultimate budget-friendly alternative to Creed Aventus, Club de Nuit Intense Man opens with a sharp lemon zest and transitions into a smoky pineapple, birch wood, and patchouli dry-down. It offers outstanding longevity (8+ hours) and incredible projection for a fraction of the cost of high-end niche fragrances.",
    pros: ["Outstanding longevity & sillage", "Unbeatable price point", "Excellent projection and compliment-puller"],
    cons: ["Very harsh synthetic opening (first 15 minutes)", "Heavy, somewhat bulky bottle design"]
  },
  {
    id: "prod-2",
    name: "Classic Chef's White Sneakers",
    brand: "Beckett Simonon",
    category: "Fashion",
    price: "$169",
    rating: 4.8,
    badge: "Editor's Choice",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80",
    affLink: "https://beckettsimonon.com",
    desc: "Handcrafted full-grain calfskin leather sneakers made on a classic low-top silhouette. Beckett Simonon cuts out retail markups by operating on a made-to-order basis. The result is a clean, versatile sneaker that matches the quality of $400 designer brands with stitched Margom rubber soles, leather lining, and zero visible branding.",
    pros: ["Superb full-grain Italian leather", "Stitched Margom sole construction for long life", "Minimalist, sleek, and brand-free aesthetic"],
    cons: ["Made-to-order model means a 2-3 month shipping wait", "Standard leather break-in period of a few wears"]
  },
  {
    id: "prod-3",
    name: "Salicylic Acid Acne Cleanser",
    brand: "CeraVe",
    category: "Grooming",
    price: "$15",
    rating: 4.7,
    badge: "Best Value",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    affLink: "https://amazon.com",
    desc: "An absolute staple in any budget skincare routine. Formulated with salicylic acid to gently exfoliate dead cells, niacinamide to calm the skin, and three essential ceramides to repair the natural moisture barrier. Non-comedogenic and free of harsh fragrances, this gel cleanser smooths texture without leaving skin feeling tight or dry.",
    pros: ["Dermatologist recommended formula", "Fragrance-free, great for sensitive skin", "Highly effective at blackhead prevention"],
    cons: ["Thin, low-foaming texture that some users dislike", "Pump bottle can lock up occasionally"]
  },
  {
    id: "prod-4",
    name: "Double Edge Safety Razor",
    brand: "Merkur 34C",
    category: "Grooming",
    price: "$45",
    rating: 4.9,
    badge: "Must Have",
    image: "https://images.unsplash.com/photo-1626244661279-b25d00def4b2?w=800&auto=format&fit=crop&q=80",
    affLink: "https://amazon.com",
    desc: "Ditch expensive multi-blade cartridge systems that cause razor bumps and skin irritation. The Merkur 34C HD is a classic two-piece double-edge safety razor that has been manufactured in Solingen, Germany for decades. Its short, thick, knurled handle provides superb control, while its closed-comb design is gentle enough for wet-shaving beginners.",
    pros: ["Reduces shaving irritation and ingrown hairs significantly", "Blades cost pennies compared to modern cartridges", "Heft and balance do the cutting work for you"],
    cons: ["Slightly steeper learning curve than cartridge razors", "Requires a bit more time for pre-shave prep"]
  },
  {
    id: "prod-5",
    name: "Minimalist Slim Wallet",
    brand: "Ridge Style",
    category: "Lifestyle",
    price: "$29",
    rating: 4.5,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1627124118123-e4d31159d17a?w=800&auto=format&fit=crop&q=80",
    affLink: "https://amazon.com",
    desc: "A durable aluminum minimalist wallet designed to fit up to 12 cards without stretching. Featuring RFID-blocking technology to protect against digital theft, a secure cash strap for bills, and an ultra-thin footprint that comfortably fits in your front pocket, reducing lower back strain from sitting on bulky leather bifold wallets.",
    pros: ["Ultra-slim front-pocket friendly size", "Durable aluminum plates with replacement parts", "Integrated RFID blocking"],
    cons: ["Cards can scratch each other over time", "Difficult to carry coins or multiple receipts"]
  },
  {
    id: "prod-6",
    name: "Lightweight French Terry Hoodie",
    brand: "Reigning Champ",
    category: "Fashion",
    price: "$120",
    rating: 4.8,
    badge: "Premium Pick",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=80",
    affLink: "https://reigningchamp.com",
    desc: "Crafted in Vancouver, Canada, Reigning Champ's French Terry Hoodie is a masterclass in athletic luxury. Featuring flatlock seams, set-in/raglan sleeves, and premium midweight combed cotton, this hoodie is built to withstand years of washes and wear without losing its structure, making its cost-per-wear incredibly low.",
    pros: ["Exceptional build quality with flatlock stitching", "Maintains fit and texture after multiple washes", "Perfect year-round midweight fabric"],
    cons: ["Slightly high initial investment price", "Sizing is athletic and slim, may need to size up"]
  }
];

const DEFAULT_POSTS = [
  {
    id: "post-1",
    title: "The Ultimate Guide to Men's Fragrance Clones",
    category: "Fragrances",
    readtime: 6,
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&auto=format&fit=crop&q=80",
    excerpt: "You don't need to spend $400 to smell like luxury. We break down the best budget fragrances that replicate high-end niche scent profiles.",
    content: `<h2>Smell Like Luxury for Less</h2>
<p>The fragrance community has undergone a massive shift in recent years. Niche perfumes costing upwards of $300 to $500 are no longer restricted to the ultra-wealthy. A wave of middle-eastern perfume houses and budget houses are recreating these legendary olfactory experiences at price points anyone can afford.</p>

<p>In this guide, we reveal how clones are formulated, what to expect in terms of longevity, and our top recommendation that belongs in every modern man's rotation.</p>

<h2>The Chemistry Behind Clones</h2>
<p>When a luxury brand launches a fragrance, the chemical composition of the dry-down is easily reverse-engineered using gas chromatography. This process gives perfumers a direct blueprint of the ingredients. Budget brands use synthetic equivalents or highly optimized essential oils to replicate the exact scent profile for a fraction of the cost, bypassing massive celebrity marketing budgets.</p>

<h2>Our Top Value Recommendation</h2>
<p>If you only buy one budget fragrance this season, it should be the <strong>Club de Nuit Intense Man</strong> by Armaf. Replicating the distinct smoky pineapple, blackcurrant, and birch wood structure of Creed Aventus, it has become a staple for budget fragrance collectors. While the initial spray has a sharp citrus bite, the dry-down is remarkably close (90%+) to the original niche formulation.</p>

[PRODUCT_CALLOUT:prod-1]

<h2>How to Get Maximum Longevity from Budget Scents</h2>
<ul>
  <li><strong>Apply immediately after a shower:</strong> Clean, hydrated skin absorbs the oils much better.</li>
  <li><strong>Moisturize first:</strong> Apply an unscented lotion or vaseline to your pulse points before spraying. The fragrance oils bind to the emollients rather than evaporating.</li>
  <li><strong>Spray your clothes:</strong> Cotton and wool hold fragrance molecules longer than warm skin, extending your projection all day.</li>
</ul>

<h2>The Verdict</h2>
<p>Before splurging on high-end luxury items, test the waters with reliable clone houses. You'll get 90% of the fragrance experience at 10% of the price, allowing you to build a diverse fragrance wardrobe for any season or occasion.</p>`
  },
  {
    id: "post-2",
    title: "Minimalist Men's Skincare: The 3-Step Routine That Works",
    category: "Grooming",
    readtime: 5,
    date: "June 10, 2026",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    excerpt: "Ditch the complex 10-step skincare routines. Learn the three fundamental steps to clear skin that take less than 3 minutes.",
    content: `<h2>Keep It Simple, Keep It Consistent</h2>
<p>Skincare marketing often tells you that you need a complex cabinet full of toners, serums, eye creams, and sheet masks. The truth is, most dermatologists agree that a simple, consistent routine is far more effective. For most men, a 10-step routine is unsustainable, expensive, and can actually irritate the skin barrier.</p>

<p>Here is the ultimate, evidence-based 3-step routine designed for clear skin without the hassle.</p>

<h2>Step 1: Cleanse (Morning & Night)</h2>
<p>Washing your face removes sweat, dirt, sebum, and environmental pollutants. Never use harsh bar soaps on your face, as they disrupt your skin's natural pH and strip essential lipids. Opt for a gentle, hydrating cleanser instead.</p>

[PRODUCT_CALLOUT:prod-3]

<h2>Step 2: Hydrate (Morning & Night)</h2>
<p>Moisturizer locks in hydration and strengthens the outer layer of your skin. Even if you have oily skin, moisturizing is essential—skipping it causes your skin to overproduce sebum to compensate for dehydration. Apply a lightweight, non-comedogenic moisturizer directly after cleansing.</p>

<h2>Step 3: Protect (Morning Only)</h2>
<p>This is the most critical step that most men skip: UV protection. Up to 80% of visible skin aging is caused by sun exposure. Apply a broad-spectrum SPF 30 or higher sunscreen every morning, even on cloudy days. Many modern moisturizers include SPF, allowing you to combine steps 2 and 3.</p>

<h2>Weekly Upgrade: Exfoliate</h2>
<p>One to two times a week, replace your regular cleanser with a chemical exfoliant containing Salicylic Acid (BHA) or Glycolic Acid (AHA). This dissolves deep pore blockage and prevents blackheads and ingrown hairs caused by shaving.</p>`
  },
  {
    id: "post-3",
    title: "Mastering Smart-Casual: Wardrobe Upgrades Under $200",
    category: "Fashion",
    readtime: 4,
    date: "June 08, 2026",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80",
    excerpt: "Transition from sloppy to sharp. We review the essential garments that establish an effortless smart-casual wardrobe.",
    content: `<h2>Defining Smart-Casual</h2>
<p>Smart-casual is the most common dress code in modern professional and social settings, yet it is also the most misunderstood. It represents the space between a formal business suit and casual streetwear. The goal is to look structured and cohesive while remaining comfortable.</p>

<p>You don't need to rebuild your closet from scratch. A few high-quality, versatile items can upgrade your style instantly.</p>

<h2>1. The Clean Minimalist Sneaker</h2>
<p>The foundation of smart-casual footwear is the low-profile white sneaker. Unlike athletic running shoes, a luxury-style leather sneaker elevates denim or chinos. Look for full-grain leather and stitched construction to ensure they last for years.</p>

[PRODUCT_CALLOUT:prod-2]

<h2>2. Chinos with Tailored Fit</h2>
<p>Swap out your faded blue jeans for slim-fit cotton chinos in neutral tones: Navy, Olive, and Sand. Chinos offer the comfort of denim but have a clean, dressy appearance that matches polos, button-downs, or basic tees.</p>

<h2>3. High-Quality Knits and Hoodies</h2>
<p>Layering is the key to depth in fashion. A premium, solid-color hoodie or crewneck sweater in French Terry cotton adds structure to your silhouette while keeping you warm and comfortable.</p>

[PRODUCT_CALLOUT:prod-6]

<h2>The Rule of Fit</h2>
<p>An inexpensive $20 t-shirt that fits your body perfectly will always look more premium than a $200 designer shirt that is too loose or tight. Focus on sleeve length (ending mid-bicep) and shoulder seams sitting precisely where your arm meets your shoulder. Tailoring your clothes is the cheapest shortcut to a premium look.</p>`
  },
  {
    id: "post-4",
    title: "Classic Wet Shaving: Save Money & Improve Your Skin",
    category: "Grooming",
    readtime: 7,
    date: "May 29, 2026",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop&q=80",
    excerpt: "Multi-blade cartridge razors are a marketing trap. Switch to a classic double-edge safety razor for a better shave.",
    content: `<h2>The Cartridge Trap</h2>
<p>For decades, major shaving corporations have waged an advertising war, convincing men that more blades equals a better shave. We've gone from two blades to three, five, and even six. In reality, multiple blades dragging across your face strip away layers of skin, trap hair beneath the surface, and cause severe razor burn and painful ingrown hairs.</p>

<p>The solution is a return to traditional wet shaving using a single, high-quality double-edge safety razor blade.</p>

<h2>Why Single Blades Reign Supreme</h2>
<p>A safety razor cut is clean and singular. Only one piece of sharp metal touches your face, cutting the hair flush with the skin surface. This prevents the "tug-and-cut" mechanism of multi-blade cartridges that pulls hairs out before slicing them, leading to ingrown bumps as the hair retracts under the skin.</p>

[PRODUCT_CALLOUT:prod-4]

<h2>The Long-Term Economics of Wet Shaving</h2>
<p>While a premium safety razor handles an upfront cost of $30 to $50, the running costs are almost non-existent. A package of 100 high-quality replacement safety blades costs roughly $10 to $15—averaging 12 cents per blade. Compare this to modern cartridge refills which retail for $4 to $6 <em>each</em>. Within six months, a safety razor completely pays for itself.</p>

<h2>The Perfect Wet Shave Checklist</h2>
<ol>
  <li><strong>Prep the beard:</strong> Shave after a hot shower or apply a warm towel to soften facial hair.</li>
  <li><strong>Lather up:</strong> Use a shaving brush and a traditional glycerin soap to build a thick, protecting lather that cushions the skin.</li>
  <li><strong>Let the razor weight do the work:</strong> Do not apply pressure. Hold the razor at a 30-degree angle and glide it down your face.</li>
  <li><strong>Shave with the grain:</strong> For the first pass, always shave in the direction your hair grows to minimize skin stress.</li>
</ol>`
  }
];

// 2. STATE MANAGEMENT
class DataStore {
  static init() {
    if (!localStorage.getItem("vf_products")) {
      localStorage.setItem("vf_products", JSON.stringify(DEFAULT_PRODUCTS));
    }
    if (!localStorage.getItem("vf_posts")) {
      localStorage.setItem("vf_posts", JSON.stringify(DEFAULT_POSTS));
    }
  }

  static getProducts() {
    this.init();
    return JSON.parse(localStorage.getItem("vf_products"));
  }

  static saveProducts(products) {
    localStorage.setItem("vf_products", JSON.stringify(products));
  }

  static getPosts() {
    this.init();
    return JSON.parse(localStorage.getItem("vf_posts"));
  }

  static savePosts(posts) {
    localStorage.setItem("vf_posts", JSON.stringify(posts));
  }

  static getPostById(id) {
    return this.getPosts().find(p => p.id === id);
  }

  static getProductById(id) {
    return this.getProducts().find(p => p.id === id);
  }

  static deletePost(id) {
    const posts = this.getPosts().filter(p => p.id !== id);
    this.savePosts(posts);
  }

  static deleteProduct(id) {
    const products = this.getProducts().filter(p => p.id !== id);
    this.saveProducts(products);
  }

  static savePost(postData) {
    const posts = this.getPosts();
    if (postData.id) {
      const idx = posts.findIndex(p => p.id === postData.id);
      if (idx !== -1) posts[idx] = postData;
    } else {
      postData.id = "post-" + Date.now();
      postData.date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      posts.unshift(postData);
    }
    this.savePosts(posts);
    return postData;
  }

  static saveProduct(productData) {
    const products = this.getProducts();
    if (productData.id) {
      const idx = products.findIndex(p => p.id === productData.id);
      if (idx !== -1) products[idx] = productData;
    } else {
      productData.id = "prod-" + Date.now();
      products.unshift(productData);
    }
    this.saveProducts(products);
    return productData;
  }

  // Admin Session Cache
  static isAdminLoggedIn() {
    return sessionStorage.getItem("vf_admin_auth") === "true";
  }

  static loginAdmin(passcode) {
    if (passcode === "Eagle12695++") {
      sessionStorage.setItem("vf_admin_auth", "true");
      return true;
    }
    return false;
  }

  static logoutAdmin() {
    sessionStorage.removeItem("vf_admin_auth");
  }
}

// 3. ROUTER
class Router {
  constructor() {
    this.routes = [
      "home", "blog", "blog-post", "product-detail", "about", 
      "contact", "privacy", "terms", "disclosure", "admin-login", "admin-dashboard"
    ];
    window.addEventListener("hashchange", () => this.handleHashChange());
    window.addEventListener("DOMContentLoaded", () => this.handleHashChange());
  }

  handleHashChange() {
    let rawHash = window.location.hash.substring(1) || "home";
    let [route, param] = rawHash.split("/");

    if (!this.routes.includes(route)) {
      window.location.hash = "#home";
      return;
    }

    // Auth Route Guards
    if (route === "admin-dashboard" && !DataStore.isAdminLoggedIn()) {
      window.location.hash = "#admin-login";
      return;
    }
    if (route === "admin-login" && DataStore.isAdminLoggedIn()) {
      window.location.hash = "#admin-dashboard";
      return;
    }

    this.activateRoute(route, param);
  }

  activateRoute(route, param) {
    // Hide all routes
    document.querySelectorAll(".route-section").forEach(sec => {
      sec.classList.remove("active");
    });

    // Show target route
    const activeSec = document.getElementById(route);
    if (activeSec) {
      activeSec.classList.add("active");
    }

    // Scroll to Top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update Nav active style
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.remove("active");
    });
    const activeLink = document.getElementById(`nav-link-${route}`);
    if (activeLink) {
      activeLink.classList.add("active");
    }

    // Special view triggers
    if (route === "home") {
      renderHome();
    } else if (route === "blog") {
      renderBlog();
    } else if (route === "blog-post" && param) {
      renderBlogPost(param);
    } else if (route === "product-detail" && param) {
      renderProductDetail(param);
    } else if (route === "admin-dashboard") {
      renderAdminDashboard();
    }

    // Close mobile nav on transition
    document.getElementById("main-nav").classList.remove("active");
  }
}

// 4. RENDERING FUNCTIONS

// Helper: render star ratings
function getStarsHTML(rating) {
  const rounded = Math.round(rating);
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) {
      stars += '<span class="star">★</span>';
    } else {
      stars += '<span class="star" style="color:#cbd5e1;">★</span>';
    }
  }
  return stars;
}

// Render Products for Home Page
function renderHome() {
  const products = DataStore.getProducts();
  const posts = DataStore.getPosts();

  // 1. Render Products (limit 3 featured / filterable)
  const gridContainer = document.getElementById("home-products-grid");
  gridContainer.innerHTML = "";
  
  const activeTab = document.querySelector("#home-category-tabs .tab-btn.active");
  const activeCategory = activeTab ? activeTab.getAttribute("data-category") : "all";

  const filteredProds = activeCategory === "all" 
    ? products.slice(0, 3) 
    : products.filter(p => p.category === activeCategory).slice(0, 3);

  if (filteredProds.length === 0) {
    gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No products found in this category.</p>`;
  } else {
    filteredProds.forEach(prod => {
      gridContainer.appendChild(createProductCard(prod));
    });
  }

  // 2. Render Latest 3 Blog Articles
  const articlesContainer = document.getElementById("home-articles-grid");
  articlesContainer.innerHTML = "";
  posts.slice(0, 3).forEach(post => {
    articlesContainer.appendChild(createArticleCard(post));
  });
}

// Render Articles for Blog Page
function renderBlog() {
  const posts = DataStore.getPosts();
  const activeTab = document.querySelector("#blog-category-tabs .tab-btn.active");
  const activeCategory = activeTab ? activeTab.getAttribute("data-category") : "all";
  const searchVal = document.getElementById("blog-search-input").value.toLowerCase();

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchVal) || 
                          post.excerpt.toLowerCase().includes(searchVal) ||
                          post.category.toLowerCase().includes(searchVal);
    return matchesCategory && matchesSearch;
  });

  const blogGrid = document.getElementById("blog-articles-grid");
  blogGrid.innerHTML = "";

  if (filteredPosts.length === 0) {
    blogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 3rem;">No articles match your search or filter.</p>`;
  } else {
    filteredPosts.forEach(post => {
      blogGrid.appendChild(createArticleCard(post));
    });
  }
}

// Create Product DOM Card Element
function createProductCard(prod) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.id = `card-${prod.id}`;

  const ratingStars = getStarsHTML(prod.rating);
  const badgeHTML = prod.badge ? `<span class="product-badge">${prod.badge}</span>` : '';

  card.innerHTML = `
    ${badgeHTML}
    <div class="product-image-container">
      <img src="${prod.image}" alt="${prod.brand} ${prod.name}" loading="lazy">
    </div>
    <div class="product-info">
      <span class="product-brand">${prod.brand}</span>
      <h3 class="product-title">${prod.name}</h3>
      <div class="product-rating">
        ${ratingStars}
        <span class="rating-value">${prod.rating}</span>
      </div>
      <p class="product-desc">${prod.desc}</p>
      <div class="product-footer">
        <div class="product-price-guide">Price Guide: <span class="product-price-value">${prod.price}</span></div>
        <div style="display:flex; gap:0.5rem; width:100%">
          <a href="#product-detail/${prod.id}" class="btn btn-outline btn-sm btn-full" id="btn-details-${prod.id}">Read Review</a>
          <a href="${prod.affLink}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm btn-full" id="btn-buy-${prod.id}">Check Deal</a>
        </div>
      </div>
    </div>
  `;
  return card;
}

// Create Article DOM Card Element
function createArticleCard(post) {
  const card = document.createElement("div");
  card.className = "article-card";
  card.id = `card-${post.id}`;

  card.innerHTML = `
    <div class="article-image">
      <img src="${post.image}" alt="${post.title}" loading="lazy">
    </div>
    <div class="article-content">
      <div class="article-meta">
        <span class="article-category">${post.category}</span>
        <span>•</span>
        <span>${post.readtime} min read</span>
      </div>
      <h3 class="article-title">${post.title}</h3>
      <p class="article-excerpt">${post.excerpt}</p>
      <div class="article-footer">
        <span class="article-meta" style="margin-bottom:0;">${post.date}</span>
        <a href="#blog-post/${post.id}" class="read-more-link" id="btn-read-${post.id}">
          Read Guide 
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  `;
  return card;
}

// Render Blog Post Detail View
function renderBlogPost(postId) {
  const post = DataStore.getPostById(postId);
  const container = document.getElementById("blog-post-detail-container");

  if (!post) {
    container.innerHTML = `<h2>Article not found</h2><a href="#blog" class="btn btn-primary mt-2">Back to Blog</a>`;
    return;
  }

  // Parse custom [PRODUCT_CALLOUT:id] tag and replace with product widgets
  let contentHTML = post.content;
  const calloutRegex = /\[PRODUCT_CALLOUT:(prod-[\w-]+)\]/g;
  let match;
  while ((match = calloutRegex.exec(contentHTML)) !== null) {
    const prodId = match[1];
    const prod = DataStore.getProductById(prodId);
    if (prod) {
      const ratingStars = getStarsHTML(prod.rating);
      const calloutWidget = `
        <div class="affiliate-callout" id="callout-${prod.id}">
          <img src="${prod.image}" alt="${prod.name}" class="callout-image">
          <div class="callout-info">
            <span class="callout-tag">Recommended Value Find: ${prod.brand}</span>
            <h4 class="callout-title">${prod.name}</h4>
            <div class="product-rating" style="margin-bottom:0.25rem;">${ratingStars}</div>
            <p class="callout-desc">${prod.desc.slice(0, 150)}...</p>
            <div style="display:flex; gap:0.75rem; align-items:center;">
              <span style="font-weight:700; font-size:0.95rem; color:var(--color-accent-dark);">${prod.price}</span>
              <a href="#product-detail/${prod.id}" class="btn btn-outline btn-sm" style="padding:0.25rem 0.75rem; font-size:0.8rem;">Full Specs</a>
              <a href="${prod.affLink}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm" style="padding:0.25rem 0.75rem; font-size:0.8rem;">Buy Product</a>
            </div>
          </div>
        </div>
      `;
      contentHTML = contentHTML.replace(match[0], calloutWidget);
    } else {
      contentHTML = contentHTML.replace(match[0], '');
    }
  }

  // Auto-generate Table of Contents from h2 tags in body content
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = contentHTML;
  const headings = tempDiv.querySelectorAll("h2");
  let tocHTML = '';
  
  if (headings.length > 0) {
    tocHTML += `
      <div class="toc-box">
        <h4 class="toc-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;">
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
          Quick Reading Guide
        </h4>
        <ul class="toc-list">
    `;
    headings.forEach((heading, idx) => {
      const headingId = `section-${idx}`;
      heading.id = headingId;
      tocHTML += `<li><a href="#blog-post/${post.id}#${headingId}">${heading.textContent}</a></li>`;
    });
    tocHTML += `</ul></div>`;
    contentHTML = tempDiv.innerHTML; // Update with IDs
  }

  container.innerHTML = `
    <!-- Meta and Header -->
    <div class="blog-post-header">
      <div class="blog-post-meta">
        <span class="article-category">${post.category}</span>
        <span>•</span>
        <span>Updated ${post.date}</span>
        <span>•</span>
        <span>${post.readtime} min read</span>
      </div>
      <h1 class="blog-post-title">${post.title}</h1>
    </div>
    
    <!-- Cover Picture -->
    <div class="blog-post-cover">
      <img src="${post.image}" alt="${post.title}">
    </div>

    <!-- Table of Contents -->
    ${tocHTML}

    <!-- Detailed Body Text -->
    <article class="blog-post-body">
      ${contentHTML}
    </article>

    <!-- Post Footer Navigation -->
    <div style="border-top:1px solid var(--color-border); padding-top:2rem; margin-top:4rem; display:flex; justify-content:space-between; align-items:center;">
      <a href="#blog" class="btn btn-outline btn-sm">← Back to Guides</a>
      <span style="font-size:0.85rem; color:var(--color-text-muted);">Share this: <strong style="cursor:pointer; color:var(--color-primary);">Copy Link</strong></span>
    </div>
  `;

  // Attach smooth scrolling to TOC links
  container.querySelectorAll(".toc-list a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetHash = link.getAttribute("href");
      const targetId = targetHash.substring(targetHash.indexOf('#') + 1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        const headerOffset = 100;
        const elementPosition = targetElem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

// Render Product Detail View
function renderProductDetail(prodId) {
  const prod = DataStore.getProductById(prodId);
  const container = document.getElementById("product-detail-container");

  if (!prod) {
    container.innerHTML = `<h2>Product not found</h2><a href="#home" class="btn btn-primary mt-2">Back to Dashboard</a>`;
    return;
  }

  const ratingStars = getStarsHTML(prod.rating);

  // Render Pros list
  let prosList = '';
  if (prod.pros && prod.pros.length > 0) {
    prod.pros.forEach(item => {
      if (item.trim()) prosList += `<li>${item.trim()}</li>`;
    });
  }

  // Render Cons list
  let consList = '';
  if (prod.cons && prod.cons.length > 0) {
    prod.cons.forEach(item => {
      if (item.trim()) consList += `<li>${item.trim()}</li>`;
    });
  }

  container.innerHTML = `
    <!-- Top Link -->
    <a href="#home" class="read-more-link" style="margin-bottom:2rem; display:inline-flex; align-items:center; gap:0.25rem;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Back to Home Catalog
    </a>

    <!-- Product Layout -->
    <div class="product-detail-layout" id="product-detail-layout-${prod.id}">
      <div class="product-detail-gallery">
        <img src="${prod.image}" alt="${prod.brand} ${prod.name}">
      </div>
      <div class="product-detail-info">
        <span class="product-detail-brand">${prod.brand}</span>
        <h1>${prod.name}</h1>
        
        <div class="product-detail-rating">
          ${ratingStars}
          <span class="rating-text"><strong>${prod.rating} / 5.0</strong> (Hands-on Editorial Score)</span>
        </div>

        <div class="product-detail-price">
          Estimated Market Price: <span>${prod.price}</span>
        </div>

        <p class="product-detail-desc">${prod.desc}</p>

        <!-- Pros & Cons Display -->
        <div class="pros-cons-container">
          <div class="pros-box">
            <h4 class="pro-con-title">The Positives (Pros)</h4>
            <ul class="pro-con-list">
              ${prosList || '<li>No positive tags logged yet.</li>'}
            </ul>
          </div>
          <div class="cons-box">
            <h4 class="pro-con-title">The Negatives (Cons)</h4>
            <ul class="pro-con-list">
              ${consList || '<li>No negatives logged yet.</li>'}
            </ul>
          </div>
        </div>

        <!-- Affiliate CTA Section -->
        <div style="background-color:var(--color-bg-alt); padding:1.5rem; border-radius:var(--border-radius); border:1px solid var(--color-border); text-align:center;">
          <p style="font-size:0.8rem; margin-bottom:0.75rem; text-transform:uppercase; font-weight:700; color:var(--color-accent-dark); letter-spacing:0.05em;">Checked & Verified Deal</p>
          <a href="${prod.affLink}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-full" id="detail-aff-cta-${prod.id}">Check Pricing on Amazon / Outbound Store</a>
          <span style="display:block; font-size:0.75rem; color:var(--color-text-muted); margin-top:0.75rem;">Prices vary over time. Value Finds receives a minor referral commission at no additional cost to you.</span>
        </div>
      </div>
    </div>
  `;
}

// Render Admin Content Management Tables
function renderAdminDashboard() {
  const posts = DataStore.getPosts();
  const products = DataStore.getProducts();

  // 1. Render Articles Table
  const postsTbody = document.getElementById("admin-posts-tbody");
  postsTbody.innerHTML = "";
  posts.forEach(post => {
    const tr = document.createElement("tr");
    tr.id = `admin-tr-post-${post.id}`;
    tr.innerHTML = `
      <td><img src="${post.image}" class="admin-thumb" alt="post cover"></td>
      <td style="font-weight:600;">${post.title}</td>
      <td><span class="admin-badge category">${post.category}</span></td>
      <td style="font-size:0.85rem; color:var(--color-text-muted);">${post.date}</td>
      <td>
        <div class="admin-actions">
          <button class="btn btn-outline btn-sm btn-edit-post" data-id="${post.id}" id="edit-btn-post-${post.id}">Edit</button>
          <button class="btn btn-outline btn-sm btn-delete-post" data-id="${post.id}" id="delete-btn-post-${post.id}" style="color:var(--color-danger); border-color:var(--color-border);">Delete</button>
        </div>
      </td>
    `;
    postsTbody.appendChild(tr);
  });

  // 2. Render Products Table
  const productsTbody = document.getElementById("admin-products-tbody");
  productsTbody.innerHTML = "";
  products.forEach(prod => {
    const tr = document.createElement("tr");
    tr.id = `admin-tr-prod-${prod.id}`;
    tr.innerHTML = `
      <td><img src="${prod.image}" class="admin-thumb" alt="prod thumb"></td>
      <td style="font-weight:600;">${prod.name}</td>
      <td>${prod.brand}</td>
      <td><span class="admin-badge category">${prod.category}</span></td>
      <td><strong style="color:var(--color-warning);">★</strong> ${prod.rating}</td>
      <td>
        <div class="admin-actions">
          <button class="btn btn-outline btn-sm btn-edit-product" data-id="${prod.id}" id="edit-btn-prod-${prod.id}">Edit</button>
          <button class="btn btn-outline btn-sm btn-delete-product" data-id="${prod.id}" id="delete-btn-prod-${prod.id}" style="color:var(--color-danger); border-color:var(--color-border);">Delete</button>
        </div>
      </td>
    `;
    productsTbody.appendChild(tr);
  });

  // Re-attach listeners to dynamic edit/delete buttons
  attachAdminActionListeners();
}

// 5. INTERACTION & EVENTS ATTACHMENT

// Admin Action Buttons (Edit & Delete)
function attachAdminActionListeners() {
  // Post Delete Action
  document.querySelectorAll(".btn-delete-post").forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-id");
      if (confirm("Are you sure you want to delete this blog article?")) {
        DataStore.deletePost(id);
        renderAdminDashboard();
      }
    };
  });

  // Product Delete Action
  document.querySelectorAll(".btn-delete-product").forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-id");
      if (confirm("Are you sure you want to delete this affiliate product?")) {
        DataStore.deleteProduct(id);
        renderAdminDashboard();
      }
    };
  });

  // Post Edit Action (Open Modal filled)
  document.querySelectorAll(".btn-edit-post").forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-id");
      const post = DataStore.getPostById(id);
      if (post) {
        document.getElementById("post-modal-title").textContent = "Edit Article";
        document.getElementById("edit-post-id").value = post.id;
        document.getElementById("post-title").value = post.title;
        document.getElementById("post-category").value = post.category;
        document.getElementById("post-readtime").value = post.readtime;
        document.getElementById("post-image").value = post.image;
        document.getElementById("post-excerpt").value = post.excerpt;
        document.getElementById("post-content").value = post.content;
        
        document.getElementById("post-modal").classList.add("active");
      }
    };
  });

  // Product Edit Action (Open Modal filled)
  document.querySelectorAll(".btn-edit-product").forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-id");
      const prod = DataStore.getProductById(id);
      if (prod) {
        document.getElementById("product-modal-title").textContent = "Edit Product Information";
        document.getElementById("edit-product-id").value = prod.id;
        document.getElementById("product-name").value = prod.name;
        document.getElementById("product-brand").value = prod.brand;
        document.getElementById("product-category").value = prod.category;
        document.getElementById("product-price").value = prod.price;
        document.getElementById("product-rating").value = prod.rating;
        document.getElementById("product-badge").value = prod.badge || '';
        document.getElementById("product-image").value = prod.image;
        document.getElementById("product-aff-link").value = prod.affLink;
        document.getElementById("product-desc").value = prod.desc;
        document.getElementById("product-pros").value = (prod.pros || []).join('\n');
        document.getElementById("product-cons").value = (prod.cons || []).join('\n');

        document.getElementById("product-modal").classList.add("active");
      }
    };
  });
}

// Initialize System Listeners
function setupGlobalEventListeners() {
  // Initialize Router
  new Router();

  // Mobile navigation overlay toggle
  const mobileToggle = document.getElementById("mobile-nav-toggle");
  const mainNav = document.getElementById("main-nav");
  mobileToggle.onclick = () => {
    mainNav.classList.toggle("active");
  };

  // Home Category Tabs Click Handler
  document.querySelectorAll("#home-category-tabs .tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#home-category-tabs .tab-btn").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      renderHome();
    });
  });

  // Blog Category Tabs Click Handler
  document.querySelectorAll("#blog-category-tabs .tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#blog-category-tabs .tab-btn").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      renderBlog();
    });
  });

  // Blog Search Input Handler (debounce/instant typing)
  document.getElementById("blog-search-input").addEventListener("input", () => {
    renderBlog();
  });

  // Newsletter Sign-up Submit Handler
  document.getElementById("newsletter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("newsletter-email").value = "";
    const successBox = document.getElementById("newsletter-success-alert");
    successBox.style.display = "block";
    setTimeout(() => {
      successBox.style.display = "none";
    }, 5000);
  });

  // Contact Form Submit Handler
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("contact-name").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-subject").value = "";
    document.getElementById("contact-message").value = "";
    
    const successBox = document.getElementById("contact-success-alert");
    successBox.style.display = "block";
    window.scrollTo({ top: successBox.offsetTop - 120, behavior: 'smooth' });
    setTimeout(() => {
      successBox.style.display = "none";
    }, 6000);
  });

  // Admin Login Submission
  document.getElementById("admin-login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const passcode = document.getElementById("admin-passcode").value;
    const loginErr = document.getElementById("login-error-msg");

    if (DataStore.loginAdmin(passcode)) {
      loginErr.style.display = "none";
      document.getElementById("admin-passcode").value = "";
      window.location.hash = "#admin-dashboard";
    } else {
      loginErr.style.display = "block";
    }
  });

  // Admin Logout Button
  document.getElementById("admin-logout-btn").addEventListener("click", () => {
    DataStore.logoutAdmin();
    window.location.hash = "#admin-login";
  });

  // Admin Pane Tabs Control
  document.querySelectorAll(".admin-tab-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".admin-pane").forEach(p => p.classList.remove("active"));
      
      btn.classList.add("active");
      const targetPane = btn.getAttribute("data-pane");
      document.getElementById(targetPane).classList.add("active");
    };
  });

  // OPEN CREATION MODALS
  // Create New Article Modal Open
  document.getElementById("btn-new-post").onclick = () => {
    document.getElementById("post-modal-title").textContent = "Create New Article";
    document.getElementById("post-editor-form").reset();
    document.getElementById("edit-post-id").value = "";
    document.getElementById("post-modal").classList.add("active");
  };

  // Create New Product Modal Open
  document.getElementById("btn-new-product").onclick = () => {
    document.getElementById("product-modal-title").textContent = "Add New Affiliate Product";
    document.getElementById("product-editor-form").reset();
    document.getElementById("edit-product-id").value = "";
    document.getElementById("product-modal").classList.add("active");
  };

  // CLOSE MODALS BUTTONS
  // Post modal cancel
  const closePostModal = () => {
    document.getElementById("post-modal").classList.remove("active");
  };
  document.getElementById("close-post-modal").onclick = closePostModal;
  document.getElementById("cancel-post-btn").onclick = closePostModal;

  // Product modal cancel
  const closeProductModal = () => {
    document.getElementById("product-modal").classList.remove("active");
  };
  document.getElementById("close-product-modal").onclick = closeProductModal;
  document.getElementById("cancel-product-btn").onclick = closeProductModal;

  // SAVE SUBMISSIONS (CRUD SAVE)
  // Save Post Form
  document.getElementById("post-editor-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("edit-post-id").value;
    const title = document.getElementById("post-title").value;
    const category = document.getElementById("post-category").value;
    const readtime = parseInt(document.getElementById("post-readtime").value);
    const image = document.getElementById("post-image").value;
    const excerpt = document.getElementById("post-excerpt").value;
    const content = document.getElementById("post-content").value;

    const existingPost = id ? DataStore.getPostById(id) : null;
    const postData = {
      id: id || undefined,
      title,
      category,
      readtime,
      image,
      excerpt,
      content,
      date: existingPost ? existingPost.date : undefined
    };

    DataStore.savePost(postData);
    closePostModal();
    renderAdminDashboard();
  });

  // Save Product Form
  document.getElementById("product-editor-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("edit-product-id").value;
    const name = document.getElementById("product-name").value;
    const brand = document.getElementById("product-brand").value;
    const category = document.getElementById("product-category").value;
    const price = document.getElementById("product-price").value;
    const rating = parseFloat(document.getElementById("product-rating").value);
    const badge = document.getElementById("product-badge").value;
    const image = document.getElementById("product-image").value;
    const affLink = document.getElementById("product-aff-link").value;
    const desc = document.getElementById("product-desc").value;
    
    // Parse pros and cons from lines
    const pros = document.getElementById("product-pros").value.split('\n').filter(l => l.trim() !== "");
    const cons = document.getElementById("product-cons").value.split('\n').filter(l => l.trim() !== "");

    const productData = {
      id: id || undefined,
      name,
      brand,
      category,
      price,
      rating,
      badge: badge || undefined,
      image,
      affLink,
      desc,
      pros,
      cons
    };

    DataStore.saveProduct(productData);
    closeProductModal();
    renderAdminDashboard();
  });
}

// 6. INITIAL RUN
setupGlobalEventListeners();
DataStore.init();
renderHome();
