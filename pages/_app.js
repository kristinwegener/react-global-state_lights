import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  const arrayOfLightsOn = lights.map((light) => {
    return light.isOn === true ? 1 : 0;
  });
  const sumOfLightsOn = arrayOfLightsOn.reduce((a, b) => a + b);

  function toggleLight(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function toggleAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function toggleAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  return (
    <Layout isDimmed={sumOfLightsOn === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        sumOfLightsOn={sumOfLightsOn}
        toggleAllLightsOn={toggleAllLightsOn}
        toggleAllLightsOff={toggleAllLightsOff}
      />
    </Layout>
  );
}
