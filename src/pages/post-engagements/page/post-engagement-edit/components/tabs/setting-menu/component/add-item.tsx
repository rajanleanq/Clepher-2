//component to add value on enter
import React, { FormEvent } from "react";
import { Button } from "../../../../../../../../components/atom/button/button";
import Badge from "../../../../../../../../components/atom/badge/badge";
interface IAddList {
  handleChange: (value: string[]) => void;
}
export default function AddItem(props: IAddList) {
  const [value, setValue] = React.useState("");
  const [items, setItems] = React.useState<Array<string>>([]);
  const handleFormEvent = (e: FormEvent) => {
    e.preventDefault();
    setItems([...items, value]);
    props.handleChange([...items, value]);
    setValue("");
  };
  const handleDelete = (payload: string) => {
    let copy_items = [...items];
    copy_items = copy_items.filter((p) => p !== payload);
    setItems(copy_items);
    props.handleChange(copy_items);
  };
  return (
    <div className="w-full">
      {items?.length > 0 && (
        <div className="mb-3 flex gap-2">
          {items?.map((p) => (
            <Badge handleClose={() => handleDelete(p)} key={p}>
              <p className="  w-max  font-nunito text-14">{p}</p>
            </Badge>
          ))}
        </div>
      )}
      <form
        onSubmit={handleFormEvent}
        className="join w-full"
      >
        <input
          placeholder="Specify Keywords"
          className="input join-item w-full input-bordered focus:outline-offset-0 xs:text-[13px] md:text-14"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className="btn join-item btn-primary xs:text-[12px] md:text-[14px]">Add Keyword</Button>
      </form>
    </div>
  );
}
