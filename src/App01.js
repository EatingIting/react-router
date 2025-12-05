import { Route, Routes } from "react-router-dom";
import Home from "./component/Home.js";
import User from "./component/User.js";
import Info from "./component/Info.js";
import Board from "./component/Board.js";
import BoardContent from "./component/BoardContent.js";
import Header from "./layout/Header.js";

function App() {
  return (
    <Routes>
      {/* 최상 index.js를 BrowserRouter 컴포넌트로 감싸준다. */}
      <Route element={<Header/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<User/>} />
        {/* 쿼리파라미터를 넘길때 라우터설정 */}
        <Route path="/info/:age/:name" element={<Info/>} />
      
      {/* 각각 다른 화면을 보여주게 하려면 */}
{/*       <Route path='/board' element={<Board/>} />
      <Route path=":num" element={<BoardContent/>} /> */}
      
        {/* 중첩 라우팅 설정 - Outlet선언 */}
        <Route path='/board' element={<Board/>} >
            <Route path=":num" element={<BoardContent/>} />
        </Route>
      </Route>

    </Routes>
  );
}

export default App;
