'use client'
import { useState } from "react";
import { Theme } from "@/lib/theme";

const baseCosts = {
  station: 50,
  user: 30,
  server: 200,
  options: {
    "Microsoft 365 Standard": 25,
    "Managed Antivirus": 20,
    "Cloud backups": 30,
    "Advanced security": 50,
  },
};

export default function PricingCalculator() {
  const [stations, setStations] = useState(10);
  const [users, setUsers] = useState(10);
  const [servers, setServers] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const calculatePrice = () => {
    let price =
      stations * baseCosts.station +
      users * baseCosts.user +
      servers * baseCosts.server;

    selectedOptions.forEach((opt) => {
        price += baseCosts.options[opt as keyof typeof baseCosts.options];
    });

    return price;
  };

  const options = Object.keys(baseCosts.options);

  return (
    <div
      style={{ backgroundColor: Theme.colors.secondaryDark }}
  className="w-full py-10"
>
  <h2 className={`${Theme.typography.fontSize['4xl']} md:${Theme.typography.fontSize['5xl']} ${Theme.typography.fontWeight.bold} ${Theme.textColors.light} text-center mb-2`}>
           No Surprises – Plan Your IT Budget
        </h2>
    <div className={`${Theme.borderRadius.lg} ${Theme.shadows.lg} max-w-5xl mx-auto my-20 bg-white overflow-hidden flex flex-col md:flex-row`}>
      
      {/* Left Panel */}
      <div className={`${Theme.backgroundColors.dark} ${Theme.textColors.light} p-8 md:w-1/3 flex flex-col justify-between`}>
        <div>
          <h2 className={`${Theme.typography.fontSize['2xl']} ${Theme.typography.fontWeight.bold} mb-4`}>
            PRICING <span className={Theme.textColors.success}>CALCULATOR</span>
          </h2>
          <p className={`${Theme.typography.fontSize.sm} mb-6`}>
            We believe in full transparency<br />  Use our cost calculator to get an honest, upfront estimate for your managed IT services.
          </p>
          <p className={Theme.typography.fontSize.sm}>
            No hidden fees, no pressure – just a clear projection you can trust, so you can budget with confidence
          </p>
        </div>
        <p className={`${Theme.typography.fontSize.sm} mt-6`}>
          Call us at <span className={`${Theme.textColors.success} ${Theme.typography.fontWeight.medium}`}>511 001-0693</span>
        </p>
      </div>

      {/* Right Panel */}
      <div className={`p-8 md:w-2/3 flex flex-col gap-6`}>
        
        {/* Sliders */}
        <div className="flex flex-col gap-4">
          <label className={`flex justify-between items-center ${Theme.textColors.heading}`}>
            <span>How many computer stations?</span>
            <span>{stations}</span>
          </label>
          <input
            type="range"
            min={0}
            max={50}
            value={stations}
            onChange={(e) => setStations(Number(e.target.value))}
            className="w-full"
          />

          <label className={`flex justify-between items-center ${Theme.textColors.heading}`}>
            <span>How many users?</span>
            <span>{users}</span>
          </label>
          <input
            type="range"
            min={0}
            max={50}
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
            className="w-full"
          />

          <label className={`flex justify-between items-center ${Theme.textColors.heading}`}>
            <span>How many servers?</span>
            <span>{servers}</span>
          </label>
          <input
            type="range"
            min={0}
            max={10}
            value={servers}
            onChange={(e) => setServers(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Optional Services */}
        <div className="mt-4">
          <h3 className={`${Theme.typography.fontWeight.semibold} mb-2 ${Theme.textColors.heading}`}>Need options?</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {options.map((opt) => (
              <label
                key={opt}
                className={`flex items-center gap-2 border p-2 ${Theme.borderRadius.md} cursor-pointer hover:${Theme.backgroundColors.light}`}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(opt)}
                  onChange={() => toggleOption(opt)}
                  className="w-4 h-4"
                />
                <span className={Theme.textColors.gray700}>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Display */}
        <div className={`mt-6 border-t pt-6 text-center md:text-right`}>
          <p className={`${Theme.typography.fontSize.sm} uppercase`}>Approximately</p>
          <p className={`${Theme.typography.fontSize['3xl']} ${Theme.typography.fontWeight.bold} ${Theme.textColors.success}`}>
            ${calculatePrice()}
          </p>
          <p className={`${Theme.typography.fontSize.sm} uppercase`}>per month</p>
        </div>
      </div>
    </div>
    </div>
  );
}