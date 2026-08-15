import { useState } from "react";
import axios from "axios";

export default function Predict() {
  const [formData, setFormData] = useState({
    age: "",
    bmi: "",
    whr: "",
    glucose: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async () => {
  console.log("STEP 1: Button clicked");

  try {
    console.log("STEP 2: Sending request...");

    const payload = {
      age: Number(formData.age),
      bmi: Number(formData.bmi),
      whr: Number(formData.whr),
      glucose: Number(formData.glucose),
      bp: formData.bp ? Number(formData.bp) : null,
      cholesterol: formData.cholesterol ? Number(formData.cholesterol) : null
    };

    const res = await axios.post("http://localhost:5000/predict", payload);

    console.log("STEP 3: Response received", res.data);

    setResult(res.data);

    // ✅ STORE DATA HERE (CORRECT PLACE)
    localStorage.setItem("healthData", JSON.stringify(payload));

  } catch (err) {
    console.error("STEP 4: ERROR", err);
  }
  
}; 
  const getRiskColor = (risk) => {
  if (risk === "High")
    return "bg-red-100 text-red-700";

  if (risk === "Moderate")
    return "bg-yellow-100 text-yellow-700";

  return "bg-green-100 text-green-700";
};



  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-100">
    
    <div className="bg-white p-6 rounded-xl shadow-md w-[450px] text-center">
      <h2 className="text-2xl font-bold mb-4">AI Health Risk Analysis</h2>
      <p className="text-gray-600">
              Analyze health parameters to predict disease risks and health conditions.
            </p>

      <input className="input" name="age" placeholder="Age" onChange={handleChange} />
      <input className="input" name="bmi" placeholder="BMI" onChange={handleChange} />
      <div className="flex justify-end mb-3">
  <a href="/bmi" className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm hover:bg-blue-200 transition">
    Calculate BMI
  </a>
</div>
      <input className="input" name="whr" placeholder="WHR" onChange={handleChange} />
      <input className="input" name="glucose" placeholder="Glucose" onChange={handleChange} />
      <input className="input" name="bp" placeholder="Blood Pressure (optional)" onChange={handleChange} />
      <input className="input" name="cholesterol" placeholder="Cholesterol (optional)" onChange={handleChange} />
<button 
  type="button"
  onClick={handleSubmit}
  className="bg-green-500 text-white px-4 py-2 rounded mt-3"
>
  Predict
</button>
    </div>

   {result && (
  <div className="mt-6 bg-white p-6 rounded-xl shadow-md w-80 text-center">
    <h3 className="text-xl font-bold mb-2">Result</h3>

   
    
<p className="mb-3">
  <b>🍬 Diabetes Risk:</b>{" "}
  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(result.diabetes_risk)}`}
  >
    {result.diabetes_risk}
  </span>
</p>

<p className="mb-3">
  <b>❤️ Heart Risk:</b>{" "}
  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(result.heart_risk)}`}
  >
    {result.heart_risk}
  </span>
</p>

<p className="mb-3">
  <b> Visceral Fat:</b>{" "}
  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(result.visceral_risk)}`}
  >
    {result.visceral_risk}
  </span>
</p>
    
    <p><b>Suggestion:</b> {result.suggestion}</p>
 
   {result.diseases && (
  <div className="mt-4 text-left">
    <h4 className="font-bold">Possible Diseases:</h4>
    <ul className="list-disc ml-5">
      {result.diseases.map((d, i) => (
        <li key={i}>{d}</li>
      ))}
    </ul>
  </div>
)}
  </div>
)}
  </div>
);
}