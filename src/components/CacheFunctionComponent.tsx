import { memo } from "react";

export type AddType = {
  handleAdd: () => void;
  digit: number;
};

export default memo(function CacheFunctionComponent({
  handleAdd,
  digit,
}: AddType) {
  return (
    <div>
      <h1>CacheFunctionComponent</h1>
      <h2>{digit}</h2>
      <button onClick={handleAdd}>Add Function</button>
    </div>
  );
});
