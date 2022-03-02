window.addEventListener('onWidgetLoad', function (event) {
  const data = event.detail.fieldData

  $('#agenda').empty()
  addEventSection('', [
    { title: data.today1 },
    { time: '21h', title: data.today2 }
  ])
  addEventSection(data.nextDay || 'Amanhã', [
    { time: '19h', title: data.tomorrow1 },
    { time: '21h', title: data.tomorrow2 }
  ])
})

function addEventSection(title, events) {
  const agenda = $('#agenda')

  if (title && events.some(event => event.title)) {
    agenda.append(`<p class="separator">${title}</p>`)
  }

  events
    .filter(event => !!event.title)
    .forEach(event => !event.time
      ? agenda.append(`<p class="highlight">${event.title}<span>Agora!</span></p>`)
      : agenda.append(`<p>${event.title}<span>${event.time}</span></p>`))
}