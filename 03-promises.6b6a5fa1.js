const e=document.querySelector("form");let t=0,o=0;e.addEventListener("submit",(l=>{l.preventDefault(),setTimeout((()=>{t=Number(e.step.value);for(let l=1;l<=e.amount.value;l++)i(l,o).then((({position:e,delay:t})=>{alert(`Fulfilled promise ${e} in ${t} ms`)})).catch((({position:e,delay:t})=>{alert(`Rejected promise ${e} in ${t} ms`)})),o+=t}),Number(e.delay.value))}));const i=(e,t)=>new Promise(((o,i)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):i({position:e,delay:t})}),t)}));
//# sourceMappingURL=03-promises.6b6a5fa1.js.map
