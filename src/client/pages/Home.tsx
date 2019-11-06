import * as React from 'react';
import SocialMedia from '../components/SocialMedia';
import Trent from '../components/Trent'

const Home: React.FC<HomeProps> = props => {
    return(
        <>
        <SocialMedia />
        <Trent  />
        </>
    );
};

export interface HomeProps {}

export default Home;
