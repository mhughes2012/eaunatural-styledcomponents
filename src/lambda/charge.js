const stripe = require('stripe')('sk_test_aC0ZvNKyZhz1USSP7bLrYMMY00n1lEqjVN'); // add your secret key here

exports.handler = (event, context, callback) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return callback(null, { statusCode: 405, body: 'Method Not Allowed' });
    }

    const data = JSON.parse(event.body);

    if (!data.token || parseInt(data.amount) < 1) {
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Some required fields were not supplied.',
            }),
        });
    }

    stripe.charges
        .create({
            amount: parseInt(data.amount),
            currency: 'cad',
            description: 'Eau Natural',
            source: data.token,
        })
        .then(({ status }) => {
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify({ status }),
            });
        })
        .catch(err => {
            return callback(null, {
                statusCode: 400,
                body: JSON.stringify({
                    message: `Error: ${err.message}`,
                }),
            });
        });
};