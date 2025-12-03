import React from 'react'

function Scoll() {
    return (
        <>
            <a href="#into" offset={100}>
                <div style={{ position: 'fixed', bottom: '25px', border: "", width: '70px', height: '50px', padding: '5px', borderRadius: '50%', backgroundColor: '#83710b', boxShadow: '1px 2px 1px 2px #918c8c94', alignContent: 'center', right: '25px', zIndex: '10' }}>
                    <span style={{ fontSize: '45px', marginTop: '-18px', position: 'absolute', top: '6px', left: '16px' }}>
                        ⋀
                    </span>
                </div>
            </a>
        </>
    )
}

export default Scoll