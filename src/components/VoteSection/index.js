import { Button } from "@mui/material";
import styled from "styled-components"

const VoteContainer = styled.div`
  display: flex;
`

const VoteSection = ({ onClickLike, post, deleteVote }) => {
  const isPositiveVote = post.userVote === 1;
  const isNegativeVote = post.userVote === -1;

  const handlePositiveVote = () => {
    return isPositiveVote ? deleteVote(post.id) : onClickLike(post.id, 1);
  };
  const positiveIcon = isPositiveVote ? "🔝" : "⬆️";

  const handleNegativeVote = () => {
    return isNegativeVote ? deleteVote(post.id) : onClickLike(post.id, -1);
  };
  const negativeIcon = isNegativeVote ? "⛔" : "⬇️";

  return (
    <VoteContainer>
      <Button onClick={handlePositiveVote}>{positiveIcon}</Button>
      <p>{post.voteSum || 0}</p>
      <Button onClick={handleNegativeVote}>{negativeIcon}</Button>
    </VoteContainer>
  );
};

export default VoteSection;
