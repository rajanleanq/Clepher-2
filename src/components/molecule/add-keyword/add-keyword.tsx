import React, { FormEvent, useState, useCallback } from "react";
import Badge from "../../atom/badge/badge";
import { Button } from "../../atom/button/button";
import { Input } from "../../atom/input/input";

interface IAddList {
  handleChange: (value: string[]) => void;
}

export default function AddKeyword({ handleChange }: IAddList) {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const handleFormEvent = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const trimmedValue = value.trim();

      if (trimmedValue.length === 0 || items.includes(trimmedValue)) {
        return; // Don't add empty or duplicate items
      }

      const newItems = [...items, trimmedValue];
      setItems(newItems);
      handleChange(newItems);
      setValue(""); // Clear input after adding
    },
    [value, items, handleChange]
  );

  const handleDelete = useCallback(
    (payload: string) => {
      const newItems = items.filter((item) => item !== payload);
      setItems(newItems);
      handleChange(newItems);
    },
    [items, handleChange]
  );

  return (
    <div className="w-full">
      {items.length > 0 && (
        <div className="mb-3 flex gap-2 flex-wrap">
          {items.map((item) => (
            <Badge handleClose={() => handleDelete(item)} key={item}>
              <p className="w-max font-nunito text-14">{item}</p>
            </Badge>
          ))}
        </div>
      )}

      <form onSubmit={handleFormEvent} className="join w-full">
        <Input
          placeholder="Specify Keywords"
          className="input join-item w-full input-bordered focus:outline-offset-0 xs:text-[13px] md:text-14"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
        <Button
          type="submit"
          className="btn join-item btn-primary xs:text-[12px] md:text-[14px]"
        >
          Add Keyword
        </Button>
      </form>
    </div>
  );
}
