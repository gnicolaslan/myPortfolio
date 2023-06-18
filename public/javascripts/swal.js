document.querySelector('.form-contact')
addEventListener('submit', function (event) {
    event.preventDefault();

    Swal.fire({
        icon: 'success',
        title: '¡En breve te respondo! :)',
        showConfirmButton: false,
        timer: 2500,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutDown'
        }
    }).then(() => {
        event.target.submit();
    });
})

