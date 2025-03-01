import React from 'react';
import { useSelector } from 'react-redux';

export const withAuth = (WrappedComponent) => {
  // HOC should return a React component
    const CurrentlyAUser = (props) => {
    // Move useSelector inside the component function
    const { user } = useSelector(state => state.todo);
    
    const isUser = () => {
        const timestamp = new Date().toLocaleTimeString();
        console.log(`[${timestamp}]: User ${user !== undefined ? `${user} Logged In` : `${user} Logged Out`}`);
    };
    
    return <WrappedComponent {...props} isUser={isUser} user={user} />;
    };
    
    CurrentlyAUser.displayName = `WithTracking(${displayName(WrappedComponent)})`;
    return CurrentlyAUser;
};

const displayName = (component) => {
    return component.displayName || component.name || 'Component';
};