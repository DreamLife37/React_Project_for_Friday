import {NavLink} from "react-router-dom";
import {Path} from "../../pages/Routes";
import s from "./header.module.css"

export const Header = () => {
    return (<div>
        <div className={`${s.item} ${s.activeLink}`}><NavLink to={Path.login}
                                                              className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}>Login</NavLink>
        </div>
        <div className={`${s.item} ${s.activeLink}`}><NavLink to={Path.registration}
                                                              className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}>Registration</NavLink>
        </div>
        <div className={`${s.item} ${s.activeLink}`}><NavLink to={Path.profile}
                                                              className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.activeLink}`}><NavLink to={Path.error404}
                                                              className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}>Page
            not found</NavLink></div>
        <div className={`${s.item} ${s.activeLink}`}><NavLink to={Path.restorePassword}
                                                              className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}>Restore
            password</NavLink></div>
        <div className={`${s.item} ${s.activeLink}`}><NavLink to={Path.enterNewPassword}
                                                              className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}>Enter
            new password</NavLink></div>
        <div className={`${s.item} ${s.activeLink}`}><NavLink to={Path.example}
                                                              className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}>Example</NavLink>
        </div>
    </div>)
}