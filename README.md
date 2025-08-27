# Next Mobile App – Latest Smartphones Showcase

![Live site](https://next-mobile-app.vercel.app/)

**Next Mobile App** is a modern **Next.js 15** application designed to showcase the latest smartphones. Users can explore product highlights, view detailed specifications, and, after authentication, add new products to the catalog. This project demonstrates **public and protected routes, authentication with NextAuth.js, and a responsive modern UI using Tailwind CSS**.

---

## 🚀 Key Features

### 1. Landing Page (`/`)
- Composed of four main sections: **Navbar**, **Hero**, **Product Highlights**, and **Footer**  
- Navigation to **Login** and **Products** pages  
- Fully public; no authentication required  

### 2. Login Page (`/login`)
- Secure authentication using **NextAuth.js** (Google OAuth or credentials)  
- Redirects authenticated users to the **Products** page  
- Handles login failures gracefully with user feedback  

### 3. Product List Page (`/products`)
- Displays a curated list of the latest smartphones  
- Each product includes: **name, description, price, and details button**  
- Publicly accessible to all users  

### 4. Product Details Page (`/products/[id]`)
- Shows full details for a single smartphone  
- Includes specifications, images, and price  
- Publicly accessible  

### 5. Protected Page – Add Product (`/add-product`)
- Accessible only to authenticated users  
- Form to add new products, with validations and success notifications  
- Redirects unauthenticated users to the login page  


---

## 🛠 Technology Stack

- **Framework:** Next.js 15 (App Router)  
- **Authentication:** NextAuth.js  
- **UI Styling:** Tailwind CSS  
- **Notifications:** react-hot-toast  
- **Data Handling:** Next.js API Routes (`/api`)  

---


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
