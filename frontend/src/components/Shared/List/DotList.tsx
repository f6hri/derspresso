import { ListItem, UnorderedList } from "@chakra-ui/react"

interface DotListProps{
    items:string[]
}

const DotList:React.FC<DotListProps> = ({ items }) => {
    return(
        <UnorderedList>
            {
                items.map((item,index)=>(
                    <ListItem key={index}>{ item }</ListItem>
                ))
            }
        </UnorderedList>
    )
}

export default DotList