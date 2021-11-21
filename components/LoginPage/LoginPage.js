import { useState } from "react";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import LeftOverlayContent from "./LeftOverlayContent";
import RightOverlayContent from "./RighttOverlayContent";

const LoginPage = () => {
  const [active, setActive] = useState(false);
  const overlayBg =
    "bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800";

  return (
    <div className="h-4/5 w-4/5 bg-white relative overflow-hidden rounded-lg">
      <div
        className={`signin bg-white absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${
          active ? "translate-x-full opacity-0" : ""
        }`}
      >
        <SigninForm />
      </div>

      <div
        className={`signup absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${
          active
            ? "translate-x-full opacity-100 z-50 animate-show"
            : "opacity-0 z-10"
        }`}
      >
        <div className="h-full w-full flex justify-center items-center">
          <SignupForm />
        </div>
      </div>

      <div
        className={`overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition transition-transform duration-700 ease-in-out z-100 ${
          active ? "-translate-x-full" : ""
        }`}
      >
        <div
          className={`overlay ${overlayBg} relative -left-full h-full w-[200%] transform transition transition-transform duration-700 ease-in-out ${
            active ? "translate-x-1/2" : "translate-x-0"
          }`}
        >
          <div
            className={`overlay-left w-1/2 h-full absolute flex justify-center items-center top-0 transform -translate-x-[20%] transition transition-transform duration-700 ease-in-out ${
              active ? "translate-x-0" : "-translate-x-[20%]"
            }`}
          >
            <LeftOverlayContent active={active} setActive={setActive} />
          </div>
          <div
            className={`overlay-right w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition transition-transform duration-700 ease-in-out ${
              active ? "translate-x-[20%]" : "translate-x-0"
            }`}
          >
            <RightOverlayContent active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
