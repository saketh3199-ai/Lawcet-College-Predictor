import {
  PopupOverlay,
  PopupBox,
  PopupTopRow,
  PopupTitle,
  PopupCloseButton,
  PopupBody,
  PopupTimerRow,
  TimerLabel,
  TimerDisplay,
  PopupConsentRow,
  PopupConsentNote,
  PopupOkButton,
} from "./styledComponent";



const PopUp = (props)=>
{
    const {Timer,OnClickOkModifyPopStatus} = props

    const onClickOk = ()=>
    {
        OnClickOkModifyPopStatus()
    }



    const PopUpElement = 
    <PopupOverlay>
      <PopupBox role="dialog" aria-modal="true" aria-label="Disclaimer Popup">

        {/* Top row — title + close button */}
        <PopupTopRow>
          <PopupTitle>
            ⚠ Note — please read before proceeding
          </PopupTitle>
          <PopupCloseButton type="button" aria-label="Close popup" onClick={onClickOk}>
            ✕
          </PopupCloseButton>
        </PopupTopRow>

        {/* Disclaimer body */}
        <PopupBody>
          I do not guarantee the list you generate by using my site is
          accurate. It might not be accurate. It is because of difficulties
          I had to get my hands on data regarding the college list. I have
          tried my best to get my hands on whatever data that is available.
          I am not responsible for any inaccurate / wrong information that
          might be generated from my site. You have been advised. So please
          use this app keeping this in mind.
        </PopupBody>

        {/* Timer row */}
        <PopupTimerRow>
          <TimerLabel>This popup closes in</TimerLabel>
          <TimerDisplay>{Timer}</TimerDisplay>
        </PopupTimerRow>

        {/* Consent row — OK button */}
        <PopupConsentRow>
          <PopupConsentNote>By pressing OK, you consent to this</PopupConsentNote>
          <PopupOkButton type="button" onClick={onClickOk}>OK</PopupOkButton>
        </PopupConsentRow>

      </PopupBox>
    </PopupOverlay>

    return PopUpElement
}



export default PopUp