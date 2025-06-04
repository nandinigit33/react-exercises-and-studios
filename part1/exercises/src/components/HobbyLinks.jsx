function HobbyLinks() {
    const hobbyLinks = [
      "https://www.goodreads.com/",
      "https://www.etsy.com/",
      "https://www.bgg.com/" // BoardGameGeek as an example
    ];
  
    return (
      <div>
        <h2>My Hobby Links</h2>
        <a href={hobbyLinks[0]} target="_blank" rel="noreferrer">Goodreads</a><br />
        <a href={hobbyLinks[1]} target="_blank" rel="noreferrer">Etsy</a><br />
        <a href={hobbyLinks[2]} target="_blank" rel="noreferrer">BoardGameGeek</a>
      </div>
    );
  }
  
  export default HobbyLinks;