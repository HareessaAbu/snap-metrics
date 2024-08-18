import React, { useState, useEffect } from "react";

const TypingEffect = ({ text }) => {
  const [currentText, setCurrentText] = useState("");
  const typingSpeed = 100;

  useEffect(() => {
    const type = () => {
      let updatedText = text.substring(0, currentText.length + 1);
      setCurrentText(updatedText);
    };

    const timeoutId = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [currentText]);

  return (
    <div className="mt-4 text-sm/relaxed">
      {currentText}
    </div>
  );
};

export default TypingEffect;
