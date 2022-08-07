function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

var total = '{{product.price}}'
var productId = '{{product.id}}'

function completeOrder() {
    var url = "{% url 'processOrder' %}"

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({ 'productId': productId })
    })
}


// Render the PayPal button into #paypal-button-container
paypal.Buttons({

    // Set up the transaction
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: total
                }
            }]
        });
    },

    // Finalize the transaction
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            // Show a success message to the buyer
            completeOrder()
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
    }


}).render('#paypal-button-container');
