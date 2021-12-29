export const TableItem = (props) => {
    return (
        <tr>
            <td>{props.position}</td>
            <td>{props.location}</td>
            <td>{props.price} y.e.</td>
        </tr>
    )
}