import {useNavigate} from 'react-router-dom'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Login() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/')
    }
	return (
		<>
			<div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-md'>
					<h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Sign in to your account
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
					<div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12'>
						<form
							className='space-y-6'
							action='#'
                            onSubmit={handleSubmit}
							method='POST'
						>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Email address
								</label>
								<div className='mt-2'>
									<input
										id='email'
										name='email'
										type='email'
										autoComplete='email'
										required
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Password
								</label>
								<div className='mt-2'>
									<input
										id='password'
										name='password'
										type='password'
										autoComplete='current-password'
										required
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='flex items-center justify-between'>
								<div className='flex items-center'>
									<input
										id='remember-me'
										name='remember-me'
										type='checkbox'
										className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
									/>
									<label
										htmlFor='remember-me'
										className='ml-3 block text-sm leading-6 text-gray-900'
									>
										Remember me
									</label>
								</div>

								<div className='text-sm leading-6'>
									<a
										href='#'
										className='font-semibold text-indigo-600 hover:text-indigo-500'
									>
										Forgot password?
									</a>
								</div>
							</div>

							<div>
								<button
                                    
									type='submit'
									className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
								>
									Sign in
								</button>
							</div>
						</form>

						
					</div>

					
				</div>
			</div>
		</>
	)
}
