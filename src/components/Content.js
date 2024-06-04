import React from "react";
import "../components/Content.css";
import Carousel from "react-bootstrap/Carousel";

function Content() {
  return (
    <>
      <div className="relative flex flex-col font-custom px-12">
        {/* HEADING */}
        <section className="animate-pulse mt-5">
          <div className="m-0 text-black font-custom">
            <h2 className="text-xl font-bold">OVERVIEW</h2>
          </div>
          <div className="m-0 text-black font-custom my-8">
            Prolific IO Storage Accelerator is a product that has been jointly
            <br /> developed between AWS Global Storage Solution team and
            <br /> GlobalXperts Solution Architects.
          </div>
        </section>

        {/* card */}
        <section className="mt-5">
          <div className=" flex flex-row">
            <div className="mt-.5 w-1/4 h-156px p-5 border border-gray-300 bg-#000 shadow-lg shadow-sky-50 mr-5 rounded-md">
              {/* <img className="w-full" src="..." alt="..."/> */}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card title</div>
                <p className="text-gray-700 text-base">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go somewhere
                </button>
              </div>
            </div>
            <div className="mt-.5  w-1/4 h-156px p-5 border border-gray-300 bg-#000 shadow-lg shadow-sky-50 rounded-md mr-5 ">
              {/* <img className="w-full" src="..." alt="..."/> */}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card title</div>
                <p className="text-gray-700 text-base">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go somewhere
                </button>
              </div>
            </div>
            <div className="mt-.5 w-1/4 h-156px p-5 border border-gray-300 bg-#000 shadow-lg shadow-sky-50 rounded-md mr-5 ">
              {/* <img className="w-full" src="..." alt="..."/> */}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card title</div>
                <p className="text-gray-700 text-base">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go somewhere
                </button>
              </div>
            </div>
            <div className="mt-.5 w-1/4 h-156px p-5 border border-gray-300 bg-#000 shadow-lg shadow-sky-50 mr-5 rounded-md ">
              {/* <img className="w-full" src="..." alt="..."/> */}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card title</div>
                <p className="text-gray-700 text-base">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go somewhere
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section>
          <div className="flex flex-row justify-around mt-20 mb-20">
            <div className="flex items-start">
              <div className="mt-20">
                <h2 className="text-4xl font-bold font-custom">
                  41% faster development <br></br> lifecycle
                </h2>
                <p className="font-custom font-normal mt-10 text-gray-500">
                  Accelerate service deployment and scaling with multi-platform{" "}
                  <br></br>
                  service discovery and health monitoring capabilities.
                </p>
              </div>
              <div className="mx-6">
                <img
                  className="w-full "
                  src="https://www.datocms-assets.com/2885/1695059743-consul-overview-1.svg"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justi mt-20 mb-20">
            <div className="flex items-start">
              <div className="">
                <img
                  className="w-full"
                  src="https://www.datocms-assets.com/2885/1695059743-consul-overview-1.svg"
                  alt="..."
                />
              </div>
              <div className="mt-20 mx-6 my-6">
                <h2 className="text-4xl font-bold font-custom">
                  41% faster development <br></br> lifecycle
                </h2>
                <p className="font-custom font-normal mt-10 text-gray-500">
                  Accelerate service deployment and scaling with multi-platform{" "}
                  <br></br>
                  service discovery and health monitoring capabilities.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-20 mb-20">
            <div className="flex items-start">
              <div className="mt-20">
                <h2 className="text-4xl font-bold font-custom">
                  41% faster development <br></br> lifecycle
                </h2>
                <p className="font-custom font-normal mt-10 text-gray-500">
                  Accelerate service deployment and scaling with multi-platform{" "}
                  <br></br>
                  service discovery and health monitoring capabilities.
                </p>
              </div>
              <div className="mx-10">
                <img
                  className="w-full"
                  src="https://www.datocms-assets.com/2885/1695059743-consul-overview-1.svg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* caroussel */}
        <section className="flex justify-center items-center h-60 w-100vh overflow-hidden">
          <Carousel>
            <Carousel.Item interval={1000}>
              <h2 className="text-xl font-bold text-center">
                With Consul developers can now request an Azure Kubernetes
                Service (AKS) <br />
                cluster through a self-service portal and have everything they
                need for their deployment <br />
                such code, scripts, APIs from days to less than 30 minutes.
              </h2>
              <p className="text-sm font-light mt-2 text-center">
                PIERRE SOUCHAY
              </p>
              <p className="text-xs font-thin mt-2 text-center">
                MERCEDES | PRINCIPAL INFRASTRUCTURE ENGINEERING
              </p>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <h2 className="text-xl font-bold text-center">
                With Consul developers can now request an Azure Kubernetes
                Service (AKS) <br />
                cluster through a self-service portal and have everything they
                need for their deployment <br />
                such code, scripts, APIs from days to less than 30 minutes.
              </h2>
              <p className="text-sm font-light mt-2 text-center">
                PIERRE SOUCHAY
              </p>
              <p className="text-xs font-thin mt-2 text-center">
                MERCEDES | PRINCIPAL INFRASTRUCTURE ENGINEERING
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <h2 className="text-xl font-bold text-center">
                With Consul developers can now request an Azure Kubernetes
                Service (AKS) <br />
                cluster through a self-service portal and have everything they
                need for their deployment <br />
                such code, scripts, APIs from days to less than 30 minutes.
              </h2>
              <p className="text-sm font-light mt-2 text-center">
                PIERRE SOUCHAY
              </p>
              <p className="text-xs font-thin mt-2 text-center">
                MERCEDES | PRINCIPAL INFRASTRUCTURE ENGINEERING
              </p>
            </Carousel.Item>
          </Carousel>
        </section>

        {/* black section  */}

        <section class="flex flex-col z-1  justify-center items-center h-auto bg-black">
          <div class=" h-auto  w-9/12  z-100 flex justify-center items-center">
            <img
              src="https://www.hashicorp.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F2885%2F1642016390-pandora-casestudy-bg.jpg&w=3840&q=75"
              alt=""
              class="max-w-full h-auto"
            />
          </div>
          <h1 className="text-5xl z-10  font-extrabold text-white font-custom">
            At the speed of sound
          </h1>
          <div class="mt-10 grid lg:grid-cols-3 gap-6">
            <div>
              <h1 className="text-5xl z-10 mx-5 font-extrabold text-white font-custom">50K+</h1>
              <p className="text-white mx-5 ">Services discovered, automated discovery for any scale</p>
            </div>
            <div> 
              <h1 className="text-5xl z-10 mx-5 font-extrabold text-white font-custom">15 min</h1>
              <p className="text-white mx-5 ">Application rollout time, accelerated from several days</p></div>
            <div> 
              <h1 className="text-5xl z-10 mx-5 font-extrabold text-white font-custom">2K+</h1>
              <p className="text-white mx-5 "> Integrations with connected services</p></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Content;
