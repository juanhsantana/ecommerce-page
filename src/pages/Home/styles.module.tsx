import styled from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
  gap: 30px;
  margin: 0 auto;
  padding: 20px;
`

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;

  @media screen and (max-width: 790px) {
    flex-direction: column;
  }
`

export const ImageProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  width: 100%;
  height: 100%;

  > img {
    width: 100%;
    border-radius: 10px;
  }

  @media screen and (max-width: 790px) {
    max-width: 80%;
  }
`

export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 50%;
  width: 100%;
  height: 400px;

  @media screen and (max-width: 790px) {
    max-width: 100%;
    justify-content: center;
    gap: 50px;
  }
`

export const Title = styled.h3`
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 10px;

  @media screen and (max-width: 440px) {
    font-size: 13px;
    > svg {
      width: 20px;
    }
  }
`

export const Price = styled.span`
  font-weight: 500;
`

export const Text = styled.span`
  font-weight: 500;

  @media screen and (max-width: 440px) {
    font-size: 13px;
  }
`

export const ProductNumber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;

    > button {
      border: 1px solid black;
      border-radius: 10px;
      padding: 5px 8px;
      cursor: pointer;
      background-color: transparent;
      transition: all 0.2s ease-in-out;
      :hover {
        opacity: 70%;
      }
    }
  }
`

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 790px) {
    flex-direction: column;
    gap: 50px;
  }
`

export const ProductAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  width: 100%;
  gap: 30px;

  > input {
    width: 30px;
    font-size: 15px;
    border: none;
    padding-left: 10px;
    font-weight: 500;
    color: black;
    background-color: transparent;
  }

  > svg {
    background-color: #ff5400;
    border-radius: 50%;
    padding: 7px;
  }

  @media screen and (max-width: 790px) {
    max-width: 100%;
  }
`

export const ButtonToCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  width: 100%;

  @media screen and (max-width: 790px) {
    max-width: 100%;
  }
`

export const AddToCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  gap: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: #ff5400;

  font-size: 17px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`
