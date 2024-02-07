import { Link } from "react-router-dom";

export default function Profile(){
    return <div className="profile__box">
        <div className="flex__box-lg">
            <div className="profile__image" />
            <div>
                <div className="profile__email">nahyundev@gmail.com</div>
                <div className="profile__name">박나현</div>
            </div>
        </div>
        <Link to="/" className="profile__logout">
            로그아웃
        </Link>
    </div>;
}