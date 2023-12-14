import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  lights,
  toggleAllLightsOn,
  toggleAllLightsOff,
  sumOfLightsOn,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        toggleAllLightsOn={toggleAllLightsOn}
        toggleAllLightsOff={toggleAllLightsOff}
        sumOfLightsOn={sumOfLightsOn}
      />
    </>
  );
}
