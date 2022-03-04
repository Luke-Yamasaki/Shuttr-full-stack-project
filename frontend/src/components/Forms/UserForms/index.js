import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 352px;
  min-height: 285px;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #b3d4fc;
`;

export const FormContent = styled.div`
  width: 304px;
  min-height: 237px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 352px;
  min-height: 128px;
`;

export const FormLogo = styled.div`
  background-image: url('../../../../../public/brand-assets/Shuttr\ favicon\ -\ gradient.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
`;
