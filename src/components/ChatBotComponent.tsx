import React, { useState } from 'react';
import axios from 'axios';

interface ChatEntry {
  user?: string;
  bot?: string;
}

const ChatBotComponent: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatEntry[]>([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Add user's message to the chat history
    const newChatHistory: ChatEntry[] = [...chatHistory, { user: message }];
    setChatHistory(newChatHistory);
    setMessage('');

    try {
      // Send the message to the backend
      const response = await axios.post<{ reply: string }>('http://localhost:5000/chat', {
        message,
      });

      // Add the bot's response to the chat history
      setChatHistory([...newChatHistory, { bot: response.data.reply }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div>
        {chatHistory.map((entry, index) => (
          <div key={index}>
            {entry.user && (
              <div>
                <strong>You:</strong> {entry.user}
              </div>
            )}
            {entry.bot && (
              <div>
                <strong>Bot:</strong> {entry.bot}
              </div>
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBotComponent;
