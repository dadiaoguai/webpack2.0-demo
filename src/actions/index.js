import moment from 'moment'

async function wait1mins() {
  return moment().format('YYYY-MM-DD HH:mm:ss')
}

export default wait1mins
