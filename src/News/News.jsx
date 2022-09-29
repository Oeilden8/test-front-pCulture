import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./News.css";
import data from "../news.json";
import logo from "../logo-pass-culture.svg";

function News() {
  const [category, setCategory] = useState("all");

  const navigate = useNavigate();

  // pour récupérer les catégories sans doublon
  const newsType = data.news.map((type) => type.category);
  const categoryName = [...new Set(newsType)];

  const handleDate = (newsDate) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(newsDate);
    return date.toLocaleDateString("fr-FR", options);
  };

  return (
    <div className="home-container">
      <section className="select-container">
        <h1>Nos dernières actualités</h1>
        <label htmlFor="category-select">Trier par catégorie</label>
        <select
          name="catégorie"
          className="select-category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="all">Toutes les news</option>
          {categoryName.map((name) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </section>
      {category === "all" ? (
        <section className="news-container">
          {data.news.map((article) => (
            <article className="news-card" key={article.title}>
              <h2>{article.title.toUpperCase()}</h2>
              <h3>{article.category}</h3>
              <time dateTime={article.date}>{handleDate(article.date)}</time>
              <p>{article.text}</p>
              {article.images ? (
                <div className="img-container">
                  {article.images.map((pic) => (
                    // problème pour récupérer le chemin de l'image. fonctionne dans le alt mais pas avec src
                    // j'ai mis une image lambda en attendant
                    <img
                      src={require(`../images/cannes1.jpg`)}
                      //   src={require(`..${pic}`)}
                      alt={`..${pic} news ${article.title} de type ${article.category} pass culture`}
                      key={pic}
                    />
                  ))}
                </div>
              ) : (
                <div className="img-container">
                  <img src={logo} alt="logo pass culture" />
                </div>
              )}
            </article>
          ))}
        </section>
      ) : (
        <section className="news-container">
          {data.news
            .filter((type) => type.category === category)
            .map((article) => (
              <article className="news-card" key={article.title}>
                <h2>{article.title.toUpperCase()}</h2>
                <h3>{article.category}</h3>
                <time dateTime={article.date}>{handleDate(article.date)}</time>
                <p>{article.text}</p>
                {article.images ? (
                  <div className="img-container">
                    {article.images.map((pic) => (
                      <img
                        src={require(`../images/cannes1.jpg`)}
                        //   src={require(`..${pic}`)}
                        alt={`news ${article.title} de type ${article.category} pass culture`}
                        key={pic}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="img-container">
                    <img src={logo} alt="logo pass culture" />
                  </div>
                )}
              </article>
            ))}
        </section>
      )}

      <button className="button-nav" onClick={() => navigate("/addNews")}>
        Créer une news
      </button>
    </div>
  );
}

export default News;
