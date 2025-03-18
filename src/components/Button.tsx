import { Link } from "react-router-dom";

interface ButtonProps {
  buttonText: string;
  location: string;
  containDiv: boolean; // Flag to conditionally render the div
  customCSS?: string;
}

const Button = ({
  buttonText,
  location,
  containDiv,
  customCSS,
}: ButtonProps) => {
  // Conditional rendering of the div element
  const buttonContent = (
    <Link
      to={location}
      className={`${
        customCSS
          ? customCSS
          : "inline-block px-4 py-2 mb-4 text-dark-coffee border border-dark-coffee rounded-lg transition hover:bg-medium-latte hover:text-white"
      }`}
    >
      {buttonText}
    </Link>
  );

  // Render the div only if containDiv is true
  return containDiv ? (
    <div className="px-4 pt-6">{buttonContent}</div>
  ) : (
    buttonContent
  );
};

export default Button;
