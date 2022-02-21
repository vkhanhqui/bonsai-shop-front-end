import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/user_context'
import { LoginPage } from '.'
const Register= () => {
  return (
    <main>
      <PageHero title='register' />
      <Wrapper className='page'>
        <article>
          <div className='informationLogin'>
            <h2>User: </h2>
            </div>
          <div className='inputLogin'>
          <input
              type='user'
              className='form-input'
              placeholder='Enter User'
            />
          </div>
          
          <div className='informationLogin'>
            <h2>Password: </h2>
            </div>

          <div className='inputLogin'>
          <input
              type='passw'
              className='form-input'
              placeholder='Enter Password'
            />
          </div>
        <div>
          <button type='submitBtn' className='submit-btn'>
          Register
            </button>
            
            <button type='cancelBtn' className='submit-btn1'>
              Cancel
            </button>
          </div> 
         
         
        </article>
        
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  h2{
    font-family:"Courier New", BrushScript, monospace;
    color: rgb(0,100,0);
    margin-left: 450px;
  }
  
  p {
    line-height: 2;
    max-width: 100rem;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
    font-size: 30px;
  }
  .title {
    text-align: left;
    
  }
  input{
    display: block;
    width: 90%;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border: 2px solid var(--clr-primary-7);
    border-radius: 25px;
    outline: none;
    font-size: 15px;
    margin-left: 450px;
  }
  input:hover{
    border: 2px solid var(--clr-primary-3);
  }

  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
  }
  .submit-btn {
    position: relative;
    display: inline-block;
    width: 30%;
    height: 40px;
    transition: 0.5s;
    
    margin-left: 500px;

    item-align:right;
    color: var(--clr-grey-5);
    background: var(--clr-primary-7);
    border-radius: 25px;
  }
  .submit-btn1{
    position: relative;
    display: inline-block;
    width: 30%;
    height: 40px;
    transition: 0.5s;
    
    margin-left: 30px;
    margin-right: -500px;

    item-align:right;
    color: var(--clr-grey-5);
    background: var(--clr-primary-7);
    border-radius: 25px;
  }
  submit-btn:hover{
    border: 2px solid var(--clr-primary-3);
  }
  .heoNe {
    margin-top: 10px;
    margin-left: 130px;
    margin-right: -600px;
  }

 
`
export default Register