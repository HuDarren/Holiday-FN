import React, {Component} from 'react';
import styled from 'styled-components';
import {AVATAR_LIST} from './image.config'

const FormContainer = styled.div`
  align-self: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  background-color: white;
  margin: 2%;
`

const Card = styled.div`
  align-content: center;
  align-self: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
  padding: 32px 20px;
`;

const FormTitle = styled.p`
  height: 28px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
  letter-spacing: 0.5px;
  text-align: left;
  color: rgba(0, 0, 0, 0.8);
  margin: 10px 0;
`;

 const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  height: 80%;
`;

const FormLabel = styled.label`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
letter-spacing: 0.02em;
color: #868686};
text-align: left;
margin-bottom: 10px;
`;

const AvatarSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  padding-left: 20px;
  margin-bottom: 24px;

  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: none;
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 15px;
  border: ${({value, avatarSelected}) => (value === avatarSelected ? '5px solid #99deb3' : 'none' )};
`

 const FormInput = styled.input`
  height: 58px;
  width: 100%;
  padding-left: 20px;
  margin-bottom: 24px;

  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: none;
  line-height: 110%;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #868686};
  text-align: left;
`;
 const FormTextBox = styled.textarea`
  height: 58px;
  width: 100%;
  padding-left: 20px;
  margin-bottom: 24px;

  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: none;
  line-height: 110%;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #868686};
  text-align: left;
`;

const FormButtonContainer = styled.div`
  text-align: center;
  align-self: center;
  width: 100%;
  padding 15px 0;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 58px;
  width: 20%;
  outline: none;
  background-color: rgba(0, 0, 0, 0.8)
`;

const CloseFormButton = styled.button`
  border: 1px solid #D8A29A;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  width: 50px;
`;

const CloseFormButtonContainer = styled.div`
  width: 80%;
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: center;
  margin-top: 3%;
`

const ButtonText = styled.p`
  font-family: Georgia;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: 0.02em;
  color: white;
`;

const CloseButtonText = styled.p`
  font-family: Georgia;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: 0.02em;
  color: rgba(0, 0, 0, 0.8)
`


class GroupForm extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      avatarSelected: 'berries',
      isSelected: true,
    }
  }

  inputChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description ? event.target.description.value : null

    console.log('Submitting Form!')
  }

  handleSelectAvatar = value => {
    const {avatarSelected } = this.state;
    if (value !== avatarSelected) {
      this.setState({ avatarSelected: value })
    }

    return
  }

  render() {
    const {name, description, avatarSelected} = this.state;
    const {handleCloseForm } = this.props;

    return (
      <FormContainer>
        <CloseFormButtonContainer>
          <CloseFormButton onClick={handleCloseForm}>
            <CloseButtonText>X</CloseButtonText>
          </CloseFormButton>
        </CloseFormButtonContainer>
        <Card>
        <FormTitle>Create a new group</FormTitle>
          <Form>
            <FormLabel>Choose an avatar</FormLabel>
            <AvatarSectionContainer>
            {
              AVATAR_LIST.map((avatar) => (
                <Avatar
                  key={avatar.value}
                  onClick={() => (this.handleSelectAvatar(avatar.value))}
                  src={avatar.src}
                  value={avatar.value}
                  avatarSelected={avatarSelected}
                />
              ))
            }
            </AvatarSectionContainer>
            <FormInput
              required
              name="name"
              inputType="text"
              value={name}
              onChange={this.inputChange}
              placeholder="Group Name*"
            />
            <FormTextBox
              name="description"
              inputType="text"
              value={description}
              onChange={this.inputChange}
              placeholder="Description*"
            />
            <FormButtonContainer>
              <SubmitButton onClick={this.handleSubmit}>
                <ButtonText>Submit</ButtonText>
              </SubmitButton>
            </FormButtonContainer>
          </Form>
        </Card>
      </FormContainer>
    )
  }
}


export default GroupForm;
