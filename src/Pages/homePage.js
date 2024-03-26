import React from 'react';
import HospImg from './pic_hosp.png'

function HomePage() {
    return (
        <div style={{ textAlign: 'center' }}>
             <h1>Welcome to Nobal Hospital</h1>
            <img src={HospImg} alt="Hospital" style={{ maxWidth: "100%",margin:"O auto"}} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit nec nulla lacinia
                eleifend. Integer non libero id justo viverra mattis nec at massa. Sed vitae nunc mi. Sed
                eleifend arcu eget posuere consectetur. Phasellus ut sem nisl. Vivamus et volutpat leo.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Fusce non ullamcorper libero, a finibus lacus. Duis feugiat felis et bibendum
                mollis. Nullam quis nisl sollicitudin, tempor libero ac, vehicula libero. Donec nec
                molestie velit. Nulla facilisi. Duis in nibh ultrices, euismod lacus id, consectetur
                magna.
            </p>
        </div>
    );
}

export default HomePage;
