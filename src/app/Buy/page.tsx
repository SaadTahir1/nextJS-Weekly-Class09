import Image from "next/image";

const Buy = () => {
    return(
        <div>
           <div> <Image
            className="items-center flex justify-center mx-auto"
             src="/ThankYou.jpg"
             alt=""
             width={500}
             height={600}
               />
            </div>
        <button className="bg-black mt-7 mb-5  flex justify-center w-40 mx-auto text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          
          <a href="/"> Go Home </a>
        </button>
        
        </div>
    )
};

export default Buy