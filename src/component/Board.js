import { Link, NavLink, Outlet } from "react-router-dom";

function Board() {
  const 스타일링 = {
    backgroundColor: "yellow",
    color:"red"
  }
  return (
    <>
      <h3>글 목록화면</h3>

      {/* <ul>
        <li><Link to='/board/1'>글1</Link></li>
        <li><Link to='/board/2'>글2</Link></li>
        <li><Link to='/board/3'>글3</Link></li>
      </ul> */}

      {/* 라우터로 선택된 값에 따라서 스타일링을 지정이 가능 */}

      <ul>
        <li><NavLink to='/board/1' style={({isActive}) => isActive ? 스타일링 : undefined}>글1</NavLink></li>
        <li><NavLink to='/board/2' style={({isActive}) => isActive ? 스타일링 : undefined}>글2</NavLink></li>
        <li><NavLink to='/board/3' style={({isActive}) => isActive ? 스타일링 : undefined}>글3</NavLink></li>
      </ul>

      {/* 중첩 라우팅에서 자식태그가 보여질 영역 */}
      <Outlet/>
    </>
  )
}
export default Board;