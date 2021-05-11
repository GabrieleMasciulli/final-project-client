import React from 'react'
import '../../wwwroot/css/Auth.css'

const contentStyle = {
  heigth: '496px',
  width: '580px',
}

const closeIconStyle = {
  position: 'absolute',
  top: '38px',
  right: '38px',
}

const SignUp = () => {
  return (
    <div className='auth-wrapper opened'>
      <div className='auth-content' style={contentStyle}>
        <div className='close-wrapper' style={closeIconStyle}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            height='24px'
            width='24px'
            viewBox='0 0 24 24'
            className='close-svg'
          >
            <path
              d='M18 6L6 18M18 18L6 6'
              stroke='currentColor'
              strokeWidth='2'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </div>

        <div className='form-wrapper'>
          <div className='title'>Create an account</div>
          <div className='top-info'>
            Already have an account?
            <span class='login-link'>Log In</span>
          </div>

          <div className='email'>
            <div class='label'>Email Address</div>
            <input
              placeholder='Enter your email address...'
              type='email'
              class='email-input'
            ></input>
          </div>

          <div class='f0b7mj-3 enpzGp'>
            <div class='label'>
              <span>Password</span>
            </div>
            <div class='sc-273q29-0 fnwcbv'>
              <input
                type='password'
                placeholder='Enter your password...'
                class='cxm5lu-0 bOgmnN'
                value='Gabriele1412'
              ></input>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  height='24px'
                  width='24px'
                  viewBox='0 0 24 24'
                  class='sc-16r8icm-0 eZMaTl'
                >
                  <path d='M22.7934 19.5586L2.2378 3.1234C2.18142 3.07723 2.1167 3.04287 2.04733 3.02229C1.97797 3.0017 1.90532 2.99529 1.83354 3.00342C1.76175 3.01154 1.69223 3.03406 1.62895 3.06966C1.56567 3.10527 1.50987 3.15327 1.46473 3.21094L1.12099 3.65004C1.07574 3.70772 1.04206 3.77397 1.02187 3.84498C1.00168 3.91599 0.995384 3.99037 1.00333 4.06388C1.01128 4.13738 1.03333 4.20856 1.0682 4.27334C1.10308 4.33812 1.1501 4.39523 1.20658 4.44141L21.7622 20.8766C21.8186 20.9228 21.8833 20.9571 21.9527 20.9777C22.022 20.9983 22.0947 21.0047 22.1665 20.9966C22.2382 20.9885 22.3078 20.9659 22.371 20.9303C22.4343 20.8947 22.4901 20.8467 22.5353 20.7891L22.879 20.35C22.9243 20.2923 22.9579 20.226 22.9781 20.155C22.9983 20.084 23.0046 20.0096 22.9967 19.9361C22.9887 19.8626 22.9667 19.7914 22.9318 19.7267C22.8969 19.6619 22.8499 19.6048 22.7934 19.5586ZM11.2022 8.14934L15.8354 11.8541C15.7591 9.74684 14.0789 8.0625 12 8.0625C11.7318 8.06301 11.4644 8.09212 11.2022 8.14934ZM12.7978 15.851L8.16455 12.1462C8.24121 14.2532 9.92141 15.9375 12 15.9375C12.2681 15.9369 12.5355 15.9079 12.7978 15.851ZM12 6.9375C15.391 6.9375 18.4998 8.87109 20.1786 12C19.7671 12.7701 19.2586 13.4816 18.6661 14.1164L19.9634 15.1535C20.6857 14.3633 21.2976 13.4747 21.7818 12.5129C21.8604 12.3538 21.9014 12.1781 21.9014 11.9998C21.9014 11.8216 21.8604 11.6458 21.7818 11.4867C19.916 7.76684 16.2256 5.25 12 5.25C10.7385 5.25 9.53504 5.49609 8.40345 5.91129L9.99875 7.18711C10.6498 7.03594 11.3166 6.9375 12 6.9375ZM12 17.0625C8.60901 17.0625 5.50057 15.1289 3.82141 12C4.23347 11.23 4.74254 10.5185 5.33558 9.88395L4.03831 8.84684C3.31616 9.63697 2.70435 10.5255 2.22027 11.4871C2.14163 11.6462 2.10066 11.8219 2.10066 12.0002C2.10066 12.1784 2.14163 12.3542 2.22027 12.5133C4.08437 16.2332 7.77475 18.75 12 18.75C13.2615 18.75 14.465 18.5021 15.5965 18.0887L14.0013 16.8132C13.3502 16.9641 12.6837 17.0625 12 17.0625Z'></path>
                </svg>
              </span>
            </div>
            <div color='var(--color-light-neutral-6)' class='f0b7mj-4 qiUDC'>
              Password should contain both letter and number, with minimum
              length of 8 characters
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp