import { widgetConstant } from "./constant/widget.constant";

export default function SelectAPost() {
  return (
    <div className="flex flex-col gap-2 overflow-hidden mt-4">
      <p className="flex place-content-center">Select A Post</p>
      <div
        className="flex flex-row gap-4 flex-wrap w-max mx-auto mt-10"
        dangerouslySetInnerHTML={{ __html: widgetConstant }}
      ></div>
    </div>
  );
}
