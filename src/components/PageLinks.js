import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ listClass, linkClass }) => {
  return (
    <ul className={listClass} id={listClass}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} linkClass={linkClass} />;
      })}
    </ul>
  );
};
export default PageLinks;
