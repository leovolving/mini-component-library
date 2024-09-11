import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import { toPx } from "../../utils";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Label = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  :hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
`;
const Input = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  padding-left: var(--padding-left);
  border: none;
  border-bottom: var(--border-bottom-width) solid;
  font-weight: 700;
  color: inherit;

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const SIZES = {
  small: { borderBottom: 1, height: 24, font: 14, icon: 16, paddingLeft: 24 },
  large: { borderBottom: 2, height: 36, font: 18, icon: 20, paddingLeft: 32 },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const allSizes = SIZES[size];
  return (
    <Label>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        style={{
          "--width": toPx(width),
          "--border-bottom-width": toPx(allSizes.borderBottom),
          "--height": toPx(allSizes.height),
          "--font-size": toPx(allSizes.font),
          "--padding-left": toPx(allSizes.paddingLeft),
        }}
        placeholder={placeholder}
      />
      <StyledIcon id={icon} size={allSizes.icon} strokeWidth={2} />
    </Label>
  );
};

export default IconInput;
