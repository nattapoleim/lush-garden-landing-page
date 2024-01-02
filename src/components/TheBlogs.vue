<script setup>
  import { CalendarDays, ArrowRight } from 'lucide-vue-next';

  const blogsContent = [
    {
      cover: './src/assets/blogs/blog1.png',
      title: 'More productive with an atmosphere of greenery',
      content:
        'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
      date: 'December 20, 2023',
    },
    {
      cover: './src/assets/blogs/blog2.png',
      title: 'The benefits of plants in your room',
      content:
        'Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....',
      date: 'December 10, 2023',
    },
    {
      cover: './src/assets/blogs/blog3.png',
      title: 'Hobbyist plants in the house',
      content:
        'Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....',
      date: 'December 15, 2023',
    },
  ];
</script>

<template>
  <section
    id="blogs"
    class="max-w-6xl mx-auto my-20 scroll-mt-20"
  >
    <h2 class="mb-10 text-3xl font-bold text-center capitalize text-primary">
      Interesting blog to read
    </h2>
    <div
      class="grid grid-cols-1 gap-10 px-10 xl:px-0 md:grid-cols-2 lg:grid-cols-3 place-content-center"
    >
      <div
        v-for="(blog, index) in blogsContent"
        :key="index"
        class="flex flex-col items-stretch justify-between h-full gap-2 text-start"
      >
        <div class="w-full group h-[22rem] rounded-lg overflow-hidden">
          <img
            class="object-cover w-full h-full duration-300 group-hover:scale-110 rounded-xl"
            :src="blog.cover"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-between flex-1 gap-2 mt-3">
          <h2 class="text-xl font-bold text-primary">{{ blog.title }}</h2>
          <p class="font-light">{{ blog.content }}</p>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center justify-between gap-1 text-xs font-light sm:text-base">
              <CalendarDays class="inline w-3 h-3 sm:w-3 sm:h-3" /> {{ blog.date }}
            </div>
            <a
              href="#"
              class="flex items-center justify-end text-xs sm:gap-2 sm:text-base text-primary link-hover"
            >
              Read More <ArrowRight class="inline w-3 h-3 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
