document.addEventListener(
	'DOMContentLoaded',
	() => {
		function fileInputOnChange() {
			const formData = new FormData();
			const fileInput = document.querySelector('#file-input');
			for (const f of fileInput.files) {
				formData.append('files', f);
			}

			const request = new XMLHttpRequest();
			request.responseType = 'blob';
			request.addEventListener('load', requestOnLoad);
			request.open('POST', '/generate-xlsx');
			request.send(formData);
		}

		function requestOnLoad() {
			if (this.status === 200) {
				const a = document.createElement('a');
				a.style = 'display: none';
				document.body.append(a);
				const url = window.URL.createObjectURL(this.response);
				a.href = url;
				a.download = `comprobantes-${getDate()}.xlsx`;
				a.click();
				window.URL.revokeObjectURL(url);
			}
		}

		function getDate() {
			const d = new Date();
			const pad = (x) => x.toString(10).padStart(2, '0');
			const parts = [
				d.getFullYear(),
				pad(d.getMonth() + 1),
				pad(d.getDate()),
				pad(d.getHours()),
				pad(d.getMinutes()),
				pad(d.getSeconds())
			];
			return parts.join('-');
		}

		const fileInput = document.querySelector('#file-input');
		fileInput.addEventListener('change', fileInputOnChange);
	},
	false
);
