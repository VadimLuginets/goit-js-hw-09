!function(){var e=document.querySelector("form"),n=0,o=0;e.addEventListener("submit",(function(i){i.preventDefault(),setTimeout((function(){n=Number(e.step.value);for(var i=1;i<=e.amount.value;i++)t(i,o+=n).then((function(e){var n=e.position,o=e.delay;console.log("Fulfilled promise ".concat(n," in ").concat(o," ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("Rejected promise ".concat(n," in ").concat(o," ms"))}))}),Number(e.delay.value))}));var t=function(e,n){return new Promise((function(o,t){var i=Math.random()>.3;setTimeout((function(){i?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}}();
//# sourceMappingURL=03-promises.5c13a18b.js.map