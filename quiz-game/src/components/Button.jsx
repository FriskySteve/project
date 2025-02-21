const Button = ({ label, onClick, color = "#0000FF" }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
