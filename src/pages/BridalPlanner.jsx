import { useState } from "react";
import "./BridalPlanner.css";

function BridalPlanner() {

  const [plan, setPlan] = useState(null);

  const generatePlan = () => {

    setPlan({
      package: "Royal Bridal Package",
      makeup: "HD Bridal Makeup",
      hairstyle: "Elegant Bridal Bun",
      skincare: "Pre-Wedding Glow Facial",
      salon: "Glow Luxe Studio",
      budget: "₹25,000 - ₹40,000",
      timeline: "Start treatments 30 days before wedding"
    });

  };

  return (
    <div className="bridal-page">

      <div className="bridal-left">

        <p className="bridal-tag">
          BRIDAL PLANNER
        </p>

        <h1>
          Plan Your Dream Wedding Look
        </h1>

        <p className="bridal-desc">
          Personalized bridal beauty planning,
          makeup recommendations and luxury
          wedding packages.
        </p>

        <select>
          <option>Traditional Wedding</option>
          <option>Reception</option>
          <option>Engagement</option>
        </select>

        <select>
          <option>South Indian Bride</option>
          <option>North Indian Bride</option>
          <option>Modern Bride</option>
        </select>

        <select>
          <option>Budget: ₹20k - ₹40k</option>
          <option>Budget: ₹40k - ₹80k</option>
          <option>Budget: ₹80k+</option>
        </select>

        <button
          className="planner-btn"
          onClick={generatePlan}
        >
          Generate Bridal Plan
        </button>

      </div>

      <div className="bridal-right">

        {plan ? (

          <div className="plan-card">

            <h2>Bridal Beauty Plan</h2>

            <div className="plan-item">
              <strong>Package</strong>
              <p>{plan.package}</p>
            </div>

            <div className="plan-item">
              <strong>Makeup</strong>
              <p>{plan.makeup}</p>
            </div>

            <div className="plan-item">
              <strong>Hairstyle</strong>
              <p>{plan.hairstyle}</p>
            </div>

            <div className="plan-item">
              <strong>Skincare</strong>
              <p>{plan.skincare}</p>
            </div>

            <div className="plan-item">
              <strong>Salon</strong>
              <p>{plan.salon}</p>
            </div>

            <div className="plan-item">
              <strong>Budget</strong>
              <p>{plan.budget}</p>
            </div>

            <div className="plan-item">
              <strong>Timeline</strong>
              <p>{plan.timeline}</p>
            </div>

          </div>

        ) : (

          <div className="empty-card">

            <h2>Luxury Bridal Planning</h2>

            <p>
              Fill your preferences and create
              your personalized bridal beauty roadmap.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default BridalPlanner;