import { Button } from "@chakra-ui/react"
import { useLocation, useNavigate } from "react-router-dom"

interface GhostLinkProps {
    href: string,
    title: string,
    color?: string,
    size?: string,
    icon?: any
}

const GhostLink: React.FC<GhostLinkProps> = ({ href, title, color, size, icon }) => {
    const navigate = useNavigate();
    const path = useLocation().pathname
    return <Button size={size} variant={path === href? "solid":"ghost"} colorScheme={color} onClick={() => navigate(href)} isDisabled={path === href? true:false}>{icon} {title}</Button>
}

export default GhostLink;