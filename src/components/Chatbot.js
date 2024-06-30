import React, { useState, useEffect } from "react";
import styles from "./Chatbot.module.css"; // Import the CSS file

const Chatbot = ({ onFilterProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(0);
  const [botSelectedCategory, setBotSelectedCategory] = useState("");

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && step === 0) {
      const initialMessages = [
        { text: "Hello, this is Starry.", sender: "bot" },
        { text: "What do you want to buy?", sender: "bot" },
        { text: "1. Tops\n2. Bottoms\n3. Dresses\n4. Jackets", sender: "bot" },
      ];
      setMessages(initialMessages);
      setStep(1);
    }
  }, [isOpen, step]);

  const handleSend = () => {
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, sender: "user" };
      setMessages([...messages, userMessage]);

      if (step === 1) {
        setBotSelectedCategory(inputValue); // Set the selected category
        const botMessage = {
          text: `You selected ${inputValue}. Any specific suggestions on styles, color, or pattern of ${inputValue.toLowerCase()}?`,
          sender: "bot",
        };
        setMessages([...messages, botMessage]);
        setStep(2);
      } else if (step === 2) {
        onFilterProducts(inputValue, botSelectedCategory); // Pass both category and user input
        const botMessage = {
          text: "Thank you for your input. We will consider your preferences.",
          sender: "bot",
        };
        setMessages([...messages, botMessage]);
        setTimeout(() => {
          toggleBox();
        }, 2000); // Close the chatbot after 2 seconds
      }

      setInputValue("");
    }
  };

  return (
    <div>
      <div className={styles.circle} onClick={toggleBox}>
        💬
      </div>
      {isOpen && (
        <div className={styles.box}>
          <div className={styles.header}>
            <h2>Chatbot</h2>
            <button className={styles.closeButton} onClick={toggleBox}>
              ×
            </button>
          </div>
          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user" ? styles.userMessage : styles.botMessage
                }
              >
                {msg.text.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.inputArea}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              className={styles.input}
            />
            <button onClick={handleSend} className={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
