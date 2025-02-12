import React, { useEffect, useState, useRef } from "react";
import { IComboBoxProps, IOption } from "./ComboBox.d";

const ComboBox: React.FC<IComboBoxProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<IOption>({
    id: null,
    name: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState<IOption[]>([]);
  const [isShowOptionList, setIsShowOptionList] = useState(false);
  const comboBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.value) {
      const defaultOption = props.options.find(
        (option) => option.name === props.value
      );
      if (defaultOption) {
        setSelectedOption(defaultOption);
        setSearchTerm(defaultOption.name);
      }
    }
  }, [props.value, props.options]);

  useEffect(() => {
    if (searchTerm) {
      const filteredOption = props.options.filter((option) =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setOptions(filteredOption);
      if (!selectedOption?.id) setIsShowOptionList(true);
    } else {
      setOptions(props.options);
    }
  }, [searchTerm]);

  const updateSelectedOption = (option: IOption) => {
    const { id, name } = option;
    setSelectedOption({ id, name });
    setSearchTerm(name);
    props.onChange(id, name);
    setIsShowOptionList(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        comboBoxRef.current &&
        !comboBoxRef.current.contains(event.target as Node)
      ) {
        setIsShowOptionList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={comboBoxRef}>
      {props.label && (
        <label className="font-medium text-sm">{props.label}</label>
      )}
      <div className="relative">
        <input
          className="py-3 px-3.5 block w-full border-1 border-gray-300 font-normal rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          type="text"
          role="combobox"
          value={searchTerm}
          placeholder={props.placeholder}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsShowOptionList(true)}
        />
        <div className="absolute top-1/2 end-3 -translate-y-1/2">
          <img src={"/upDownIcon.svg"} alt="up down icon" />
        </div>
      </div>
      {props.errors?.[props?.name as keyof string] && (
        <div className="text-red-500 text-sm">
          {props?.errors?.[props?.name as keyof string]}
        </div>
      )}
      {isShowOptionList && (
        <div className="absolute z-50 w-full max-h-72 p-3.5 bg-white drop-shadow-xl mt-2 rounded-lg overflow-hidden overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={`options-${index}`}
              className="cursor-pointer py-2 px-2.5 rounded w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg hover:text-blue-900 hover:bg-blue-50"
              onClick={() => updateSelectedOption(option)}
            >
              <div className="flex justify-between items-center w-full">
                <span>{option.name}</span>
                <span className="hidden hs-combo-box-selected:block">
                  <img src={"/tickIcon.svg"} alt="tick icon" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComboBox;
