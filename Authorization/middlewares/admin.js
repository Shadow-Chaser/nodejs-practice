module.exports = function (req, res, next) {
    if (req.user.role !== "admin") return res.status(403).send('Forbidden');
    next();
}

// Simanta => eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDI5OTBlMGEzZDU4MDEwODQzMGU0NGYiLCJlbWFpbCI6InNAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MTMzMzY4MDB9.erfXzIrK9ozNgUo_OypTCqaRQHx4cMKW18UwdAhdrTY

// Rahat => eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDI5OTEwZmEzZDU4MDEwODQzMGU0NTAiLCJlbWFpbCI6InJAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MTMzMzY4NDh9.bDCu7pn5ipkSZriGTvTyZlk-fLfaBuWw0xUi-KqmVuQ