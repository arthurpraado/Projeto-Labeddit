import React, { useEffect, useState } from "react";
import { goToPostPage } from "../../routes/coordinator";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import Header from "../../components/Header/Header";
import PostCard from "../../components/Card/PostCard";
import styled from "styled-components";
import useToken from "../../hooks/useToken";
import { Box } from "@mui/system";
import useForm from "../../hooks/useForm";

const FeedPage = () => {
  const navigate = useNavigate();
  useToken();
  const [posts, setPosts] = useState([]);
  const [form, onChange, clear] = useForm({
    title: "qualquer titulo",
    body: "",
  });

  const { token } = localStorage;
  const url = `${BASE_URL}/posts`;

  const createPost = () => {
    axios
      .post(url, form, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        getPosts();
        clear();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const onClickLike = (id, direction) => {
    const urlPosts = `${BASE_URL}/posts/${id}/votes`;

    const body = {
      direction: direction,
    };
    axios
      .post(urlPosts, body, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        getPosts();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  const getPosts = () => {
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })

      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  useEffect(() => {
    getPosts();
  }, []);

  const deletePostVote = (id) => {
    const url = `${BASE_URL}/posts/${id}/votes`;
    axios
      .delete(url, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        getPosts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const mappedPosts = posts.map((post) => {
    return (
      <div key={post.id}>
        <PostCard
          deleteVote={deletePostVote}
          post={post}
          onClickLike={onClickLike}
          onClick={() => goToPostPage(navigate, post.id)}
        />
      </div>
    );
  });

  return (
    <div>
      <Header />
      <Box my={"20px"} mx={"10px"}>
        <TextField
          name={"body"}
          value={form.body}
          label={"Escreva sua mensagem"}
          onChange={onChange}
          multiline
          rows={4}
          maxRows={8}
          fullWidth
        />
      </Box>
      <Button variant="contained" onClick={createPost}>
        Postar
      </Button>
      {mappedPosts}
    </div>
  );
};

export default FeedPage;
