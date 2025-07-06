import React, { useState } from 'react';
import { calculators } from './data/calculators';

import BMICalculator from './components/BMICalculator';
import BSACalculator from './components/BSACalculator';
import CreatinineClearance from './components/CreatinineClearance';
import EGFRCalculator from './components/EGFRCalculator';

import GRACEScoreCalculator from './components/GRACEScoreCalculator';
import TIMIRiskScore from './components/TIMIRiskScore';
import WellsScorePE from './components/WellsScorePE';
import MMRCScale from './components/MMRCScale';
import GCSCalculator from './components/GCSCalculator';
import RevisedTraumaScore from './components/RevisedTraumaScore';
import CanadianCTHeadRule from './components/CanadianCTHeadRule';
import SOFAScore from './components/SOFAScore';
import QSOFA from "./components/qSOFA";
import ApacheII from "./components/ApacheII";
import PediatricGFR from "./components/PediatricGFR";
import PEWS from "./components/PEWS";
import FraminghamRiskScore from './components/FraminghamRiskScore';
import ASCVDCalculator from './components/ASCVDCalculator';
import DAS28Calculator from './components/DAS28Calculator';
import SLEDAICalculator from './components/SLEDAICalculator';
import CURB65 from './components/CURB65';
import qSOFAInfectious from './components/qSOFAInfectious';
import ANCCalculator from './components/ANCCalculator';
import RPICalculator from './components/RPICalculator';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCalculator, setSelectedCalculator] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedCalculator('');
  };

  const handleCalculatorChange = (e) => {
    setSelectedCalculator(e.target.value);
  };

  const renderCalculator = () => {
    switch (selectedCalculator) {
      case 'bmi':
        return <BMICalculator />;
      case 'bsa':
        return <BSACalculator />;
      case 'grace':
        return <GRACEScoreCalculator />;
      case 'timi':
        return <TIMIRiskScore />;
      case 'creatinine-clearance':
        return <CreatinineClearance />;
      case 'egfr':
        return <EGFRCalculator />;
      case 'wells-score':
        return <WellsScorePE />;
      case 'mmrc':
        return <MMRCScale />;
      case 'gcs':
        return <GCSCalculator />;
      case 'revised-trauma':
        return <RevisedTraumaScore />;
      case 'canadian-ct-head':
        return <CanadianCTHeadRule />;
      case 'sofa':
        return <SOFAScore />;
      case 'qsofa':
        return <QSOFA />;
      case 'apacheii':
        return <ApacheII />;
      case "pediatric-gfr":
        return <PediatricGFR />;
      case "pews":
        return <PEWS />;
      case 'framingham':
        return <FraminghamRiskScore />;
      case 'ascvd':
        return <ASCVDCalculator />;
      case 'das28':
        return <DAS28Calculator />;
      case 'sledai':
        return <SLEDAICalculator />;
      case 'curb65':
        return <CURB65 />;
      
      case 'anc':
        return <ANCCalculator />;
      case 'rpi':
        return <RPICalculator />;
      default:
        return (
          selectedCalculator && (
            <p className="text-gray-500 mt-4">
              "{selectedCalculator}" calculator not implemented yet.
            </p>
          )
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🩺 Medical Calculator App</h1>

      {/* Category Selector */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Select Category:</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full border rounded p-2"
        >
          <option value="">-- Choose a category --</option>
          {Object.keys(calculators).map((category) => (
            <option key={category} value={category}>
              {category.replace(/([a-z])([A-Z])/g, '$1 $2')}
            </option>
          ))}
        </select>
      </div>

      {/* Calculator Selector */}
      {selectedCategory && (
        <div className="mb-6">
          <label className="block font-semibold mb-1">Select Calculator:</label>
          <select
            value={selectedCalculator}
            onChange={handleCalculatorChange}
            className="w-full border rounded p-2"
          >
            <option value="">-- Choose a calculator --</option>
            {calculators[selectedCategory].map((calc) => (
              <option key={calc.id} value={calc.id}>
                {calc.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Calculator Renderer */}
      <div className="bg-white p-4 rounded shadow-md">{renderCalculator()}</div>
    </div>
  );
};

export default App;