import React from 'react';

const displayName = (component) => {
  return component.displayName || component.name || 'Component';
}

export const withTodoTracking = (WrappedComponent) => {
  const WithTracking = (props) => {
    const trackAction = (action, id, name) => {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}]: Todo action ${action}`, {
        id: id,
        name: name,
        timestamp: timestamp
      });
    };
    return <WrappedComponent {...props} trackAction={trackAction} />
  };

  WrappedComponent.displayName = `WithTracking(${displayName(WrappedComponent)})`;
  return WithTracking;
}