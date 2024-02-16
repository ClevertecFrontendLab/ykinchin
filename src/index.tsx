import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';

import { history, store } from '@redux/configure-store';

import 'normalize.css';
import PageRouter from './routes/PageRouter';
import './styles/index.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                <PageRouter />
            </HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
