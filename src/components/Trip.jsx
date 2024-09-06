import React, { useState, useEffect } from "react";
import { priceCategories } from "./constants/Options";

function Trip() {
  const [place, setPlace] = useState("");
  const [noOfDays, setNoOfDays] = useState(""); // Separate state for number input
  const [formdata, setFormdata] = useState({});
  
  // Handles changes in input fields
  const handleInputChange = (name, value) => {
    if (name === 'noOfDays' && value > 5) {
      alert("Number of days should be at most 5");
      return; // Prevent updating state if validation fails
    }

    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = () => {
    if (place.trim() === "" || noOfDays.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    
    //alert shown if budget is not selected 
    if (!formdata.budget) {
      alert("Please select a budget.");
      return;
    }

    // Update formdata with location and noOfDays
    handleInputChange("location", place);
    handleInputChange("noOfDays", noOfDays);
 
  };

  useEffect(() => {
    console.log(formdata);
  }, [formdata]);

  return (
    <>
      <h1 className="mx-20 my-3">Desired Destination</h1>
      <input
        className="w-2/3 mx-20 h-10 border bg-slate-200"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Enter a location"
      />
    
      <input
        className="w-2/3 mx-20 my-6 h-10 border bg-slate-200"
        placeholder="ex.2"
        type="number"
        value={noOfDays}
        onChange={(e) => setNoOfDays(e.target.value)}
        min="1"
        max="15"
      />

      <div className="flex my-5 mx-20">
        {priceCategories.map((item, index) => (
          <div
            className={`border mx-4 cursor-pointer border-black ${formdata?.budget === item.price ? 'border-4' : ''}`}
            key={index}
            onClick={() => handleInputChange("budget", item.price)}
          >
            <h2 className="m-4 w-2/3">{item.price}</h2>
            <h2 className="m-4 w-2/3">{item.name}</h2>
            <h2 className="m-4 w-2/3">{item.desc}</h2>
          </div>
        ))}
      </div>
      <button
        className="border border-black w-32 mx-20 my-10"
        onClick={handleSubmit}
      >
        Generate
      </button>
    </>
  );
}

export default Trip;
