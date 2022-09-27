import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticles } from '../utils/api.js'


const Nav = () => {



    return (
        <ul className='ul'>
            <li className='li'>About</li>
            <li className='li'>Articles</li>
            <li className='li'>Topics</li>
            <li className='li'>Users</li>
        </ul>
      
    )
}
export default Nav;