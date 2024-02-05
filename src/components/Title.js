const Title = ({ subTitleFirst, subTitleSecond }) => {
  return (
    <div className="section-title">
      <h2>
        {subTitleFirst} <span>{subTitleSecond}</span>
      </h2>
    </div>
  );
};
export default Title;
