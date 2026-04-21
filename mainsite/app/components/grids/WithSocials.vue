<template>
  <div class="relative p-20 bg-red-900 text-red-50 rounded-3xl overflow-hidden min-h-200">
    <div :style="{ backgroundImage: `url(/images/img2.jpg)` }" class="absolute top-0 left-0 z-1 opacity-60 w-full h-full bg-center bg-cover bg-no-repeat" />

    <div class="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 grid grid-cols-12 text-red-50">
      <div class="col-span-6">
        <h2 class="text-5xl mb-5 leading-22">
          Un besoin ? Travaillons <word-highlight class="bg-purple-200 text-purple-50">ensemble</word-highlight>
        </h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dicta vitae explicabo tempora nulla nostrum ducimus id culpa architecto voluptatum, sit in, labore quia quo minima doloribus, dolorem molestiae aperiam.</p>

        <div class="mt-10">
          <u-button size="xl" class="rounded-full">
            Discutons de votre projet
            <icon name="lucide:arrow-up-right" />
          </u-button>
        </div>
      </div>

      <div class="flex col-start-8 col-span-4 items-center justify-center">
        <div id="socials" class="flex items-center justify-start gap-2 mt-10">
          <base-social-button icon-name="lucide:facebook" href="https://www.facebook.com" highlight />
          <base-social-button icon-name="lucide:twitter" href="https://www.twitter.com" />
          <base-social-button icon-name="lucide:linkedin" href="https://www.linkedin.com" />
        </div>
      </div>
    </div>
  </div>
</template>
