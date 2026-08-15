const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');

router.post('/', (req, res) => {
    const py = spawn('python', ['../ml/predict.py', JSON.stringify(req.body)]);

    let data = '';

    py.stdout.on('data', (chunk) => {
        data += chunk.toString();
    });

    py.stderr.on('data', (err) => {
        console.error("PYTHON ERROR:", err.toString());
    });

    py.on('close', (code) => {
        try {
            const result = JSON.parse(data);
            res.json(result);
        } catch (e) {
            res.json({ error: "Invalid JSON from Python", raw: data });
        }
    });
});

module.exports = router;