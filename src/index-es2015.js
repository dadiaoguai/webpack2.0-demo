async function determineDate() {
  const moment = import('moment')
  return moment().format()('LLLL')
}

determineDate().then(str => console.log(str))
