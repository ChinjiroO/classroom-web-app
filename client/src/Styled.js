import styled from 'styled-components'

const Btn = ({ className, children }) => (
    <a className={className}>
      {children}
    </a>
  );

export const Sbutton = styled(Btn)`
    &.btn-primary {
        background-color: #f6f6f6;
        color: black;
        border: none;
        border-radius: 0.75rem;
        &:hover {
            background-color: red;
            color: white;
        }
    }
`