import { useRef, useState } from 'react'; //DOM 요소에 접근, 저장공간?으로 사용
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateWord() {
  const days = useFetch('http://localhost:3001/days');
  const navigate = useNavigate(); //페이지 전환
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (isLoading === false) {
      setIsLoading(true);
      axios
        .post(`http://localhost:3001/words/`, {
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        })
        .then(alert('단어가 추가 되었습니다.'))
        .then(navigate(`/day/${dayRef.current.value}`));
      setIsLoading(false);
    }
  };
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((item) => (
            <option key={item.id} value={item.day}>
              {item.day}
            </option>
          ))}
        </select>
      </div>
      <button style={{ opacity: isLoading ? 0.3 : 1 }}>
        {isLoading ? '저장중' : '저장'}
      </button>
    </form>
  );
}
export default CreateWord;
