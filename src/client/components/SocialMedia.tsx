import * as React from 'react';
import {GoMarkGithub} from 'react-icons/go'
import {FaLinkedin, FaInstagram} from 'react-icons/fa'

const SocialMedia: React.FC<SocialMediaProps> = props => {

    // const showSettings = () => {
    //     event.preventDefault();
    //   }

    return(
        <>
        <div className="jumbotron jumbotron-fluid">
        <div className="ml-3 mt-3 d-flex flex-column">
        <a className="my-2" style={styles.icons} href="https://github.com/tharper6"><GoMarkGithub size={30} /></a> 
        <a className="my-2" style={styles.icons} href="https://www.linkedin.com/in/trent-h/"><FaLinkedin size={30} /></a> 
        <a className="my-2" style={styles.icons} href="https://www.instagram.com/_twentt_/"><FaInstagram size={30} /></a> 
        <hr/>
        </div>
        </div>
        </>
    );
};

export interface SocialMediaProps {}

const styles = {
    icons: {
        color: 'black'
    },
    burger: {
        position: 'fixed',
  width: 36,
  height: 30,
  left: 36,
  top: 36,
    }
}

export default SocialMedia;