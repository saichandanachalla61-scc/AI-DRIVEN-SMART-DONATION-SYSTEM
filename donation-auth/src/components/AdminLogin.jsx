import AuthLogin from "./AuthLogin";

export default function AdminLogin() {
  return <AuthLogin eyebrow="Secure access" title="Admin Login"
    subtitle="System administrator credentials required" emailPlaceholder="Enter admin email"
    note="System admin portal. Account access is managed by developers." />;
}