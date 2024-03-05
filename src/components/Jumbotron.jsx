import React from 'react'

export const Jumbotron = () => {
  return (
 <div class="grid grid-cols-1 md:grid-cols-2">
      <section class="bg-white dark:bg-gray-900">
        <div class="container py-8 px-4 mx-auto max-w-screen-xl lg:py-16 mt-20">
          <article>
            <p class="text-white mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 dark:text-white text-center">My name Rahmat Tri Kuncoro</p>
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center mt-2">
              I'm a Full Stack <br/> Developer
            </h1>
            <p class="text-left mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              Step into my Digital Realm, where I blend creativity with functionality.
            </p>
          </article>
          
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900"
            >
              Get resume
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-270"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div className="container py-8 px-4 mx-auto max-w-screen-xl lg:py-16 mt-5">
          <img class="object-cover h-55 w-96 mr-50 pr-10 justify-center" src="/public/web-design.png" alt="Tailwind CSS" />
        </div>
      </section>
    </div>
  );
}
