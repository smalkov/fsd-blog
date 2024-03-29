import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';

import 'shared/config/i18nConfig/i18nConfig';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary useSuspense={false}>
        <ThemeProvider>
          <Suspense fallback="Перевод...">
            <App />
          </Suspense>
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
