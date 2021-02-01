'use strict';
// Showing how you can assign querySelector results to a variable - in this case a const as it is going to be unchanging throughout.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click',
        function () {
            console.log(`Button #${i+1} clicked`);
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        });

    const closeModel = function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

    btnCloseModal.addEventListener('click', closeModel);
    overlay.addEventListener('click', closeModel);
}