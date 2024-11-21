import React from 'react';

const AboutUs = () => {
  return (
    <main>
        <articel>
    <div className="flex flex-col items-center justify-center  p-5  text-white mt-[100px] md:h-screen w-full  ">
      <h1 className="text-6xl font-bold text-center mb-6 text-[#F4BE39] font-londrina tracking-wider">About Us</h1>
      
      <section className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-3xl  text-white mb-4 font-quicksand">
          Welcome to <strong>Milane</strong>, where food is our passion and excellence is our standard. Located in the heart of the city, we are dedicated to bringing you a memorable dining experience with every meal.
        </p>
        <p className="text-3xl  text-white mb-4 font-quicksand">
          Our chefs are inspired by both local and international cuisines, crafting dishes that are not only delicious but also beautifully presented. At Milane, every bite tells a story, whether it’s a classic dish reimagined or a new culinary creation.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6">
          <h2 className="text-6xl font-bold mb-4 text-[#F4BE39] font-londrina tracking-wider">Our Mission</h2>
          <p className="text-white font-quicksand">
            At Milane, our mission is simple: to provide an incredible and delicious dining experience that makes every visit unforgettable. We prioritize fresh ingredients, authentic flavors, and a welcoming atmosphere, ensuring that you leave with a smile on your face.
          </p>
        </div>
        <div className="p-6">
          <h2 className="text-6xl font-bold mb-4 text-[#F4BE39] font-londrina tracking-wider">Notre histoire</h2>
          <p className="text-white font-quicksand">
            Founded by food enthusiasts with a love for gourmet dining, Milane started as a small dream that grew into a beloved restaurant. Over the years, we’ve become known for our creative dishes, our commitment to quality, and our passion for excellent service.
          </p>
        </div>
      </section>

      <section className="text-center my-12">
        <h2 className="text-6xl text-[#F4BE39] font-bold mb-6 font-londrina tracking-wider">Why Choose Milane?</h2>
        <ul className="text-white list-disc list-inside font-quicksand text-start">
          <li>Exceptional food made with the freshest ingredients</li>
          <li>Creative dishes that blend local and international flavors</li>
          <li>Friendly, professional staff focused on providing top-notch service</li>
          <li>A warm and welcoming atmosphere perfect for any occasion</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-6xl text-[#F4BE39] font-bold mb-6 font-londrina tracking-wider">Join Us at Milane</h2>
        <p className="text-3xl text-white font-quicksand">
          Whether you're here for a casual lunch or a special dinner, we look forward to serving you! Visit us and experience the incredible and delicious food that Milane is known for.
        </p>
      </section>
    </div>
    </articel>
    </main>
  );
};

export default AboutUs;
