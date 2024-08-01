const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Endpoint untuk menerima callback dari PayDisini
app.post('/callback', (req, res) => {
    const data = req.body;

    console.log('Received callback:', data);

    // Cek status pembayaran
    if (data.status === 'PAID') {
        // Proses data jika statusnya adalah PAID
        console.log('Payment received:', data);
        res.json({ status: 'success' });
    } else {
        // Proses jika status selain PAID
        console.log('Payment not completed:', data);
        res.status(400).json({ status: 'failed' });
    }
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
