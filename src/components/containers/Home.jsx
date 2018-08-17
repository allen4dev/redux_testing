import React from 'react';

const Home = () => {
  return (
    <section className="Home">
      <section className="UserPanel">
        <section className="UserCard">
          <header className="UserCard-header">
            <figure className="UserCard-profileImageContainer">
              <img src="" alt="" className="UserCard-profileImage" />
            </figure>
          </header>

          <section className="UserCard-content">
            <figure className="Avatar">
              <img src="" alt="" className="Avatar-image" />
            </figure>

            <header className="UserCard-info">
              <h3 className="UserCard-fullname">Allen Walker</h3>
              <h4 className="UserCard-username">@allen</h4>
            </header>

            <footer className="UserCard-edit">
              <span className="UserCard-location">Location</span>
              <a href="/" className="UserCard-editButton">
                Edit Profile
              </a>
            </footer>
          </section>

          <footer className="UserCard-count">
            <ul className="UserCard-countList">
              <li className="UserCard-coutItem">
                <span className="UserCard-countValue">5487</span>
                <span className="UserCard-countName">Tweets</span>
              </li>
              <li className="UserCard-coutItem">
                <span className="UserCard-countValue">100487</span>
                <span className="UserCard-countName">Followers</span>
              </li>
              <li className="UserCard-coutItem">
                <span className="UserCard-countValue">470</span>
                <span className="UserCard-countName">Following</span>
              </li>
            </ul>
          </footer>
        </section>

        <section className="Column">
          <header className="Column-heading">
            <h2 className="Column-title">Notifications</h2>
          </header>

          <ul className="Column-list">
            display different components here depending on the "action" value of
            the notification
          </ul>
        </section>
      </section>

      <form className="TweetBar">Put the TweetBar here</form>

      <section className="Timeline">
        <section className="Timeline-tweets">
          <article className="Tweet">
            <section className="Tweet-content">
              <figure className="Avatar">
                <img src="" alt="" className="Avatar-image" />
              </figure>

              <header className="Tweet-heading">
                Fullname and @username here
              </header>

              <p className="Tweet-body">Tweet body here</p>
            </section>

            <div className="Tweet-actions">
              <a href="/" className="Tweet-action">
                C
              </a>
              <a href="/" className="Tweet-action">
                R
              </a>
              <a href="/" className="Tweet-action">
                F
              </a>
            </div>
          </article>

          <article className="Tweet">
            <section className="Tweet-content">
              <figure className="Avatar">
                <img src="" alt="" className="Avatar-image" />
              </figure>

              <header className="Tweet-heading">
                Fullname and @username here
              </header>

              <p className="Tweet-body">Tweet body here</p>
            </section>

            <div className="Tweet-actions">
              <a href="/" className="Tweet-action">
                C
              </a>
              <a href="/" className="Tweet-action">
                R
              </a>
              <a href="/" className="Tweet-action">
                F
              </a>
            </div>
          </article>

          <article className="Tweet">
            <section className="Tweet-content">
              <figure className="Avatar">
                <img src="" alt="" className="Avatar-image" />
              </figure>

              <header className="Tweet-heading">
                Fullname and @username here
              </header>

              <p className="Tweet-body">Tweet body here</p>
            </section>

            <div className="Tweet-actions">
              <a href="/" className="Tweet-action">
                C
              </a>
              <a href="/" className="Tweet-action">
                R
              </a>
              <a href="/" className="Tweet-action">
                F
              </a>
            </div>
          </article>
        </section>
      </section>

      <aside className="Home-recommendations">
        <section className="Column">
          <h1>Follow section here</h1>
        </section>

        <section className="Column">
          <h1>Trending section here</h1>
        </section>

        <footer className="Footer">
          <h1>Footer here</h1>
        </footer>
      </aside>
    </section>
  );
};

export default Home;
