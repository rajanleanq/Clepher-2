import React, { ChangeEvent, useState } from "react";

export default function PrivateReply() {
  const [privateMsg, setPrivateMsg] = useState<{
    msgType: string;
    flow: string | null;
    message: string;
  }>({
    msgType: "flow",
    flow: null,
    message: "",
  });
  const handleSelectValue = (
    e: React.ChangeEvent<HTMLSelectElement>,
    name: "msgType" | "flow" | "message"
  ) => {
    setPrivateMsg((prev) => ({ ...prev, [name]: e.target.value }));
  };
  const msgType_select_options = [
    {
      title: "Flow",
      value: "flow",
    },
    {
      title: "Single Message",
      value: "single-message",
    },
  ];
  const flow_select_options = [
    {
      title: "Welcome Message",
      value: "welcome-message",
    },
    {
      title: "Default Reply",
      value: "default-reply",
    },
  ];
  const message_select_options = [
    {
      title: "Text Card #1",
      value: "text-card-1",
    },
    { title: "Text Card #2", value: "text-card-2" },
  ];
  return (
    <>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Select message type</span>
        </div>
        <div className="form-control">
          <select
            spellCheck="true"
            autoComplete="on"
            className="select select-bordered"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleSelectValue(e, "msgType")
            }
            value={privateMsg.msgType}
          >
            {msgType_select_options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Select flow</span>
        </div>
        <div className="form-control">
          <select
            spellCheck="true"
            autoComplete="on"
            className="select select-bordered"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleSelectValue(e, "flow")
            }
            value={privateMsg.flow || ""}
          >
            {flow_select_options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      </label>
      {privateMsg?.msgType === "single-message" && (
        <label className="form-control">
          <div className="label">
            <span className="label-text">Select message</span>
          </div>
          <div className="form-control">
            <select
              spellCheck="true"
              autoComplete="on"
              className="select select-bordered"
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                handleSelectValue(e, "message")
              }
              value={privateMsg.message || ""}
            >
              {message_select_options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>
          </div>
        </label>
      )}
    </>
  );
}
