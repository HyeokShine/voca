import { useState } from 'react';
import UserName from './UserName';

function Hello({ age }) {
  const [name, setName] = useState('Son');
  const msg = age > 19 ? '성인 입니다.' : '미성년자 입니다.';
  const change = () => {
    const newName = name === 'Son' ? 'Park' : 'Son';
    setName(newName);
  };
  //   function showName() {
  //     console.log('Mike');
  //   }
  //   function showAge(age) {
  //     console.log(age);
  //   }
  //   const showText = (e) => console.log(e.target.value);
  return (
    <div>
      {/* <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button onClick={() => showAge(10)}>Show age</button>
      <input onChange={showText} type="text" />
      <hr /> */}
      <h1>state</h1>
      <h2 id="name">
        {name}({age}): {msg}
        <UserName name={name} />
      </h2>
      <button onClick={change}>Change</button>
    </div>
  );
}

export default Hello;
