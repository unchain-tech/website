export const News = () => {
  const NewsItem = (url: string, description: string) => {
    return (
      <div>
        <p>{description}</p>
      </div>
    );
  };
  return (
    <div id="news">
      <h2 className="text-brand-yellow">NEWS</h2>
    </div>
  );
};

export default News;
