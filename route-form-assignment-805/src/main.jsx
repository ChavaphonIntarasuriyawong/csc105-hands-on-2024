import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import NavBar from './NavBar';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage.jsx';
import FavouritesPage from './FavouritesPage';
import NotFoundPage from './NotFoundPage';

import './index.css'
import FavouriteDetailPage from "./FavouriteDetailPage.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<NavBar />} >
                   <Route index element={<HomePage />} />
                   <Route path="/fav" element={<FavouritesPage />} />
               </Route>
               <Route path="/LoginPage" element={<LoginPage />} />
               <Route path="/SignUpPage" element={<SignUpPage />}/>
               <Route path="*" element={<NotFoundPage />}/>
               <Route path="/fav/:productId" element={<FavouriteDetailPage />}></Route>
           </Routes>
        </BrowserRouter>
    </StrictMode>,
)
