import * as React from 'react';

const Trent: React.FC<TrentProps> = props => {
    return(
        <>
        <div className="row justify-content-center">
            <h1 style={{fontFamily: 'sans-serif', fontSize: 75, marginTop: 100}}>Trent Harper</h1>
        </div>
        <hr style={{width: 400}}/>
        <div >
        <p className="text-center font-italic">Junior Web Developer</p>
            <p className="text-center font-italic">Birmingham, AL</p>
            <p className="text-center font-italic">Covalence Full Stack Bootcamp</p>
        </div>
        </>
    );
};

export interface TrentProps {}

export default Trent;