import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (<>
            <nav className='navbar navbar-expand' style={{backgroundColor: '#e3f2fd'}}>
                <div className='container'>
                    <div className='navbar-brand'>Food Finder</div>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <div className='nav-item' style={{ color: 'black' }}>Home</div>
                    </Link>
                </div>
            </nav>
          </>)
    }
