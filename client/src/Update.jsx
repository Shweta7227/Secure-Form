import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

function Update({ existingUser }) {
  // const navigate = useNavigate();

  // 🔹 Form states
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
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

  // Load existing user data
  useEffect(() => {
    if (existingUser) {
      setFirstName(existingUser.firstName || "");
      setMiddleName(existingUser.middleName || "");
      setLastName(existingUser.lastName || "");
      setCountryCode(existingUser.countryCode || "+91");
      setMobileNumber(existingUser.mobileNumber || "");
      setGender(existingUser.gender || "");
      setDob(existingUser.dob || "");
      setAge(existingUser.age || "");
      setEmail(existingUser.email || "");
      setStreet(existingUser.street || "");
      setCity(existingUser.city || "");
      setState(existingUser.state || "");
      setPinCode(existingUser.pinCode || "");
      setNewStreet(existingUser.nstreet || "");
      setNewCity(existingUser.ncity || "");
      setNewState(existingUser.nstate || "");
      setNewPinCode(existingUser.npinCode || "");
    }
    generateCaptcha();
  }, [existingUser]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(captchaAnswer) !== captchaExpected) {
      alert("Captcha incorrect!");
      generateCaptcha();
      return;
    }
    alert("Update successful! (Mock)");
    // axios.put(`/updateUser/${existingUser._id}`, formData).then(() => navigate("/users"))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200 flex items-center justify-center p-10">
      <form
        className="w-full max-w-5xl bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-indigo-700 text-center">Update User</h2>

        {/* PROFILE PHOTO */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-1">Profile Photo</label>
          <input
            type="file"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e) => setProfilePhoto(e.target.files[0])}
          />
        </div>

        {/* NAME */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "First Name", value: firstName, setter: setFirstName, required: true },
            { label: "Middle Name", value: middleName, setter: setMiddleName, required: false },
            { label: "Last Name", value: lastName, setter: setLastName, required: true },
          ].map((field, i) => (
            <div key={i} className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-1">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                placeholder={field.label}
                required={field.required}
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
          ))}
        </div>

        {/* CONTACT & GENDER */}
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Country Code</label>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
            </select>
          </div>
          <div className="flex flex-col col-span-2">
            <label className="text-gray-700 font-semibold mb-1">Mobile Number <span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Mobile Number"
              required
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Gender <span className="text-red-500">*</span></label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* EMAIL & DOB */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-7">
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-1">Date of Birth <span className="text-red-500">*</span></label>
              <input
                type="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-1">Age <span className="text-red-500">*</span></label>
              <input
                type="number"
                placeholder="Age"
                required
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
          </div>
        </div>

        {/* PRIMARY ADDRESS */}
        <div>
          <h3 className="text-green-600 font-semibold mb-2">Address Details (Primary)</h3>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Street / House No."
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="col-span-2 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="text"
              placeholder="State"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="text"
              placeholder="Pincode"
              required
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
        </div>

        {/* SECONDARY ADDRESS */}
        <div>
          <h3 className="text-gray-600 font-semibold mb-2">Address Details (Secondary – Optional)</h3>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Street / House No."
              value={nstreet}
              onChange={(e) => setNewStreet(e.target.value)}
              className="col-span-2 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="text"
              placeholder="City"
              value={ncity}
              onChange={(e) => setNewCity(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="text"
              placeholder="State"
              value={nstate}
              onChange={(e) => setNewState(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="text"
              placeholder="Pincode"
              value={npinCode}
              onChange={(e) => setNewPinCode(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Password <span className="text-red-500">*</span></label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Confirm Password <span className="text-red-500">*</span></label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
        </div>

        {/* CAPTCHA */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Solve this <span className="text-red-500">*</span></label>
            <input
              placeholder="Your answer"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
          <div className="flex items-center justify-center bg-gray-200 font-mono rounded-lg text-lg">{captchaQuestion}</div>
        </div>

        {/* AGREEMENT */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            required
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-sm">I agree to the terms and conditions <span className="text-red-500">*</span></span>
        </div>

        {/* ACTION BUTTON */}
        <div className="flex justify-end">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
