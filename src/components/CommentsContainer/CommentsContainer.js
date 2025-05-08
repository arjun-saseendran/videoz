import { CommentsList } from "../CommentsList/CommentsList";

export const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Arjun",
      text: "Good one",
      replies: [
        {
            name: "Aswini",
            text: "Good one that",
            replies: [{
                name: "Maria",
                text: "Good one for that",
                replies: [],
              },],
          },
      ],
    },
    {
      name: "Aswini",
      text: "Good one that",
      replies: [
        {
            name: "Maria",
            text: "Good one for that",
            replies: [],
          },
      ],
    },
    {
      name: "Maria",
      text: "Good one for that",
      replies: [],
    },
  ];
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};
