import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

function DayList() {
  const days = useFetch('http://localhost:3001/days');

  if (days.length === 0) return <sapn>로딩중...</sapn>;

  // const [days, setDays] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/days')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setDays(data);
  //     });
  // }, []);
  return (
    <ul className="list_day">
      {days.map((item) => (
        <li key={item.id}>
          <Link to={`/day/${item.day}`}> Day {item.day}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DayList;
