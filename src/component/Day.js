import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Word from './Word';
import useFetch from '../hooks/useFetch';
function Day() {
  //dummy.words
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);
  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>로딩중...</span>}
      <table>
        <tbody>
          {words.map((item) => (
            <Word item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Day;
