function Table() {
  return (
    <table>
      <tr>
        <Columns />
      </tr>
    </table>
  );
}

function Columns() {
  return (
    <div>
      <td>Column 1</td>
      <td>Column 2</td>
    </div>
  );
}

// We could avoid this problem by using a fragment instead of a div element in our Columns component.

function Columns() {
  return (
    <>
      <td>Column 1</td>
      <td>Column 2</td>
    </>
  );
}
