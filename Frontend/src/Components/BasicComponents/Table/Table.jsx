import * as React from 'react'
import ExternalTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'

//@TODO(Future) : ADD default implementation for renderRow & renderColumn
export default function Table({
    rows,
    columns,
    //default implementation for renderColumn  ,
    renderColumn,
    renderRow,
    border,
    ...props
}) {
    const defaultRenderRows = (row) => {
        return (
            <>
                {(columns || []).map((column) => (
                    <TableCell key={column.field} align={column.align}>
                        {row[column.field]}
                    </TableCell>
                ))}
            </>
        )
    }

    const defaultRenderColumn = (column) => {
        return <TableCell key={column.field}>{column.headerName}</TableCell>
    }

    const Table = styled(ExternalTable)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }))

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }))

    return (
        <Table
            style={{ border: border ? '1px solid #e0e0e0' : 'none' }}
            {...props}
            sx={{ minWidth: 650 }}
            aria-label="simple table">
            <TableHead>
                <StyledTableRow>
                    {(columns || []).map((column) =>
                        renderColumn
                            ? renderColumn(column)
                            : defaultRenderColumn(column)
                    )}
                </StyledTableRow>
            </TableHead>
            <TableBody>
                {(rows || []).map((row, index) => (
                    <StyledTableRow key={index}>
                        {renderRow
                            ? renderRow(row, index)
                            : defaultRenderRows(row)}
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    )
}
