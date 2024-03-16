import Genre from "./Genre";
import "./Style.css";
import styles from "./Card.module.css";

function Container() {
  return (
    <>
      <h1 className="header">Movie App</h1>

      <div className={styles.card1}>
        <Genre
          name="Comedy"
          description="Funny movies"
          movie1={{ movieTitle: "Batman Returns", year: 2012 }}
          movie2={{ movieTitle: "The Joker", year: 2010 }}
        />
      </div>

      <div className={styles.card2}>
        <Genre
          name="Romance"
          description="Love stories"
          movie1={{ movieTitle: "Three Little Pigs", year: 2001 }}
          movie2={{ movieTitle: "The Big Bad Wolf", year: 1966 }}
        />
      </div>
    </>
  );
}

export default Container;
