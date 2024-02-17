import React from 'react'

function MainPage({setOnline, setIsMainPage}) {

  return (
    <>
    <h1 style={{
        textAlign: "center",
        marginTop: "40px",
        }}
    >Welcome to Tic Tac Toe</h1>
    <div style={{
        display: setIsMainPage ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "calc(100lvh - 80px)",
        fontSize: "30px",
        
    }}>
        <div>
        <button className='btn' onClick={() => {
            setOnline(true);
            setIsMainPage(false);
        }}>Play online</button>
        <br />
        <button className='btn' onClick={() => {
            setOnline(false);
            setIsMainPage(false);
        
        }}>Play offline</button>
        </div>
    </div>
    </>
  )
}

export default MainPage
