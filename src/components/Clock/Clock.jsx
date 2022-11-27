import { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.css';

export default function Clock() {

  // === state: ====
  const [time, setTime] = useState(() => new Date());


  // === intervalId = null; ===
  const intervalId = useRef(null);
  const buttonRef = useRef(null);


   // === аналог componentDidMount(): ======

  useEffect(() => {
    intervalId.current =
    setInterval(() => {
      console.log('Это интервал каждые 2000ms ' + Date.now());
      setTime(new Date());
    }, 2000);


    // === аналог componentWillUnmount(): ======
    return () => {
      console.log('Это фунция очистки перед следующим вызовом UseEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  console.log(buttonRef);

  return (
    <div className={styles.container}>
      <button onClick={() => setTime(new Date())}>Обновить стейт time</button>
      <p className={styles.clockface}>
        Текущее время: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop} ref={buttonRef}>
        Остановить
      </button>
    </div>
  );
}

// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Эот метод вызывается перед размонтированием компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <p className={styles.clockface}>
//           Текущее время: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Остановить
//         </button>
//       </div>
//     );
//   }
// }
