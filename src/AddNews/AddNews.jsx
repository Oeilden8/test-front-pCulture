import React, { useState } from "react";
import "./AddNews.css";

function AddNews() {
  const [actu, setActu] = useState({
    title: "",
    category: "",
    date: "",
    text: "",
  });

  const handleSubmitNews = (e) => {
    e.preventDefault();
    if (actu.title && actu.category && actu.date && actu.text) {
      console.log("news", actu);
    } else {
      // si assez temps faire modal
      alert("Merci de compléter tous les champs du formulaire");
    }
  };

  return (
    <div>
      <h1>Créer une nouvelle actualité</h1>
      <form className="form-news" onSubmit={handleSubmitNews}>
        <label htmlFor="news title">
          <input
            type="text"
            placeholder="TITRE"
            value={actu.title}
            onChange={(e) => setActu({ ...actu, title: e.target.value })}
          />
        </label>
        <label htmlFor="news category">
          {/* possibilité de faire un select option si catégories toujours les memes */}
          <input
            type="text"
            placeholder="CATÉGORIE"
            value={actu.category}
            onChange={(e) => setActu({ ...actu, category: e.target.value })}
          />
        </label>
        <label htmlFor="news date">
          <input
            type="date"
            value={actu.date}
            onChange={(e) => setActu({ ...actu, date: e.target.value })}
          />
        </label>
        <label htmlFor="news description">
          <textarea
            name="description"
            placeholder="DESCRIPTION"
            value={actu.text}
            onChange={(e) => setActu({ ...actu, text: e.target.value })}
          />
        </label>
        <button type="submit" className="button-submit">
          CRÉER UNE NEWS
        </button>
      </form>
    </div>
  );
}

export default AddNews;
