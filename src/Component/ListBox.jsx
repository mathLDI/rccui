import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

/**
 *
 * @param {Array} choices - An array of choices
 * @param {Function} callback - Parent component callback
 * @param {String} width - tailwind width, w-72 if undefined
 * @returns
 */
export const ChoiceListbox = ({ choices, callback, width, reset, resetCallback, value, }) => {

  const [selected, setSelected] = useState(value);

  const changeHandler = (v) => {
    setSelected(v);
    callback(v);
  };

  useEffect(() => {
    if (reset) {
      setSelected(choices[[0]]);
      resetCallback();
    }
  }, [reset]);

  return (
    <div className={width === undefined ? "w-72" : width}>
      <Listbox value={selected} onChange={changeHandler}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border shadow-md focus:outline-none
           focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <div className="flex justify-between items-center">
              <span className="block truncate">{selected}</span>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {choices.map((choice, choiceIdx) => (
                <Listbox.Option
                  key={choiceIdx}
                  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-blue-100 text-blue-900" : "text-gray-900"}`}
                  value={choice}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{choice}</span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

ChoiceListbox.propTypes = {
  choices: PropTypes.array,
  callback: PropTypes.func,
  width: PropTypes.string,

  reset: PropTypes.bool,
  resetCallback: PropTypes.func,
  value: PropTypes.any
};
