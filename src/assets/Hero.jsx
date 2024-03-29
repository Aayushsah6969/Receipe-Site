import React from 'react'

const Hero = () => {
  return (
     <>
     <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Delightful Dishes: Unleash Your Culinary Creativity 
        <br class="hidden lg:inline-block"/> with Our Delectable Recipes!
      </h1>
      <p class="mb-8 leading-relaxed">Welcome to Delightful Dishes, your ultimate destination for culinary inspiration! Whether you're a seasoned chef or a kitchen novice, our website is your gateway to a world of mouthwatering recipes and cooking tips. From comforting classics to innovative creations, we strive to ignite your passion for cooking and empower you to create delicious meals that will impress friends and family alike. Join us on this gastronomic journey and unleash your culinary creativity with our collection of delectable recipes!</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Recipies</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Join Now</button>
      </div>
    </div>
  </div>
</section>
     </>
  )
}

export default Hero