import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-auto bg-secondary p-8 text-tertiary text-opacity-50">
      <p>
        Development:{" "}
        <u>
          <Link href="https://www.linkedin.com/in/cae-su-ra">
            Gillian Akpeki
          </Link>
        </u>
      </p>
      <p>Design: Mahya Golabi</p>
      <p>Icons: Kyle Tezak, James Cottell, lucaas</p>
      <p>
        Photography: Seyi Ariyo, Etty Fidele, Jeffrey Erhunse, Jordyn Hilton,
        Lianna de Fleur, Mira Mariah, Amanda Wachob, Muk Jung, Jess Chen,
        Letticia Massari, Wallace Chuck
      </p>
    </footer>
  );
}
