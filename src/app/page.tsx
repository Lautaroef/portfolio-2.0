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
Car Marketplace | https://rumrumcars-a9207.web.app/
Project description:
• Developed a "Car marketplace" aimed to simulate a rent-a-car business model.
• Built a user authentication system using Firebase Auth, Google OAuth, and Facebook.
• Implemented a payment system using PayPal API.
• Implemented Cloudinary services to 
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

*/

/*
Built a fully functional shopping cart that allows users to add and remove NFTs to their cart.
Integrated a Stripe and MercadoPago payment gateway to allow users to make payments.
*/
