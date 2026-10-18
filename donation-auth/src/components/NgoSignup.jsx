import { Link } from "react-router-dom";
import AuthSignup from "./AuthSignup";

const fields = [
  { name: "ngo", label: "NGO's name", placeholder: "Enter NGO name" },
  { name: "reg", label: "Registration number", placeholder: "Registration number" },
  { name: "email", label: "Email address", placeholder: "Enter NGO email", type: "email" },
  { name: "phone", label: "Phone number", placeholder: "10 digit number" },
  { name: "website", label: "Website link", placeholder: "https://", full: true },
  { name: "address", label: "Address", placeholder: "Street address", full: true },
  { name: "city", label: "City", placeholder: "Your city" },
  { name: "state", label: "State", placeholder: "Your state" },
  { name: "pincode", label: "Pincode", placeholder: "6 digit pincode" },
  { name: "description", label: "Description", placeholder: "Describe your mission and the communities you support", type: "textarea", full: true },
  { name: "password", label: "Password", placeholder: "Create a password", type: "password" },
  { name: "confirm", label: "Confirm password", placeholder: "Repeat your password", type: "password" },
];

export default function NgoSignup() {
  return (
    <AuthSignup
      eyebrow="Join the community"
      title="NGO Account"
      subtitle="Create your organization profile to make an impact."
      fields={fields}
      footer={<>Already have an account? <Link to="/ngo/login">Login</Link></>}
    />
  );
}