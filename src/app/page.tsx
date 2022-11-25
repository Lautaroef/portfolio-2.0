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
Therapeutical Educational Center | https://sacra.vercel.app/
Project description:
• This is a project for a Therapeutical Educational Center. It is a website that shows the services that the center offers, the information, and the location of each center.
• Integrated Google Maps API and Leaflet library in order to display interactive and highly-responsive geo maps.
• Implemented Cloudinary services to handle the upload and retrieval of each institution's images.
• Also used Yup library for input validation.
• Hosted the Backend using Supabase database management system.
• Applied software development using React.js, JavaScript, Next.js, Redux, Node.js, Express, PostgreSQL, and Git.

*/

/*
Achieved a performance score of 96 out of 100 and an SEO score of 100/100 according to Google Lighthouse and Vercel engine.
Achieved a very easy-to-customize template where the client can change the colors, fonts, images, and text with just a few clicks.
Achieved an SEO-friendly website that has a lot of features that will help the client rank higher on Google.
Provided a 100% responsive product with a proper code structure that is scalable and maintainable in case the customer wants new features.
Used the latest technologies and tools to achieve the best performance and SEO.
Delivered a fully responsive template that works on all devices.

It has a variety of sections that are responsive and interactive, these sections are:

It has a smooth scroll effect and features like dark mode and strong SEO optimization.

It consists of 4 unique pages with dynamic content that varies according to the user's choice.
It consists of a Next.js application with server-side rendering and client-side routing with a MongoDB database.
*/

/*
Built a fully functional shopping cart that allows users to add and remove NFTs to their cart.
Integrated a Stripe and MercadoPago payment gateway to allow users to make payments.
*/
