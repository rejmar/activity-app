import { FunctionComponent } from "react";
import { StyledFooter } from "./FooterStyles";

const Footer: FunctionComponent = () => (
  <StyledFooter>
    <span>
      Icons made by &nbsp;
      <a
        href="https://www.flaticon.com/authors/pixelmeetup"
        title="Pixelmeetup"
      >
        Pixelmeetup
      </a>
      &nbsp; from &nbsp;
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </span>
  </StyledFooter>
);

export default Footer;
