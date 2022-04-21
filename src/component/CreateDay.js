import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateDay() {
  const days = useFetch('http://localhost:3001/days');
  const navigate = useNavigate(); //페이지 전환

  const addDay = (event) => (
    event.preventDefault(),
    axios
      .post(`http://localhost:3001/days/`, {
        day: days.length + 1,
      })
      .then(alert('날짜가 추가 되었습니다.'))
      .then(navigate('/'))
  );
  return (
    <div>
      <h3>현재 일수: {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
export default CreateDay;
