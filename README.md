ToyTopia – A Local Kids Toy Store Platform
//** Project Overview

ToyTopia is a vibrant and playful online marketplace where local toy sellers can showcase their products,
and parents can easily find toys for their children.
This website is a Single Page Application (SPA) built with React, Firebase Authentication, React Router, and Tailwind CSS.

//** Project Purpose

Empower local toy sellers to reach a wider audience.

Provide a safe, engaging, and user-friendly experience for families.

Simplify toy discovery through categorized listings and interactive UI.

Integrate Firebase for secure authentication and smooth user management.

//*** Live Website URL

//**** GitHub Repository: https://github.com/Monir312/ToyTopia-baby-toy-store


 // ** Key Features
 // ** Home Page

Beautiful slider section (Swiper)

Popular Toys section (from JSON data)

Two additional informative sections

Navbar and Footer displayed on all pages

//**  Authentication  **//

Email & Password login and registration

Google sign-in integration

Forgot Password functionality

Persistent login using Firebase onAuthStateChanged

Password validation (Uppercase, Lowercase, Minimum 6 characters)

//** Protected Routes **//

Toy Details page (accessible only to logged-in users)

My Profile page (view and update user info via Firebase updateProfile())

Private routes remain logged in even after page reload

// Dynamic & Interactive //

Toast/SweetAlert for success and error messages

Smooth animations using AOS

Fully responsive (Mobile, Tablet, Desktop)

Custom 404 Not Found page


//** Technical Highlights **//

JSON data hosted on ImgBB / PostImages

Firebase configuration secured via Environment Variables

Dynamic Page Titles (using React Helmet)

Clean and consistent routing structure