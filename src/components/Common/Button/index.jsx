import './styles.css'


// eslint-disable-next-line react/prop-types
function Button({text,onClick , outlineBtn=false}) {
  return (
    <div className={outlineBtn ? "btn-outline" : "btn"} onClick={() => onClick()}>{text}</div>
    )
}

export default Button;