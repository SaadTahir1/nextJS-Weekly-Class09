import Image from 'next/image';

const HeroSection = () => {
  return (
    <div><section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Pakol Hat
        </h1>
        <p className="text-gray-600 mb-6">
          PKR 1,200
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
        <a href="./Buy">Buy</a>
        </button>
      </div>
      
      <div className="lg:w-1/2">
        <Image
          src="/Pakol.jpg" 
          alt="Hero Image"
          width={300} 
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  </section>
    <br />

    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Eau Da Perfume
          </h1>
          <p className="text-gray-600 mb-6">
            PKR 8,999
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            <a href="./Buy">Buy</a>
          </button>
        </div>
        
        
        <div className="lg:w-1/2">
          <Image
            src="/EauDaPerfume.jpeg" 
            alt="Hero Image"
            width={300} 
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default HeroSection;
