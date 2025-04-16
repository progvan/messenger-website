import React from 'react'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'

const ChatSelected = () => {
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <p>loading...</p>

      <MessageInput />
    </div>
  )
}

export default ChatSelected