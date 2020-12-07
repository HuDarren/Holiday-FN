import React from 'react';
import styled from 'styled-components';
import GroupForm from './group-form';

const HeaderContainer = styled.div`
width: 97%
display: flex;
align-self: center;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid rgba(0, 0, 0, 0.8);
border-radius: 8px;
padding: 3%;
`

const Title = styled.h2`
font-family: Helvetica Nue;
fonst-size: 30px;
font-style: normal;
font-weight: 500;
line-height: 36px;
color: rgba(41, 41, 41, 1);
letter-spacing: normal
`

const Button = styled.button`
border: none;
border-radius: 8px;
cursor: pointer;
height: 58px;
width: 20%;
outline: none;
background-color: rgba(0, 0, 0, 0.8)
`;

const ButtonText = styled.p`
font-family: Georgia;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 110%;
letter-spacing: 0.02em;
color: white;
`;


class GroupListView extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    }
  }

  handleShowForm = () => {
    this.setState({showForm: true});
  }

  handleCloseForm = () => {
    this.setState({showForm: false})
  }

  render() {
    const {showForm} = this.state;
    return (
      <HeaderContainer>
        <Title>Your Groups</Title>
        <Button onClick={this.handleShowForm}>
            <ButtonText>Create a Group</ButtonText>
        </Button>
        {showForm ? <GroupForm showForm={showForm} handleCloseForm={this.handleCloseForm}/> : null}
      </HeaderContainer>
    )
  }
}


export default GroupListView;
