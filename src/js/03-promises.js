const formEl = document.querySelector(".form");
import {Notify} from 'notiflix';
let promises = 0;



formEl.addEventListener("submit", onSubmitPromises);


function onSubmitPromises(e) {
    e.preventDefault();

    const delay = Number(e.target.elements[0].value);
    const step = Number(e.target.elements[1].value);
    promises = Number(e.target.elements[2].value);
    
    createPromise(delay, step, promises); 
};


function createPromise(position, delay, promises) {
    let time = position - delay;
    let notiflixInterface = position;

    for (let i = 0; i < promises; i += 1) {
        
        time += delay;
        let shouldResolve = Math.random() > 0.3;

        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (shouldResolve) {
                    resolve(Notify.success(`✅ Fulfilled promise ${i += 1} in ${notiflixInterface}ms`));
                } else {
                    reject(Notify.failure(`❌ Rejected promise ${i += 1} in ${notiflixInterface}ms`));
                }
                notiflixInterface += delay; 
            }, time);
           
        });
        
    };
};




