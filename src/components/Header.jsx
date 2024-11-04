import "./styles/Header.css";
function Header(){
    return(
        <div className = "header">
            <div clasName = "logo">
                <p className="logo-text">Medium Alike</p>
            </div>
            <div className = "hello-world">
                <p className = "hello-world-text">
                    Hello, world!
                </p>
            </div>
        </div>
    );
}
export default Header;