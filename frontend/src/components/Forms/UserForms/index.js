import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 352px;
  min-height: 285px;
  padding: 15px 0px 15px 0px;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContent = styled.div`
  width: 305px;
  min-height: 237px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 305px;
  min-height: 128px;
`;
