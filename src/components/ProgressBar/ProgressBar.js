/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const BaseContainer = styled.div`
  border-radius: 4px;
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const SmallContainer = styled(BaseContainer)`
  height: 8px;
`;

const MediumContainer = styled(BaseContainer)`
  height: 12px;
`;

const LargeContainer = styled(BaseContainer)`
  height: 24px;
  padding: 4px;
`;

const Progress = styled.div(({ totalProgress }) => ({
  height: "100%",
  width: `${totalProgress}%`,
  backgroundColor: COLORS.primary,
  borderRadius: totalProgress < 99 ? "4px 0 0 4px" : 4,
}));

const ProgressBar = ({ value, size }) => {
  const sizeToContainer = {
    small: SmallContainer,
    medium: MediumContainer,
    large: LargeContainer,
  };
  const Container = sizeToContainer[size];
  return (
    <>
    <VisuallyHidden><label for="progress-bar">Progress</label></VisuallyHidden>
      <Container id="progress-bar" role="progressbar" aria-valuenow={value}>
        <Progress totalProgress={value} />
      </Container>
    </>
  );
};

export default ProgressBar;
