import Image from "next/image";
import Button from "../../ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 ">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row">
        <div className="h-full w-full basis-full lg:basis-4/6 ">
          <div className=" relative aspect-square overflow-hidden h-full max-h-[550px] w-full ">
            <img
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-light.png%3Fv%3D1689796304&w=1200&q=75"
              alt="white-bag"
              className="w-full h-full object-contain"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
              }}
              sizes="(min-with:1024px) 66vw,100vw"
            />
            <div className="absolute bottom-[15%]  flex w-full justify-center">
              <div className="flex rounded-full bg-neutral-50/80 backdrop-blur-sm text-neutral-500 items-center h-11 mx-auto border border-white">
                <Link href={""}
                className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    ></path>
                  </svg>
                </Link>
                <div className="mx-1 h-6 w-px bg-neutral-300"></div>
                <Link href={""}
                className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
            <li className="h-auto w-20">
              <Link href={''} className="w-full h-full">
                <div className="w-full h-full bg-white overflow-hidden rounded flex justify-center border hover:border-blue-500">
                  <img src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=96&q=75" alt="" className="ease-in-out hover:scale-105 relative h-full w-full object-contain transition " 
                  style={{width:80,height:80,color:'transparent'}}
                  />
                </div>
              </Link>
            </li>
            <li className="h-auto w-20">
              <Link href={''} className="w-full h-full">
                <div className="w-full h-full bg-white overflow-hidden rounded flex justify-center border hover:border-blue-500">
                  <img src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-light.png%3Fv%3D1689796304&w=96&q=75" alt="" className="ease-in-out hover:scale-105 relative h-full w-full object-contain transition " 
                  style={{width:80,height:80,color:'transparent'}}
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="basis-full lg:basis-2/6 ">
          <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
            <h1 className=" mb-3 text-5xl font-medium">Acme Drawstring Bag</h1>
            <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
              <p>
                $12.00<span className="ml-1 inline">USD</span>
              </p>
            </div>
          </div>
          <div className="block">
            <h1 className=" uppercase mb-4 text-sm font-medium">Color</h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 py-1 px-2 text-base cursor-default ring-2 ring-blue-600">Black</button>
              <Button name={"White"} />
            </div>
          </div>
          <div className="block">
            <h1 className=" uppercase mb-4 text-sm font-medium">Size</h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <button disabled className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 py-1 px-2 text-base ring-neutral-300 ring-1 text-neutral-500">6 x 8 inch</button>
              <Button name={"7 x 9 inch"} />
              {/* <button className="rounded-full border bg-neutral-100 hover:scale-110 hover:ring-2 hover:ring-blue-600 px-3 py-1 flex min-w-[48px] items-center justify-center text-sm  ring-1 ring-white  transition  ease-in-out">7 x 9 inch</button> */}
              <Button name={"8 x 11 inch"} />
              <Button name={"10 x 15 inch"} />
              <Button name={"9 x 12 inch"} />
              <Button name={"12 x 16 inch"} />
            </div>
          </div>
          <ul className="list-disc list-inside p-3 text-sm space-y-1 mb-9">
            <li>Strong 210D ripstop nylon drawstring bag</li>
            <li>Available in multiple sizes</li>
            <li>Easy-to-close durable drawstring</li>
            <li>Sturdy, reusable, and resilient</li>
          </ul>
          <button
            aria-label="Add item to cart"
            className="relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
          >
            <div className="absolute left-0 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                ></path>
              </svg>
            </div>
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
