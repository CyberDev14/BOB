import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Firstpg.module.css";
import Logo from "./Starry.mp4";

function Firstpg() {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
      const navigateTimer = setTimeout(() => {
        navigate("/home");
      }, 3600); // 6 seconds

      return () => clearTimeout(navigateTimer);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.firstpage}>
      {showVideo && (
        <video autoPlay muted className={styles.backgroundVideo}>
          <source src={Logo} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default Firstpg;
