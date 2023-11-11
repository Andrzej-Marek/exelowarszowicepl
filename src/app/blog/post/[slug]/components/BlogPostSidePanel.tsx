import AsideContactSection from "@/components/Sections/AsideContactSection";
import { BlogPost } from "../types";

type BlogPostSidePanelProps = {
  tags: Required<BlogPost["tags"]>;
};

const BlogPostSidePanel = ({ tags }: BlogPostSidePanelProps) => {
  return (
    <>
      <aside className="sidebar style_2 ps-lg-4 mb-3">
        {/* <div className="widget">
        <h3 className="widget_title">Categories</h3>
        <ul className="info_list unordered_list_block">
          <li>
            <a href="#!">
              <span className="info_icon">
                <img
                  src="/assets/images/icons/icon_square.svg"
                  alt="ProMotors - Icon Square"
                />
              </span>
              <span className="info_text">Store</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <span className="info_icon">
                <img
                  src="/assets/images/icons/icon_square.svg"
                  alt="ProMotors - Icon Square"
                />
              </span>
              <span className="info_text">Repair</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <span className="info_icon">
                <img
                  src="/assets/images/icons/icon_square.svg"
                  alt="ProMotors - Icon Square"
                />
              </span>
              <span className="info_text">Tuning</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <span className="info_icon">
                <img
                  src="/assets/images/icons/icon_square.svg"
                  alt="ProMotors - Icon Square"
                />
              </span>
              <span className="info_text">Sport Cars</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <span className="info_icon">
                <img
                  src="/assets/images/icons/icon_square.svg"
                  alt="ProMotors - Icon Square"
                />
              </span>
              <span className="info_text">Technology</span>
            </a>
          </li>
        </ul>
      </div> */}
        {/* TODO: RECENT POST UNCOMMENT AFTER FEW POSTS */}
        {/* <div className="widget recent_post">
        <h3 className="widget_title">Recent Posts</h3>
        <div className="blog_item">
          <a className="item_image" href="blog_details.html">
            <img
              src="/assets/images/blogs/recent_post_img_1.jpg"
              alt="ProMotors - Blog Image"
            />
          </a>
          <div className="item_content">
            <h3 className="item_title">
              <a href="blog_details.html">
                The Guide to Car Wax Vs. Car Polish
              </a>
            </h3>
            <ul className="post_meta unordered_list">
              <li>May, 29 2023</li>
            </ul>
          </div>
        </div>
        <div className="blog_item">
          <a className="item_image" href="blog_details.html">
            <img
              src="/assets/images/blogs/recent_post_img_2.jpg"
              alt="ProMotors - Blog Image"
            />
          </a>
          <div className="item_content">
            <h3 className="item_title">
              <a href="blog_details.html">
                Top Benefits of Regular Car Servicing
              </a>
            </h3>
            <ul className="post_meta unordered_list">
              <li>May, 29 2023</li>
            </ul>
          </div>
        </div>
        <div className="blog_item">
          <a className="item_image" href="blog_details.html">
            <img
              src="/assets/images/blogs/recent_post_img_3.jpg"
              alt="ProMotors - Blog Image"
            />
          </a>
          <div className="item_content">
            <h3 className="item_title">
              <a href="blog_details.html">
                Your Guide To Upgrading Wheels and Tires
              </a>
            </h3>
            <ul className="post_meta unordered_list">
              <li>May, 29 2023</li>
            </ul>
          </div>
        </div>
      </div> */}
        {/* <div className="widget">
        <h3 className="widget_title">Recent Comments</h3>
        <ul className="info_list unordered_list_block">
          <li>
            <span className="info_icon">
              <img
                src="/assets/images/icons/icon_square.svg"
                alt="ProMotors - Icon Square"
              />
            </span>
            <span className="info_text">
              Irene Flores felis eget velit aliquet sagittis id consectetur
            </span>
          </li>
          <li>
            <span className="info_icon">
              <img
                src="/assets/images/icons/icon_square.svg"
                alt="ProMotors - Icon Square"
              />
            </span>
            <span className="info_text">
              Ferne Jacobson diam maecenas sed enim ut sem viverra aliquet eget
              consequat semper viverra
            </span>
          </li>
          <li>
            <span className="info_icon">
              <img
                src="/assets/images/icons/icon_square.svg"
                alt="ProMotors - Icon Square"
              />
            </span>
            <span className="info_text">
              Justice O'Connell turpis in eu mi bibendum neque egestas congue
              quisque enenatis tellus
            </span>
          </li>
        </ul>
      </div> */}
        {/* <div className="widget">
          <h3 className="widget_title">Tagi</h3>
          <ul className="tags_list unordered_list">
            {tags?.map((tag) => (
              <li key={tag.id}>
                <a href="#!">{tag.tag}</a>
              </li>
            ))}
          </ul>
        </div> */}
      </aside>
      <AsideContactSection hideScheduleService />
    </>
  );
};

export default BlogPostSidePanel;
