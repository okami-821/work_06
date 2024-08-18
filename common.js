'use strict';
{
  const modalBtns = document.querySelectorAll('.modal-toggle');
  modalBtns.forEach(function (btn) {
    btn.onclick = function () {
      let modal = btn.getAttribute('data-modal');

      document.getElementById(modal).style.display = "block";
    };
  });

  const closeBtns = document.querySelectorAll('.modal-close');
  closeBtns.forEach(function (btn) {
    btn.onclick = function () {
      let modal = btn.closest('.modal');
      modal.style.display = "none";
    };
  });

  window.onclick = function (event) {
    if(event.target.className === "modal") {
      event.target.style.display = "none";
    }
  };




  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const ScrollAnimation = {
    instance: undefined,
    set() {
      this.instance = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if(entry.isIntersecting) {
              entry.target.classList.add('is-active');
            } else {
              entry.target.classList.remove('is-active');
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0,
        }
      );
      
      const blocks = document.querySelectorAll('.title');
      blocks.forEach((block) => {
        this.instance.observe(block);
      });
    },
  };
  
  const SplitText = (target) => {
    const splitElm = document.querySelectorAll(target);
    splitElm.forEach((el, index) => {
      let text = el.textContent;
      el.textContent = '';
      text = text.split('');
      let newText = '';
      text.forEach((t, index) => {
        newText += `<span data-random="${getRandomInt(1, 8)}">${t}</span>`;
      });
      el.insertAdjacentHTML('beforeend', newText);
    });
  };
  
  window.addEventListener('DOMContentLoaded', () => {
    SplitText('.text-split');
    ScrollAnimation.set();
  });
}