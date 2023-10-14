import './App.css';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import gptLogo from './assets/chatgpt.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImageLogo from './assets/chatgptLogo.svg';
import { sendMsgtoOpenAI } from './Open';
import { useState } from 'react';

function App() {
  const [input,setInput] = useState("");

  const handleSend = async () => {
    const res = await sendMsgtoOpenAI(input)
    console.log(res);
  }
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={gptLogo} alt='logo' className='logo' /><span className='brand'>ChatBot</span></div>
          <button className='midBtn'><img src={addBtn} alt='New Chat' className='addBtn' />New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'><img src={msgIcon} alt='Query' />What is Programing ?</button>
            <button className='query'><img src={msgIcon} alt='Query' />how to use an API ?</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'><img src={home} alt='Home' className='listItemsImg'/>Home</div>
          <div className='listItems'><img src={saved} alt='Saved' className='listItemsImg'/>Saved</div>
          <div className='listItems'><img src={rocket} alt='upgrade' className='listItemsImg'/>Upgrade to Pro</div>
        </div>
      </div>
      <div className='main'>
      <div className='clearChat'>
        <button onClick={()=>{setInput('')}}>Clear Chat</button>
      </div>
        <div className='chats'>
          <div className='chat'>
            <p className='txt'>loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <img className='chatImg' src={userIcon} alt='' />
          </div>
          <div className='chat bot'>
            <img className='chatImg' src={gptImageLogo} alt='' /><p className='txt'>ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Send a message...' value={input} onChange={(e) => {setInput(e.target.value)}} /><button className='send' onClick={handleSend}>
            <img src={sendBtn} alt='' className='findans' /></button>
          </div>
          <p>ChatBot may produce inaccurate information about people, place, facts. Chatbot latest version</p>
        </div>
      </div>
    </div>
  );
}

export default App;
