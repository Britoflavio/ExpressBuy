import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import actions from '../../store/users/actionsUser'

export default function FormLogin () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const emailR = useRef()
  const passwordR = useRef()

  function handleFormSubmit (e) {
    e.preventDefault()

    const email = emailR.current.value
    const password = passwordR.current.value

    const data = {
      email,
      password
    }
    console.log(data)
    dispatch(actions.signin(data))
    navigate('/')
  }
  return (
    <form onSubmit={handleFormSubmit} className='flex flex-col items-center gap-4'>
      <div className='w-full justify-center items-center flex flex-col gap-4'>
        <input type='email' placeholder='Email address' ref={emailR} className='w-1/2 h-12 rounded-md px-3' />
        <input type='password' placeholder='Password' ref={passwordR} className='w-1/2 h-12 rounded-md px-3 form-input' />
        <div className='flex justify-between w-1/2'>
          <label>
            <input type='checkbox' className='w-4' />
            Remember me
          </label>
          <span className='text-violet-500'>Forgot you password?</span>
        </div>
      </div>
      <button type='submit'>
        <svg width='447' height='38' viewBox='0 0 447 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect width='447' height='38' rx='5' fill='#4338CA' />
          <path fill-rule='evenodd' clip-rule='evenodd' d='M21 18V16C21 14.6739 21.5268 13.4021 22.4645 12.4645C23.4021 11.5268 24.6739 11 26 11C27.3261 11 28.5979 11.5268 29.5355 12.4645C30.4732 13.4021 31 14.6739 31 16V18C31.5304 18 32.0391 18.2107 32.4142 18.5858C32.7893 18.9609 33 19.4696 33 20V25C33 25.5304 32.7893 26.0391 32.4142 26.4142C32.0391 26.7893 31.5304 27 31 27H21C20.4696 27 19.9609 26.7893 19.5858 26.4142C19.2107 26.0391 19 25.5304 19 25V20C19 19.4696 19.2107 18.9609 19.5858 18.5858C19.9609 18.2107 20.4696 18 21 18ZM29 16V18H23V16C23 15.2044 23.3161 14.4413 23.8787 13.8787C24.4413 13.3161 25.2044 13 26 13C26.7956 13 27.5587 13.3161 28.1213 13.8787C28.6839 14.4413 29 15.2044 29 16Z' fill='#818CF8' />
          <path d='M207.641 16.4929C207.588 16.0223 207.369 15.6577 206.984 15.3991C206.6 15.1373 206.116 15.0064 205.533 15.0064C205.115 15.0064 204.754 15.0727 204.449 15.2053C204.144 15.3345 203.907 15.5135 203.738 15.7422C203.572 15.9676 203.489 16.2244 203.489 16.5128C203.489 16.7547 203.546 16.9635 203.658 17.1392C203.774 17.3149 203.925 17.4624 204.111 17.5817C204.3 17.6977 204.502 17.7955 204.717 17.875C204.933 17.9512 205.14 18.0142 205.339 18.0639L206.333 18.3224C206.658 18.402 206.991 18.5097 207.332 18.6456C207.674 18.7815 207.99 18.9605 208.282 19.1825C208.574 19.4046 208.809 19.6797 208.988 20.0078C209.17 20.3359 209.261 20.7287 209.261 21.1861C209.261 21.7628 209.112 22.2749 208.814 22.7223C208.519 23.1697 208.09 23.5227 207.526 23.7812C206.966 24.0398 206.288 24.169 205.493 24.169C204.731 24.169 204.071 24.0481 203.514 23.8061C202.957 23.5642 202.522 23.2211 202.207 22.777C201.892 22.3295 201.718 21.7992 201.685 21.1861H203.226C203.256 21.554 203.375 21.8606 203.584 22.1058C203.796 22.3478 204.066 22.5284 204.394 22.6477C204.726 22.7637 205.089 22.8217 205.483 22.8217C205.917 22.8217 206.303 22.7538 206.641 22.6179C206.983 22.4787 207.251 22.2865 207.447 22.0412C207.642 21.7926 207.74 21.5026 207.74 21.1712C207.74 20.8696 207.654 20.6226 207.482 20.4304C207.313 20.2382 207.082 20.0791 206.79 19.9531C206.502 19.8272 206.176 19.7161 205.811 19.62L204.608 19.2919C203.793 19.0698 203.146 18.7434 202.669 18.3125C202.195 17.8816 201.958 17.3116 201.958 16.6023C201.958 16.0156 202.117 15.5036 202.435 15.0661C202.754 14.6286 203.184 14.2888 203.728 14.0469C204.272 13.8016 204.885 13.679 205.567 13.679C206.257 13.679 206.865 13.8 207.392 14.0419C207.922 14.2839 208.34 14.617 208.645 15.0412C208.95 15.4621 209.109 15.946 209.122 16.4929H207.641ZM210.978 24V16.3636H212.464V24H210.978ZM211.729 15.1854C211.47 15.1854 211.248 15.0992 211.062 14.9268C210.88 14.7512 210.789 14.5424 210.789 14.3004C210.789 14.0552 210.88 13.8464 211.062 13.674C211.248 13.4983 211.47 13.4105 211.729 13.4105C211.987 13.4105 212.207 13.4983 212.39 13.674C212.575 13.8464 212.668 14.0552 212.668 14.3004C212.668 14.5424 212.575 14.7512 212.39 14.9268C212.207 15.0992 211.987 15.1854 211.729 15.1854ZM217.666 27.0227C217.059 27.0227 216.537 26.9432 216.1 26.7841C215.666 26.625 215.311 26.4145 215.036 26.1527C214.761 25.8909 214.555 25.6042 214.419 25.2926L215.697 24.7656C215.787 24.9115 215.906 25.0656 216.055 25.228C216.208 25.3937 216.413 25.5346 216.672 25.6506C216.933 25.7666 217.27 25.8246 217.681 25.8246C218.244 25.8246 218.71 25.687 219.078 25.4119C219.446 25.1402 219.63 24.706 219.63 24.1094V22.608H219.535C219.446 22.7704 219.316 22.951 219.147 23.1499C218.982 23.3487 218.753 23.5211 218.461 23.6669C218.17 23.8127 217.79 23.8857 217.323 23.8857C216.72 23.8857 216.176 23.7448 215.692 23.4631C215.212 23.178 214.83 22.7588 214.549 22.2053C214.27 21.6484 214.131 20.964 214.131 20.152C214.131 19.34 214.269 18.6439 214.544 18.0639C214.822 17.4839 215.203 17.0398 215.687 16.7315C216.171 16.42 216.72 16.2642 217.333 16.2642C217.807 16.2642 218.19 16.3438 218.481 16.5028C218.773 16.6586 219 16.8409 219.162 17.0497C219.328 17.2585 219.456 17.4425 219.545 17.6016H219.654V16.3636H221.111V24.169C221.111 24.8253 220.959 25.3639 220.654 25.7848C220.349 26.2057 219.936 26.5173 219.416 26.7195C218.899 26.9216 218.315 27.0227 217.666 27.0227ZM217.651 22.6527C218.078 22.6527 218.44 22.5533 218.735 22.3544C219.033 22.1522 219.258 21.8639 219.411 21.4893C219.567 21.1115 219.645 20.6591 219.645 20.1321C219.645 19.6184 219.568 19.166 219.416 18.7749C219.263 18.3838 219.04 18.0788 218.745 17.8601C218.45 17.638 218.085 17.527 217.651 17.527C217.203 17.527 216.831 17.643 216.532 17.875C216.234 18.1037 216.009 18.4152 215.856 18.8097C215.707 19.2041 215.632 19.6449 215.632 20.1321C215.632 20.6326 215.709 21.0717 215.861 21.4496C216.014 21.8274 216.239 22.1224 216.537 22.3345C216.839 22.5466 217.21 22.6527 217.651 22.6527ZM224.591 19.4659V24H223.105V16.3636H224.532V17.6065H224.626C224.802 17.2022 225.077 16.8774 225.451 16.6321C225.829 16.3868 226.305 16.2642 226.878 16.2642C227.399 16.2642 227.854 16.3736 228.245 16.5923C228.636 16.8078 228.94 17.1293 229.155 17.5568C229.371 17.9844 229.478 18.513 229.478 19.1428V24H227.992V19.3217C227.992 18.7682 227.848 18.3357 227.559 18.0241C227.271 17.7093 226.875 17.5518 226.371 17.5518C226.026 17.5518 225.72 17.6264 225.451 17.7756C225.186 17.9247 224.976 18.1435 224.82 18.4318C224.667 18.7169 224.591 19.0616 224.591 19.4659ZM235.177 24V16.3636H236.664V24H235.177ZM235.928 15.1854C235.669 15.1854 235.447 15.0992 235.262 14.9268C235.079 14.7512 234.988 14.5424 234.988 14.3004C234.988 14.0552 235.079 13.8464 235.262 13.674C235.447 13.4983 235.669 13.4105 235.928 13.4105C236.186 13.4105 236.407 13.4983 236.589 13.674C236.775 13.8464 236.867 14.0552 236.867 14.3004C236.867 14.5424 236.775 14.7512 236.589 14.9268C236.407 15.0992 236.186 15.1854 235.928 15.1854ZM240.15 19.4659V24H238.663V16.3636H240.09V17.6065H240.185C240.36 17.2022 240.635 16.8774 241.01 16.6321C241.388 16.3868 241.863 16.2642 242.437 16.2642C242.957 16.2642 243.413 16.3736 243.804 16.5923C244.195 16.8078 244.498 17.1293 244.714 17.5568C244.929 17.9844 245.037 18.513 245.037 19.1428V24H243.55V19.3217C243.55 18.7682 243.406 18.3357 243.118 18.0241C242.83 17.7093 242.433 17.5518 241.93 17.5518C241.585 17.5518 241.278 17.6264 241.01 17.7756C240.745 17.9247 240.534 18.1435 240.379 18.4318C240.226 18.7169 240.15 19.0616 240.15 19.4659Z' fill='white' />
        </svg>
      </button>
    </form>
  )
}
