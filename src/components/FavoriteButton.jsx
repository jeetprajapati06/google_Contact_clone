import React from 'react';

const FavoriteButton = ({ isFavorite, toggleFavorite, className = '' }) => {
    return (
        <button
            className={`star-btn ${isFavorite ? 'active' : ''} ${className}`}
            onClick={(e) => {
                e.preventDefault();
                toggleFavorite();
            }}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
            <i className={`bi ${isFavorite ? 'bi-star-fill' : 'bi-star'}`}></i>
        </button>
    );
};

export default FavoriteButton;
