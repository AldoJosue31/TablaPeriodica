import React from "react";

type Props = {
  onClose: () => void;
  color: string;
  size: number;
  borderWidth: number;
};

const CloseButton: React.FC<Props> = ({
  onClose,
  color,
  size,
  borderWidth,
}) => {
  const buttonStyle = {
    backgroundColor: "transparent",
    border: `${borderWidth}px solid ${color}`,
    borderRadius: "50%",
    color: color,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    padding: 0,
  };

  const iconStyle = {
    color: color,
    fontSize: size * 0.5,
  };

  return (
    <button style={buttonStyle} onClick={onClose}>
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <path
          fill="currentColor"
          d="M13.41,12l5.3-5.3a1,1,0,0,0-1.41-1.41L12,10.59,6.71,5.29a1,1,0,0,0-1.41,1.41L10.59,12l-5.3,5.3a1,1,0,1,0,1.41,1.41L12,13.41l5.3,5.3a1,1,0,0,0,1.41-1.41Z"
        />
      </svg>
    </button>
  );
};

export default CloseButton;