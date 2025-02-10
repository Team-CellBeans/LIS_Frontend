// import React from "react";
// import { useState } from "react";

// const Login = () => {
//   const [captcha, setCaptcha] = useState("SSUd86");

//   const refreshCaptcha = () => {
//     // Generate a random captcha string (placeholder implementation)
//     const randomCaptcha = Math.random().toString(36).substring(2, 8);
//     setCaptcha(randomCaptcha);
//   };

//   const styles = {
//     loginContainer: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "100vh",
//       backgroundColor: "#f0f4ff",
//     },
//     loginCard: {
//       display: "flex",
//       width: "70%",
//       maxWidth: "1000px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//       borderRadius: "8px",
//       overflow: "hidden",
//     },
//     loginForm: {
//       flex: "0 0 40%",
//       padding: "2rem",
//       backgroundColor: "#ffffff",
  
//     },
//     loginTitle: {
//       fontSize: "24px",
//       fontWeight: "bold",
//       marginBottom: "1.5rem",
//     },
//     formGroup: {
//       marginBottom: "1rem",
//     },
//     label: {
//       display: "block",
//       fontSize: "14px",
//       marginBottom: "0.5rem",
//     },
//     input: {
//       width: "100%",
//       padding: "0.8rem",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//     },
//     select: {
//       width: "100%",
//       padding: "0.8rem",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//     },
    // captchaContainer: {
    //   display: "flex",
    //   alignItems: "center",
    //   gap: "0.5rem",
    // },
    // captchaBox: {
    //   padding: "0.5rem 1rem",
    //   backgroundColor: "#f3f4f6",
    //   border: "1px solid #ddd",
    //   borderRadius: "4px",
    //   fontFamily: "monospace",
    // },
    // refreshButton: {
    //   background: "none",
    //   border: "solid",
    //   color: "gray",
    //   cursor: "pointer",
    // },
    // terms: {
    //   display: "flex",
    //   alignItems: "center",
    //   gap: "0.5rem",
    //   fontSize: "14px",
    // },
    // termsLink: {
    //   color: "#007bff",
    //   textDecoration: "none",
    // },
    // termsLinkHover: {
    //   textDecoration: "underline",
    // },
//     submitButton: {
//       width: "100%",
//       padding: "0.8rem",
//       backgroundColor: "#007bff",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//       fontSize: "16px",
//     },
//     submitButtonHover: {
//       backgroundColor: "#0056b3",
//     },
//     welcomeSection: {
//       flex: "0 0 60%",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       background: "url('https://thumbs.dreamstime.com/b/lab-assistant-studying-samples-to-detect-pathologies-quality-medical-research-stock-video-105848572.jpg') no-repeat center center",
//       backgroundSize: "cover",
//       color: "white",
//       textAlign: "center",
//       padding: "2rem",
//     },
//     welcomeContent: {
//       textAlign: "center",
//     },
//     welcomeTitle: {
//       fontSize: "36px",
//       fontWeight: "bold",
//     },
//     welcomeText: {
//       marginTop: "1rem",
//       fontSize: "18px",
//     },
//   };

//   return (
//     <div style={styles.loginContainer}>
//       <div style={styles.loginCard}>
//         {/* Left Section - Login Form */}
//         <div style={styles.loginForm}>
//           <h2 style={styles.loginTitle}>Login</h2>

//           <form>
//             <div style={styles.formGroup}>
//               <label style={styles.label}>Username</label>
//               <input type="text" placeholder="Enter your username" style={styles.input} />
//             </div>

//             <div style={styles.formGroup}>
//               <label style={styles.label}>Unit</label>
//               <select style={styles.select}>
//                 <option value="">Select Unit</option>
//                 <option value="unit1">Unit 1</option>
//                 <option value="unit2">Unit 2</option>
//                 <option value="unit3">Unit 3</option>
//               </select>
//             </div>

