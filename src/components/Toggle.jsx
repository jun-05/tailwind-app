import React, { useState } from "react";
import tw, { styled } from "twin.macro";

const Toggle = ({ toggleFn }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    toggleFn();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex my-4">
      <div className="cursor-pointer rounded-ful relative">
        <ToggleInput
          type="checkbox"
          name="toggle1"
          id="toggle1"
          toggle={toggle}
          onClick={handleToggle}
        />
        <label
          htmlFor="toggle1"
          className="toggle-label dark:bg-gray-700 block w-12 h-4 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
        />
      </div>
    </div>
  );
};
export default Toggle;

// const ToggleInput = styled.input`
//   ${({ toggle }) =>
//     toggle ? tw`-translate-x-6 bg-white ` : tw`translate-x-0 bg-blue-400 `};
//   ${tw`
//   focus:outline-none
//   w-6
//   h-6
//   rounded-full
//   absolute
//   shadow-sm
//   appearance-none
//   cursor-pointer
//   border
//   top-0
//   bottom-0
//   m-auto
//   ease-in-out
//   duration-300
//   transform`}
// `;
const ToggleInput = styled.input(({ toggle }) => [
  toggle ? tw`-translate-x-6 bg-white ` : tw`translate-x-0 bg-blue-400 `,
  tw`
  focus:outline-none
  w-6
  h-6
  rounded-full
  absolute
  shadow-sm
  appearance-none
  cursor-pointer
  border
  top-0
  bottom-0
  m-auto
  ease-in-out
  duration-300
  transform`,
]);
