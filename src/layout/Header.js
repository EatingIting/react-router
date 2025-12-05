import { Outlet, useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate(); //js에서 페이지 이동시 사용하는 훅
  const goHome = () => {
    // window.location.href='/';
    nav("/");
  }

  return(
    <>
      <div style={{display:"flex", justifyContent:"space-between", padding: 20}}>
        <h1 style={{margin: 0}}>헤더영역</h1>
        <div>
          <button type="button" onClick={goHome}>홈</button>
          <button type="button" onClick={() => nav("/board")}>게시판</button>
          <button type="button" onClick={() => nav("/user")}>로그인</button>
          <button type="button" onClick={() => nav(-1)}>뒤로가기</button>
        </div>
      </div>

      {/* 자식이 보여질 영역 */}
      <Outlet/>
    </>
  )
}

export default Header;