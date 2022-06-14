import styled from 'styled-components';

const TodoTemplate = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #5982c8;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
`;
const Contents = styled.div`
  margin: auto;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -ms-flex-direction: column;
  align-items: center;
`;

export default function TodoList() {
  return (
    <TodoTemplate>
      <Contents></Contents>
    </TodoTemplate>
  );
}
