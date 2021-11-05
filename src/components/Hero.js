/* This example requires Tailwind CSS v2.0+ */
import TextTransition, { presets } from "react-text-transition";
import React from "react";

const TEXTS = ["buy/rent homes", "invest in real estates"];

export default function Hero() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center sm:px-8 md:px-48">
          <p className="mt-2 text-5xl p-4 leading-snug font-light tracking-tight text-center text-gray-900">
            <span>We're flipping the way people </span>

            <span className="text-yellow-900">
              <TextTransition
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.wobbly}
              />
            </span>
            <span>in Ghana.</span>
          </p>

          <div className="mt-6">
            <p className="font-thin text-gray-800">
              
            </p>
          </div>


        </div>
      </div>
    </div>
  );
}
