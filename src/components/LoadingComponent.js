import React from 'react';

export const Loading = () => {
    return (
        <div className="col">
            {/* this is to as spinning symbol with 3x larger and fixed width */}
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" /> 
            <p>Loading...</p>
        </div>
    );
};