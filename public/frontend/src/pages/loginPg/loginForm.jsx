import { useState } from "react";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="parent_">
      <div className="logo_">
        <img src={null} alt="logo" />
        <h1>Idea Vault</h1>
        <h2>wowwoowow</h2>
      </div>
      <div className="loginform_">
        <div className="Idea_">Idea Vault</div>
        <input
          type="text"
          value={email}
          placeholder="Phone number, username or email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
      </div>
    </div>
  );
};
export default LoginPage;