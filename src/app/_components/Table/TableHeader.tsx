import { Thead, Tr } from "@chakra-ui/react"

interface IColumn {
    title: string,
    key: string,
    isFilter?: boolean,
    isSort?: boolean
}

const TableHeader = (columns: IColumn[]) => {
    return (
        <Thead>
            <Tr>
            {  columns.map((column) => {
                <Td>{column.title}</Td>
            })}
            </Tr>
           
        </Thead>
    
    )
}