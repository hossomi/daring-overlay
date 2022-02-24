window.addEventListener('onWidgetLoad', function (obj) {
    const data = obj.detail.fieldData
    $('#toast-container').prepend(`<h1>${data.now}</h1>`);
  })