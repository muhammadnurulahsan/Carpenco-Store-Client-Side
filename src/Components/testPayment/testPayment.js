import React from "react";
import "./testPayment.css";

const testPayment = () => {
  return (
    <div className="">
      <div className="min-w-screen min-h-screen bg-gray-50 py-5">
        <div className="px-5">
          <div className="mb-2">
            <a
              href="purchase"
              className="focus:outline-none hover:underline text-gray-500 text-sm"
            >
              <i className="mdi mdi-arrow-left text-gray-400"></i>Back
            </a>
          </div>
          <div className="mb-2">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-600">
              Checkout.
            </h1>
          </div>
          <div className="mb-5 text-gray-400">
            <a
              href="purchase"
              className="focus:outline-none hover:underline text-gray-500"
            >
              Home
            </a>{" "}
            /{" "}
            <a
              href="purchase"
              className="focus:outline-none hover:underline text-gray-500"
            >
              Cart
            </a>{" "}
            / <span className="text-gray-600">Checkout</span>
          </div>
        </div>
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
          <div className="w-full">
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-7/12 lg:pr-10">
                <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                  <div className="w-full flex items-center">
                    <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                      <img
                        src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-semibold uppercase text-gray-600">
                        Ray Ban Sunglasses.
                      </h6>
                      <p className="text-gray-400">x 1</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-600 text-xl">
                        $210
                      </span>
                      <span className="font-semibold text-gray-600 text-sm">
                        .00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="-mx-2 flex items-end justify-end">
                    <div className="flex-grow px-2 lg:max-w-xs">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Discount code
                      </label>
                      <div>
                        <input
                          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="XXXXXX"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="px-2">
                      <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                  <div className="w-full flex mb-3 items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Subtotal</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold">$190.91</span>
                    </div>
                  </div>
                  <div className="w-full flex items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Taxes (GST)</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold">$19.09</span>
                    </div>
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                  <div className="w-full flex items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Total</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold text-gray-400 text-sm">
                        AUD
                      </span>{" "}
                      <span className="font-semibold">$210.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-5/12">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-3 items-center">
                    <div className="w-32">
                      <span className="text-gray-600 font-semibold">
                        Contact
                      </span>
                    </div>
                    <div className="flex-grow pl-3">
                      <span>Scott Windon</span>
                    </div>
                  </div>
                  <div className="w-full flex items-center">
                    <div className="w-32">
                      <span className="text-gray-600 font-semibold">
                        Billing Address
                      </span>
                    </div>
                    <div className="flex-grow pl-3">
                      <span>123 George Street, Sydney, NSW 2000 Australia</span>
                    </div>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full p-3 border-b border-gray-200">
                    <div className="mb-5">
                      <label
                        for="type1"
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          className="form-radio h-5 w-5 text-indigo-500"
                          name="type"
                          id="type1"
                          checked
                        />
                        <img
                          src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                          className="h-6 ml-3"
                          alt=""
                        />
                      </label>
                    </div>
                    <div>
                      <div className="mb-3">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Name on card
                        </label>
                        <div>
                          <input
                            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="John Smith"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Card number
                        </label>
                        <div>
                          <input
                            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="0000 0000 0000 0000"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="mb-3 -mx-2 flex items-end">
                        <div className="px-2 w-1/4">
                          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                            Expiration date
                          </label>
                          <div>
                            <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                              <option value="01">01 - January</option>
                              <option value="02">02 - February</option>
                              <option value="03">03 - March</option>
                              <option value="04">04 - April</option>
                              <option value="05">05 - May</option>
                              <option value="06">06 - June</option>
                              <option value="07">07 - July</option>
                              <option value="08">08 - August</option>
                              <option value="09">09 - September</option>
                              <option value="10">10 - October</option>
                              <option value="11">11 - November</option>
                              <option value="12">12 - December</option>
                            </select>
                          </div>
                        </div>
                        <div className="px-2 w-1/4">
                          <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                          </select>
                        </div>
                        <div className="px-2 w-1/4">
                          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                            Security code
                          </label>
                          <div>
                            <input
                              className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                              placeholder="000"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-3">
                    <label
                      for="type2"
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-indigo-500"
                        name="type"
                        id="type2"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                        width="80"
                        className="ml-3"
                        alt=""
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
                    <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="text-center text-gray-400 text-sm">
            <a
              href="https://www.buymeacoffee.com/scottwindon"
              target="blank"
              className="focus:outline-none underline text-gray-400"
            >
              <i className="mdi mdi-beer-outline"></i>Buy me a beer
            </a>{" "}
            and help support open-resource
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default testPayment;
