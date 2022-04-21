import { useState } from 'react';
import axios from 'axios';
function Word({ item }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(item.isDone);
  const [word, setWord] = useState(item);

  const toggleShow = () => setIsShow(!isShow);

  const toggleDone = async () =>
    await axios
      .put(`http://localhost:3001/words/${item.id}`, {
        ...item,
        isDone: !isDone,
      })
      .then(setIsDone(!isDone));
  // .catch(new Error('에러'));

  const del = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      axios
        .delete(`http://localhost:3001/words/${item.id}`)
        .then(setWord({ id: 0 }));
    }
  };
  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{item.eng}</td>
      <td>{isShow && item.kor}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? '가리기' : '보기'}</button>
        <button className="btn_del" onClick={del}>
          삭제
        </button>
      </td>
    </tr>
  );
}

/**
 *
 * Rest API
 *
 * Create: POST
 * Read: GET
 * Update: PUT
 * Delete: DELETE
 */

export default Word;
