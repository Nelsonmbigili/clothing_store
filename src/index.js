import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { UserProvider } from './context/user';
import {CategoriesProvider} from './context/categories'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter  future={{ 
  v7_startTransition: true, 
  v7_relativeSplatPath: true 
}}>  
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <App/>
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
