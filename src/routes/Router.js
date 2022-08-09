import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="/cadastro" element={<SignUpPage/>}/>
        <Route path="/feed" element={<FeedPage/>}/>
        <Route path="/post/:id" element={<PostPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
