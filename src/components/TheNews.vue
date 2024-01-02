<script setup>
  import { ref, computed } from 'vue';

  const emailInput = ref('');
  const errorMessage = ref(false);
  const successfully = ref(false);

  const isValidEmail = computed(() => {
    return /^[^@]+@\w+(\.\w+)+\w$/.test(emailInput.value);
  });

  const inputValidate = () => {
    if (isValidEmail.value) {
      emailInput.value = '';
      errorMessage.value = false;
      showToast();
    } else {
      errorMessage.value = true;
    }
  };

  const showToast = () => {
    successfully.value = true;

    setTimeout(() => {
      successfully.value = false;
    }, 2500);
  };
</script>

<template>
  <section
    id="callus"
    class="my-20 scroll-mt-28 2xl:max-w-6xl bg-[url('/src/assets/news/news-bg.png')] bg-cover bg-bottom mx-auto h-[30rem] text-white"
  >
    <div
      class="grid w-full h-full grid-cols-1 px-5 sm:px-20 lg:grid-cols-2 place-content-center bg-black/60"
    >
      <div class="pr-10 font-bold leading-normal capitalize sm:text-2xl lg:text-start lg:text-4xl">
        Enter your email address for our mailing Promo or other interesting things
      </div>
      <div class="pt-10">
        <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <input
            type="email"
            class="w-full bg-transparent border-white sm:flex-1 sm:w-fit focus:border-white focus:outline-white placeholder:text-white/ 70 backdrop-blur-sm input input-bordered"
            :class="{ 'focus:outline-red-500 focus:border-red-500 border-red-500': errorMessage }"
            placeholder="Enter your email"
            v-model="emailInput"
          />
          <base-button
            class="w-48"
            color="green"
            @click="inputValidate"
            >Submit</base-button
          >
        </div>
        <p
          v-if="errorMessage"
          class="w-full px-3 mt-3 text-sm font-bold text-center text-red-500 md:text-start"
        >
          * Please enter your email adress
        </p>
      </div>
    </div>

    <div
      v-if="successfully"
      class="mt-20 toast toast-top toast-center"
    >
      <div class="text-white alert alert-success">
        <span>Successfully.</span>
      </div>
    </div>
  </section>
</template>
