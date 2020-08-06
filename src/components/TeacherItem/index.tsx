import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/4048207?s=460&u=b1d2abfffbefdf0d3ec75074c77bf368889b0cfd&v=4"
          alt="Anderson Lopes"
        />
        <div>
          <strong>Anderson Lopes dos Santos</strong>
          <span>Sigep</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt.
        <br />
        <br />
        Beatae voluptates quidem reprehenderit facilis atque nihil, repellat
        velit recusandae, amet asperiores ratione nam magnam pariatur quaerat
        earum quasi molestiae expedita.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 150,00</strong>
        </p>
        <button type="submit">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;