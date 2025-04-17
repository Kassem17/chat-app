import  { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        // if the method id get we don't need to add any options because there is no body
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;

// to use axios instead of fetch
// You don’t need to call res.json() when using Axios — it automatically parses JSON for you.

{
    /*
    useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/messages/${selectedConversation._id}`);
        const data = res.data;
  
        if (data.error) {
          throw new Error(data.error);
        }
  
        setMessages(data);
      } catch (error) {
        toast.error(error.message || "Failed to fetch messages");
      } finally {
        setLoading(false);
      }
    };
  
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
    
    */
  }