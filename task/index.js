/*
  ### Disco JS Dev - test task ###

  Задача:
  Написать скрипт, который автоматически выполняет 
  действия за пользователя. 
  
  На предоставленной странице скрипт должен пройтись по интерфейсу, 
  заполнить карту и отправить заказ. Последним шагом нужно сделать сабмит формы 
  и проверить что данные успешно 'отправлены'.

  Данные карты можно получить с помощью функции getCard(), проверить заполнение карты
  с помощью функции validateCard().

  Запускать сценарий необходимо по кнопке 'Buy with Disco', которую нужно встроить на страницу
  рядом с кнопкой 'Submit order'.

  Cкрипт должен уметь:
  1. Скрипт должен быть универсальным, брать сценарий из json конфига
  2. Выполнять браузерные события, с использованием функции /utils.js/dispatchEvent()
  3. Вызывать указанную в конфиге js функцию 
  4. Проверять результат, перед выполнением следующего шага 

 */

import { validateCard, dispatchEvent } from "/task/utils.js";
import config from "/task/config.json";

const executeAction = async ({ actionType, selector, waitFor, value }) => {
  const actions = {
    addDisco: () => {
      const formElement = document.querySelector(selector);
      const discoButton = document.createElement("button");

      formElement.style.position = "relative";
      discoButton.id = "discoBtn";
      discoButton.innerText = "Buy with Disco";
      discoButton.classList.add("disco-button");

      formElement.appendChild(discoButton);
    },
    click: () => {
      const target = document.querySelector(selector);
      dispatchEvent({ type: actionType }, target);
    },
    fill: () => {
      const target = document.querySelector(selector);
      target.value = value;
      dispatchEvent({ type: "input" }, target);
    },
  };

  const handlers = {
    click: () => {
      return new Promise((resolve) => {
        const target = document.querySelector(waitFor.selector);
        target.addEventListener(waitFor.actionType, resolve);
      });
    },
    shown: () => {
      return new Promise((resolve) => {
        /**
         * In prod version, here should be attempts counter.
         * Like:
         * let attempts = 10, counter = 0
         * ...
         * if (counter > attemps) reject() or send error to Disco backend/analytics
         */
        setTimeout(() => {
          let target = document.querySelector(waitFor.selector);
          if (target) {
            resolve(target);
            alert("Disco script done!");
          }
        }, 100);
      });
    },
  };

  // Execute action
  if (actions[actionType]) {
    actions[actionType]();
  } else if (actionType) {
    throw new Error(`${actionType} not found!`);
  }

  // Check should we wait
  if (waitFor) {
    await handlers[waitFor.actionType]();
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  for (const action of config?.actions) {
    await executeAction(action);
  }
});
