import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../store/slices/message";

const Message: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector((state: any) => state.message.message);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (message.text) {
      setShowMessage(true);
      setTimeout(
        () => dispatch(setMessage({ text: "", type: "success" })),
        2000
      );
    }
  }, [message.text]);

  return (
    message.text && (
      <div
        className={`position-fixed bottom-0 end-0 m-3 ${
          showMessage ? "show" : "hide"
        }`}
        style={{ zIndex: 10 }}
      >
        <div
          className={`alert alert-${message.type} alert-dismissible fade show`}
          role="alert"
        >
          {message.text}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => dispatch(setMessage({ text: "", type: "success" }))}
          ></button>
        </div>
      </div>
    )
  );
};

export default Message;
