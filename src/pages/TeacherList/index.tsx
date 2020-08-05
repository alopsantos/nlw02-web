import React from "react";

import PageHeader from "../../components/PageHeader";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" name="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week">Dia da semana</label>
            <input type="text" name="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="day">Hora</label>
            <input type="text" name="subject" />
          </div>
        </form>
      </PageHeader>

      <main>
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
            <br /><br />
            Beatae voluptates quidem reprehenderit facilis atque nihil, repellat
            velit recusandae,
            amet asperiores ratione nam magnam pariatur quaerat earum quasi
            molestiae expedita.
          </p>

          <footer>
              <p>Preço/Hora 
                  <strong>R$ 150,00</strong>
              </p>
            <button type="submit">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
