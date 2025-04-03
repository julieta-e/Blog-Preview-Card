import Image from "next/image";

export default function Home() {
  let palabra;
  let hora = 13;
   if (5>hora){
    palabra = "Es muy temprano"
   }
   else
   {
    palabra = "Es muy tarde"
   }
  return (
    <section className="targeta">
    <div className="cabeza">
      <img src="./assets/images/illustration-article.svg" alt="" />
    </div>

    <div className="estado">
      <button>
        <b>Learning</b>
      </button>
    </div>

    <div className="fecha-publicacion">
      <p>Published 21 Dec 2023</p>
    </div>

    <div className="titulo">
      <h3>HTML & CSS foundations</h3>
    </div>

    <div className="descripcion">
      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
    </div>

    <div className="user">
      <img src="./assets/images/image-avatar.webp" alt="">
      <b>Greg Hooper</b>
    </div>
  </section>
  )
}
