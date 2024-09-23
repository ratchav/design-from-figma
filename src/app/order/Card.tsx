'use client'
import React from 'react';
import './Card.css'; // Assuming the CSS will be in this file

const Card = () => {
    return (
        <div className="card">
            <div className="card-header">
                <span className="check-icon">✔</span>
                <h3 className="card-title">Title</h3>
            </div>
            <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.
            </p>
            <div className="card-actions">
                <a href="#" className="cancel-link">Cancel</a>
                <button className="action-button">Action</button>
            </div>
        </div>
    );
};

export default Card;
