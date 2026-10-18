import { Link } from "react-router-dom";
import AuthSignup from "./AuthSignup";

const fields = [
  { name: "first", label: "First name", placeholder: "Enter first name" },
  { name: "last", label: "Last name", placeholder: "Enter last name" },
  { name: "email", label: "Email address", placeholder: "you@example.com", type: "email" },
  { name: "phone", label: "Phone number", placeholder: "10 digit number" },
  { name: "address", label: "Address", placeholder: "Street address", full: true },
  { name: "city", label: "City", placeholder: "Your city" },
  { name: "state", label: "State", placeholder: "Your state" },
  { name: "pincode", label: "Pincode", placeholder: "6 digit pincode" },
  { name: "description", label: "Description", placeholder: "Tell us about yourself", type: "textarea", full: true },
  { name: "password", label: "Password", placeholder: "Create a password", type: "password" },
  { name: "confirm", label: "Confirm password", placeholder: "Repeat your password", type: "password" },
];

export default function DonorSignup() {
  return <AuthSignup eyebrow="Join the community" title="Donor Account"
    subtitle="Create your donor profile to make an impact." fields={fields}
    footer={<>Already have an account? <Link to="/donor/login">Login</Link></>} />;
}