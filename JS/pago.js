// Obtener el total del carrito desde localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = cart.reduce((sum, item) => sum + item.price, 0);

// Función para mostrar el mensaje de pago exitoso
function showPaymentMessage(message) {
    const paymentMessageDiv = document.getElementById('payment-message');
    paymentMessageDiv.textContent = message;
    paymentMessageDiv.style.padding = '20px';
    paymentMessageDiv.style.border = '1px solid green';
    paymentMessageDiv.style.marginTop = '20px';
    paymentMessageDiv.style.textAlign = 'center';
}

// Función para vaciar el carrito
function clearCart() {
    localStorage.removeItem('cart'); // Vaciar el carrito en el localStorage
}

// Función para mostrar mensaje de pago con SweetAlert2
function showPaymentMessage(message, icon) {
    Swal.fire({
        title: '¡Pedido confirmado!',
        text: message,
        icon: icon,  // Puedes usar 'success', 'info', 'warning', etc.
        background: '#fff4e0',  // Un tono cálido para comida rápida
        confirmButtonColor: '#e94e77',  // Un rojo vibrante para simular ketchup
        timer: 3000,
        timerProgressBar: true,
        backdrop: `
            rgba(0,0,123,0.4)
            url("/IMG/hamburguesa.gif")  // Añade una imagen de fondo divertida relacionada
            left top
            no-repeat
        `
    });
}

// Pagar con tarjeta
document.getElementById('card-payment').addEventListener('click', () => {
    showPaymentMessage("Pago realizado con éxito. ¡Tu pedido está en camino!", 'success');
    clearCart();
    setTimeout(() => window.location.href = 'index.html', 3000);
});

// Pagar en efectivo
document.getElementById('cash-payment').addEventListener('click', () => {
    showPaymentMessage(`Gracias por tu compra. Deberás pagar al repartidor $${total}.`, 'info');
    clearCart();
    setTimeout(() => window.location.href = 'index.html', 3000);
});

