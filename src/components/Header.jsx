import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../styles/header.css';

const Header = () => (
    <div className="headerStyle">
        <Typography variant="display3" gutterBottom>
            Ｃｉｔｙ　Ｐｏｐ　Ａｐｐ　ズ右者
        </Typography>
        
        <Link to="/">
            <Button variant="outlined">
                HOME
            </Button>
        </Link>


        <Link to="/about">
            <Button variant="outlined">
                ABOUT
            </Button>
        </Link>

    </div>
);

export default Header;