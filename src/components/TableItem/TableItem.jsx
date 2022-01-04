export const TableItem = ({ position,location,price }) => {
  return (
    <tr>
      <td>{position}</td>
      <td>{location}</td>
      <td>{price} y.e.</td>
    </tr>
  )
}