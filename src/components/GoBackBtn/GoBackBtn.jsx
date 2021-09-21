import { useHistory } from "react-router-dom";
import s from "./GoBackBtn.module.css";

export default function GoBackBtn() {
  const history = useHistory();
  function goBack() {
    history.goBack();
  }

  return (
    <>
      <button className={s.btn} type="button" onClick={goBack}>
        Back
      </button>
    </>
  );
}
