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
              <img src="https://cdn.discordapp.com/attachments/1125426619230732308/1126663862666657943/160777445_529837201357748_3318328582058695100_.jpg" alt="arjuna" class="w-full" />
              <a href="https://www.facebook.com/nomouth.gun">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-lg font-bold text-white ">Arjuna Dwi Damara Putra</h5>
            <h6 class="mb-4 font-medium text-primary dark:text-primary-400  text-white">
              Web Developer
            </h6>
            <p class="text-white">
            Saya biasa dipanggil Razita. Saya adalah seorang mahasiswa di Politeknik Negeri Jakarta. Saya berumur 19 tahun yang hobi mendengarkan musik dan bermain game Minecraft.
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
              <img src="https://cdn.discordapp.com/attachments/1125426619230732308/1126663862922530836/226415811_606376957037105_5029654793496987403_.jpg" alt="razita" class="w-half" />
              <a href="https://instagram.com/razitanazlafeb?igshid=MzNlNGNkZWQ4Mg">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-lg font-bold  text-white">Razita Nazla Febriani</h5>
            <h6 class="mb-4 font-medium text-primary dark:text-primary-400 text-white">
              Pelajar/Mahasiswa
            </h6>
            <p class="text-white">
              Saya biasa dipanggil Razita. Saya adalah seorang mahasiswa di Politeknik Negeri Jakarta. Saya berumur 19 tahun yang hobi mendengarkan musik dan membaca. Kulineran juga termasuk kesukaan saya.
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
