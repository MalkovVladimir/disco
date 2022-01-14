const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const dispatchEvent = ({ type, key, charCode }, target) => {
  let event = null;
  const eventInit = {
    bubbles: true,
    cancelable: true,
    view: window,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false
  };
  const mouseTypes = [
    "click",
    "dblclick",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "scroll"
  ];
  const keyboardTypes = ["keydown", "keypress", "keyup"];
  const htmlTypes = ["change", "focus", "blur", "select", "submit", "input"];

  if (mouseTypes.includes(type)) {
    const mouseEventInit = {
      detail: 1,
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      button: 0,
      relatedTarget: null
    };

    event = new MouseEvent(type, Object.assign(mouseEventInit, eventInit));
  } else if (keyboardTypes.includes(type)) {
    const keyboardEventInit = { key, charCode: charCode || 0 };

    event = new KeyboardEvent(
      type,
      Object.assign(keyboardEventInit, eventInit)
    );
  } else if (htmlTypes.includes(type)) {
    event = document.createEvent("HTMLEvents");
    event.initEvent(type, true, true);
  }
  target.dispatchEvent(event);
};

export const getCard = async () => {
  await delay(1600);
  return {
    name: "Ivan Sinyavin",
    number: 5567343878120932,
    expiry: "03/22",
    cvv: 123
  };
};

export const validateCard = async (partNumber) => {
  await delay(1600);

  if (!partNumber) return Promise.reject("Has no part number specified");

  const card = await getCard();
  const isValid = `${card.number}`.includes(partNumber);

  if (!isValid) return Promise.reject("Card not valid");

  return true;
};
