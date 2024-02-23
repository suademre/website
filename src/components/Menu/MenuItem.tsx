import { useSideBarMenuContext } from "../../context/SideBarMenuContext";
import { Container, StyledLink } from "./styles";

export interface IMenuItem {
  title: string;
  slug: string;
  isActive?: boolean;
}

const MenuItem = ({ title, slug, isActive }: IMenuItem) => {
  const { toggleMenuHandler } = useSideBarMenuContext();

  return (
    <Container>
      <StyledLink
        to={`categories/${slug}`}
        isActive={isActive}
        onClick={() => toggleMenuHandler()}
      >
        {title}
      </StyledLink>
    </Container>
  );
};

export default MenuItem;
