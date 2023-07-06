import React from "react";
const About = () => {
  return (

<div class="container my-24 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section class="mb-32 text-center">
    <h2 class="mb-20 text-center text-3xl font-bold">ABOUT US</h2>
    <div class="grid gap-6 md:grid-cols-2 xl:gap-x-50">
      
      <div class="mb-6 lg:mb-0">
        <div
          class="relative block rounded-lg bg-red-700 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="flex">
            <div
              class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="https://cdn.discordapp.com/attachments/1125426619230732308/1126144544296140880/Snapinsta.app_308000733_1133744150892544_3270023260099902961_n_1080.jpg" class="w-full" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-lg font-bold  text-white">Arjuna Dwi Damara Putra</h5>
            <h6 class="mb-4 font-medium text-primary dark:text-primary-400  text-white">
              Web Developer
            </h6>
            <p class="text-white">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna
              placerat vulputate. Ut vulputate est non quam dignissim
              elementum. Donec a ullamcorper diam.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-6 lg:mb-0">
        <div
          class="relative block rounded-lg bg-red-700 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="flex">
            <div
              class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="https://cdn.discordapp.com/attachments/1125426619230732308/1126147542468546581/211087835_589596702048464_2471471540522376876_n.jpg" class="w-half" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-lg font-bold  text-white">Halley Frank</h5>
            <h6 class="mb-4 font-medium text-primary dark:text-primary-400 text-white">
              Marketing Specialist
            </h6>
            <p class="text-white">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium accusamus contestatur voluptatum
              deleniti atque corrupti.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</div>

 
  );
};

export default About;
