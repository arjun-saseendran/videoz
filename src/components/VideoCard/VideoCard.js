export const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics} = info;
  const { title, channelTitle, thumbnails } = snippet;
  
  
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails?.high?.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};
