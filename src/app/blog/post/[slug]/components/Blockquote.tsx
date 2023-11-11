type BlockquoteProps = {};

const Blockquote = ({}: BlockquoteProps) => {
  return (
    <blockquote>
      <div className="quote_icon">
        <img
          src="/assets/images/icons/icon_quote.svg"
          alt="ProMotors - Icon Quote"
        />
      </div>
      <div className="quote_content">
        Nec feugiat nisl pretium fusce id velit ut. Lobortis mattis aliquam
        faucibus purus in. Ultricies integer quis auctor elit sed. Lobortis
        scelerisque fermentum dui faucibus in ornare quam
      </div>
    </blockquote>
  );
};

export default Blockquote;
