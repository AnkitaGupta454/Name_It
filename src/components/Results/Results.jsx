import React from 'react';
import NameCard from './../NameCard/NameCard';
import './Results.css';

const Results = ({ suggestedNames }) => {
    const suggestedNameCards = suggestedNames.map((suggestedName) => {
        return <NameCard suggestedName={suggestedName} />;
    });

    return <div className="results-container">{suggestedNameCards}</div>;
};

export default Results;