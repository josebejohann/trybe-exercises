const text = document.querySelectorAll('.text');

document.body.style.color = localStorage.getItem('textColor');
document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
document.body.style.fontSize = localStorage.getItem('fontSize');
document.body.style.lineHeight = localStorage.getItem('lineHeight');
document.body.style.fontFamily = localStorage.getItem('fontFamily');

let changeBackgroundColor = (color) => {
  let backgroundColor = color.options[color.selectedIndex].value;
  console.log(color.options[color.selectedIndex].value);

  document.body.style.backgroundColor = backgroundColor;

  localStorage.setItem('backgroundColor', backgroundColor);
};

let changeFontColor = (color) => {
  let textColor = color.options[color.selectedIndex].value;

  document.body.style.color = textColor;

  localStorage.setItem('textColor', textColor);
};

let changeFontSize = (size) => {
  let fontSize = size.options[size.selectedIndex].value;

  document.body.style.fontSize = fontSize;

  localStorage.setItem('fontSize', fontSize);
};

let changeLineHeight = (height) => {
  let lineHeight = height.options[height.selectedIndex].value;

  document.body.style.lineHeight = lineHeight;

  localStorage.setItem('lineHeight', lineHeight);
};

let changeFontFamily = (family) => {
  let fontFamily = family.options[family.selectedIndex].value;

  document.body.style.fontFamily = fontFamily;

  localStorage.setItem('fontFamily', fontFamily);
};
