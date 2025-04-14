function Message({ message }) {
    // Only render if there's a message
    if (!message) return null;
    return <p>{message}</p>;
  }

  export default Message;