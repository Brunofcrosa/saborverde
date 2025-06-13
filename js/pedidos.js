document.addEventListener('DOMContentLoaded', () => {
    const formPedido = document.getElementById('formPedido');

    if (formPedido) {
        formPedido.addEventListener('submit', (event) => {
            event.preventDefault();

            formPedido.classList.add('was-validated');

            if (!formPedido.checkValidity()) {
                return;
            }

            Swal.fire({
                title: 'Sucesso!',
                text: 'Seu pedido foi enviado com sucesso. Entraremos em contato!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '../index.html';
                }

            });
        });
    }
});