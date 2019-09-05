import React, { useState, useEffect } from 'react';


import { refreshWidgets, appendWidget } from './services/widgets';
import { WidgetTable } from './components/WidgetTable';
import { WidgetForm } from './components/WidgetForm';

export const App = () => {

  const [ widgets, setWidgets ] = useState([]);

  useEffect(() => {
    refreshWidgets().then(setWidgets);
  }, []);

  const addWidget = (widget) => {

    return appendWidget(widget)
      .then(refreshWidgets)
      .then(setWidgets);

  };

  return (
    <>
      <WidgetTable widgets={widgets} />
      <WidgetForm buttonText="Add Widget" onSubmitWidget={addWidget} />
    </>
  );
};
