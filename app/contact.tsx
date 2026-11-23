import React from "react"

export default function ContactPage()  {

  return (
      <article className="post-content page-template no-image">
        <form method="post" action="#">
          <div className="row gtr-uniform">
            {/* Break */}
            <div className="col-12">
              <p>
                Feel free to contact me about any job opportunities, questions,
                feedback, anything really.
              </p>
            </div>
            {/* Break */}
            <div className="col-12">
              <textarea
                name="demo-message"
                id="demo-message"
                placeholder="Enter your message"
                rows={6}
                defaultValue={""}
              />
            </div>
            {/* Break */}
            <div className="col-12">
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="primary"
                  />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </article>
  )
}