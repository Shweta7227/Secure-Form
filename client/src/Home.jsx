import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  // 🔹 Form states
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [nstreet, setNewStreet] = useState("");
  const [ncity, setNewCity] = useState("");
  const [nstate, setNewState] = useState("");
  const [npinCode, setNewPinCode] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [agreement, setAgreement] = useState(false);

  // 🔹 Captcha
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaExpected, setCaptchaExpected] = useState(null);

  // generate captcha on mount
  useEffect(() => generateCaptcha(), []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const ops = ["+", "-"];
    const op = ops[Math.floor(Math.random() * ops.length)];
    const result = op === "+" ? a + b : a - b;
    setCaptchaQuestion(`${a} ${op} ${b}`);
    setCaptchaExpected(result);
    setCaptchaAnswer("");
  };

  // 🔹 Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ simple validations
    if (
      !firstName ||
      !lastName ||
      !email ||
      !mobileNumber ||
      !gender ||
      !dob ||
      !age ||
      !street ||
      !city ||
      !state ||
      !pinCode
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (password !== confPassword) {
      alert("Passwords do not match");
      return;
    }

    if (parseInt(captchaAnswer) !== captchaExpected) {
      alert("Captcha incorrect. Try again.");
      generateCaptcha();
      return;
    }

    try {
      const formData = new FormData();
      // Profile photo
      if (profilePhoto) {
        formData.append("profilePhoto", profilePhoto);
      }
      // Name
      formData.append("firstName", firstName);
      formData.append("middleName", middleName);
      formData.append("lastName", lastName);
      // Contact
      formData.append("countryCode", countryCode);
      formData.append("mobileNumber", mobileNumber);
      // Personal
      formData.append("gender", gender);
      formData.append("dob", dob);
      formData.append("age", age);
      // Email
      formData.append("email", email);
      // Primary Address
      formData.append("street", street);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("pinCode", pinCode);
      // Secondary Address
      formData.append("nstreet", nstreet);
      formData.append("ncity", ncity);
      formData.append("nstate", nstate);
      formData.append("npinCode", npinCode);
      // Password & agreement
      formData.append("password", password);
      formData.append("agreement", agreement.toString());

      await axios.post("http://localhost:3001/createUser", formData);

      alert("User created successfully!");
      navigate("/users");
    } catch (error) {
  console.error(error);
  alert("Error saving data. Check console.");
  generateCaptcha(); 
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>

      {/* PROFILE PHOTO */}
      <div className="flex flex-col">
        <label className="label">Profile Photo</label>
        <input
          type="file"
          className="w-full rounded-lg border border-gray-300 p-2"
          // required 
          onChange={(e) => setProfilePhoto(e.target.files[0])}
        />
      </div>

      {/* NAME */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="label">
            First Name <span className="text-red-500">*</span>
          </label>
          <input className="input" placeholder="First Name" required 
            onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        <div className="flex flex-col">
          <label className="label">Middle Name</label>
          <input className="input" placeholder="Middle Name" 
            onChange={(e) => setMiddleName(e.target.value)}/>
        </div>

        <div className="flex flex-col">
          <label className="label">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input className="input" placeholder="Last Name" required 
          onChange={(e) => setLastName(e.target.value)}/>
        </div>
      </div>

      {/* CONTACT */}
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col">
          <label className="label">Country Code</label>
          <select className="input" required onChange={(e) => setCountryCode(e.target.value)}>
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
          </select>
        </div>

        <div className="flex flex-col col-span-2">
          <label className="label">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input className="input" placeholder="Mobile Number" required onChange={(e) => setMobileNumber(e.target.value)}/>
        </div>

        <div className="flex flex-col">
          <label className="label">
            Gender <span className="text-red-500">*</span>
          </label>
          <select className="input" required onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      {/* Email */}


      {/* DOB / AGE */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="label">
            Email<span className="text-red-500">*</span>
          </label>
          <input className="input" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <div className="flex flex-col">
            <label className="label">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input type="date" className="input" required onChange={(e) => setDob(e.target.value)}/>
          </div>

          <div className="flex flex-col">
            <label className="label">
              Age <span className="text-red-500">*</span>
            </label>
            <input type="number" className="input" placeholder="Age" required onChange={(e) => setAge(Number(e.target.value))}/>
          </div>
        </div>


        
      </div>

      {/* ADDRESS (PRIMARY – REQUIRED) */}
      <div>
        <h3 className="text-green-600 font-semibold mb-2">
          Address Details (Primary)
        </h3>

        <div className="grid grid-cols-3 gap-4">
          <input
            className="input col-span-2"
            placeholder="Street / House No."
            required
            onChange={(e) => setStreet(e.target.value)}
          />
          <input className="input" placeholder="City" required onChange={(e) => setCity(e.target.value)}/>
          <input className="input" placeholder="State" required onChange={(e) => setState(e.target.value)}/>
          <input className="input" placeholder="Pincode" required onChange={(e) => setPinCode(e.target.value)}/>
        </div>
      </div>

      {/* ADDRESS (SECONDARY – OPTIONAL) */}
      <div>
        <h3 className="text-gray-600 font-semibold mb-2">
          Address Details (Secondary – Optional)
        </h3>

        <div className="grid grid-cols-3 gap-4">
          <input
            className="input col-span-2"
            placeholder="Street / House No."
            onChange={(e) => setNewStreet(e.target.value)}
          />
          <input className="input" placeholder="City" onChange={(e) => setNewCity(e.target.value)}/>
          <input className="input" placeholder="State" onChange={(e) => setNewState(e.target.value)}/>
          <input className="input" placeholder="Pincode" onChange={(e) => setNewPinCode(e.target.value)}/>
        </div>
      </div>

      {/* PASSWORD */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="label">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="input"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="label">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>
      </div>

{/* CAPTCHA */}
<div className="grid grid-cols-2 gap-4">
  <div className="flex flex-col">
    <label className="label">
      Solve this <span className="text-red-500">*</span>
    </label>
    <input
      className="input"
      placeholder="Your answer"
      value={captchaAnswer}
      onChange={(e) => setCaptchaAnswer(e.target.value)}
      required
    />
  </div>

  <div className="flex items-center justify-center rounded-lg bg-gray-200 font-mono text-lg">
    {captchaQuestion}
  </div>
</div>


      {/* AGREEMENT */}
      <div className="flex items-center gap-2">
        <input type="checkbox" required onChange={(e) => setAgreement(e.target.checked)}/>
        <span className="text-sm">
          I agree to the terms and conditions <span className="text-red-500">*</span>
        </span>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex justify-end gap-4">
        {/* <button type="button" className="px-6 py-2 rounded-lg border">
          View
        </button> */}

        <button type="submit" className="px-8 py-4 rounded-lg bg-indigo-600 text-white">
          Save
        </button>
      </div>

    </form>
  );
}

export default Home;
