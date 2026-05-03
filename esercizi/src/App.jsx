// Aggiungi un effetto collaterale al componente Counter, creato nel primo punto
//  dell'esercizio useState, che stampa il valore corrente del contatore nella console.
// Crea un componente Clock che renderizza l'ora corrente all'interno di un tag h2.
//  Utilizza l'hook useEffect per aggiornare l'orario ogni secondo.

import { useEffect, useState } from 'react'


export function CounterDisplay({counter}){
    
return <h2>{counter}</h2>}

export function Clock() {
  const [time, setTime] = useState(new Date())  

  useEffect(() => {
    const Timer = setInterval(() => {
      setTime(new Date())  
    }, 1000)
useEffect(() => {
    const Timer = setInterval(() => {
      setTime(new Date())  
    }, 1000)

    return () => clearInterval(Timer) 
  }, []) 
  return <h2>{time.toLocaleTimeString()}</h2> 
} )};

export function Counter() {
const [counter, setCounter] = useState (0)

function handleCounterIncrement () {
    setCounter (counter + 1)
}

  function handleDecrement() {
    setCounter(counter - 1)
 }

  function handleReset() {
    setCounter(initialValue) }
  

return (
<div>

<CounterDisplay count={counter} />
<button onClick={handleCounterIncrement}>Increment</button>
<button onClick={handleDecrement}>decrementare</button>
<button onClick={handleReset}>Reset</button>
</div> 
  )
}


// {/* il parametro dovrebbe essere una funzione */}