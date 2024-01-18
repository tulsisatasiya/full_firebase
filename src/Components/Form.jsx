import React, { useEffect, useState } from 'react'
import { getData, postData } from '../Firebase/function/Function'

const Form = () => {

    const [add, setadd] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    })

    const changedata = (e) => {
        setadd({ ...add, [e.target.name]: e.target.value })
    }

    const submit = () => {
        postData(add)

        setadd({
            name: "",
            email: "",
            mobile: "",
            message: "",
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div className="center">
                <div className="container">
                    <h1 className="title">Form</h1>
                    <div className="form form__1">
                        <label htmlFor="name" className="form__label">Full name</label>
                        <input type="text" value={add.name} name='name' onChange={changedata} className="form__input" placeholder id="name" required />
                    </div>
                    <div className="form form__2">
                        <label htmlFor="email" className="form__label">Email address</label>
                        <input type="email" value={add.email} name='email' onChange={changedata} className="form__input" placeholder id="email" required />
                    </div>
                    <div className="form form__3">
                        <label htmlFor="mobile" className="form__label">Mobile no.</label>
                        <input type="tel" value={add.mobile} name='mobile' onChange={changedata} className="form__input" placeholder id="mobile" required />
                    </div>
                    <div className="form form__4">
                        <label htmlFor="message" className="form__label">Your message</label>
                        <input type="text" value={add.message} name='message' onChange={changedata} className="form__input" placeholder id="message" required />
                    </div>
                    <button onClick={submit} className="form__btn">
                        <span className="form__btn--visible"><p>Submit</p>

                        </span>
                        <span className="form__btn--invisible">Message sent!</span>
                    </button>
                    <div className="container-mail">
                        <div className="mail">
                            <div className="mail__back" />
                            <div className="mail__top" />
                            <div className="mail__letter">
                                <div className="mail__letter-square">
                                </div>
                                <div className="mail__letter-lines">
                                </div>
                            </div>
                            <div className="mail__left" />
                            <div className="mail__right" />
                            <div className="mail__bottom" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Form
