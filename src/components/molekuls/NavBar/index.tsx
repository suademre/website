import SideBar from "../../SideBar";
import Icon from "../../Icon";
import Menu from "../../Menu";
import useFetchData from "../../../hooks/api/useFetchData";
import { useSideBarMenuContext } from "../../../context/SideBarMenuContext";
import { Container, StyledLink } from "./styles";
import { queries } from "../../../theme/variables";
import Button from "../../Button";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import Flex from "../../Flex";

const NavBar = () => {
  const { data: categories } = useFetchData("categories");

  const { showMenu, toggleMenuHandler } = useSideBarMenuContext();
  const isMd = useMediaQuery(queries.md);

  return (
    <>
      <Container>
        {isMd ? (
          <Button theme="primary" onClick={toggleMenuHandler}>
            Category
          </Button>
        ) : (
          <Icon name="menu" color="orange" onClick={toggleMenuHandler} />
        )}

        <StyledLink to="/">Shopping Center</StyledLink>

        {isMd ? (
          <Flex>
            <Link to="/shopping">
              <Button theme="danger">Shopping</Button>
            </Link>
            <Link to="/favorites">
              <Button theme="danger">Favorites</Button>
            </Link>
          </Flex>
        ) : (
          <Flex>
            <Icon name="buy" color="orange" />
            <Icon name="like" color="orange" />
          </Flex>
        )}
      </Container>
      <SideBar showMenu={showMenu} toggleMenuHandler={toggleMenuHandler}>
        <Menu title={"Categories"} data={categories} />
      </SideBar>
    </>
  );
};

export default NavBar;
