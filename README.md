# CarpTravel

This is a [CarpTravel](https://travel-rosy-one.vercel.app/) project was created with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![Og-image](https://github.com/TatianaSkl/travel/blob/main/public/images/og_image.png)

## Getting Started

To set up and run the CarpTravel project locally, follow these steps:

1. Make sure you have an LTS version of Node.js installed on your computer. If not, you can
   [download and install it here](https://nodejs.org/en/).

2. Clone the repository:

   ```bash
   git clone https://github.com/TatianaSkl/travel.git
   ```

3. Install the project's dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Go to [http://localhost:3000](http://localhost:3000) in your browser. This page will
   automatically reload after saving changes to the project files.

## Technologies

- **[Next.js](https://nextjs.org/)** - A React framework for building server-rendered and statically
  generated web applications.
- **[TypeScript](https://www.typescriptlang.org/)** - A superset of JavaScript that adds optional
  static typing for better code reliability.
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapidly building
  custom designs.
- **[Swiper](https://swiperjs.com/)** - A modern mobile touch slider with hardware accelerated
  transitions and amazing native behavior.
- **[React Hook Form](https://react-hook-form.com/)** - A library for building forms in React with
  validation and form state management.
- **[React Scroll](https://github.com/fisshy/react-scroll)** - A library for handling smooth
  scrolling animations in React applications.
- **[React Hook Toast](https://react-hot-toast.com/)** - A customizable notification component
  library for React applications.
- **[Vercel](https://vercel.com/)** - A cloud platform for deploying modern web applications.

## Features

CarpTravel provides a user-friendly experience with various interactive sections:

### Header

Contains a logo and navigation menu. The navigation menu includes section items. Clicking on a
corresponding item smoothly scrolls to the corresponding section. React-scroll was used for smooth
navigation through sections.

### Hero Section

Smoothly scrolls to the Contacts section when "Join Now" is clicked, using react-scroll.

### About Section

Introduces our company and describes who we are and what we do.

### Services Section

Implemented slider with different background images. Swiper was used. The appearance of a picture
with the Fade effect. The active point is stylistically highlighted, the appropriate call-to-action
text is added. When you click on an item, a change occurs

- Numbers
- Pictures
- Call text
- Description text

### Career Section

Provided form validation using react-hook-form and styled validation errors with Tailwind CSS.

### Gallery Section

Endless slider with Swiper. The active slide is larger. Slide navigation is possible by clicking the
appropriate buttons or by dragging.

### Contacts Section

Secure form validation using react-hook-form and Tailwind CSS to style validation errors.
