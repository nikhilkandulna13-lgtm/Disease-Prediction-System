import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 px-6 py-12">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-3">
          AI Healthcare Risk Prediction System
        </h1>

        <p className="text-gray-600 text-lg">
          An integrated platform for disease prediction, symptom analysis, and personalized healthcare insights.
        </p>

        {/* Core AI Modules */}
<div className="mt-14">
  
  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
    Core AI Modules
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Health Prediction */}
    <Link
      to="/predict"
      className="bg-white rounded-3xl shadow-lg p-10 hover:scale-105 transition duration-300"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        🔍 Health Risk Prediction
      </h2>

      <p className="text-gray-600 text-lg">
        Analyze health parameters using AI-powered disease prediction models.
      </p>
    </Link>

    {/* Chatbot */}
    <Link
      to="/chat"
      className="bg-white rounded-3xl shadow-lg p-10 hover:scale-105 transition duration-300"
    >
      <h2 className="text-3xl font-bold text-purple-600 mb-4">
        💬 AI Symptom Assistant
      </h2>

      <p className="text-gray-600 text-lg">
        Interact with an intelligent symptom analysis assistant for health guidance.
      </p>
    </Link>

  </div>
</div>

{/* Supporting Health Utilities */}
<div className="mt-16">

  <h2 className="text-xl font-bold text-gray-700 mb-5 text-left">
    Supporting Health Utilities
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* BMI */}
    <Link
      to="/bmi"
      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
    >
      <h2 className="text-lg font-bold text-green-600 mb-2">
        📊 BMI Calculator
      </h2>

      <p className="text-gray-600 text-sm">
        Calculate BMI and ideal body weight.
      </p>
    </Link>

    {/* Diet */}
    <Link
      to="/diet"
      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
    >
      <h2 className="text-lg font-bold text-pink-600 mb-2">
        🍽️ Diet Planner
      </h2>

      <p className="text-gray-600 text-sm">
        Personalized meal recommendations.
      </p>
    </Link>

    {/* Calories */}
    <Link
      to="/calories"
      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
    >
      <h2 className="text-lg font-bold text-orange-600 mb-2">
        🔥 Calorie Calculator
      </h2>

      <p className="text-gray-600 text-sm">
        Estimate daily calorie requirements.
      </p>
    </Link>

  </div>
</div>
      </div>
    </div>
  );
}