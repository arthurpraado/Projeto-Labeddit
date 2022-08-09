import { Button } from "@mui/material";

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
    <>
      <Button onClick={handlePositiveVote}>{positiveIcon}</Button>
      <p>{post.voteSum || 0}</p>
      <Button onClick={handleNegativeVote}>{negativeIcon}</Button>
    </>
  );
};

export default VoteSection;
