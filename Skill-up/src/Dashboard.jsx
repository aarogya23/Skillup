import React, { useState } from "react";

function Dashboard() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    agreeTerms: false,
    newsletter: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === "checkbox" ? checked : value 
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please enter email and password");
      return;
    }
    alert(`Logged in as ${formData.email}`);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.agreeTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy");
      return;
    }
    alert(`Account created for ${formData.username}`);
  };

  return (
    <div style={styles.dashboard}>
      <div style={styles.formCard}>
        {/* Logo and Header */}
        <div style={styles.header}>
          <div style={styles.logo}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M15 45L25 35L35 40L45 25" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="45" cy="25" r="3" fill="#000"/>
              <circle cx="35" cy="40" r="3" fill="#000"/>
              <circle cx="25" cy="35" r="3" fill="#000"/>
              <circle cx="15" cy="45" r="3" fill="#000"/>
              <text x="12" y="20" fontSize="16" fontWeight="bold" fill="#000">SKILL UP</text>
            </svg>
          </div>
          <h1 style={styles.title}>SKILL UP</h1>
          <p style={styles.subtitle}>Create your educational account and unlock endless possibilities</p>
        </div>

        {/* Form Toggle */}
        <div style={styles.formToggle}>
          <button 
            onClick={() => setIsLogin(true)} 
            style={{
              ...styles.toggleBtn,
              ...(isLogin ? styles.toggleBtnActive : {})
            }}
          >
            Login
          </button>
          <button 
            onClick={() => setIsLogin(false)} 
            style={{
              ...styles.toggleBtn,
              ...(!isLogin ? styles.toggleBtnActive : {})
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Forms */}
        {isLogin ? (
          <form style={styles.form} onSubmit={handleLogin}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                style={styles.input}
                required 
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <div style={styles.passwordWrapper}>
                <input 
                  type={showPassword ? "text" : "password"}
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  style={styles.input}
                  required 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  👁️
                </button>
              </div>
            </div>
            <button type="submit" style={styles.submitBtn}>Login</button>
          </form>
        ) : (
          <form style={styles.form} onSubmit={handleSignup}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Username</label>
              <input 
                type="text" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
                style={styles.input}
                required 
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                style={styles.input}
                required 
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <div style={styles.passwordWrapper}>
                <input 
                  type={showPassword ? "text" : "password"}
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  style={styles.input}
                  required 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  👁️
                </button>
              </div>
              <span style={styles.passwordStrength}>Password strength: Weak</span>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Confirm Password</label>
              <div style={styles.passwordWrapper}>
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword" 
                  value={formData.confirmPassword} 
                  onChange={handleChange} 
                  style={styles.input}
                  required 
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.eyeButton}
                >
                  👁️
                </button>
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Country</label>
              <input 
                type="text" 
                name="country" 
                value={formData.country} 
                onChange={handleChange} 
                style={styles.input}
              />
            </div>

            {/* Checkboxes */}
            <div style={styles.checkboxGroup}>
              <input 
                type="checkbox" 
                name="agreeTerms" 
                checked={formData.agreeTerms}
                onChange={handleChange}
                style={styles.checkbox}
              />
              <label style={styles.checkboxLabel}>
                I agree to the <a href="#" style={styles.link}>Terms of Service</a> and <a href="#" style={styles.link}>Privacy Policy</a>
              </label>
            </div>

            <div style={styles.checkboxGroup}>
              <input 
                type="checkbox" 
                name="newsletter" 
                checked={formData.newsletter}
                onChange={handleChange}
                style={styles.checkbox}
              />
              <label style={styles.checkboxLabel}>
                Subscribe to our newsletter for updates and exclusive offers
              </label>
            </div>

            <button type="submit" style={styles.submitBtn}>Create Account</button>
          </form>
        )}

        {/* Divider */}
        <div style={styles.divider}>
          <span style={styles.dividerText}>or continue with</span>
        </div>

        {/* Social Buttons */}
        <div style={styles.socialButtons}>
          <button style={styles.socialBtn}>
            <span style={styles.socialIcon}>G</span> Google
          </button>
          <button style={styles.socialBtn}>
            <span style={styles.socialIcon}>⚫</span> Github
          </button>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true); }} style={styles.link}>Sign in</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  dashboard: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f8f9fa",
    padding: "2rem",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  formCard: {
    maxWidth: "520px",
    width: "100%",
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    borderTop: "4px solid #3b9ef5",
    padding: "2.5rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  logo: {
    marginBottom: "1rem",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#000",
    margin: "0.5rem 0",
  },
  subtitle: {
    color: "#666",
    fontSize: "0.95rem",
    margin: "0.5rem 0 0 0",
  },
  formToggle: {
    display: "flex",
    borderBottom: "2px solid #e8e8e8",
    marginBottom: "2rem",
  },
  toggleBtn: {
    flex: 1,
    padding: "0.75rem",
    border: "none",
    background: "transparent",
    color: "#999",
    fontSize: "0.95rem",
    fontWeight: "500",
    cursor: "pointer",
    borderBottom: "3px solid transparent",
    marginBottom: "-2px",
    transition: "all 0.3s ease",
  },
  toggleBtnActive: {
    color: "#3b9ef5",
    borderBottom: "3px solid #3b9ef5",
    fontWeight: "600",
  },
  form: {
    width: "100%",
  },
  formGroup: {
    marginBottom: "1.25rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "500",
    color: "#2c3e50",
    fontSize: "0.9rem",
  },
  input: {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    fontSize: "0.95rem",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  },
  passwordWrapper: {
    position: "relative",
  },
  eyeButton: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.2rem",
    padding: "0.25rem",
  },
  passwordStrength: {
    fontSize: "0.8rem",
    color: "#999",
    marginTop: "0.3rem",
    display: "block",
  },
  checkboxGroup: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "1rem",
    gap: "0.5rem",
  },
  checkbox: {
    marginTop: "0.2rem",
    cursor: "pointer",
    accentColor: "#3b9ef5",
  },
  checkboxLabel: {
    fontSize: "0.85rem",
    color: "#666",
    cursor: "pointer",
    margin: 0,
  },
  link: {
    color: "#3b9ef5",
    textDecoration: "none",
  },
  submitBtn: {
    width: "100%",
    padding: "0.9rem",
    background: "#3b9ef5",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "1rem",
    transition: "all 0.3s ease",
  },
  divider: {
    textAlign: "center",
    margin: "1.5rem 0",
    position: "relative",
  },
  dividerText: {
    background: "white",
    padding: "0 1rem",
    color: "#999",
    fontSize: "0.85rem",
    position: "relative",
    zIndex: 1,
  },
  socialButtons: {
    display: "flex",
    gap: "1rem",
    marginTop: "1.5rem",
  },
  socialBtn: {
    flex: 1,
    padding: "0.75rem",
    border: "1px solid #e0e0e0",
    background: "white",
    borderRadius: "4px",
    fontSize: "0.9rem",
    fontWeight: "500",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    color: "#333",
    transition: "all 0.3s ease",
  },
  socialIcon: {
    fontSize: "1.2rem",
  },
  footer: {
    textAlign: "center",
    marginTop: "1.5rem",
    fontSize: "0.9rem",
    color: "#666",
  },
};

export default Dashboard;