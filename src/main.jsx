import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import * as home from './px-jsx/home.jsx';
import Game from './px-jsx/tictactoe.jsx';
import './px-styles/main.scss';

createRoot(document.getElementById('px-main--home')).render(
  <StrictMode>
    <home.FirstApp />
    <home.Markup />
    <home.List />
    <home.AlertButton />
    <Game />
  </StrictMode>
);
