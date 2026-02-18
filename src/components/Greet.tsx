import React from 'react'

type GreetYProps = {
    name: string
    messageCount?: number // The '?' makes it optional
    isLoggedIn: boolean
}


const Greet = ({ name, messageCount = 0, isLoggedIn: initialLoginState }: GreetYProps) => {

    const [isLoggedIn, setIsLoggedIn] = React.useState(initialLoginState);
    const [isLoading, setIsLoading] = React.useState(false);
    
    const handleClick = () => {

        setIsLoading(true);

        //  toggle isLoggedIn inside the setTimeout (after the "loading" delay), 
        //  so the state actually changes after 2 seconds.
        setTimeout(() => {
            setIsLoggedIn(prev => !prev);
            setIsLoading(false);
        }, 2000);   
    }

    const getWelcomeMessage = (): string => {
        if(isLoggedIn){
            return `Welcome to ${name} page. You have ${messageCount} unread messages`;
        }

        return "Welcome Guest! Please Login to continue";
    }

  return (
    <div>
        <h2 className='text-2xl text-center mt-10 font-bold'>
            {getWelcomeMessage()}
        </h2>

        {
            isLoggedIn && (
                <p className='text-center text-green-600 font-semibold mt-2'>
                    ✓ Logged In
                </p>
            )
        }

        <div className='flex justify-center'>
            <button 
                className={`${isLoading ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"} text-white font-bold py-2 px-4 rounded mt-4 mx-auto  `}
                onClick={handleClick}
                disabled = {isLoading}
            >
                {isLoading ? (isLoggedIn ? "Logging out..." : "Logging in...") : (isLoggedIn ? "Logout" : "Login")}
            </button>
        </div>
    </div>
  )
}

export default Greet