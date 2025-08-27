import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  const firstWord =
    fullName.split(" ")[0].charAt(0).toUpperCase() +
    fullName.split(" ")[0].slice(1).toLowerCase();
  const formattedName = fullName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${firstWord}`}
      ></Avatar>
      <span>{formattedName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
