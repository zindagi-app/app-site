import React from "react"
import { Link } from "gatsby"

const Contribute = () => {
  return (
    <div class="container">
      <div id="contribute" class="contributepg">
        <div class="title">Contribute to زندگی</div>
        <div class="englishdesc">
          We're looking for all types of contributions! If you have coding
          experience and wish to play a part in building this app, reach out to
          us! Donate to this project as well!
        </div>
        <div class="urdufirst">
          Whatsapp or Text <b>(312)885-6087</b>.
        </div>
        <div class="urdusecond">
          Email <b>zindagistartup@gmail.com</b>
        </div>

        <Link to="https://github.com/zindagi-app">
          {" "}
          <div className="opensrcbtn">See our Code</div>
        </Link>
      </div>
    </div>
  )
}

export default Contribute
