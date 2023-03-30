// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 50px;
  color: #4c63b6;
  margin-bottom: 100px;
`

export const FormContainer = styled.form`
  width: 80%;
  border-radius: 8px;
  padding: 45px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const Input = styled.input`
  width: 100%;
  border-width: 0px;
  height: 45px;
  font-family: Roboto;
  font-size: 17px;
  color: #475569;
  padding: 8px;
  padding-left: 12px;
  font-weight: 500;
  margin-bottom: 25px;
  outline: none;
`

export const TextArea = styled.textarea`
  width: 100%;
  border-width: 0px;
  font-family: Roboto;
  font-size: 17px;
  color: #475569;
  padding: 8px;
  padding-left: 12px;
  font-weight: 500;
  margin-bottom: 15px;
  outline: none;
`

export const Button = styled.button`
  width: 100px;
  height: 55px;
  background-color: #4c63b6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 17px;
  color: #ffffff;
  border-width: 0px;
  margin-right: 20px;
  border-radius: 8px;
  align-self: flex-end;
  cursor: pointer;
`

export const UnOrderList = styled.ul`
  display: flex;
  width: 80%;
  padding: 0px;
  flex-wrap: wrap;
`

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 40px;
`
export const ImageOfEmpty = styled.img`
  height: 150px;
  margin-bottom: 20px;
`

export const HeadingOfEmpty = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  color: #334155;
  text-align: center;
  margin-bottom: 5px;
`
export const ParagraphOfEmpty = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #475569;
  text-align: center;
`
