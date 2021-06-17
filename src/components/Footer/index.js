import React from 'react';
import gitHub from '../../assets/footer-icons/github.png';
import linkedIn from '../../assets/footer-icons/linkedIn.png';
import stack from '../../assets/footer-icons/stackoverflow.png';

function Footer() {
    return (
    <footer className="flex-row justify-content-center px-1 py-2">
        <a href="https://github.com/Mellison8186" target="blank"><img src={gitHub} alt="gitHub link" /></a>
        <a href="https://www.linkedin.com/in/maribel-ellison" target="blank"><img src={linkedIn} alt="linkedIn link" /></a>
        <a href="https://stackexchange.com/users/20478567/maribel-ellison" target="blank"><img src={stack} alt="stackoverflow link" /></a>
    </footer>
    )
}

export default Footer;