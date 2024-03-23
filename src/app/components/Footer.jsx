"use client"


export default function Footer() {
  return (
    <>
<footer className=" mt-20 ">
    <div class="bg-white py-4 text-gray-400">
      <div class="container px-4 mx-auto">
        <div class="-mx-4 flex flex-wrap justify-between">
          <div class="px-4 my-4 w-full xl:w-1/5">
            {/* <a href="/" class="block w-56 mb-10">
              <svg version="1.1" viewBox="0 0 3368 512" xmlns="http://www.w3.org/2000/svg">
                {/* <g fill="none" fill-rule="evenodd">
                  <g transform="translate(0 -75)">
                    <g transform="translate(0 75)">
                      <rect width="512" height="512" rx="128" fill="#3D5AFE"></rect>
                      <rect x="149" y="176" width="220" height="220" fill="#fff"></rect>
                      <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                      <circle cx="369" cy="286" r="40" fill="#2962FF"></circle>
                    </g> 
                    
                  </g>
                </g>
              </svg>
            </a> */}
            <img  src="/PRlogo.png" classname="text-justify"/>
             </div>

          
         
          <div class="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 class="inline-block text-black font-pixel text-2xl font-semibold ml-6 pb-4 mb-4 ">Connect With Us</h2>
            </div>
            <div className="flex justify-center">
            <a href="#" class="inline-flex text-black items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-pink-500 transition duration-500 ease-in-out">
              <svg class=" w-44 h-44 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" bg-transparent py-4 text-gray-100">
      <div class="container mx-auto px-4">
        <div class="-mx-4 flex flex-wrap justify-between">
          <div class="px-4 w-full font-pixel text-center sm:w-auto sm:text-left">
           Designed and Developed by Vardaan Bhatia , Shaik Farhan , Aakash Banda
          </div>
          <div class="px-4 w-full text-center font-pixel sm:w-auto sm:text-left">
            Made with ❤️ by PR KMIT
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
}
