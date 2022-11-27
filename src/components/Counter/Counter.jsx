import { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export default function Counter() {

const [counterA, setCounterA] = useState(0);
const [counterB, setCounterB] = useState(0);

const handleCounterAIncrement = () => {
    setCounterA(state => state + 1)
};

const handleCounterBIncrement = () => {
    setCounterB(state => state + 1)
};

useEffect(() => {
    console.log('Выполняется эффект' + Date.now());
    const totalClicks = counterA + counterB;
    document.title = `Всего кликнули ${totalClicks} раз`
}, [counterA, counterB]);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раз
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раз
      </button>
      <p>Кликнули всего ${}</p> 
    </>
  );
}
