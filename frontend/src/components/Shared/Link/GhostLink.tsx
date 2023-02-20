import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

interface GhostLinkProps {
    href: string,
    title: string,
    color?: string,
    size?: string,
    icon?: any
}

const GhostLink: React.FC<GhostLinkProps> = ({ href, title, color, size, icon }) => {
    const navigate = useNavigate();
    return <Button size={size} variant="ghost" colorScheme={color} onClick={() => navigate(href)}>{icon} {title}</Button>
}

export default GhostLink;