import './App.css';
import { useState, useEffect, useRef, useReducer } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux"

import valueReducer, { typesValueReducer, valueReducerEmpty, valueReducerAdd } from './valueReducer'
import btnValueReducer, { btnValueReducerAdd, btnValueReducerEdit, typesBtnValueReducer } from './btnValueReducer'
import dataReducer, { dataReducerAdd, dataReducerNewDara, typesDataReducer } from './dataReducer'

function App() {

  const value = useSelector(state => state.valueReducer);
  const data = useSelector(state => state.dataReducer);
  const btnValue = useSelector(state => state.btnValueReducer);

  const dispatch = useDispatch();


  const input = useRef();


  useEffect(() => {
    toast.success('Welcome To React Js!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    input.current.focus();

  }, [])

  function set() {
    input.current.focus();
    let index = data.findIndex((item) => item.editMode === true);

    if (value === "" || value === " ") {
      toast.error('Fill in the field!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
    else {
      if (data.length === 0 || index === -1) {

        dispatch(dataReducerAdd({
          text: value,
          editMode: false
        }))
        dispatch(valueReducerEmpty());


        toast.success('Successfully added!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      }
      else {

        let newData = [...data];
        newData[index].text = value;
        newData[index].editMode = false;

        toast.success('Edited successfully!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        dispatch(dataReducerNewDara(newData))

        dispatch(btnValueReducerAdd())
        dispatch(valueReducerEmpty())

      }
    }


  }



  function chandeEditMode(index) {
    input.current.focus();
    let newData = [...data];
    newData[index].editMode = true;
    dispatch(valueReducerAdd(newData[index].text))

    dispatch(btnValueReducerEdit())

    dispatch(dataReducerNewDara(newData))

  }


  function remove(index) {
    input.current.focus();
    let newData = [...data];

    newData.splice(index, 1);

    toast.warn('Successfully deleted!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    dispatch(dataReducerNewDara(newData))
  }


  return (
    < div className="App d-flex justify-content-center align-items-center" >
      <div className="main d-flex flex-column align-items-center">
        <h1 className="mt-4">ToDo App</h1>

        <div className="form d-flex justify-content-between align-items-center">
          <input type="text" placeholder="ADD YOUR TASK ..." className="input" ref={input} onInput={(e) => dispatch(valueReducerAdd(e.target.value))} value={value} />
          <button className="btn" onClick={set}>{btnValue}</button>
          <ToastContainer style={{ fontSize: '1.5rem' }} />
        </div>

        <div className="div-card">
          {
            data.map((item, index) => (
              <div key={index} className="cards d-flex justify-content-between align-items-center">
                <div>
                  <p className="title">{item.text}</p>
                </div>
                <div className="icons">
                  <MdDelete style={{ fontSize: '1.8rem', cursor: 'pointer' }} onClick={() => (remove(index))} />
                  <FaEdit style={{ fontSize: '1.8rem', cursor: 'pointer' }} onClick={() => (chandeEditMode(index))} />
                </div>
              </div>
            ))
          }

        </div>


      </div>
    </div >
  );
}

export default App;
