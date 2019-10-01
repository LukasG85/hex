import React from "react";
import useForm from "../../hooks/useForm";
import styled from "styled-components";

const Form = () => {
  const [value, handleChange, handleSubmit, error] = useForm();

  return (
    <FormWrapper>
      <Title>choose your dish</Title>
      <FormGroup onSubmit={handleSubmit} method="POST">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Dish name"
            required
            value={value.name}
            onChange={handleChange}
          />

          <Input
            type="time"
            name="preparation_time"
            step="2"
            value={value.preparation_time}
            onChange={handleChange}
          />
          <Select
            name="type"
            value={value.type}
            onChange={handleChange}
            required
          >
            <Option value="">Type</Option>
            <Option value="pizza">Pizza</Option>
            <Option value="soup">Soup</Option>
            <Option value="sandwich">Sandwich</Option>
          </Select>

          {value.type === "pizza" ? (
            <div>
              <Input
                type="number"
                name="no_of_slices"
                placeholder="Number of slices"
                required
                onChange={handleChange}
              />
              <Input
                type="number"
                name="diameter"
                placeholder="Diameter"
                step="0.1"
                required
                onChange={handleChange}
              />
            </div>
          ) : null}
          {value.type === "soup" ? (
            <Input
              type="number"
              name="spiciness_scale"
              placeholder="Spiciness scale 1-10"
              min="1"
              max="10"
              required
              onChange={handleChange}
            />
          ) : null}
          {value.type === "sandwich" ? (
            <Input
              type="number"
              name="slices_of_bread"
              placeholder="Number of slices of bread"
              required
              onChange={handleChange}
            />
          ) : null}
        </div>
        {error && (
          <Error>
            Enter preparation time, all three fields should be filled in (e.g.
            01:15:24)
          </Error>
        )}
        <Button type="submit">Send</Button>
      </FormGroup>
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  background-color: rgba(30, 30, 30, 0.95);
  font-family: Roboto sans-serif;
  @media (min-width: 576px) {
    width: 400px;
    margin-left: 15vw;
  }
  @media (min-width: 768px) {
    margin-left: 15vw;
  }
`;

const Title = styled.h1`
  position: relative;
  padding-bottom: 30px;
  color: #ffffff;
  text-align: center;
  text-transform: capitalize;
  font-size: 2rem;
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 50%;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    background-color: #ffffff;
  }
  @media (min-width: 576px) {
    font-size: 2.5rem;
  }
`;
const FormGroup = styled.form`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  @media (min-width: 576px) {
    padding-top: 100px;
  }
`;
const Input = styled.input`
  display: block;
  width: 80%;
  margin: 25px auto 0;
  background-color: transparent;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  font-size: 1.2rem;
  &::placeholder {
    color: #ffffff;
  }
`;

const Select = styled.select`
  display: block;
  width: 80%;
  margin: 25px auto 0;
  background-color: transparent;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  font-size: 1.2rem;
  &option {
    background-color: rgba(30, 30, 30, 0.95);
  }
`;

const Option = styled.option`
  background-color: rgba(30, 30, 30, 0.95);
`;

const Button = styled.button`
  height: 45px;
  width: 80%;
  margin: 0 auto;
  background-color: transparent;
  border: 2px solid #ffffff;
  font-size: 1.5rem;
  color: #ffffff;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: rgb(30, 30, 30);
  }
`;

const Error = styled.p`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  color: red;
  font-size: 20px;
`;
