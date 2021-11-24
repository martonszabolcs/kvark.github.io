import "./App.css";
import torula from "./assets/torula.png";
import martonszabolcs from "./assets/martonszabolcs.png";
import paypal from "./assets/paypal.png";
import { useRef } from "react";

function App() {
  const money = 542313;
  const allMoney = 3500000;
  const allMoneyPercent = (money / allMoney) * 100;
  const indicatorStyle = { width: allMoneyPercent + "%" };
  const myRef = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="App font-archivo">
      <div
        onClick={executeScroll}
        className="p-2 z-30 h-14 fixed rounded-3xl right-2 bottom-5 md:right-20 bg-green flex items-center justify-center"
      >
        <div className="font-bold mx-5 text-xl ">Támogass minket</div>
      </div>
      <div className="bg-black text-left h-screen w-screen bg-kvark bg-cover bg-center bg-fixed">
        <div className="mx-28 pt-24 absolute bottom-5 md:relative">
          <div className="w-20 bg-white h-20 absolute -left-28 block md:hidden" />
          <img
            src={torula}
            alt="Torula"
            className="h-20 w-20 md:w-28 md:h-28 rounded absolute -left-24 block md:hidden"
          />
          <h1 className="mb-9 titleLine text-9xl font-bold text-green">
            KVA <br /> RK
          </h1>
          <h2 className="text-2xl mt-9 text-white">
            Zenés előadás három <br /> részben
          </h2>
          <h3 className="text-3xl mt-9 font-bold text-green">
            2022. MÁJUS 21. 20:00
          </h3>
        </div>
        <img
          src={torula}
          alt="Torula"
          className="w-28 mx-32 h-28 bottom-0 absolute hidden md:block"
        />
      </div>
      <div className="text-left pt-24 pb-24 w-screen bg-bgwhite flex flex-col items-center">
        <div className="m-10 md:w-3/5 md:m-0 mt-0">
          <h4 className=" text-4xl mb-12 font-bold text-black">
            Támogass minket
          </h4>
          <div class="aspect-w-16 aspect-h-9 video rounded">
            <iframe
              src="https://www.youtube.com/embed/jLkT0NDYawE"
              frameborder="5"
              className="rounded"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div ref={myRef} className="text-xl mt-10 text-black">
            Fringilla cum vel hendrerit suspendisse morbi mauris nisl, id. Sed
            et enim amet feugiat arcu nisl, blandit nulla. Sed ut turpis viverra
            mi, suspendisse ullamcorper dictum lectus cursus.
          </div>
          <div className="mb-2 flex justify-between">
            <div className="text-xl mt-10 text-black">0 Ft</div>
            <div className="text-xl mt-10 text-black">3.500.000 Ft</div>
          </div>
          <div className="border w-full h-5 rounded">
            <div
              className="h-5 rounded -mt-0.49 -ml-0.5 bg-black"
              style={indicatorStyle}
            />
          </div>
          <div className="text-xl font-bold text-center  text-black">
            {money} Ft
          </div>
        </div>
        <img
          href="https://www.paypal.me/martonszabolcs"
          src={paypal}
          alt="PayPal"
          className="h-20 mt-14"
        />
        <div className="text-m text-center mt-10 text-black">
          <div className="font-bold">Banki átutalással</div>
          Számlatulajdonos: Concilium Arts Alapítvány
          <br />
          Bankszámlaszám (UniCredit): 10918001-00000087-56130006 
          <br />
          IBAN nemzetközi számlaszám: HU08109180010000008756130006
        </div>
      </div>
      <div className=" text-left pt-24 pb-24 w-screen bg-black flex flex-col items-center">
      <div className="m-10 md:w-3/5 md:m-0 mt-0">
          <h4 className=" text-4xl  mb-12 font-bold text-green">
            A zeneszerzőről
          </h4>
          <div className="lg:flex">
            <img
              src={martonszabolcs}
              alt="MartonSzabolcs"
              className="w-40 h-40 mr-5"
            />
            <div className="text-xl mt-10 text-white">
              Fringilla cum vel hendrerit suspendisse morbi mauris nisl, id. Sed
              et enim amet feugiat arcu nisl, blandit nulla. Sed ut turpis
              viverra mi, suspendisse ullamcorper dictum lectus cursus.
            </div>
          </div>
        </div>
      </div>
      <div className=" text-left pt-24 pb-24 w-screen bg-bgwhite flex flex-col items-center">
      <div className="m-10 md:w-3/5 md:m-0 mt-0">
          <h4 className=" text-4xl  mb-12 font-bold text-black">
            Az előadásról
          </h4>
          <div class="aspect-w-16 aspect-h-9 video rounded">
            <iframe
              src="https://www.youtube.com/embed/_pWaMMS8Qm0"
              frameborder="5"
              className="rounded"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="text-xl mt-10 text-black">
            Morbi laoreet adipiscing egestas duis. Mi nullam nunc volutpat vel
            cras habitant diam dui ultrices. Sit iaculis tincidunt nam est
            scelerisque dictum. Id at massa aliquet cursus morbi. Lobortis quam
            tellus suscipit aliquam, viverra auctor tempor. Tincidunt vel lacus,
            maecenas porttitor. Leo volutpat diam duis sit nisi condimentum
            varius arcu. Nibh ipsum lectus amet, sit porttitor diam. Amet a,
            neque interdum at leo nibh sagittis sapien.
          </div>
        </div>
      </div>
      <div className=" text-left pt-24 pb-24 w-screen bg-black flex flex-col items-center">
      <div className="m-10 md:w-3/5 md:m-0 mt-0">
          <h4 className=" text-4xl  mb-12 font-bold text-green">
            Mérföldkövek
          </h4>

          <div className="text-xl mt-10 text-white">
            Fringilla cum vel hendrerit suspendisse morbi mauris nisl, id. Sed
            et enim amet feugiat arcu nisl, blandit nulla. Sed ut turpis viverra
            mi, suspendisse ullamcorper dictum lectus cursus.
          </div>
          <div className="flex-col hidden lg:flex">
            <div className="flex mt-16">
              <div className="text-xl font-bold mt-10 w-1/6  text-center text-white">
                2021. június
                <div className="text-xl font-normal text-center text-white">
                  Fringilla cum vel hendrerit suspendisse.
                </div>
              </div>
              <div className="text-xl font-bold mt-10 w-1/6  text-center text-white"></div>
              <div className="text-xl font-bold mt-10 w-1/6  text-center text-white">
                2021. június
                <div className="text-xl font-normal text-center text-white">
                  Fringilla cum vel hendrerit suspendisse.
                </div>
              </div>
              <div className="text-xl font-bold mt-10 w-1/6  text-center text-white"></div>
              <div className="text-xl font-bold mt-10 w-1/6  text-center text-white">
                2021. június
                <div className="text-xl font-normal text-center text-white">
                  Fringilla cum vel hendrerit suspendisse.
                </div>
              </div>
              <div className="text-xl font-bold mt-10 w-1/6  text-center text-white"></div>
            </div>
            <div className="flex my-6">
              <div className="w-1/6 border-white flex justify-center border-b">
                <div className="bg-green rounded-sm  h-3 w-3 -mt-1.5 absolute" />
              </div>
              <div className="w-1/6 border-white flex justify-center border-b">
                <div className="bg-green rounded-sm  h-3 w-3 -mt-1.5 absolute" />
              </div>
              <div className="w-1/6 border-white flex justify-center border-b">
                <div className="bg-green rounded-sm  h-3 w-3 -mt-1.5 absolute" />
              </div>
              <div className="w-1/6 border-white flex justify-center border-b">
                <div className="bg-green rounded-sm  h-3 w-3 -mt-1.5 absolute" />
              </div>
              <div className="w-1/6 border-white flex justify-center border-b border-dashed">
                <div className="bg-green rounded-sm  h-3 w-3 -mt-1.5 absolute" />
              </div>
              <div className="w-1/6 border-white flex justify-center border-b border-dashed">
                <div className="bg-green rounded-sm  h-3 w-3 -mt-1.5 absolute" />
              </div>
            </div>
            <div className="flex">
              <div className="text-xl font-bold mt-10 w-1/6  text-center text-white"></div>
              <div className="text-xl font-bold mt-10 w-1/6  text-center text-white">
                2021. június
                <div className="text-xl font-normal text-center text-white">
                  Fringilla cum vel hendrerit suspendisse.
                </div>
              </div>
              <div className="text-xl font-bold mt-10 w-1/6  text-center text-white"></div>
              <div className="text-xl font-bold mt-10 w-1/6  text-center text-white">
                2021. június
                <div className="text-xl font-normal text-center text-white">
                  Fringilla cum vel hendrerit suspendisse.
                </div>
              </div>
              <div className="text-xl font-bold mt-10 w-1/6  text-center text-white"></div>
              <div className="text-xl font-bold mt-10 w-1/6  text-center text-white">
                2021. június
                <div className="text-xl font-normal text-center text-white">
                  Fringilla cum vel hendrerit suspendisse.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden mt-16 justify-between flex">
            <div className="flex-col w-1/3">
              <div className="text-xl font-bold  h-24 text-center text-white">
                2021. június
                <div className="text-xl font-normal text-center text-white">
                  Fringilla cum vel hendrerit suspendisse.
                </div>
              </div>
              <div className="text-xl font-bold  h-24 text-center text-white"></div>
              <div className="text-xl font-bold  h-24 text-center text-white">
                2021. június
                <div className="text-xl font-normal text-center text-white">
                  Fringilla cum vel hendrerit suspendisse.
                </div>
              </div>
              <div className="text-xl font-bold  h-24 text-center text-white"></div>
              <div className="text-xl font-bold  h-24 text-center text-white">
                2021. június
                <div className="text-xl font-normal text-center text-white">
                  Fringilla cum vel hendrerit suspendisse.
                </div>
              </div>
              <div className="text-xl font-bold  h-24 text-center text-white"></div>
            </div>
            <div className="flex-col justify-between">
              <div className="h-24 border-white flex items-center border">
                <div className="bg-green rounded-sm  h-3 w-3 -ml-1.5 absolute" />
              </div>
              <div className="h-24 border-white flex items-center border">
                <div className="bg-green rounded-sm  h-3 w-3 -ml-1.5 absolute" />
              </div>
              <div className="h-24 border-white flex items-center border">
                <div className="bg-green rounded-sm  h-3 w-3 -ml-1.5 absolute" />
              </div>
              <div className="h-24 border-white flex items-center border">
                <div className="bg-green rounded-sm  h-3 w-3 -ml-1.5 absolute" />
              </div>
              <div className="h-24 border-white flex items-center border border-dashed">
                <div className="bg-green rounded-sm  h-3 w-3 -ml-1.5 absolute" />
              </div>
              <div className="h-24 border-white flex items-center border border-dashed">
                <div className="bg-green rounded-sm  h-3 w-3 -ml-1.5 absolute" />
              </div>
            </div>
            <div className="flex-col justify-between w-1/3">
              <div className="text-xl font-bold h-24 text-center text-white"></div>
              <div className="text-xl font-bold h-24 text-center text-white">
                2021. június
                <div className="text-xl font-normal text-center text-white">
                  Fringilla cum vel hendrerit suspendisse.
                </div>
              </div>
              <div className="text-xl font-bold h-24 text-center text-white"></div>
              <div className="text-xl font-bold h-24 text-center text-white">
                2021. június
                <div className="text-xl font-normal text-center text-white">
                  Fringilla cum vel hendrerit suspendisse.
                </div>
              </div>
              <div className="text-xl font-bold h-24 text-center text-white"></div>
              <div className="text-xl font-bold h-24 text-center text-white">
                2021. június
                <div className="text-xl font-normal text-center text-white">
                  Fringilla cum vel hendrerit suspendisse.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left pt-24 pb-24 w-screen bg-bgwhite flex flex-col items-center">
        <div className="w-3/5 lg:flex justify-between ">
          <h4 className=" text-4xl lg: lg:mt-10 font-bold text-black">
            Kapcsolat
          </h4>
          <div className="text-xl mt-10 text-black">
            hello@martonszabolcs.hu
            <br />
            06306102931
          </div>
          <div className="text-xl mt-10 text-black">
            sara@torula.hu
            <br />
            marci@torula.hu
            <br />
            06306102931
          </div>
        </div>
      </div>
      <div className="mb-8">© Torula, 2021. Minden jog fenntartva.</div>
    </div>
  );
}

export default App;
