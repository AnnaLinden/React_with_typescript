import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] =[
  {
    id: 1,
    url: 'https://reactjs.org',
    text: 'react docs',
  },
  {
    id: 2,
    url: 'https://reactrouter.com',
    text: 'react router docs',
  },
  {
    id: 3,
    url: 'https://reacttraining.com',
    text: 'react training',
  },
]

function Component() {
  const [text, setText] = useState('some text');
  const [number, setNumber] = useState(0);
  const [list, setList] = useState<number[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  const handleClick = ()=> {

    setText(currentText => currentText === "some text" ? "text changed" : "some text")
    setNumber(prevNumber => prevNumber+1);
    setList(prevList => [...prevList, number+1]);
    setLinks([...links, { id: 4, url: 'hello', text: 'hello' }]);

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
      <ul>
        {links.map((link)=>
        <li key = {link.id}>
          <a href="{link.url}">{link.text}</a>
        </li>
        )}
      </ul>
     
    </div>
  );
}
export default Component;
