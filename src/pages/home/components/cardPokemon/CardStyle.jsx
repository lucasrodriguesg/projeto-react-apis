import styled from "styled-components"

export const CardStyle = styled.section`
    width: 380px;
    height: 210px;
    left: 0px;
    top: 0px;

    /* background: #EAAB7D;  */
    border-radius: 12px;

    display: grid;
    grid-template-columns: 50% 50%;
`;

export const Left = styled.section`
  position: relative;

`;

export const Right = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Number = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;

  position: absolute;
  left: 23px;
  top: 25px;
`;

export const Name = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #fff;
    position: absolute;
    bottom: 131px;
    left: 23px;
`;

export const Details = styled.p`
  position: absolute;
  left: 23px;
  bottom: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-decoration-line: underline;
  color: #FFFFFF;
  cursor: pointer;
`;

export const Type = styled.div`
  display: flex;
  position: absolute;
  bottom: 90px;
  left: 23px;
  gap: 7px;
`;

export const TypeInside = styled.div`
  display: flex;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  height: 31px;
  /* background: #F44900; */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 8px;
  gap: 17px;
`;

export const TypeName = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #fff;
`;

export const Capturar = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #0F0F0F;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  width: 146px;
  height: 38px;
  position: absolute;
  bottom: 13px;
  right: 22px;
  z-index: 10;
  cursor: pointer;
`;

export const Back = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const Pokemon = styled.img`
  width: 180px;
  position: absolute;
  right: 3px;
  bottom: 73px;
`;