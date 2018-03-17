document.addEventListener('DOMContentLoaded', function() {
  const doStuff = function (e) {
    // const fileForm = document.getElementById("file-form")
    const formData = new FormData()
    const fileInput = document.getElementById('file-input')
    for (const f of fileInput.files) {
      formData.append('files', f)
    }

    const request = new XMLHttpRequest()
    request.addEventListener("load", function () {
      console.log(this.responseText)
    })
    request.open("POST", "/generateCsv")
    request.send(formData)
  }

  const fileInput = document.getElementById('file-input')
  fileInput.onchange = doStuff
}, false);
