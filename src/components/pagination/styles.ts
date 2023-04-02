import styled from "styled-components";

export const ContainerPagination = styled.div`
  padding: 25px 0px;
  width: 50%;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    cursor: pointer;
  }
  .pagination {
    justify-content: center;
    display: flex;
    padding-left: 0;
    list-style: none;
  }

  .page-item .page-link {
    position: relative;
    display: block;
    margin: 0 2px;
    padding: 5px 10px;
    border-radius: 5px;
    color: #00b5cc;
    font-weight: bold;
    text-decoration: none;
  }

  .page-item a.page-link:hover {
    background-color: ${({ theme }) => theme.pagination.hover};
  }

  .page-item.active .page-link {
    color: #ffffff;
    background-color: #00b5cc;
  }

  .page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
  }
`;
