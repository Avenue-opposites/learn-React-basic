import { NavLink } from "react-router-dom";

import React from 'react';

const MyNavLink = (props) => {
    const getKey = () => {
        return Math.random().toString();
    };
    const children = (children) => {
        let i = 0;
        if(Array.isArray(children)) {
            return () => {
                return i < children.length && children[i++];
            };
        }else {
            return () => {
                return children;
            };    
        }
    };
    const c = children(props.children);
    return (
        <div>
            {
                props.to.map(to => {
                    return (
                        <NavLink key={getKey()} {...props} to={to}>
                            {
                                c()
                            }
                        </NavLink>
                    )
                })
            }
        </div>
    );
}

export default MyNavLink;
