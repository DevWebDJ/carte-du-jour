import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { viande } from "../constants/constants";

const Sauce = () => {
  const [selected, setSelected] = useState(viande[0]);
  return (
    <div className=" font-poppins mr-5">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative ">
          <Listbox.Button className=" cursor-pointer relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
            <span className="block truncate">{selected.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-all delay-75 duration-100`}
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className=" cursor-pointer absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {viande.map((viande, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative select-none py-2 pl-10 pr-4 cursor-pointer ${
                      active ? "bg-green-100 text-green-900" : "text-gray-900"
                    }`
                  }
                  value={viande}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`flex items-center justify-between truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {viande.title}{" "}
                        {typeof viande.price == "number"
                          ? `- ${viande.price} DA`
                          : ""}
                        {/* <img src={viande.icon} alt="" className=" h-10" /> */}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={`transition-all delay-75 duration-100`}
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Sauce;
