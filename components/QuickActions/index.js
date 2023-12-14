import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  toggleAllLightsOn,
  toggleAllLightsOff,
  sumOfLightsOn,
  lights,
}) {
  function handleLightsOnClick() {
    toggleAllLightsOn();
  }

  function handleLightsOffClick() {
    toggleAllLightsOff();
  }

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={handleLightsOffClick}
        disabled={sumOfLightsOn === 0}
      >
        {" "}
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={handleLightsOnClick}
        disabled={sumOfLightsOn === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
