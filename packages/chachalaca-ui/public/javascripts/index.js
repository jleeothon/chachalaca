document.addEventListener('DOMContentLoaded', function() {
  const doStuff = function (e) {
    // const fileForm = document.getElementById("file-form")
    const formData = new FormData()
    const fileInput = document.getElementById('file-input')
    for (const f of fileInput.files) {
      formData.append('files', f)
    }

    const request = new XMLHttpRequest()
    request.addEventListener("load", function (e) {
      if (this.status === 200) {
        const blob = new Blob([this.response], {type: 'text/csv'})
        const a = document.createElement("a")
        a.style = "display: none"
        document.body.appendChild(a)
        let url = window.URL.createObjectURL(blob);
        a.href = url;
        const date = new Date().toLocaleString().replace(/[^\d]/g, "-")
        a.download = `facturas-${date}.csv`
        a.click()
        window.URL.revokeObjectURL(url);
      }
    })
    request.open("POST", "/generateCsv")
    request.send(formData)
  }

  const fileInput = document.getElementById('file-input')
  fileInput.onchange = doStuff
}, false);
