import TextForm from '../textForm/index'

const Signup = () => {
    const lilMan = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
    const at = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/%28at%29.svg/1200px-%28at%29.svg.png";
    const lock = "https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png";
    return(
        <div className="signup-form">
            <div className="container">
                <div className="half">
                    <TextForm label="Prenom" icon={lilMan}></TextForm>
                </div>
                <div className="half">
                    <TextForm label="Nom" icon={lilMan}></TextForm>
                </div>
            </div>
            <div className="container">

                <div className="entire">
                        <TextForm label="email" icon={at}></TextForm>
                </div>
            </div>
            <div className="container">
                <div className="half">
                    <TextForm label="Pseudo" icon={lilMan}></TextForm>
                </div>
                <div className="half">

                </div>
            </div>
            <div className="container">
                <div className="half">
                    <TextForm label="Mot de passe" icon={lock} password></TextForm>
                </div>
                <div className="half">
                    <TextForm label="Confirmer mot de passe" icon={lock} password></TextForm>
                </div>
            </div>
        </div>
    )
}

export default Signup;