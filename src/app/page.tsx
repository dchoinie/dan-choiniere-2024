"use client";
import Footer from "./_components/Footer";
import MainNavigation from "./_components/MainNavigation";

export default function HomePage() {
  return (
    <>
      <MainNavigation dark />
      <main>
        {/* Background video */}
        <section>
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
        </section>

        {/* Main content */}
        <section>
          <div className="fixed left-0 top-0 z-10 ml-8 flex h-screen w-screen flex-col justify-center">
            <h1 className="font-bold tracking-wide text-slate-100">
              Hi, I&apos;m Dan
            </h1>
            <h4 className="text-slate-300">A Frontend Web Developer</h4>
            <p className="text-lg text-amber-600">
              Crafting dynamic and scalable web experiences with modern
              JavaScript
            </p>
          </div>
        </section>
      </main>
      <Footer fixed />
    </>
  );
}
