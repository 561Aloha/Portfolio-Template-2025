import React from "react";
import './css/multiselectdropdown.css';
import Dropdown from './assets/dropdown.png';

const MultiSelectDropdown = ({ options, selected, toggleOption }) => {
    return (
        <div className="c-multi-select-dropdown">
            <div className="c-multi-select-dropdown__selected">
                <div>{selected.length} selected</div>
                <img src={Dropdown} alt="Dropdown Icon" />
            </div>
            <ul className="c-multi-select-dropdown__options">
                {options.map(option => {
                    const isSelected = selected.includes(option.id);
                    return (
                        <li
                            key={option.id}
                            className="c-multi-select-dropdown__option"
                            onClick={() => toggleOption({ id: option.id })}
                        >
                            <input
                                type="checkbox"
                                checked={isSelected}
                                className="c-multi-select-dropdown__option-checkbox"
                                aria-label={`Select ${option.title}`}
                                readOnly
                            />
                            <span>{option.title}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MultiSelectDropdown;
