import { useDispatch, useSelector } from "react-redux";
import "./toggle-theme-btn.css";
import { toggleTheme } from "../../redux/slices/themeSlicer";
import { useRef } from "react";

const ToggleThemeBtn = () => {
  const dispatch = useDispatch();

  const { dark } = useSelector(
    (state: { theme: { dark: boolean } }) => state.theme
  );

  const inputRef: any = useRef(null);

  const handleCheckboxChange = () => {
    if (inputRef.current) {
      dispatch(toggleTheme({ isThemeDark: inputRef.current.checked }));
    }
  };

  return (
    <label className="bb8-toggle">
      <input
        className="bb8-toggle__checkbox"
        type="checkbox"
        ref={inputRef}
        onChange={handleCheckboxChange}
        checked={dark}
      />
      <div className="bb8-toggle__container">
        <div className="bb8-toggle__scenery">
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="tatto-1"></div>
          <div className="tatto-2"></div>
          <div className="gomrassen"></div>
          <div className="hermes"></div>
          <div className="chenini"></div>
          <div className="bb8-toggle__cloud"></div>
          <div className="bb8-toggle__cloud"></div>
          <div className="bb8-toggle__cloud"></div>
        </div>
        <div className="bb8">
          <div className="bb8__head-container">
            <div className="bb8__antenna"></div>
            <div className="bb8__antenna"></div>
            <div className="bb8__head"></div>
          </div>
          <div className="bb8__body"></div>
        </div>
        <div className="artificial__hidden">
          <div className="bb8__shadow"></div>
        </div>
      </div>
    </label>
  );
};

export default ToggleThemeBtn;
