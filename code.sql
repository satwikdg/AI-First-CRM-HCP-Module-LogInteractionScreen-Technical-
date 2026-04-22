CREATE TABLE hcp_interactions (
    id SERIAL PRIMARY KEY,
    hcp_name VARCHAR(255),
    product_name VARCHAR(100),
    sentiment VARCHAR(50),
    summary TEXT,
    follow_up_required BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);