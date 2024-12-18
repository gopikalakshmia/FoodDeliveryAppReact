
function Button({ textOnly,className,children, ...props }) {


let cssClass=textOnly?'text-button':'button';
cssClass+=' '+className;
  return (
    <>
    
      <p>
        <button className={cssClass}  {...props}>{children}</button>
        </p>
    </>
  );
}

export default Button;
