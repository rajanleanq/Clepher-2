import { widgetConstant } from "./constant/widget.constant";

export default function SelectAPost() {
  return (
    <div className="flex flex-col gap-2 overflow-hidden mt-10">
      <div
        className="flex flex-row gap-4 flex-wrap w-max mx-auto"
        dangerouslySetInnerHTML={{ __html: widgetConstant }}
      ></div>
    </div>
  );
}
