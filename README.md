# Shopping-Website
# Ecliptica Store - Full Stack Django Application

Welcome to the **Ecliptica Store** project! This is a complete full-stack e-commerce web application built using Django (Python). This README explains what the project is, how it is structured, the purpose of each component, and how everything works together.

## 🚀 Project Overview
Ecliptica is a premium digital storefront that sells tech wearables (Earbuds, Headphones, and Smartwatches). It features a modern, "glassmorphic" user interface using custom HTML/CSS and a robust backend powered by Django and an SQLite database. 

It handles two main types of users:
1. **Regular Users/Customers**: They can register for an account, log in, view the catalog of products, add items to their shopping cart, and place orders. They also have a Profile dashboard to view their order history.
2. **Store Admins (You)**: They have special permissions to add new products to the store, edit existing product details (price, description, image), delete products, and view all data across the platform directly from the unified dashboard or the classic Django Admin panel.

---

## 📁 Project Structure & What Everything Does

The project is broken down into specific files and folders following Django's design pattern (MVT - Model, View, Template). Here's an explanation of what each crucial piece of the architecture does:

### 1. The Core App (`core/`)
This is the central brain of the Django project. It holds all the main settings and global configurations.
- `settings.py`: Controls everything from database connections (`DATABASES`) to installed applications and security settings.
- `urls.py`: The master map for the website's URLs. It directs any incoming web traffic to the appropriate app (like sending all traffic to our `store/` app).

### 2. The Store App (`store/`)
This is the "engine" of the e-commerce logic. It handles products, users, shopping carts, and display.
- **`models.py` (The Database Structure):** This is where we define what data we want to save into the database. We defined four models:
  - `Category`: Groups products (e.g., "Earbuds" vs "Watches").
  - `Product`: Stores the actual items for sale (Name, Price, Image, Description).
  - `Order`: Represents a customer's shopping cart. It has a `total_price` and a status (`is_completed`) to know if they checked out.
  - `OrderItem`: Connects an `Order` to a `Product`. If a user buys 3 pairs of earbuds, this handles the quantity.
- **`views.py` (The Backend Logic):** This file acts as the bridge between the Database and the Frontend HTML. When someone asks to see a web page (e.g., clicking the "Headphones" link), the view:
  1. Grabs the necessary products from the database (`Product.objects.filter(...)`).
  2. Sends that data to the HTML template so it can be dynamically rendered.
  3. It also handles logic like `login_user`, `add_to_cart`, and `user_panel` (which processes the add/edit/delete product forms for admins).
- **`urls.py` (The Router):** Maps specific URLs (like `/cart/` or `/login/`) to the specific python functions inside `views.py`.
- **`admin.py` (The Control Panel):** Where we register our models so that Django knows to generate a beautiful, secure control panel (at `/admin/`) to let us edit raw database rows manually.

### 3. The Frontend (`store/templates/store/` & `static/`)
This is the visual face of the application that users interact with.
- **`base.html`**: The master template. It holds the Navbar (which dynamically changes based on if you are logged in or out) and the Footer. Every other page "extends" this file so we don't have to rewrite the navbar code on every page!
- **`earbuds.html`, `headphones.html`, `watches.html`**: Uses Django Template loops (`{% for product in products %}`) to dynamically generate the product layout based on what is actually in the database, rather than hardcoding them.
- **`user_panel.html`**: A highly unified dashboard. If a regular user views it, they see their Order History. Because we added an `{% if user.is_superuser %}` check, if an Admin views it, the page dynamically injects a complex Store Management suite to add or edit products straight from the website!
- **`static/css/styles.css`**: Controls all the colors, animations, dark mode aesthetic, and the glassmorphic frosted-glass designs!

### 4. The Database (`db.sqlite3`)
This is a lightweight SQL database automatically created by Django. It safely stores all User credentials, Passwords (hashed securely by Django), Products, and Order History.

---

## 🛠️ How to run the Project

You do not need to run manual commands if you prefer an easy approach.
1. Open the project folder.
2. Double-click the **`run_server.bat`** script. 
3. This automates the startup and prints a link to open the store in your browser: `http://127.0.0.1:8000/`.

*If you prefer the manual command line:*
Open your terminal inside the project folder, activate the environment, and run:
`python manage.py runserver`

---

## 💡 Why are we using Django?
Django is a "batteries-included" python framework. Rather than writing raw SQL queries, handling complex user session cookies, or building a secure login system from scratch, Django provides:
- A secure, built-in Authentication system (the `User` model, Login, Logout hooks).
- An Object-Relational Mapper (ORM) so we can talk to the database easily using Python code (like `Product.objects.all()`).
- Auto-generated Database Admin Panels (`/admin/`).
- Protection against common security flaws (like CSRF and SQL injection). 

This allows us to quickly build a beautiful, functional e-commerce app rapidly!
