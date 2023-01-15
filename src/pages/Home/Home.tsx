import React, { useState } from "react"
import { Navbar } from "../../components/Navbar/Navbar"
import Tenis from "/public/nam.jpg"

import { AiOutlineShoppingCart } from "react-icons/ai"
import { MdVerified } from "react-icons/md"
import { BsPlusLg } from "react-icons/bs"
import { FaMinus } from "react-icons/fa"
import {
  HomeContainer,
  ProductContainer,
  ImageProduct,
  ProductInformation,
  Title,
  Price,
  ProductNumber,
  Text,
  ActionButtons,
  ProductAmount,
  AddToCart,
  ButtonToCart,
} from "./styles.module"

export const Home = () => {
  const [amount, setAmount] = useState(0)

  const addAmount = () => {
    if (amount >= 0) {
      setAmount(amount + 1)
    }
  }

  const subAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1)
    }
  }

  return (
    <>
      <Navbar />
      <HomeContainer>
        <ProductContainer>
          <ImageProduct>
            <img src={Tenis} alt="" />
          </ImageProduct>

          <ProductInformation>
            <Title>
              TÊNIS NIKE AIR MAX PLUS FEMINIO{" "}
              <MdVerified size={25} color="#1877F2" />
            </Title>
            <Price>R$ 1.199,99</Price>
            <ProductNumber>
              <Text>Select your size:</Text>
              <div>
                <button value={33.3}>33.3</button>
                <button value={34}>34</button>
                <button value={34.5}>34.5</button>
                <button value={35}>35</button>
                <button value={35.5}>35.5</button>
                <button value={36}>36</button>
                <button value={36.5}>36.5</button>
                <button value={37}>37</button>
                <button value={37.5}>37.5</button>
                <button value={38}>38</button>
                <button value={38.5}>38.5</button>
                <button value={39}>39</button>
                <button value={39.5}>39.5</button>
                <button value={40}>40</button>
              </div>
            </ProductNumber>
          </ProductInformation>
        </ProductContainer>

        <ActionButtons>
          <ProductAmount>
            <FaMinus
              onClick={subAmount}
              color="white"
              size={28}
              cursor="pointer"
            />
            <input
              className="amount_input"
              type="text"
              value={amount}
              disabled
            />
            <BsPlusLg
              onClick={addAmount}
              color="white"
              size={28}
              cursor="pointer"
            />
          </ProductAmount>

          <ButtonToCart>
            <AddToCart onClick={() => alert('Produto adicionado ao carrinho')}>
              Adicionar ao carrinho
              <AiOutlineShoppingCart size={20} />
            </AddToCart>
          </ButtonToCart>
        </ActionButtons>
      </HomeContainer>
    </>
  )
}
