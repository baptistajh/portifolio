import React from 'react';

const SumarioFibonacci = () => (
    <details>
        <summary>O que é a sequência de Fibonacci</summary>
        <div className='text-align-justify font-size-md'>
            <p>
                A sequência de Fibonacci é uma sequencia de números inteiros, começando do 0 e 1,
                onde a soma dos dois números inteiros anteriores seja o próximo número da sequência.
                Os números desta sequeência são chamados de números de Fibonacci. Matemáticamente, para
                n{'>'}1, a sequência de Fibonacci pode ser descrita de acordo com a fórmula abaixo:
            </p>
        </div>
        <div className='text-align-center font-size-md'>
            <p><code className='code'>F0 = 0</code></p>
            <p><code className='code'>F1 = 1</code></p>
            <p><code className='code'>Fn = Fn-1 + Fn-2</code></p>
        </div>
        <div className='text-align-justify font-size-md'>
            <p>O início dessa sequência são estes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...</p>
        </div>
    </details>
);

export default SumarioFibonacci;