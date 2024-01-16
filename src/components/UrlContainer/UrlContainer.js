import React from 'react';
import './UrlContainer.css';

const UrlContainer = ( props ) => {
  const urls = props.urls.map(url => {
    console.log(url.title, url.short_url, url.long_url)
    return (
      <div className="url">
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urls.length ? urls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
