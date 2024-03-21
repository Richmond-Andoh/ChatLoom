import { create } from "zustand";

const useChat = create((set) => ({
    selectedChat: null,
    setSelectedChat: (selectedChat) => set({selectedChat}),
    messages: [],
    setMessages: (messages) => set({ messages })
}))

export default useChat;
