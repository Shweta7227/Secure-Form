const Form = () => {
  return (
    <form className="space-y-6">

      {/* PROFILE PHOTO */}
      <div className="flex flex-col">
        <label className="label">Profile Photo</label>
        <input
          type="file"
          className="w-full rounded-lg border border-gray-300 p-2"
          required
        />
      </div>

      {/* NAME */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="label">
            First Name <span className="text-red-500">*</span>
          </label>
          <input className="input" placeholder="First Name" required />
        </div>

        <div className="flex flex-col">
          <label className="label">Middle Name</label>
          <input className="input" placeholder="Middle Name" />
        </div>

        <div className="flex flex-col">
          <label className="label">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input className="input" placeholder="Last Name" required />
        </div>
      </div>

      {/* CONTACT */}
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col">
          <label className="label">Country Code</label>
          <select className="input" required>
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
          </select>
        </div>

        <div className="flex flex-col col-span-2">
          <label className="label">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input className="input" placeholder="Mobile Number" required />
        </div>

        <div className="flex flex-col">
          <label className="label">
            Gender <span className="text-red-500">*</span>
          </label>
          <select className="input" required>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {/* DOB / AGE / QUALIFICATION */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="label">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input type="date" className="input" required />
        </div>

        <div className="flex flex-col">
          <label className="label">
            Age <span className="text-red-500">*</span>
          </label>
          <input className="input" placeholder="Age" required />
        </div>

        <div className="flex flex-col">
          <label className="label">
            Highest Qualification <span className="text-red-500">*</span>
          </label>
          <input className="input" placeholder="Qualification" required />
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
          />
          <input className="input" placeholder="City" required />
          <input className="input" placeholder="State" required />
          <input className="input" placeholder="Pincode" required />
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
          />
          <input className="input" placeholder="City" />
          <input className="input" placeholder="State" />
          <input className="input" placeholder="Pincode" />
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
          />
        </div>
      </div>

      {/* CAPTCHA */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="label">
            Captcha <span className="text-red-500">*</span>
          </label>
          <input className="input" placeholder="Enter Captcha" required />
        </div>

        <div className="flex items-center justify-center rounded-lg bg-gray-200 font-mono text-lg">
          G5K9
        </div>
      </div>

      {/* AGREEMENT */}
      <div className="flex items-center gap-2">
        <input type="checkbox" required />
        <span className="text-sm">
          I agree to the terms and conditions <span className="text-red-500">*</span>
        </span>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex justify-end gap-4">
        <button type="button" className="px-6 py-2 rounded-lg border">
          View
        </button>

        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-indigo-600 text-white"
        >
          Save
        </button>
      </div>

    </form>
  );
};

export default Form;
