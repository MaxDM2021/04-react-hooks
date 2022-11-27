import { useState, useEffect, useRef } from 'react';
// import styles from './Counter.module.css';


// ===== Пропуск первого рендера ====

export default function SkipEffectFirstRender() {
const [count, setCount] = useState(0);
const isFirstRender = useRef(true);


useEffect(() => {
if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
}
console.log(`Выполняется useEffect - ${Date.now()}`);

})
return (
<div>
    <button onClick={() => setCount(c => c + 1)}>{count}</button>
    <p>
        <code >useEffect</code> этого компонента не выполняется на первом рендере
    </p>
</div>

)
}