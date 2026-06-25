import { useState } from "react";
import "./Advisor.css";

function Advisor() {

  const [face, setFace] = useState("Round Face");
  const [skin, setSkin] = useState("Oily Skin");
  const [hair, setHair] = useState("Curly Hair");
  const [occasion, setOccasion] = useState("Wedding");

  const [report, setReport] = useState(null);

  const generateAdvice = () => {

    let result = {
      score: "92%",
      salon: "Luxe Beauty Studio",
      service: "Korean Glass Skin Facial",
      hairstyle: "Long Layer Cut",
      product: "Vitamin C Serum",
      budget: "₹2,500 - ₹4,000",
      trend: "K-Beauty Glow Look"
    };

    if (skin === "Dry Skin") {
      result.product = "Hydrating Moisturizer";
      result.service = "Hydration Facial";
      result.score = "89%";
    }

    if (face === "Oval Face") {
      result.hairstyle = "Soft Waves";
    }

    if (occasion === "Party") {
      result.service = "Party Makeup Package";
      result.budget = "₹1,500 - ₹3,000";
    }

    setReport(result);
  };

  return (
    <div className="advisor-page">

      <div className="advisor-left">

        <p className="advisor-tag">
          AI BEAUTY ANALYSIS
        </p>

        <h1>
          GlowAI Beauty Advisor
        </h1>

        <p className="advisor-desc">
          Get personalized beauty recommendations
          based on your face shape, skin type,
          hair profile and occasion.
        </p>

        <select
          value={face}
          onChange={(e) => setFace(e.target.value)}
        >
          <option>Round Face</option>
          <option>Oval Face</option>
        </select>

        <select
          value={skin}
          onChange={(e) => setSkin(e.target.value)}
        >
          <option>Oily Skin</option>
          <option>Dry Skin</option>
        </select>

        <select
          value={hair}
          onChange={(e) => setHair(e.target.value)}
        >
          <option>Curly Hair</option>
          <option>Straight Hair</option>
          <option>Wavy Hair</option>
        </select>

        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Wedding</option>
          <option>Party</option>
          <option>Casual</option>
        </select>

        <button
          className="analyze-btn"
          onClick={generateAdvice}
        >
          Analyze Beauty Profile
        </button>

      </div>

      <div className="advisor-right">

        {report ? (

          <>
            <div className="score-circle">
              <h2>{report.score}</h2>
              <p>Match Score</p>
            </div>

            <div className="report-card">

              <h2>AI Beauty Report</h2>

              <div className="report-item">
                <strong>Recommended Salon</strong>
                <p>{report.salon}</p>
              </div>

              <div className="report-item">
                <strong>Recommended Service</strong>
                <p>{report.service}</p>
              </div>

              <div className="report-item">
                <strong>Hairstyle</strong>
                <p>{report.hairstyle}</p>
              </div>

              <div className="report-item">
                <strong>Product</strong>
                <p>{report.product}</p>
              </div>

              <div className="report-item">
                <strong>Budget</strong>
                <p>{report.budget}</p>
              </div>

              <div className="report-item">
                <strong>Trending Style</strong>
                <p>{report.trend}</p>
              </div>

            </div>
          </>

        ) : (

          <div className="placeholder-card">

            <h2>AI Analysis Ready</h2>

            <p>
              Select your beauty profile and
              click Analyze to receive
              personalized recommendations.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Advisor;