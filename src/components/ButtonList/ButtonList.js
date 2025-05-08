import { Button } from "../Button/Button";

export const ButtonList = () => {
  const list = [
    "Movies",
    "Games",
    "Cricket",
    "Live",
    "Songs",
    "TV Shows",
    "Shorts",
    "Trending",
    "Hot",
    "Bollywood",
    "Hollywood",
  ];
  return (
    <div className="flex">
      {list.map((title) => (
        <Button key={title} name={title} />
      ))}
    </div>
  );
};
