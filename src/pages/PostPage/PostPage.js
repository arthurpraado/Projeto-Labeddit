import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import { goBack } from "../../routes/coordinator";
import axios from "axios";
import VoteSection from "../../components/VoteSection";
import useToken from "../../hooks/useToken";
import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token, post } = localStorage;
  useToken();
  const [postDetails, setPostDetails] = useState([]);
  const [form, onChange, clear] = useForm({ body: "" });

  const createComment = () => {
    const url = `${BASE_URL}/posts/${id}/comments`;
    const headers = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .post(url, form, headers)
      .then(() => {
        getPostDetails();
        clear();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const deleteCommentVote = (id) => {
    const url = `${BASE_URL}/comments/${id}/votes`;
    axios
      .delete(url, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        getPostDetails();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePostVote = (id) => {
    const url = `${BASE_URL}/posts/${id}/votes`;
    axios
      .delete(url, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        getPostDetails();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickLikePost = (id, direction) => {
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
        getPostDetails();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const getPostDetails = () => {
    const url = `${BASE_URL}/posts/${id}/comments`;
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setPostDetails(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    getPostDetails();
  }, []);

  const onClickLikeComment = (id, direction) => {
    const urlPosts = `${BASE_URL}/comments/${id}/votes`;

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
        getPostDetails();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const mappedPostDetails = postDetails.map((post) => {
    return (
      <div>
        {post.username}
        {post.body}
        <VoteSection
          post={post}
          onClickLike={onClickLikeComment}
          deleteVote={deleteCommentVote}
        />
      </div>
    );
  });

  const parsedPost = JSON.parse(post);

  return (
    <div>
      <Header />
      <Box my={"20px"} mx={"10px"}>
        <Card>
          <CardContent>
            <h3>{parsedPost.username}</h3>
            <p>{parsedPost.body}</p>
            <VoteSection
              post={post}
              onClickLike={onClickLikePost}
              deleteVote={deletePostVote}
            />
          </CardContent>
        </Card>
      </Box>
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
      <Button variant="contained" onClick={createComment}>
        Postar
      </Button>
      {mappedPostDetails}
      <Button variant="contained" onClick={() => goBack(navigate)}>
        Voltar
      </Button>
    </div>
  );
};

export default PostPage;
