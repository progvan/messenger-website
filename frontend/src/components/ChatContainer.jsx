import React from 'react'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import MessageSkeleton from './skeletons/MessageSkeleton'

const ChatSelected = () => {

  if(true)
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <MessageSkeleton />

      <MessageInput />
    </div>
  )
}

export default ChatSelected