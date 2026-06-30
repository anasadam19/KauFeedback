CREATE TABLE FeedbackEntries(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    rating INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

