# 🍫 ChocoLoop

> A modern chocolate e-commerce platform built with Next.js, Supabase, and Tailwind CSS.

ChocoLoop is a full-stack chocolate shopping website designed to provide a smooth and premium online shopping experience. Customers can browse chocolates, add products to their cart, manage their profile, place orders, and view their previous orders.

The project also includes authentication, database integration, cart management, checkout, order management, and an admin authentication system.

---

## ✨ Features

### 🛍️ Customer Shopping

- Browse available chocolate products
- Product cards with images, names, prices, and descriptions
- Dedicated Shop page
- Add products to cart
- Increase or decrease product quantity
- Remove products from cart
- View cart total
- Proceed to checkout
- Responsive shopping experience

### 🔐 Authentication

- Customer registration
- Customer login
- Secure authentication using Supabase
- Logout functionality
- Profile access after login
- Authentication-aware navigation
- Protected user-specific data

### 🛒 Shopping Cart

- User-specific cart
- Add products to cart
- Update product quantities
- Remove individual products
- Automatic cart total calculation
- Cart data stored in Supabase
- Row Level Security support

### 💳 Checkout

The checkout system supports multiple payment methods:

- UPI
- Credit Card
- Debit Card
- Cash on Delivery

After checkout, the order information is stored in the database and the customer can view it from the Orders section.

### 📦 Orders

Customers can:

- View previous orders
- See order totals
- View payment method
- View payment status
- See products included in an order
- View product images
- Track their order history

### 👨‍🍳 Our Story

ChocoLoop includes a dedicated brand story section featuring:

- Chocolate-making story
- Chocolate gallery
- Chocolatier section
- Chocolate-making visuals
- Brand-focused content

### 🎨 Modern UI

- Premium chocolate-inspired design
- Dark chocolate color palette
- Golden/yellow accents
- Responsive layout
- Mobile-friendly navigation
- Smooth hover effects
- Clean product cards
- Modern checkout experience

---

# 🧑‍💻 Tech Stack

## Frontend

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Next/Image**
- **Next/Link**

## Backend & Database

- **Supabase**
- **Supabase Authentication**
- **PostgreSQL**
- **Row Level Security (RLS)**

## Development Tools

- Node.js
- npm
- Git
- GitHub
- VS Code

---

# 📁 Project Structure

```text
chocoloop/
│
├── app/
│   ├── admin/
│   │   └── login/
│   │
│   ├── cart/
│   │   └── page.tsx
│   │
│   ├── checkout/
│   │   ├── page.tsx
│   │   └── payment/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── AddToCartButton.tsx
│   │   ├── OurStory.tsx
│   │   ├── Hero.tsx
│   │   ├── WhyChoose.tsx
│   │   ├── Reviews.tsx
│   │   ├── LuxuryBanner.tsx
│   │   └── Footer.tsx
│   │
│   ├── lib/
│   │   ├── client.ts
│   │   └── supabase.ts
│   │
│   ├── login/
│   │   └── page.tsx
│   │
│   ├── signup/
│   │   └── page.tsx
│   │
│   ├── orders/
│   │   └── page.tsx
│   │
│   ├── profile/
│   │   └── page.tsx
│   │
│   ├── shop/
│   │   └── page.tsx
│   │
│   ├── page.tsx
│   └── globals.css
│
├── public/
│   └── images/
│
├── middleware.ts
├── next.config.ts
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── README.md
