import { useState } from "react";

function Component() {
  const [text, setText] = useState('some text');
  const [number, setNumber] = useState(0);
  const [list, setList] = useState<number[]>([]);

  const handleClick = ()=> {

    setText(currentText => currentText === "some text" ? "text changed" : "some text")
    setNumber(prevNumber => prevNumber+1);
    setList(prevList => [...prevList, number+1]);

  }
  return (
    <div>
      <h2 className='mb-1'>hello there</h2>
      <button className="btn btn-center" onClick={handleClick}>
        click me
      </button>
      <p>{text}</p>
      <p> {number}</p>
      <ul>
        {list.map((item, index)=> (
          <li key={index}> {item}</li>
        ))}
      </ul>
     
    </div>
  );
}
export default Component;
