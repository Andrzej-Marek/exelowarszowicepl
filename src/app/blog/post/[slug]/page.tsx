import { Metadata, ResolvingMetadata } from "next";
import BlogPostSidePanel from "./components/BlogPostSidePanel";
import { BlogPost } from "./types";
import NotFound from "@/components/NotFound";
import { buildCMSUrl } from "@/utils/buildCMSUrl";
import dayjs from "dayjs";
import RenderBlock from "./components/RenderBlock";
import "dayjs/locale/pl";
import ContactFormSection from "@/components/Sections/ContactFormSection";

const getData = async (slug: string): Promise<BlogPost | null> => {
  const response = await fetch(
    buildCMSUrl(
      `/api/blog-posts/slug/${slug}?locale=undefined&draft=false&depth=1`
    )
    // { cache: "no-store" }
  );

  const data = await response.json();

  if (!data || data.errors) {
    return null;
  }

  return data;
};

type Props = {
  params: { slug: string };
};

const BlogPost = async ({ params: { slug } }: Props) => {
  const blog = await getData(slug);

  if (!blog) {
    return <NotFound />;
  }
  return (
    <div className="page_wrapper">
      <div className="backtotop">
        <a href="#" className="scroll">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>

      <main className="page_content">
        <section
          className="page_banner"
          style={{
            backgroundImage: `url("/assets/images/shapes/tyre_print_3.svg")`,
          }}
        >
          <div className="container">
            {/* <ul className="breadcrumb_nav unordered_list">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="blog_details.html">Blog Details V.1</a>
              </li>
            </ul> */}
            <h1 className="page_title wow" data-splitting>
              {blog.heading}
            </h1>
          </div>
        </section>

        <section className="details_section ">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <ul className="post_meta unordered_list mb-3">
                  <li className="text-uppercase">
                    {dayjs(blog.createdAt).locale("pl").format("MMM, DD YYYY")}
                  </li>
                </ul>

                <RenderBlock blocks={blog.blocks} />

                <div className="details_content">
                  {/* <Blockquote /> */}

                  <hr />
                  <div className="row ">
                    <div className="col-md-6">
                      <ul className="tags_list unordered_list">
                        {blog.tags?.map((tag) => (
                          <li key={tag.id}>{tag.tag}</li>
                        ))}
                      </ul>
                    </div>

                    {/* SOCIALS LINKS */}
                    {/* <div className="col-md-6">
                      <ul className="social_links unordered_list justify-content-md-end">
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-whatsapp"></i>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <BlogPostSidePanel tags={blog.tags} />
              </div>
            </div>
          </div>

          <ContactFormSection
            title="SKONTAKTUJ SIĘ Z NAMI"
            backText="Kontakt"
            description="Jesteśmy tu po to, aby Ci pomóc. Dlatego na wszelkie pytania odpowiadamy jak najszybciej to możliwe."
          />
        </section>
      </main>
    </div>
  );
};

const defaultMetadata: Metadata = {
  title:
    "Blog Warsztatu Samochodowego | Porady, Nowości i Wiadomości | Serwis Samochodowy EXELO",
  description:
    "Czytaj nasz blog, aby uzyskać najnowsze informacje, porady dotyczące utrzymania samochodu, nowości ze świata motoryzacji oraz interesujące wiadomości ze świata serwisu samochodowego. Poznaj ekspertów i bądź na bieżąco z naszymi wpisami.",

  openGraph: {
    title:
      "Blog Warsztatu Samochodowego | Porady, Nowości i Wiadomości | Serwis Samochodowy EXELO",
    description:
      "Czytaj nasz blog, aby uzyskać najnowsze informacje, porady dotyczące utrzymania samochodu, nowości ze świata motoryzacji oraz interesujące wiadomości ze świata serwisu samochodowego. Poznaj ekspertów i bądź na bieżąco z naszymi wpisami.",
    type: "website",
    url: "https://exelo-warszowice.pl/blog",
    // image: "https://exelo-warszowice.pl/images/blog.jpg",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getData(params.slug);

  if (!blog || !blog.metadata) {
    return defaultMetadata;
  }

  return {
    title: `${blog.metadata.title} | Serwis Samochodowy EXELO`,
    description: blog.metadata.description,

    openGraph: {
      title: `${blog.metadata.title} | Serwis Samochodowy EXELO`,
      description: blog.metadata.description,
      type: "website",
      url: `https://exelo-warszowice.pl/blog/post/${blog.slug}`,
      // image: "https://exelo-warszowice.pl/images/blog.jpg",
    },
  };
}

export default BlogPost;
