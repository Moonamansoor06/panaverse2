"use-client"
import { useRouter } from 'next/navigation';
import { Button } from '@chakra-ui/react';

interface RouteButtonProps{
    buttonName:string,
    url:string,
    color:string,
    bgColor:string
}
const RouteButton : React.FC<RouteButtonProps>= ({buttonName,url,color,bgColor}) => {
    const router=useRouter()
    return (
        <Button  onClick={() => router.push(url)} 
        size="md" variant='solid' bgColor={bgColor} color={color}>
            {buttonName}</Button>  )

}

export default RouteButton