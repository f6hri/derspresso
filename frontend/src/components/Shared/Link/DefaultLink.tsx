import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

interface DefaultLinkProps {
    href: string,
    title: string,
    color?: string,
    size?: string,
    icon?: any
}

const DefaultLink: React.FC<DefaultLinkProps> = ({ href, title, color, size, icon }) => {
    const navigate = useNavigate();
    return <Button size={size} variant="link" colorScheme={color} onClick={() => navigate(href)}>{icon} {title}</Button>
}

export default DefaultLink;