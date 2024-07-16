import Link from "next/link";
import { createClient } from "../prismicio";

// const queryHomepage = () => {
//   const client = createClient();
//   return client.getSingle("homepage");
// };

// export async function generateMetadata() {
//   const page = await queryHomepage();
//   return {
//     title: "Dan Choiniere Portfolio",
//     description: "A Frontend Developer based in North Mankato, MN",
//   };
// }

export default async function HomePage() {
  return (
    <main>
      <video
        className="fixed left-0 top-0 z-0 h-screen w-screen object-cover"
        controls={false}
        preload="none"
        autoPlay
        muted
        loop
      >
        <source src="/videos/coding2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}
