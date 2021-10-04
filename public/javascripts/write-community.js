const image = document.getElementById('img');
const imageUrl = document.getElementById('img-url');
const imagePreview = document.getElementById('img-preview');

if (image) {
    image.addEventListener('change', function(e) {
        const formData = new FormData();
        // console.log(this, this.files);
        formData.append('img', this.files[0]);
        axios.post('/write/img', formData)
            .then((res) => {
                imageUrl.value = res.data.url;
                imagePreview.src = res.data.url;
                imagePreview.style.display = 'inline';
            })
            .catch((err) => {
                console.error(err);
            });
    });
};