import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const activeStyle = {
        color: match ? '#FF0051' : 'black',
        borderColor: match ? '#FF0051' : '',

    }
    return (
        <div>
            <Link className='text-lg font-semibold mx-5 py-1 px-3 border-b-2 border-white hover:border-red-400 hover:bg-red-100 rounded-sm inline-block my-1 md:my-0'
                style={activeStyle}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default CustomLink;