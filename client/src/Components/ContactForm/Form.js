import React from 'react'


function contactform() {


    return (
        <div>
            <h2 className="text-center">Contact Me</h2>
            <hr/>
                <form action="#" method="POST">
                    <div className="form-group">
                        <label for="flname">Name:</label>
                        <input type="text" className="form-control form-control-sm" id="flname" name="user_name" autofocus
                            placeholder="Your Full Name (Ex: Jane Doe)" required/>
                </div>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control form-control-sm" id="email" name="user_email"
                                placeholder="Ex: jane.doe@website.com" required/>
                </div>
                            <div className="form-group">
                                <label for="msg">Message:</label>
                                <textarea className="form-control form-control-sm" id="msg" name="user_message" rows="10"
                                    placeholder="Drop me a note..." required></textarea>
                            </div>
                            <button type="submit" className="btn  btn-primary">Submit</button>
            </form>
                    </div>

        )


}

export default contactform;