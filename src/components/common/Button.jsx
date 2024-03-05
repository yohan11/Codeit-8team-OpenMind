import styled from 'styled-components';

const BasicButton = styled.button`
  width: ${({ width }) => width}px;
  height: ${({ height }) => (height ? height : 46)}px;
  border-radius: 8px;
  background-color: ${({ bright }) =>
    bright ? 'var(--brown10)' : 'var(--brown40)'};
  padding: 12px 24px;

  font-size: 16px;
  font-weight: 400;
  color: ${({ bright }) => (bright ? 'var(--brown40)' : 'var(--gray10)')};
  border: 1px solid var(--brown40);

  opacity: ${({ inactive }) => inactive && 0.5};

  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: ${({ inactive }) => inactive && 'default'};

  ${({ inactive }) =>
    inactive === false &&
    `
  &:hover {
    border: 2px solid var(--brown40);
  }

  &:active {
    border: 2px solid var(--brown50);
    background-color: ${({ bright }) =>
      bright ? 'var(--brown20)' : 'var(--brown50)'};
  }
  `}
`;

const FloatingButton = styled(BasicButton)`
  box-shadow: 0 4px 4px 0 #00000040;
  border-radius: 200px;
`;

const Button = ({
  children,
  className,
  onClick,
  width,
  height,
  bright,
  inactive,
  varient,
}) => {
  return (
    <>
      {varient === 'icon' ? (
        <button onClick={onClick} className={className} disabled={inactive}>
          {children}
        </button>
      ) : varient === 'floating' ? (
        <FloatingButton
          onClick={onClick}
          className={className}
          $width={width}
          $height={height}
          $bright={bright}
          $inactive={inactive}
          disabled={inactive}
        >
          {children}
        </FloatingButton>
      ) : (
        <BasicButton
          onClick={onClick}
          className={className}
          $width={width}
          $height={height}
          $bright={bright}
          $inactive={inactive}
          disabled={inactive}
        >
          {children}
        </BasicButton>
      )}
    </>
  );
};

export default Button;
