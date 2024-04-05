import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <div class="form-card1">
  <div class="form-card2">
    <form class="form">
      <p class="form-heading">Get In Touch</p>

      <div class="form-field">
        <input required="" placeholder="Name" class="input-field" type="text" />
      </div>

      <div class="form-field">
        <input
          required=""
          placeholder="Email"
          class="input-field"
          type="email"
        />
      </div>

      <div class="form-field">
        <input
          required=""
          placeholder="Subject"
          class="input-field"
          type="text"
        />
      </div>

      <div class="form-field">
        <textarea
          required=""
          placeholder="Message"
          cols="30"
          rows="3"
          class="input-field"
        ></textarea>
      </div>

      <button class="sendMessage-btn">Send Message</button>
    </form>
  </div>
</div>
    </section>
  )
}

export default Contact