import _ from 'lodash'
import './styles/index.css'
import './styles/test.scss'
import moment from 'moment'
import wait1mins from './actions/index'

let component = () => {
  let ele = document.createElement('div')
  ele.innerHTML = _.join(['hello', 'charles '], moment().format())

  return ele
}

console.log(wait1mins())

document.body.appendChild(component())
