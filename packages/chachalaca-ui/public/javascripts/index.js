document.addEventListener(
	'DOMContentLoaded',
	() => {
		const doStuff = function(_) {
			const formData = new FormData();
			const fileInput = document.getElementById('file-input');
			for (const f of fileInput.files) {
				formData.append('files', f);
			}

			const request = new XMLHttpRequest();
			request.addEventListener('load', function(_) {
				if (this.status === 200) {
					const blob = new Blob([this.response], {type: 'text/csv'});
					const a = document.createElement('a');
					a.style = 'display: none';
					document.body.appendChild(a);
					const url = window.URL.createObjectURL(blob);
					a.href = url;
					const date = new Date().toLocaleString().replace(/[^\d]/g, '-');
					a.download = `facturas-${date}.csv`;
					a.click();
					window.URL.revokeObjectURL(url);
				}
			});
			request.open('POST', '/generateCsv');
			request.send(formData);
		};

		const fileInput = document.getElementById('file-input');
		fileInput.addEventListener('change', doStuff);
	},
	false
);
