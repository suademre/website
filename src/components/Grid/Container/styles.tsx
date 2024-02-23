import styled from "styled-components";
import { breakpointSizes, queries } from "../../../theme/variables";

export const StyledContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media ${queries.xs} {
    max-width: ${breakpointSizes.sm};
  }
  @media ${queries.md} {
    max-width: ${breakpointSizes.md};
  }
  @media ${queries.lg} {
    max-width: ${breakpointSizes.lg};
  }
  @media ${queries.xl} {
    max-width: ${breakpointSizes.xl};
  }
  @media ${queries.xxl} {
    max-width: ${breakpointSizes.xxl};
  }
`;
