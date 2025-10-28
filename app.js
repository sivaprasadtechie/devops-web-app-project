const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Siva Prasad - B.Tech Degree</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
                body {
                    margin: 0;
                    height: 100vh;
                    background: linear-gradient(135deg, #4a90e2, #9013fe);
                    font-family: 'Montserrat', sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                }
                .card {
                    background: rgba(0, 0, 0, 0.6);
                    border-radius: 15px;
                    padding: 40px;
                    max-width: 500px;
                    text-align: center;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.3);
                    transition: transform 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.5);
                }
                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 15px;
                    color: #f8e71c;
                }
                h2 {
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 1.1rem;
                    line-height: 1.5;
                    color: #d1d1d1;
                    margin-bottom: 25px;
                }
                .info {
                    font-size: 1rem;
                    background: #333;
                    padding: 15px;
                    border-radius: 10px;
                    color: #bbb;
                }
                footer {
                    font-size: 0.9rem;
                    margin-top: 20px;
                    color: #aaa;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Welcome to My DevOps Project</h1>
                <h2>Siva Prasad</h2>
                <p><strong>Bachelor of Technology - Computer Science Engineering</strong></p>
                <p class="info">
                    This project demonstrates a deployed web application as part of my B.Tech 24CS2018 course.<br/>
                    Subject: DevOps<br/>
                    Institution: Karunya university, Coimbatore<br/>
                    Semester: VII (2025-2026 Odd)
                </p>
                <footer>🚀 Powered by Azure Kubernetes Service (AKS)</footer>
            </div>
        </body>
        </html>
    `);
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
