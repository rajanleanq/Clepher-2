import React from "react";

export default function ChannelLink() {
  return (
    <div className="flex-1 pl-3">
      <div className="breadcrumbs text-base">
        <ul className="rounded-md border border-base-300 bg-base-100 px-2 py-[.32rem]">
          <li className="w-15 truncate md:w-auto">
            <a
              href="https://m.me/hitunezofficial"
              target="_blank"
              rel="noreferrer"
            >
              @hitunezofficial
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
