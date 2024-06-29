import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TablePagination } from "@mui/material";
import BasicModal from "./modal";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const save_todo = localStorage.getItem("save_todo");
    return save_todo ? JSON.parse(save_todo) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModal, setOpenModal] = useState(false);
  const [formIsEdit, setFormIsEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("save_todo", JSON.stringify(todos));
  }, [todos]);

  // Handle add or edit Todo...
  const handleAddOrEditTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    if (formIsEdit) {
      const new_todo = [...todos];
      new_todo[editIndex] = inputValue;
      setTodos(new_todo);
      setEditIndex(null);
      toast.success("Task updated successfully");
    } else {
      setTodos([inputValue, ...todos]);
      toast.success("Task added successfully");
      setFormIsEdit(false);
    }
    setInputValue("");
    setOpenModal(false);
    setFormIsEdit(false);
  };

  // Handle remove Todo...
  const handleDeleteTodo = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const new_todo = [...todos];
        new_todo.splice(index, 1);
        setTodos(new_todo);
        toast.success("Task delete successfully");
      }
    });
  };

  // Handle edit Todo...
  const handleEditTodo = (index) => {
    setEditIndex(index);
    setInputValue(todos[index]);
    setFormIsEdit(true);
    setOpenModal(true);
  };

  // Handle Search Todo List...
  // const filteredTodos = todos.filter((todo) =>
  //   todo.toLowerCase().includes(filterValue.toLowerCase())
  // );

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedTodos = todos.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <Box
        component="form"
        sx={{
          width: "90%",
          maxWidth: "720px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          gap: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            marginTop: "20px",
            justifyContent: "space-between",
          }}
        >
          <Box component="h2" m={0} sx={{ textAlign: "center" }}>
            Task List
          </Box>
          <Button
            onClick={() => {
              setFormIsEdit(false);
              setOpenModal(true);
              setInputValue("");
            }}
            variant="contained"
          >
            + add task
          </Button>
        </Box>
        <BasicModal
          setOpen={setOpenModal}
          open={openModal}
          modalTitle={`${formIsEdit ? "Edit" : "Add"} Task`}
        >
          <TextField
            autoComplete="off"
            sx={{
              width: "100%",
              fontSize: "20px",
              "& > div:hover:before": {
                borderBottom: "1px solid rgba(0, 0, 0, 0.42) !important",
              },
            }}
            type="text"
            placeholder={
              formIsEdit ? "Edit your task here..." : "Type your task here..."
            }
            value={inputValue}
            variant="standard"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button variant="contained" onClick={handleAddOrEditTodo}>
            {formIsEdit ? "Update" : "Add task"}
          </Button>
        </BasicModal>
        {todos.length > 0 ? (
          <Box
            component="table"
            sx={{
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            {paginatedTodos.length > 0 &&
              paginatedTodos.map((item, index) => (
                <Box
                  key={index}
                  component="tr"
                  sx={{
                    display: "flex",
                    backgroundColor: "#FFFF",
                    borderRadius: "10px",
                    boxShadow: "0 6px 58px rgba(196, 203, 214, .104)",
                    padding: "20px 24px",
                    gap: "90px",
                    // marginBottom: "20px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.6s ease-in-out",
                  }}
                >
                  <Box
                    title={item}
                    component="td"
                    sx={{
                      listStyle: "none",
                      overflow: "hidden",
                      wordWrap: "break-word",
                      // width: "60%",
                      fontSize: "22px",
                    }}
                  >
                    {item}
                  </Box>
                  <Box component="div" sx={{ display: "flex", gap: "18px" }}>
                    <svg
                      onClick={() => handleEditTodo(index)}
                      style={{ cursor: "pointer" }}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-20 cp"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.8787 0.87868L6.29289 9.46447C6.10536 9.652 6 9.90636 6 10.1716V14.1716C6 14.7239 6.44772 15.1716 7 15.1716H11C11.2652 15.1716 11.5196 15.0662 11.7071 14.8787L20.2929 6.29289C21.4645 5.12132 21.4645 3.22183 20.2929 2.05025L19.1213 0.87868C17.9497 -0.292893 16.0503 -0.292893 14.8787 0.87868ZM18.8787 3.46447L18.9619 3.55867C19.2669 3.95096 19.2392 4.5182 18.8787 4.87868L10.584 13.1716H8V10.5856L16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L18.8787 3.46447ZM10.0308 2.17157C10.0308 1.61929 9.5831 1.17157 9.03081 1.17157H5L4.78311 1.17619C2.12231 1.28975 0 3.48282 0 6.17157V16.1716L0.00461951 16.3885C0.118182 19.0493 2.31125 21.1716 5 21.1716H15L15.2169 21.167C17.8777 21.0534 20 18.8603 20 16.1716V11.2533L19.9933 11.1366C19.9355 10.6393 19.5128 10.2533 19 10.2533C18.4477 10.2533 18 10.701 18 11.2533V16.1716L17.9949 16.3478C17.9037 17.9227 16.5977 19.1716 15 19.1716H5L4.82373 19.1665C3.24892 19.0752 2 17.7693 2 16.1716V6.17157L2.00509 5.9953C2.09634 4.42049 3.40232 3.17157 5 3.17157H9.03081L9.14743 3.16485C9.64477 3.10708 10.0308 2.68441 10.0308 2.17157Z"
                        fill="#0A1629"
                      ></path>
                    </svg>
                    <svg
                      onClick={() => handleDeleteTodo(index)}
                      style={{ cursor: "pointer" }}
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="cp"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C13.5977 0 14.9037 1.24892 14.9949 2.82373L15 3V4H17H19C19.5523 4 20 4.44772 20 5C20 5.51284 19.614 5.93551 19.1166 5.99327L19 6H18V19C18 20.5977 16.7511 21.9037 15.1763 21.9949L15 22H5C3.40232 22 2.09634 20.7511 2.00509 19.1763L2 19V6H1C0.447715 6 0 5.55228 0 5C0 4.48716 0.38604 4.06449 0.883379 4.00673L1 4H3H5V3C5 1.40232 6.24892 0.0963391 7.82373 0.00509269L8 0H12ZM4 6V19C4 19.5128 4.38604 19.9355 4.88338 19.9933L5 20H15C15.5128 20 15.9355 19.614 15.9933 19.1166L16 19V6H14H6H4ZM13 4H7V3L7.00673 2.88338C7.06449 2.38604 7.48716 2 8 2H12L12.1166 2.00673C12.614 2.06449 13 2.48716 13 3V4ZM8 9C8.51284 9 8.93551 9.38604 8.99327 9.88338L9 10V16C9 16.5523 8.55229 17 8 17C7.48716 17 7.06449 16.614 7.00673 16.1166L7 16V10C7 9.44771 7.44772 9 8 9ZM12.9933 9.88338C12.9355 9.38604 12.5128 9 12 9C11.4477 9 11 9.44771 11 10V16L11.0067 16.1166C11.0645 16.614 11.4872 17 12 17C12.5523 17 13 16.5523 13 16V10L12.9933 9.88338Z"
                        fill="#F65160"
                      ></path>
                    </svg>
                  </Box>
                </Box>
              ))}

            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={todos.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        ) : (
          <Box
            sx={{ textAlign: "center", fontSize: "22px", fontWeight: "600" }}
          >
            No Data Found!
          </Box>
        )}
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default TodoList;
