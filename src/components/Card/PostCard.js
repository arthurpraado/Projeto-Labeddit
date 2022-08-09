import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import VoteSection from "../VoteSection";
import { Box } from "@mui/system";

const PostCard = ({ onClick, post, onClickLike, deleteVote }) => {
  const savePost = () => {
    localStorage.setItem("post", JSON.stringify(post));
    onClick();
  };

  return (
    <Box display="flex" m="10px" flexDirection="column">
      <Card elevation={4} sx={{ minWidth: 275 }}>
        <CardContent onClick={savePost}>
          <h3>Nome: {post.username}</h3>
          <p>Mensagem: {post.body}</p>
        </CardContent>
        <CardActions>
          <VoteSection
            onClickLike={onClickLike}
            post={post}
            deleteVote={deleteVote}
          />
          <p onClick={savePost}>🗨️{post.commentCount} </p>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PostCard;
