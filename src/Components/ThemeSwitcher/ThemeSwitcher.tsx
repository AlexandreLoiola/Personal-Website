import React, { useState } from "react";
import { StyledToggler, StyledLightInput, StyledDarkInput } from "./styles";

interface IProps {
  themeToggler: () => void;
}

const ThemeSwitcher: React.FC<IProps> = ({ themeToggler }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeToggle = () => {
    setIsChecked(!isChecked);
    themeToggler();
  };

  return (
    <StyledToggler onClick={handleChangeToggle}>
      {isChecked ? <StyledDarkInput /> : <StyledLightInput />}
    </StyledToggler>
  );
};

export default ThemeSwitcher;
