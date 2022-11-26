import { use } from "react";
import getProjects from "utils/getProjects";
import Main from "../components/home";

export const revalidate = 3600; // revalidate every hour

function Home() {
  const projects = use(getProjects());

  return <Main projects={projects} />;
}

export default Home;

/* 
Full stack Developer with 3 years of experience | $28.99/hr

- Describe your strengths and skills
- Highlight projects, accomplishments and education
- Keep it short and make sure it's error-free



Example: My professional career has been running on three separate but often closely related tracks: Desktop Application Development, Embedded Software Development and Hardware Development.
In the last couple of years my work has been focused on the first two fields, and most recently on Desktop Application development, VBA development and End-User Support. I have excellent troubleshooting and debugging skills developed over the years of engineering work in various fields.
I am a patient, thorough person with high attention to detail. I can provide consulting, software development, testing/debugging and other services ranging from short one-hour jobs, to full-time every day work, to long-term cooperation and support.
Thank you for visiting my profile and I look forward to hearing from you!

My projects: 
RumRum cars - Buy & Sell cars | MERN Stack
Used  React.js and Redux  to build the Front-End structure. 
Sass  preprocessor was used to manage all the CSS structure.
Implemented Firebase services such as Functions, Authentication and Hosting
Used Cloudinary management service to handle upload and retrieve of high-quality images.
Used MongoDB - Node.js - Express for the Back-End structure so that the user could perform CRUD operations.
Improved my Software Development skills considerably as I managed to get done the  Front and Back-End by myself plus some cool features.

Tourism website | Made with React & Redux with CSS-in-JS for styling
Tourism website, used of React.js and redux for state management.
The CSS was made using mainly Tailwind with a bit of styled-components.
The available tourist places are displayed on the home page and on the navigation bar you have quick weather information about the current location.
Internationalization can be enabled since the app already has the code to run it, but it it was disabled for $$ reasons.

*/

/*
Full Stack Developer with 2+ years of experience building complex applications that are scalable and maintainable, with a solid understanding of front-end and back-end technologies, with proficiency in React, Redux, Typescript, Next.js, Node.js, MongoDB, and PostgreSQL.  Experience deploying applications to AWS and Vercel.
Extremely passionate professional, always looking for new challenges and ways to learn and improve.
*/

/*
Achieved a performance score of 96 out of 100 and an SEO score of 100/100 according to Google Lighthouse and Vercel engine.
Achieved a very easy-to-customize template where the client can change the colors, fonts, images, and text with just a few clicks.
Achieved an SEO-friendly website that has a lot of features that will help the client rank higher on Google.
Out-of-the-box SEO and social media marketing make your website ready to go for whatever you want to do.
Provided a 100% responsive product with a proper code structure that is scalable and maintainable in case the customer wants new features.
Used the latest technologies and tools to achieve the best performance and SEO.
Delivered a fully responsive template that works on all devices.

It has a variety of sections that are responsive and interactive, these sections are:

It has a smooth scroll effect and features like dark mode and strong SEO optimization.

Added internationalization.
It consists of 4 unique pages with dynamic content that varies according to the user's choice.
It consists of a Next.js application with server-side rendering and client-side routing with a MongoDB database.
*/

/*
Built a fully functional shopping cart that allows users to add and remove NFTs to their cart.
Integrated a Stripe and MercadoPago payment gateway to allow users to make payments.
*/
