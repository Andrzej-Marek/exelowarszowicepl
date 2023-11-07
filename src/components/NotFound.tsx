import Link from "next/link";

const NotFound = () => {
  return (
    <div className="page_wrapper">
      <main className="page_content">
        <section className="error_section text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h1 className="title_text wow" data-splitting>
                  Strona nie znaleziona
                </h1>
                <p className="ps-lg-5 pe-lg-5">
                  Strona której szukasz nie istnieje.
                </p>
                <Link className="btn btn-primary" href="/">
                  <span className="btn_text">Powrót na stronę główną</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFound;
