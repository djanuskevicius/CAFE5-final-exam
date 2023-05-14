import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
  margin: 20px auto;
  width: fit-content;
  background: #141518;

  line-height: 1.5;
  color: #99989b;
  font-family: sans-serif;
  text-align: left;

  table {
    border-collapse: collapse;
  }

  thead {
    background: #25262c;
  }

  thead th {
    border: none;
  }

  thead th:first-child {
    border-top-left-radius: 5px;
  }
  thead th:last-child {
    border-top-right-radius: 5px;
  }

  tr:hover {
    background: #25262c;
  }

  th,
  td {
    border: 1px solid #25262c;
    border-width: 0 0 1px;
    padding: 0.5em 1.5em;
    vertical-align: top;
  }

  th:last-child,
  td:last-child {
    border-width: 0px 1px 1px 0px;
  }
`;
