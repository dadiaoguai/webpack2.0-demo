import _ from 'lodash';
import './styles/index.css'

let component = () => {
  let ele = document.createElement('div')
  ele.innerHTML = _.join(['hello', 'charles'], '')

  return ele
}

document.body.appendChild(component())
