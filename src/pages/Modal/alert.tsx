const AlertModal = ({
  messages = [],
  buttonText = "OK",
  onClose,
}: {
  messages: string[];
  buttonText?: string;
  onClose: () => void;
}) => {
  return (
    <div className="max-w-[40rem] min-w-[30rem] p-[3.2rem]  bg-gray-50 flex flex-col items-center gap-[3.2rem] rounded-[8px]">
      <div>
        {messages.map((message, messageIndex) => (
          <p key={`alert-message__${messageIndex}`} className="text-gray-500">
            {message}
          </p>
        ))}
      </div>
      <button
        className="w-fit py-[1.4rem] px-[1.6rem] text-gray-500 bg-gray-200 rounded-lg"
        onClick={onClose}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AlertModal;
