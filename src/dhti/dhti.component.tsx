/**
 * This component demonstrates usage of the config object. Its structure
 * comes from `../config-schema.ts`. For more information about the
 * configuration system, read the docs: https://o3-docs.vercel.app/docs/configuration-system
 */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './dhti-template.scss';
import handleBundle from '../hooks/useBundle';

const Dhti: React.FC = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');


  const handleSendMessage = () => handleBundle(newMessage)
    .then((response) => {
      setMessages([...messages, response.data]);
      setNewMessage('');
    })
    .catch((error) => console.error('Error sending message:', error));

  return (
    <div className={styles.container}>


      <div>
        <ul>
          {messages.map((message) => (
            <div>
              <p dangerouslySetInnerHTML={{ __html: message.output }} />
            </div>
          ))}
        </ul>
        <div>
          <h4>Submit to LangServe</h4>
          <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
          <button onClick={handleSendMessage}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Dhti;
