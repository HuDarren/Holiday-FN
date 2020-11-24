import React from "react";
import UserWishListB from "./user-wishlistB";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const Title = styled.div`
  padding: 8px;
`;
const List = styled.div`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? `skyblue` : `white`)};
`;

function UserWishListA(props) {
  console.log(props.list);
  return (
    <Container>
      <Title>{props.wList.title}</Title>
      <Droppable droppableId={props.wList.id}>
        {(provided, snapshot) => (
          <List
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {props.list.map((item, index) => (
              <UserWishListB key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </Container>
  );
}

export default UserWishListA;
