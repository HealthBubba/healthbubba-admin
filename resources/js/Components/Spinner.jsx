import React from 'react'

export default function Spinner({color = 'white', show = false}) {
    return (
        show 

        ?


        <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"></path></svg>
        
        :

        ''
    )
}
