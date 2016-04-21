import React from 'react';

const ToolTips = (props) => {
  const articles = [];

  for (let i = 0; i < props.features.length; i ++) {
    articles.push(
      <div id="helptext" key={i}>
        <strong>
          {props.features[i].name}
        </strong>
          {props.features[i].summary}
        <a href={props.features[i].url}>
          {props.features[i].linkText}
        </a>
      </div>
    );
  }

  return (
    <div id="helptext-container">
      {articles}
    </div>
  );
};

ToolTips.propTypes = {
  features: React.PropTypes.array,
};

export default ToolTips;
