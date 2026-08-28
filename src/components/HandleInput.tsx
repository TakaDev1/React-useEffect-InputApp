import React, { useEffect, useState } from "react";

const HandleInput = () => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    console.log(`入力文字数: ${input.length}`);
  }, [input]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
    </div>
  );
};

export default HandleInput;
