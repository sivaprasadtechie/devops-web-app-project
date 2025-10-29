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
      <title>Movie Ticket Booking - DevOps Project</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #141e30, #243b55);
          color: #f0f0f0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          background-color: #1e2a47;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          max-width: 450px;
          width: 100%;
          text-align: center;
        }
        h1 {
          margin-bottom: 20px;
          color: #ffca3a;
          font-weight: 600;
          font-size: 2.5rem;
        }
        .movie-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #ffffff;
        }
        .movie-info {
          font-size: 1rem;
          margin-bottom: 25px;
          color: #94a3b8;
        }
        .showtimes button {
          margin: 7px 10px;
          padding: 12px 22px;
          border: none;
          border-radius: 10px;
          background-color: #ffca3a;
          color: #141414;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .showtimes button:hover {
          background-color: #ffd95b;
        }
        footer {
          margin-top: 30px;
          color: #607d8b;
          font-size: 0.9rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Movie Ticket Booking</h1>
        <div class="movie">
          <div class="movie-title">Matrix Resurrections</div>
          <div class="movie-info">Duration: 2h 28m | Genre: Sci-Fi, Action</div>
          <div class="showtimes">
            <button onclick="bookTicket('10:00 AM')">10:00 AM</button>
            <button onclick="bookTicket('1:30 PM')">1:30 PM</button>
            <button onclick="bookTicket('5:00 PM')">5:00 PM</button>
            <button onclick="bookTicket('9:00 PM')">9:00 PM</button>
          </div>
        </div>
        <footer>🚀 Powered by Azure Kubernetes Service (AKS)</footer>
      </div>

      <script>
        function bookTicket(time) {
          alert('Success! Your ticket for the ' + time + ' show has been booked.');
        }
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
