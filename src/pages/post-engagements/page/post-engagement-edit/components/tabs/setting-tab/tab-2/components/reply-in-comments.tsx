import React, { useState } from "react";
import AddComment from "./add-comment";

export default function ReplyInComments() {
  const [selectValues, setSelectValues] = useState<{
    commentType: string;
    integrationType: string;
    assistanceType: string;
  }>({
    commentType: "static",
    integrationType: "integration-1",
    assistanceType: "assistance-1",
  });
  const commentType = [
    {
      title: "Static",
      value: "static",
    },
    { title: "Open AI", value: "openai" },
  ];
  const integrationType = [
    {
      title: "Integration 1",
      value: "integration-1",
    },
    {
      title: "Integration 2",
      value: "integration-2",
    },
  ];
  const assistanceType = [
    {
      title: "Assistance 1",
      value: "assistance-1",
    },
    {
      title: "Assistance 2",
      value: "assistance-2",
    },
  ];
  const handleSelectValue = (
    e: React.ChangeEvent<HTMLSelectElement>,
    name: "commentType" | "integrationType" | "assistanceType"
  ) => {
    setSelectValues((prev) => ({ ...prev, [name]: e.target.value }));
  };
  return (
    <div>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Comment Type</span>
        </div>
        <div className="form-control">
          <select
            spellCheck="true"
            autoComplete="on"
            className="select select-bordered"
            value={selectValues.commentType}
            onChange={(e) => handleSelectValue(e, "commentType")}
          >
            {commentType?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      </label>
      {selectValues?.commentType === "static" && <AddComment />}
      {selectValues?.commentType === "openai" && (
        <>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Select Integration</span>
            </div>
            <div className="form-control">
              <select
                spellCheck="true"
                autoComplete="on"
                className="select select-bordered"
                onChange={(e) => handleSelectValue(e, "integrationType")}
                value={selectValues.integrationType}
              >
                {integrationType?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.title}
                  </option>
                ))}
              </select>
            </div>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Select Assistance</span>
            </div>
            <div className="form-control">
              <select
                spellCheck="true"
                autoComplete="on"
                className="select select-bordered"
                onChange={(e) => handleSelectValue(e, "assistanceType")}
                value={selectValues.assistanceType}
              >
                {assistanceType?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.title}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </>
      )}
    </div>
  );
}
