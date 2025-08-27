import styled from "styled-components";
import ButtonText from "./ButtonText";
import { useMoveBack } from "../hooks/useMoveBack";

const StyledEmpty = styled.p`
  margin: auto;
  font-size: 2.5rem;
  color: var(--color-yellow-700);
`;

function Empty({ resourceName }) {
  const moveBack = useMoveBack();

  return (
    <>
      <StyledEmpty>No {resourceName} could be found.</StyledEmpty>
      <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
    </>
  );
}

export default Empty;
