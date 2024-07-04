import { useState } from "react";

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  return (
    <div>
      <section>
        <h2>Events</h2>
        <form className="form">
          <input
            className="form-input mb-1"
            type = 'text'
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="email"
            className="form-input mb-1"
            value={email}
            onChange={handleChange}
          />
          
        </form>
        <button type="submit" className="btn btn-block">
          submit
        </button>

      </section>
    </div>
  );
}
export default Component;
