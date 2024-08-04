import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { CardFooter, CardHeader } from "@/components/ui/card"
import Socials from "./socials"
import { BackButton } from "./backButton"

type CardWrapperProps ={
    children?: React.ReactNode;
    cardTitle:string
    backButtonHref:string
    backButtonLabel:string
    showSocials?:boolean
}


export const AuthCard =({
    children,
    cardTitle,
    backButtonHref,
    backButtonLabel,
    showSocials,
} : CardWrapperProps) => {
    return(
        <Card>
            <CardHeader>
                <CardTitle>
                    {cardTitle}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocials && 
                <CardFooter>
                    <Socials/>
                </CardFooter>
            }
            <CardFooter>
                <BackButton href={backButtonHref} label={backButtonLabel}></BackButton>
            </CardFooter>
        </Card>
    )
    
}