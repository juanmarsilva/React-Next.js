import React from 'react'

const DarkLayout = ({ children }) => {

    return (
        <div style={{
            backgroundColor: '#8b8a8a4a',
            borderRadius: '5px',
            padding: '10px',
        }}>
            <h3> Dark-Layoyt </h3>
            <div>
                { children }
            </div>
        </div>
    );
};

export default DarkLayout;