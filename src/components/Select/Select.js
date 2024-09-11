import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectElement = styled.select`
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const SelectMask = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  border-radius: 8px;
  padding: 12px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.gray50};

  ${SelectElement}:focus + & {
    outline: auto;
    outline-color: -webkit-focus-ring-color;
  }

  ${SelectElement}:hover + & {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <SelectMask aria-hidden="true">{displayedValue} <Icon id="chevron-down" /></SelectMask>
    </Wrapper>
  );
};

export default Select;
