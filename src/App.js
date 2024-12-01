import React, { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import A from './components/Widgets/A'
import B from './components/Widgets/B'
import C from './components/Widgets/C'
import D from './components/Widgets/D'
import E from './components/Widgets/E'

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <A />
      </ErrorBoundary>
      <ErrorBoundary>
        <B />
      </ErrorBoundary>
      <ErrorBoundary>
        <C />
      </ErrorBoundary>
      <ErrorBoundary>
        <D />
      </ErrorBoundary>
      <ErrorBoundary>
        <E />
      </ErrorBoundary>
    </>
  );
};

export default App;
