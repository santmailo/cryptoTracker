import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import "./styles.css";

function BackToTop() {
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <ArrowCircleUpRoundedIcon
      onClick={() => topFunction()}
      id="myBtn"
      title="Go to top"
    />
  );
}

export default BackToTop;
