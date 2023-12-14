import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ isOn, name, id, onToggleLight }) {
  // const [isOn, setIsOn] = useState(false); -> auskommentiert, weil der State jetzt in der _app.js leben soll
  function handleToggle(id) {
    onToggleLight(id);
  }
  return (
    <LightButton
      id={id}
      type="button"
      onClick={() => {
        handleToggle(id);
      }}
      isOn={isOn}
    >
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
