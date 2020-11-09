const text = document.querySelectorAll('.text');

let changeBackgroundColor = (color) => {
  let backgroundColor = color.options[color.selectedIndex].value;

  document.body.style.backgroundColor = backgroundColor;

  localStorage.setItem('background-color', color);
};

let changeFontColor = (color) => {
  let textColor = color.options[color.selectedIndex].value;

  for (i of text) {
    i.style.color = textColor;
  }

  localStorage.setItem('color', color);
};

let changeFontSize = (size) => {
  let fontSize = size.options[size.selectedIndex].value;

  for (i of text) {
    i.style.fontSize = fontSize;
  }

  localStorage.setItem('font-size', size);
};

let changeLineHeight = (height) => {
  let lineHeight = height.options[height.selectedIndex].value;

  for (i of text) {
    i.style.lineHeight = lineHeight;
  }

  localStorage.setItem('line-height', height);
};

let changeFontFamily = (family) => {
  let fontFamily = family.options[family.selectedIndex].value;

  document.body.style.fontFamily = fontFamily;

  localStorage.setItem('font-family', family);
};
