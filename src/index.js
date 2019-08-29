import _ from 'lodash';
import './style.css';
import logo from './hoge.png';
import './style.scss';

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

console.log(logo);

document.body.appendChild(component());
document.body.classList.add('background');

const image = new Image();

image.src = logo;
document.body.appendChild(image);
