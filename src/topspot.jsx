import React from 'react';

export default props => (
    <div className='row justify-content-center'>
        <div className='card' style={{
            width: '80vw',
            margin: '1vw'
        }}>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-10'>
                        <h4>{props.name}</h4>
                    </div>
                    <div className='col-2'>
                        <a className='btn btn-primary btn-block' href={'https://maps.google.com/?q=' + props.location[0] + ',' + props.location[1]} target='_blank'>Map Link</a>
                    </div>
                </div>
                <div className='row'><br></br></div>
                <div className='row' style={{
                    paddingLeft: '2vw'
                }}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    </div>
);
