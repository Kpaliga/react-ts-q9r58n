import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import JSXRules from './JSXRules';
import FancyTable from './FancyTable';
import Multiple from './Multiple';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <JSXRules text={'Hello'} />
    <FancyTable n={3} />
    <Multiple name={'World'} number={2} />
  </StrictMode>
);
