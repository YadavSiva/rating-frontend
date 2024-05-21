
import { Route, Routes } from "react-router-dom";
import { LoginComponent } from "./login/login";
import { SignupComponent } from "./signupcomponent/signup.component";
import { HeaderComponent } from "./headercomponent/header";
import { ServicesComponent } from "./servicescomponent/services.component";
import { ServiceImage } from "./services/services";


export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<HeaderComponent></HeaderComponent>}></Route>
            <Route path="/signup" element={<SignupComponent></SignupComponent>}></Route>
            <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
            <Route path="/servicelist" element={<ServiceImage></ServiceImage>}></Route>
            <Route path="/services" element={<ServicesComponent></ServicesComponent>}></Route>
        </Routes>
    )
}