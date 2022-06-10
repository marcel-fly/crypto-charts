import styled from "styled-components"

type Props = {
  name: string
  icon: string
  onClick: () => void
}

export const ButtonCyrpto = ({ name, icon, onClick }: Props) => {
  return (
    <CoinButton onClick={onClick}>
      <IconButton src={icon} alt="icon" />
      <ButtonParagraph>{name}</ButtonParagraph>
    </CoinButton>
  )
}

const CoinButton = styled.button`
  width: 130px;
  height: 48px;
  border-radius: 25px;
  vertical-align: center;
  background-color: rgba(250, 250, 250, 0.1);
  color: white;
  cursor: pointer;
  text-align: center;
  margin: 5px;
  display: flex;
  transition: 0.2s;
  border-width: 0;
  &:hover {
    background-color: rgba(250, 250, 250, 0.8);
    box-shadow: 0 0 10px white;
    color: black;
  }
  @media (max-width: 768px) {
    width: 70px;
    height: 30px;
    border-radius: 15px;
    margin: 3px;
  } ;
`

const IconButton = styled.img`
  object-fit: cover;
  margin-top: 11px;
  margin-right: 10px;
  margin-left: 4px;
  height: 24px;
  width: 24px;
  @media (max-width: 768px) {
    margin-top: 8px;
    margin-right: 5px;
    margin-left: 2px;
    height: 12px;
    width: 12px;
  } ;
`
const ButtonParagraph = styled.p`
  height: 24px;
  margin-top: 15px;
  @media (max-width: 768px) {
    margin-top: 10px;
    height: 12px;
    font-size: 8px;
  } ;
`