//             <div style={styles.formGroup}>
//               <label style={styles.label}>Password</label>
//               <input type="password" placeholder="Enter your password" style={styles.input} />
//             </div>

            // <div style={styles.formGroup}>
            //   <label style={styles.label}>Enter Captcha</label>
            //   <div style={styles.captchaContainer}>
            //     <div style={styles.captchaBox}>{captcha}</div>
            //     <button
            //       type="button"
            //       style={styles.refreshButton}
            //       onClick={refreshCaptcha}
            //     >
            //       ↻
            //     </button>
            //   </div>
            //   <input type="text" placeholder="Enter Captcha text" style={styles.input} />
            // </div>

            // <div style={styles.formGroup}>
            //   <input type="checkbox" id="terms" />
            //   <label htmlFor="terms" style={styles.label}>
            //     By creating an account, I agree to our
            //     <a href="" style={styles.termsLink}> Terms of use </a> and
            //     <a href="" style={styles.termsLink}> Privacy Policy</a>
            //   </label>
            // </div>

//             <button style={styles.submitButton}>Sign in</button>
//           </form>
//         </div>

        // {/* Right Section - Welcome Message */}
        // <div style={styles.welcomeSection}>
        //   <div style={styles.welcomeContent}>
        //     <h2 style={styles.welcomeTitle}>Welcome</h2>
        //     <p style={styles.welcomeText}>Enter your personal details and start your journey with us</p>
        //   </div>
        // </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState("SSUd86");  // Initialize captcha state

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const refreshCaptcha = () => {
        // Generate a random captcha string (placeholder implementation)
        const randomCaptcha = Math.random().toString(36).substring(2, 8);
        setCaptcha(randomCaptcha);
      };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#34B3F1",
      padding: "1rem",
    },
    card: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      maxWidth: "900px",
      height: "500px",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    },

    captchaContainer: {
      display: "flex",
      alignItems: "center",
      gap: "0.4rem",
    },
    captchaBox: {
      padding: "0.4rem 1rem",
      backgroundColor: "black",
      color:"white",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontFamily: "monospace",
    },
    refreshButton: {
      background: "none",
      border: "none",
      color: "gray",
      cursor: "pointer",
    },
    imageContainer: {
      flex: "0 0 50%",
      backgroundImage:
        "url(https://plus.unsplash.com/premium_photo-1661434779070-cf8fc0e253ab?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFifGVufDB8fDB8fHww)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    formContainer: {
      flex: "0 0 40%",
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    terms: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "14px",
    },
    termsLink: {
      color: "#007bff",
      textDecoration: "none",
    },
    termsLinkHover: {
      textDecoration: "underline",
    },

    

    
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    formGroup: {
      marginBottom: "1rem",
      position: "relative", // Added for positioning icon
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      fontSize: "14px",
      color: "black",
      
    },
    input: {
      width: "100%",
      padding: "0.4rem",
      border: "1px solid #34B3F1",
      borderRadius: "4px",
      fontSize: "11px",
    },
    button: {
      width: "100%",
      padding: "0.4rem",
      backgroundColor: "#34B3F1",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontSize: "11px",
      cursor: "pointer",
      marginTop: "1rem",
      fontSize:"15px",
    },
    link: {
      marginTop: "1rem",
      textAlign: "center",
      fontSize: "14px",
      
    },
    passwordToggleIcon: {
      position: "absolute",
      right: "10px",
      top: "65%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      fontSize: "14px",
      color: "#34B3F1",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Left Side Image */}
        <div style={styles.imageContainer}></div>

        {/* Right Side Form */}
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Login</h2>
          <form>
            <div style={styles.formGroup}>
              <label style={styles.label}>Username</label>
              <input type="text" placeholder="Enter your username" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                style={styles.input}
              />
              <span style={styles.passwordToggleIcon} onClick={togglePasswordVisibility}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            <div style={styles.formGroup}>
               <label style={styles.label}>Enter Captcha</label>
            </div>
            <div style={styles.captchaContainer}>
                <div style={styles.captchaBox}>{captcha}</div>
                 <button
                  type="button"
                  style={styles.refreshButton}
                  onClick={refreshCaptcha}
                 >
                  ↻
                </button>
                <input type="text" placeholder="Enter Captcha text" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms" style={styles.label}>
                By creating an account, I agree to our
                <a href="" style={styles.termsLink}> Terms of use </a> and
                <a href="" style={styles.termsLink}> Privacy Policy</a>
              </label>
            </div>

            

            <button type="submit" style={styles.button}>
              Sign in
            </button>

            
            <div style={styles.link}>
              <a href="#">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;






