const Button = ({ title, isDisabled, onClick }) => (
    <button
        className={`
        py-2 px-6 w-full rounded-full text-base text-primary-content font-medium
        bg-gradient-to-r from-primary to-accent
        ${isDisabled
            ? `cursor-default`
            : `hover:from-secondary hover:to-accent
                transition transform hover:scale-105
                motion-reduce:transition-none motion-reduce:transform-none`
        }
        `}
        disabled={isDisabled}
        onClick={onClick}>
        {title}
    </button>
    );
    
    export default Button;