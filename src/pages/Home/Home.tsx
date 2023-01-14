import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { HomeContainer, ProductContainer } from './styles.module'

export const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <ProductContainer></ProductContainer>
      </HomeContainer>
    </>
  );
};
