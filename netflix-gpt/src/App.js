import { SpeedInsights } from "@vercel/speed-insights/next"

import React from "react";
import Body from "./Components/Body";

function App() {
  return (
    <div>
      <Body />
      <SpeedInsights />
    </div>
  );
}

export default App;
